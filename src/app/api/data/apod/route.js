import { NextResponse } from "next/server";
import { getApodArchive } from "@/lib/apodService";

export async function GET() {
  try {
    const apods = await getApodArchive();
    return NextResponse.json(apods);
  } catch (error) {
    console.error("apod archive error:", error?.response?.data || error.message);
    return NextResponse.json(
      { error: "Failed to load APOD archive." },
      { status: 502 }
    );
  }
}
