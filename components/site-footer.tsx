import {
  EnvelopeSimple,
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/ssr";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SITE, SocialPlatform } from "@/lib/site";
import { ZaloIcon } from "./icons/zalo-icon";

interface SiteFooterProps {
  dict: Dictionary;
}

const MONOGRAM = "NT";

export function SiteFooter({ dict }: SiteFooterProps) {
  const { footer, a11y } = dict;

  return (
    <footer className="ocean-footer pt-32 sm:pt-40 pb-16 text-center text-white transition-colors">
      <div className="mx-auto max-w-4xl px-6 flex flex-col items-center">
        {/* Monogram / Brand Icon */}
        <div className="mb-8">
          <span className="grid size-14 place-items-center rounded-2xl bg-white/10 border border-white/20 font-mono text-xl font-bold text-accent shadow-[0_0_30px_-5px_var(--accent)]">
            {MONOGRAM}
          </span>
        </div>

        {/* Inspirational Quote */}
        <p className="max-w-md text-lg sm:text-xl font-normal text-white/90 leading-relaxed mb-10">
          {footer.quote}
        </p>

        {/* Social Icons (Circular pill buttons) */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
          <a
            key={SocialPlatform.GitHub}
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-12 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-200 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:scale-110 shadow-sm"
          >
            <GithubLogo aria-hidden="true" weight="bold" className="size-5" />
            <span className="sr-only"> ({a11y.externalLink})</span>
          </a>

          {SITE.facebook ? (
            <a
              key={SocialPlatform.Facebook}
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid size-12 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-200 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:scale-110 shadow-sm"
            >
              <FacebookLogo aria-hidden="true" weight="bold" className="size-5" />
              <span className="sr-only"> ({a11y.externalLink})</span>
            </a>
          ) : null}

          {SITE.zalo ? (
            <a
              key={SocialPlatform.Zalo}
              href={SITE.zalo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Zalo ${SITE.phone ? `(${SITE.phone})` : ""}`}
              className="grid size-12 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-200 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:scale-110 shadow-sm"
            >
              <ZaloIcon className="size-5" />
              <span className="sr-only"> ({a11y.externalLink})</span>
            </a>
          ) : null}

          {SITE.linkedin ? (
            <a
              key={SocialPlatform.LinkedIn}
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-12 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-200 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:scale-110 shadow-sm"
            >
              <LinkedinLogo aria-hidden="true" weight="bold" className="size-5" />
              <span className="sr-only"> ({a11y.externalLink})</span>
            </a>
          ) : null}

          {SITE.email ? (
            <a
              key={SocialPlatform.Email}
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="grid size-12 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-200 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:scale-110 shadow-sm"
            >
              <EnvelopeSimple aria-hidden="true" weight="bold" className="size-5" />
            </a>
          ) : null}
        </div>

        {/* Handcrafted copyright */}
        <div className="text-xs sm:text-sm text-slate-400 font-mono flex flex-col sm:flex-row items-center gap-1.5">
          <span>{footer.handcrafted}</span>
          <span className="hidden sm:inline">·</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
