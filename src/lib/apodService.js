import { readFileSync } from "fs";
import { join } from "path";
import { dbConnect } from "@/dbConfig/dbConfig";
import Apod from "@/models/apodModel";
import { normalizeApod } from "@/lib/nasa";

let archiveCache = null;

function loadStaticArchive() {
  if (archiveCache) return archiveCache;

  try {
    const filePath = join(process.cwd(), "public", "data.js");
    const source = readFileSync(filePath, "utf8");
    const match = source.match(/const data = (\[[\s\S]*\])\s*(?:;|\n)/);
    if (!match) return [];

    const parsed = new Function(`return ${match[1]}`)();
    if (!Array.isArray(parsed)) return [];

    archiveCache = parsed.map((item, index) =>
      normalizeApod(item, item.id || item.date || `static-${index}`)
    );
    return archiveCache;
  } catch (error) {
    console.error("Failed to load static APOD archive:", error);
    return [];
  }
}

async function getFromDb() {
  if (!process.env.DB_URL) return [];

  try {
    await dbConnect();
    const apods = await Apod.find().sort({ date: -1 }).lean();
    return apods.map((item) => normalizeApod(item));
  } catch (error) {
    console.warn("Archive DB read failed:", error.message);
    return [];
  }
}

function todayDateString() {
  return new Date().toISOString().slice(0, 10);
}

export async function getTodayApod() {
  const today = todayDateString();

  if (process.env.DB_URL) {
    try {
      await dbConnect();
      const todayRecord = await Apod.findOne({ date: today }).lean();
      if (todayRecord) return normalizeApod(todayRecord);

      const latest = await Apod.findOne().sort({ date: -1 }).lean();
      if (latest) return normalizeApod(latest);
    } catch (error) {
      console.warn("Today APOD DB read failed:", error.message);
    }
  }

  const archive = loadStaticArchive();
  if (archive.length) {
    const todayItem = archive.find((item) => item.date === today);
    if (todayItem) return todayItem;

    const sorted = [...archive].sort((a, b) =>
      String(b.date).localeCompare(String(a.date))
    );
    return sorted[0];
  }

  throw new Error("No APOD data available in database or static archive.");
}

export async function getApodArchive() {
  const fromDb = await getFromDb();
  if (fromDb.length) return fromDb;

  return loadStaticArchive();
}

export async function getApodById(id) {
  if (process.env.DB_URL) {
    try {
      await dbConnect();
      const byDate = await Apod.findOne({ date: id }).lean();
      if (byDate) return normalizeApod(byDate);
    } catch (error) {
      console.warn("APOD by id DB read failed:", error.message);
    }
  }

  const archive = await getApodArchive();
  return archive.find(
    (item) =>
      String(item._id) === String(id) ||
      String(item.id) === String(id) ||
      item.date === id
  );
}
