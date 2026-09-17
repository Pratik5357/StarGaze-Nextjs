import { NextResponse } from "next/server";
import { saveApodRecords } from "@/lib/apodSync";

export async function POST(request) {
  try {
    if (!process.env.DB_URL) {
      return NextResponse.json(
        { error: "DB_URL is not configured. MongoDB is required to save data." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const items = Array.isArray(body?.items) ? body.items : [];

    if (!items.length) {
      return NextResponse.json(
        { error: "Provide a non-empty items array." },
        { status: 400 }
      );
    }

    const result = await saveApodRecords(items);
    return NextResponse.json(result);
  } catch (error) {
    console.error("admin sync save error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
