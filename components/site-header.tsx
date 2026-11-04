import Link from "next/link";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/lib/i18n";
import { SECTION_ORDER, SITE } from "@/lib/site";
import { LanguageSwitch } from "./language-switch";
import { ThemeToggle } from "./theme-toggle";

interface SiteHeaderProps {
  locale: Locale;
  dict: Dictionary;
}

const MONOGRAM = "NT";

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-accent-2/15 backdrop-blur-xl">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-4 px-5 py-3">
        <Link
          href={`/${locale}`}
          aria-label={SITE.handle}
          className="grid size-9 place-items-center rounded-lg border border-accent/40 font-mono text-sm font-bold text-accent shadow-[0_0_18px_-4px_var(--accent)]"
        >
          {MONOGRAM}
        </Link>

        <nav
          aria-label={dict.a11y.primaryNav}
          className="order-3 -mx-1 mt-2 flex w-full justify-center gap-1 overflow-x-auto md:order-none md:mx-0 md:mt-0 md:w-auto md:gap-4"
        >
          {SECTION_ORDER.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              {dict.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch locale={locale} label={dict.a11y.switchLanguage} />
          <ThemeToggle label={dict.a11y.toggleTheme} />
        </div>
      </div>
    </header>
  );
}
