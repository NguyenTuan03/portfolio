import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${SITE.url}/${locale}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((item) => [item, `${SITE.url}/${item}`]),
      ),
    },
  }));
}
