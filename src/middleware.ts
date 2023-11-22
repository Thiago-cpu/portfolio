import { type NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { LOCALES } from "./locales/utils";

const rewrites: Record<string, string> = {
  "/es/login": "/api/auth/signin",
  "/en/login": "/api/auth/signin",
};

const I18nMiddleware = createMiddleware({
  locales: LOCALES,
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const rewrite = rewrites[pathname];
  if (rewrite) {
    return NextResponse.rewrite(new URL(rewrite, request.url));
  }
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/", "/(es|en)/:path*"],
};
