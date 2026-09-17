import axios from "axios";
import { dbConnect } from "@/dbConfig/dbConfig";
import Apod from "@/models/apodModel";
import { getNasaApiKey, normalizeApod } from "@/lib/nasa";

const NASA_APOD_URL = "https://api.nasa.gov/planetary/apod";

async function fetchFromNasa(params = {}) {
  const apiKey = getNasaApiKey();
  const response = await axios.get(NASA_APOD_URL, {
    params: { api_key: apiKey, ...params },
    timeout: 30000,
  });
  return response.data;
}

function buildNasaParams(options = {}) {
  const { count, startDate, endDate, date } = options;
  const params = {};

  if (date) params.date = date;
  else if (startDate && endDate) {
    params.start_date = startDate;
    params.end_date = endDate;
  } else {
    params.count = Math.min(Math.max(Number(count) || 30, 1), 100);
  }

  return params;
}

export async function fetchApodsFromNasa(options = {}) {
  const raw = await fetchFromNasa(buildNasaParams(options));
  const items = Array.isArray(raw) ? raw : [raw];

  return items
    .map((item) => normalizeApod(item))
    .filter((item) => item?.date)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function fetchApodsPreview(options = {}) {
  const items = await fetchApodsFromNasa(options);

  await dbConnect();
  const dates = items.map((item) => item.date);
  const existing = dates.length
    ? await Apod.find({ date: { $in: dates } }).select("date").lean()
    : [];
  const existingDates = new Set(existing.map((entry) => entry.date));

  return {
    fetched: items.length,
    items: items.map((item) => ({
      ...item,
      inDatabase: existingDates.has(item.date),
    })),
  };
}

export async function saveApodRecords(records = []) {
  await dbConnect();

  let inserted = 0;
  let updated = 0;
  let skipped = 0;

  for (const record of records) {
    const result = await upsertApodRecord(record);
    if (result.action === "inserted") inserted += 1;
    else if (result.action === "updated") updated += 1;
    else skipped += 1;
  }

  const total = await Apod.countDocuments();
  const [oldest, newest] = await Promise.all([
    Apod.findOne().sort({ date: 1 }).select("date title").lean(),
    Apod.findOne().sort({ date: -1 }).select("date title").lean(),
  ]);

  return {
    saved: inserted + updated,
    inserted,
    updated,
    skipped,
    total,
    oldest,
    newest,
  };
}

export async function upsertApodRecord(raw) {
  const apod = normalizeApod(raw);
  if (!apod?.date) return { action: "skipped" };

  const existing = await Apod.findOne({ date: apod.date }).select("_id").lean();

  await Apod.findOneAndUpdate(
    { date: apod.date },
    {
      date: apod.date,
      explanation: apod.explanation,
      hdurl: apod.hdurl || apod.url || "",
      media_type: apod.media_type,
      service_version: apod.service_version || "v1",
      title: apod.title,
      url: apod.url,
      copyright: apod.copyright,
    },
    { upsert: true, new: true }
  );

  return { action: existing ? "updated" : "inserted", date: apod.date };
}

export async function syncApodsFromNasa(options = {}) {
  const items = await fetchApodsFromNasa(options);
  const result = await saveApodRecords(items);

  return {
    fetched: items.length,
    inserted: result.inserted,
    updated: result.updated,
    skipped: result.skipped,
    total: result.total,
    oldest: result.oldest,
    newest: result.newest,
  };
}

export async function getApodDbStats() {
  await dbConnect();

  const total = await Apod.countDocuments();
  const [oldest, newest] = await Promise.all([
    Apod.findOne().sort({ date: 1 }).select("date title").lean(),
    Apod.findOne().sort({ date: -1 }).select("date title").lean(),
  ]);

  const imageCount = await Apod.countDocuments({ media_type: "image" });
  const videoCount = await Apod.countDocuments({ media_type: "video" });

  return {
    total,
    imageCount,
    videoCount,
    oldest,
    newest,
  };
}

export async function listApods({ search = "", page = 1, limit = 20 } = {}) {
  await dbConnect();

  const safePage = Math.max(1, Number(page) || 1);
  const safeLimit = Math.min(Math.max(Number(limit) || 20, 1), 100);
  const skip = (safePage - 1) * safeLimit;

  const filter = search.trim()
    ? {
        $or: [
          { title: { $regex: search.trim(), $options: "i" } },
          { date: { $regex: search.trim(), $options: "i" } },
          { explanation: { $regex: search.trim(), $options: "i" } },
        ],
      }
    : {};

  const [items, total, filteredTotal] = await Promise.all([
    Apod.find(filter)
      .sort({ date: -1 })
      .skip(skip)
      .limit(safeLimit)
      .lean(),
    Apod.countDocuments(),
    Apod.countDocuments(filter),
  ]);

  return {
    items: items.map((item) => normalizeApod(item)),
    total,
    filteredTotal,
    page: safePage,
    limit: safeLimit,
    pages: Math.ceil(filteredTotal / safeLimit) || 1,
  };
}

export async function deleteApodByDate(date) {
  await dbConnect();
  const result = await Apod.findOneAndDelete({ date });
  if (!result) {
    return { deleted: false };
  }
  const total = await Apod.countDocuments();
  return { deleted: true, date, total };
}

export async function deleteApodsByDates(dates = []) {
  await dbConnect();

  const uniqueDates = [...new Set(dates.filter((d) => typeof d === "string" && d.trim()))];
  if (!uniqueDates.length) {
    return { deleted: 0, dates: [], total: await Apod.countDocuments() };
  }

  const result = await Apod.deleteMany({ date: { $in: uniqueDates } });
  const total = await Apod.countDocuments();

  return {
    deleted: result.deletedCount || 0,
    dates: uniqueDates,
    total,
  };
}
