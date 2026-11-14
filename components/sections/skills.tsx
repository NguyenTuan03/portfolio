import {
  Browser,
  Cloud,
  TerminalWindow,
} from "@phosphor-icons/react/ssr";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SectionId } from "@/lib/site";

interface SkillsProps {
  dict: Dictionary;
}

export function Skills({ dict }: SkillsProps) {
  const { skills } = dict;
  const { frontend, backend, dataCloud } = skills.columns;

  return (
    <section id={SectionId.Skills} className="relative z-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl -mt-24 sm:-mt-32 md:-mt-36">
        <div className="floating-skills-card rounded-3xl p-8 sm:p-10 md:p-12 transition-all">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {/* Column 1: Frontend */}
            <div className="flex flex-col items-center text-center px-4 py-8 md:py-4 md:px-6 first:pt-2">
              <span className="grid size-16 sm:size-20 place-items-center rounded-full bg-accent/15 text-accent mb-6 shadow-[0_0_25px_-5px_var(--accent)]">
                <Browser aria-hidden="true" weight="duotone" className="size-8 sm:size-10" />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
                {frontend.title}
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-8 min-h-[4rem]">
                {frontend.desc}
              </p>

              <h4 className="text-sm font-semibold text-accent-2 tracking-wide uppercase mb-2">
                {frontend.languagesTitle}
              </h4>
              <p className="text-sm text-foreground mb-8 font-medium">
                {frontend.languages}
              </p>

              <h4 className="text-sm font-semibold text-accent-2 tracking-wide uppercase mb-3">
                {frontend.toolsTitle}
              </h4>
              <ul className="space-y-2 text-sm text-muted">
                {frontend.tools.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Column 2: Backend */}
            <div className="flex flex-col items-center text-center px-4 py-8 md:py-4 md:px-6">
              <span className="grid size-16 sm:size-20 place-items-center rounded-full bg-accent/15 text-accent mb-6 shadow-[0_0_25px_-5px_var(--accent)]">
                <TerminalWindow aria-hidden="true" weight="duotone" className="size-8 sm:size-10" />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
                {backend.title}
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-8 min-h-[4rem]">
                {backend.desc}
              </p>

              <h4 className="text-sm font-semibold text-accent-2 tracking-wide uppercase mb-2">
                {backend.languagesTitle}
              </h4>
              <p className="text-sm text-foreground mb-8 font-medium">
                {backend.languages}
              </p>

              <h4 className="text-sm font-semibold text-accent-2 tracking-wide uppercase mb-3">
                {backend.toolsTitle}
              </h4>
              <ul className="space-y-2 text-sm text-muted">
                {backend.tools.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Column 3: Data & Cloud */}
            <div className="flex flex-col items-center text-center px-4 py-8 md:py-4 md:px-6 last:pb-2">
              <span className="grid size-16 sm:size-20 place-items-center rounded-full bg-accent/15 text-accent mb-6 shadow-[0_0_25px_-5px_var(--accent)]">
                <Cloud aria-hidden="true" weight="duotone" className="size-8 sm:size-10" />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
                {dataCloud.title}
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-8 min-h-[4rem]">
                {dataCloud.desc}
              </p>

              <h4 className="text-sm font-semibold text-accent-2 tracking-wide uppercase mb-2">
                {dataCloud.languagesTitle}
              </h4>
              <p className="text-sm text-foreground mb-8 font-medium">
                {dataCloud.languages}
              </p>

              <h4 className="text-sm font-semibold text-accent-2 tracking-wide uppercase mb-3">
                {dataCloud.toolsTitle}
              </h4>
              <ul className="space-y-2 text-sm text-muted">
                {dataCloud.tools.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
