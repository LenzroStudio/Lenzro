import { NextResponse } from "next/server";

export function middleware(req) {
  const session = req.cookies.get("lenzro-session");

  const isAppRoute = req.nextUrl.pathname.startsWith("/app");
  const isAuthRoute = req.nextUrl.pathname.startsWith("/login");

  // If user not logged in, block app
  if (!session && isAppRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If user already logged in, block login page
  if (session && isAuthRoute) {
    return NextResponse.redirect(new URL("/app", req.url));
  }
}
