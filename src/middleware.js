import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const url = req.nextUrl.clone();

  // If no token, redirect to sign-in (except for public routes)
  if (!token && url.pathname !== "/sign-in" && url.pathname !== "/signup") {
    url.pathname = "/sign-in";
    return NextResponse.redirect(url);
  }

  // If token exists, allow access
  return NextResponse.next();
}

// Protect only the routes that require authentication
export const config = {
  matcher: [
    "/gallery/:path*",
    "/news",
  ],
};
