import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES, Locale, isLocale } from "@/lib/i18n";

const hasLocalePrefix = (pathname: string): boolean =>
  LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

/** Chọn locale theo Accept-Language (ưu tiên q cao nhất), mặc định DEFAULT_LOCALE. */
const getPreferredLocale = (acceptLanguage: string | null): Locale => {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, qValue] = part.trim().split(";q=");
      return {
        base: tag.toLowerCase().split("-")[0],
        quality: qValue ? Number(qValue) : 1,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  const match = ranked.find((entry) => isLocale(entry.base));
  return match && isLocale(match.base) ? match.base : DEFAULT_LOCALE;
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (hasLocalePrefix(pathname)) return;

  const locale = getPreferredLocale(request.headers.get("accept-language"));
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Bỏ qua _next, file tĩnh (có đuôi file), api
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
