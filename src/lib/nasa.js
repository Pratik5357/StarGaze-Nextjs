export function getNasaApiKey() {
  return (
    process.env.NASA_API_KEY ||
    process.env.NEXT_PUBLIC_NASA_API_KEY ||
    process.env.NEXT_PUBLIC_NASA_API ||
    "DEMO_KEY"
  );
}

export function normalizeApod(raw, fallbackId) {
  if (!raw || typeof raw !== "object") return null;

  const id =
    raw._id?.toString?.() ||
    raw.id?.toString?.() ||
    fallbackId ||
    raw.date;

  return {
    ...raw,
    _id: id,
    hdurl: raw.hdurl || raw.url || "",
    url: raw.url || raw.hdurl || "",
    media_type: raw.media_type || "image",
  };
}
