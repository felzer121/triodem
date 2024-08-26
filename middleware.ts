import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { getUser } from "./app/api/auth";

const protectedRoutes = ["/dashboard"];

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  if (isProtectedRoute) {
    const user = await getUser(request);
    if (user.response.error) {
      return NextResponse.redirect(new URL("/auth", request.nextUrl));
    }
    if (user.data?.accessToken) {
      const response = NextResponse.next()
      response.cookies.set('accesToken', user.data?.accessToken)
      return response
    }
    if (path.includes("auth") && !user.response.error)
      return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
