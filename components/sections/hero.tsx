import Image from "next/image";
import { ArrowDown, GithubLogo } from "@phosphor-icons/react/ssr";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SITE, SectionId } from "@/lib/site";
import { ButtonLink, ButtonVariant } from "../button-link";
import { HeroDevices } from "../hero-devices";

interface HeroProps {
  dict: Dictionary;
}

const AVATAR_SRC = "/avatar.jpg";
const AVATAR_SIZE = 400;

export function Hero({ dict }: HeroProps) {
  const { hero, a11y } = dict;

  return (
    <section className="relative isolate pt-14 md:pt-20 pb-0 overflow-hidden text-center">
      {/* Subtle ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-accent-2 opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        {/* Main Catchy Heading */}
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.15]">
          {hero.title}
        </h1>

        {/* Subtitle / Philosophy */}
        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-muted font-normal leading-relaxed">
          {hero.tagline}
        </p>

        {/* Avatar */}
        <div className="mt-10 mb-8 flex justify-center">
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-accent to-accent-2 opacity-50 blur-lg transition-opacity duration-500 group-hover:opacity-75"
            />
            <div className="relative size-36 sm:size-44 overflow-hidden rounded-full border-4 border-surface shadow-xl">
              <Image
                src={AVATAR_SRC}
                alt={hero.avatarAlt}
                width={AVATAR_SIZE}
                height={AVATAR_SIZE}
                priority
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Buttons / Actions */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
          <ButtonLink
            href={`#${SectionId.Projects}`}
            variant={ButtonVariant.PrimaryPill}
          >
            {hero.ctaProjects}
            <ArrowDown aria-hidden="true" weight="bold" className="size-4" />
          </ButtonLink>
          <ButtonLink
            href={SITE.github}
            variant={ButtonVariant.OutlinePill}
            externalLabel={a11y.externalLink}
          >
            <GithubLogo aria-hidden="true" weight="bold" className="size-4" />
            {hero.ctaGithub}
          </ButtonLink>
        </div>
      </div>

      {/* Hero Devices Illustration resting seamlessly at bottom */}
      <div className="mt-6 sm:mt-10 -mb-1">
        <HeroDevices />
      </div>
    </section>
  );
}
