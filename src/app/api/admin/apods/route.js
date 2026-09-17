import { NextResponse } from "next/server";
import { deleteApodsByDates, listApods } from "@/lib/apodSync";

export async function GET(request) {
  try {
    if (!process.env.DB_URL) {
      return NextResponse.json(
        { error: "DB_URL is not configured." },
        { status: 503 }
      );
    }

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("q") || "";
    const page = searchParams.get("page") || "1";
    const limit = searchParams.get("limit") || "20";

    const data = await listApods({ search, page, limit });
    return NextResponse.json(data);
  } catch (error) {
    console.error("admin apods list error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    if (!process.env.DB_URL) {
      return NextResponse.json(
        { error: "DB_URL is not configured." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const dates = Array.isArray(body?.dates) ? body.dates : [];

    if (!dates.length) {
      return NextResponse.json(
        { error: "Provide a non-empty dates array." },
        { status: 400 }
      );
    }

    const result = await deleteApodsByDates(dates);
    return NextResponse.json(result);
  } catch (error) {
    console.error("admin apods bulk delete error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
