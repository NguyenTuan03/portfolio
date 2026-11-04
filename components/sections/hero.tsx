import { ArrowDown, GithubLogo } from "@phosphor-icons/react/ssr";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SITE, SectionId } from "@/lib/site";
import { ButtonLink, ButtonVariant } from "../button-link";

interface HeroProps {
  dict: Dictionary;
}

export function Hero({ dict }: HeroProps) {
  const { hero, a11y } = dict;

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="bg-glow absolute inset-0 -z-10" />

      <div className="mx-auto max-w-5xl px-5 pb-24 pt-20 md:pb-36 md:pt-32">
        <p className="font-mono text-sm text-muted">
          <span className="text-accent">$</span> {hero.command}
          <span
            aria-hidden="true"
            className="cursor ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent"
          />
        </p>

        <h1 className="mt-6 font-semibold tracking-tight">
          <span className="block text-2xl font-normal text-muted md:text-3xl">
            {hero.greeting}
          </span>
          <span className="mt-1 block text-5xl md:text-7xl">{SITE.name}</span>
        </h1>

        <p className="mt-5 font-mono text-lg text-accent md:text-xl">
          {hero.role}
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {hero.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={`#${SectionId.Projects}`} variant={ButtonVariant.Primary}>
            {hero.ctaProjects}
            <ArrowDown aria-hidden="true" weight="bold" className="size-4" />
          </ButtonLink>
          <ButtonLink
            href={SITE.github}
            variant={ButtonVariant.Secondary}
            externalLabel={a11y.externalLink}
          >
            <GithubLogo aria-hidden="true" weight="bold" className="size-4" />
            {hero.ctaGithub}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
