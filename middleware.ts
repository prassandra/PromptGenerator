import { NextRequest, NextResponse } from "next/server";
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/admin")) {
    const session = request.cookies.get("driacom_session")?.value;
    let isAdmin = false;
    try { isAdmin = JSON.parse(session || "null")?.role === "admin"; } catch {}
    if (!isAdmin) return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.next();
}
export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };
