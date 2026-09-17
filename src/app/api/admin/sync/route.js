import { NextResponse } from "next/server";
import { syncApodsFromNasa } from "@/lib/apodSync";

export async function POST(request) {
  try {
    if (!process.env.DB_URL) {
      return NextResponse.json(
        { error: "DB_URL is not configured. MongoDB is required to sync data." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { mode, count, startDate, endDate, date } = body;

    let options = {};
    if (mode === "date" && date) {
      options = { date };
    } else if (mode === "range" && startDate && endDate) {
      options = { startDate, endDate };
    } else {
      options = { count: count || 30 };
    }

    const result = await syncApodsFromNasa(options);
    return NextResponse.json(result);
  } catch (error) {
    console.error("admin sync error:", error?.response?.data || error.message);
    return NextResponse.json(
      { error: error?.response?.data?.error?.message || error.message || "Sync failed." },
      { status: 502 }
    );
  }
}
