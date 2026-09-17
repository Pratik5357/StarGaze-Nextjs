import { NextResponse } from "next/server";
import { deleteApodByDate } from "@/lib/apodSync";

export async function DELETE(_request, { params }) {
  try {
    if (!process.env.DB_URL) {
      return NextResponse.json(
        { error: "DB_URL is not configured." },
        { status: 503 }
      );
    }

    const { date } = await params;
    const result = await deleteApodByDate(date);

    if (!result.deleted) {
      return NextResponse.json({ error: "Record not found." }, { status: 404 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("admin apod delete error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
