import { NextResponse } from "next/server";
import { getApodDbStats } from "@/lib/apodSync";

export async function GET() {
  try {
    if (!process.env.DB_URL) {
      return NextResponse.json(
        { error: "DB_URL is not configured. MongoDB is required for admin." },
        { status: 503 }
      );
    }

    const stats = await getApodDbStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error("admin stats error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
