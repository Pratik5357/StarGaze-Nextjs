import { NextResponse } from "next/server";
import {
  createAdminSessionToken,
  adminCookieOptions,
  ADMIN_COOKIE,
} from "@/lib/adminSession";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const adminUser = process.env.ADMIN_USERNAME || "admin";
    const adminPass = process.env.ADMIN_PASSWORD;

    if (!adminPass) {
      return NextResponse.json(
        { error: "Admin credentials are not configured on this server." },
        { status: 503 }
      );
    }

    if (username !== adminUser || password !== adminPass) {
      return NextResponse.json({ error: "Invalid admin credentials." }, { status: 401 });
    }

    const token = await createAdminSessionToken();
    const response = NextResponse.json({ success: true });
    response.cookies.set(ADMIN_COOKIE, token, adminCookieOptions());
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
