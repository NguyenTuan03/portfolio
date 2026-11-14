import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SectionId } from "@/lib/site";

interface AboutProps {
  dict: Dictionary;
}

export function About({ dict }: AboutProps) {
  const { about } = dict;

  return (
    <section
      id={SectionId.About}
      className="ocean-banner relative w-full pt-20 pb-36 md:pt-28 md:pb-48 text-center transition-colors"
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
          {about.title}
        </h2>
        <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed md:leading-loose">
          {about.bio}
        </p>
      </div>
    </section>
  );
}
