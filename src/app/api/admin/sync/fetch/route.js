import { NextResponse } from "next/server";
import { fetchApodsPreview } from "@/lib/apodSync";

function resolveFetchOptions(body) {
  const { mode, count, startDate, endDate, date } = body || {};

  if (mode === "date" && date) return { date };
  if (mode === "range" && startDate && endDate) {
    return { startDate, endDate };
  }
  return { count: count || 30 };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const options = resolveFetchOptions(body);
    const result = await fetchApodsPreview(options);
    return NextResponse.json(result);
  } catch (error) {
    console.error("admin sync fetch error:", error?.response?.data || error.message);
    return NextResponse.json(
      { error: error?.response?.data?.error?.message || error.message || "Fetch failed." },
      { status: 502 }
    );
  }
}
