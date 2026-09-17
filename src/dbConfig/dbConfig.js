import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

function formatDbError(error) {
  const message = error?.message || String(error);
  if (message.includes("ENOTFOUND") || message.includes("querySrv")) {
    return "Cannot reach MongoDB host. Check DB_URL — the cluster hostname may be wrong or deleted.";
  }
  if (message.includes("ECONNREFUSED")) {
    return "MongoDB refused the connection. Start local MongoDB or verify DB_URL.";
  }
  return message;
}

export async function dbConnect() {
  const uri = process.env.DB_URL;
  if (!uri) {
    throw new Error("DB_URL is not configured");
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri)
      .then((mongooseInstance) => mongooseInstance)
      .catch((error) => {
        cached.promise = null;
        throw new Error(formatDbError(error));
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.conn = null;
    throw error;
  }

  return cached.conn;
}