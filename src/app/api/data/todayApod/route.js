import { NextResponse } from "next/server";
import { getTodayApod } from "@/lib/apodService";

export async function GET() {
  try {
    const apod = await getTodayApod();
    return NextResponse.json(apod);
  } catch (error) {
    console.error("todayApod error:", error?.response?.data || error.message);
    return NextResponse.json(
      { error: "Failed to load today's APOD from NASA." },
      { status: 502 }
    );
  }
}
