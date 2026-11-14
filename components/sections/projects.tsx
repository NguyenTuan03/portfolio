import {
  ArrowUpRight,
  CalendarCheck,
  Factory,
  FlowerLotus,
  GithubLogo,
  TennisBall,
} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { PROJECT_LINKS, PROJECT_ORDER, ProjectId, SITE, SectionId } from "@/lib/site";
import { ButtonLink, ButtonVariant } from "../button-link";

interface ProjectsProps {
  dict: Dictionary;
}

const PROJECT_ICON: Record<ProjectId, Icon> = {
  [ProjectId.PickleLearn]: TennisBall,
  [ProjectId.Autopilot]: CalendarCheck,
  [ProjectId.Nanoco]: Factory,
  [ProjectId.SpaPractice]: FlowerLotus,
};

const PROJECT_ACCENT_BG: Record<ProjectId, string> = {
  [ProjectId.PickleLearn]: "from-emerald-500/20 to-teal-500/10",
  [ProjectId.Autopilot]: "from-blue-500/20 to-indigo-500/10",
  [ProjectId.Nanoco]: "from-sky-500/20 to-cyan-500/10",
  [ProjectId.SpaPractice]: "from-emerald-500/20 to-emerald-600/10",
};

export function Projects({ dict }: ProjectsProps) {
  const { projects, a11y } = dict;

  return (
    <section id={SectionId.Projects} className="py-24 sm:py-32 text-center">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          {projects.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto">
          {projects.subtitle}{" "}
          {SITE.email ? (
            <a
              href={`mailto:${SITE.email}`}
              className="text-accent underline underline-offset-4 hover:brightness-110 font-medium"
            >
              {projects.emailMe}
            </a>
          ) : null}
        </p>

        {/* Project Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECT_ORDER.map((id) => {
            const project = projects.items[id];
            const ProjectIcon = PROJECT_ICON[id];
            const gradientBg = PROJECT_ACCENT_BG[id];
            const projectLink = PROJECT_LINKS[id];

            return (
              <div
                key={id}
                className="group relative min-h-[300px] md:aspect-[16/11] overflow-hidden rounded-2xl border border-border bg-surface-card shadow-md transition-all duration-300 hover:shadow-2xl hover:border-accent/50"
              >
                {/* Visual Card Base */}
                <div
                  className={`size-full bg-gradient-to-br ${gradientBg} p-7 md:p-8 flex flex-col justify-between items-center text-center`}
                >
                  <div className="flex w-full justify-between items-center">
                    <span className="rounded-full bg-surface/80 backdrop-blur-sm border border-border/60 px-3 py-1 font-mono text-xs font-semibold text-muted">
                      {project.tags[0]}
                    </span>
                    <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                      <ProjectIcon aria-hidden="true" weight="duotone" className="size-6" />
                    </span>
                  </div>

                  <div className="my-auto py-4">
                    <div className="mx-auto mb-4 grid size-16 place-items-center rounded-2xl bg-surface shadow-lg border border-border/80">
                      <ProjectIcon aria-hidden="true" weight="duotone" className="size-8 text-accent" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted line-clamp-2 max-w-sm mx-auto">
                      {project.summary}
                    </p>

                    {/* Mobile-only Direct Action Button (Touch-friendly) */}
                    <div className="mt-4 md:hidden">
                      <a
                        href={projectLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-accent bg-accent/15 px-4 py-1.5 text-xs font-semibold text-accent active:bg-accent active:text-accent-foreground"
                      >
                        <span>{projects.viewProject}</span>
                        <ArrowUpRight aria-hidden="true" weight="bold" className="size-3.5" />
                        <span className="sr-only"> ({a11y.externalLink})</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-1.5 opacity-80">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-surface/80 px-2.5 py-0.5 font-mono text-[11px] text-muted border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Matt Farley style Hover Overlay (Desktop) */}
                <div className="hidden md:flex absolute inset-0 z-10 flex-col items-center justify-center p-8 bg-slate-950/90 text-white opacity-0 transition-opacity duration-300 backdrop-blur-md group-hover:opacity-100">
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {project.name}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-md mb-6">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={projectLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-accent bg-transparent px-6 py-2.5 text-sm font-semibold text-accent transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_20px_-3px_var(--accent)]"
                  >
                    <span>{projects.viewProject}</span>
                    <ArrowUpRight aria-hidden="true" weight="bold" className="size-4" />
                    <span className="sr-only"> ({a11y.externalLink})</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* See more on GitHub button */}
        <div className="mt-14 flex justify-center">
          <ButtonLink
            href={SITE.github}
            variant={ButtonVariant.OutlinePill}
            externalLabel={a11y.externalLink}
            className="!px-8 !py-3.5 !text-base"
          >
            <GithubLogo aria-hidden="true" weight="bold" className="size-5" />
            <span>{projects.seeMoreGithub}</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
