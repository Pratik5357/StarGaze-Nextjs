import { NextResponse } from "next/server";
import axios from "axios";
import { getNasaApiKey, normalizeApod } from "@/lib/nasa";
import { getApodById } from "@/lib/apodService";

export async function GET(req, { params }) {
  const { date } = await params;

  try {
    const cached = await getApodById(date);
    if (cached) {
      return NextResponse.json(cached);
    }

    const apiKey = getNasaApiKey();
    const response = await axios.get("https://api.nasa.gov/planetary/apod", {
      params: { api_key: apiKey, date },
      timeout: 15000,
    });

    return NextResponse.json(normalizeApod(response.data, date));
  } catch (error) {
    console.error("apod by date error:", error?.response?.data || error.message);
    return NextResponse.json(
      { error: "APOD not found for that date." },
      { status: 404 }
    );
  }
}
