import { createI18nMiddleware } from "next-international/middleware";
import { type NextRequest, NextResponse } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

const rewrites: Record<string, string> = {
  "/login": "/api/auth/signin",
  "/logout": "/api/auth/signout",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const rewrite = rewrites[pathname];
  if (rewrite) {
    return NextResponse.rewrite(new URL(rewrite, request.url));
  }
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
