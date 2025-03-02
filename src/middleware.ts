import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { getRoutingConfig } from "./i18n/routing";

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locale = pathname.split("/")[1];
  const routing = getRoutingConfig();

  if (locale && !routing.locales.includes(locale as string)) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return createMiddleware(routing)(request);
}

export const config = {
  matcher: ["/(vi|en)/:path*", "/((?!api|_next|_vercel|.*\\.[^/]*$).*)"],
};
