import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "../globals.css";
import { LOCALES, Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { DEFAULT_THEME, THEME_INIT_SCRIPT } from "@/lib/theme";
import { getDictionary, getLocale } from "./dictionaries";

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);

  return {
    metadataBase: new URL(SITE.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { [Locale.Vi]: `/${Locale.Vi}`, [Locale.En]: `/${Locale.En}` },
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale === Locale.Vi ? "vi_VN" : "en_US",
    },
  };
}

export default async function RootLayout({
  children,
}: LayoutProps<"/[lang]">) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      data-theme={DEFAULT_THEME}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
