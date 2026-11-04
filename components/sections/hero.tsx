import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowDown, GithubLogo } from "@phosphor-icons/react/ssr";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SITE, SectionId } from "@/lib/site";
import { ButtonLink, ButtonVariant } from "../button-link";

interface HeroProps {
  dict: Dictionary;
}

interface TypewriterStyle extends CSSProperties {
  "--chars": number;
}

const AVATAR_SRC = "/avatar.jpg";
const AVATAR_SIZE = 800;

export function Hero({ dict }: HeroProps) {
  const { hero, a11y } = dict;
  const typewriterStyle: TypewriterStyle = {
    "--chars": hero.role.normalize("NFC").length,
  };

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 pb-24 pt-14 md:grid-cols-[auto_1fr] md:gap-16 md:pb-36 md:pt-24">
        {/* Avatar tròn: mobile nằm trên, desktop nằm bên trái */}
        <div className="float relative mx-auto size-44 sm:size-52 md:size-72">
          <div
            aria-hidden="true"
            className="absolute -inset-10 -z-10 rounded-full bg-accent-soft blur-3xl"
          />
          <div
            aria-hidden="true"
            className="avatar-ring absolute -inset-1.5 rounded-full"
          />
          <Image
            src={AVATAR_SRC}
            alt={hero.avatarAlt}
            width={AVATAR_SIZE}
            height={AVATAR_SIZE}
            sizes="(min-width: 768px) 288px, 176px"
            priority
            className="relative size-full rounded-full border-4 border-background object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="font-mono text-sm text-accent">
            {`> ${hero.greeting}`}
          </p>

          <h1 className="mt-3 font-semibold tracking-tight">
            <span className="text-gradient block pb-1 text-5xl leading-tight sm:text-6xl md:text-7xl">
              {SITE.name}
            </span>
          </h1>

          <p className="mt-4 flex items-center justify-center font-mono text-lg md:justify-start md:text-2xl">
            <span
              className="typewriter inline-block text-foreground"
              style={typewriterStyle}
            >
              {hero.role}
            </span>
            <span
              aria-hidden="true"
              className="cursor ml-1 inline-block h-6 w-0.5 bg-accent"
            />
          </p>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted md:mx-0">
            {hero.tagline}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start">
            <ButtonLink
              href={`#${SectionId.Projects}`}
              variant={ButtonVariant.Primary}
            >
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
      </div>
    </section>
  );
}
