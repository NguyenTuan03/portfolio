import {
  CalendarCheck,
  Factory,
  FlowerLotus,
  TennisBall,
} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { PROJECT_ORDER, ProjectId, SectionId } from "@/lib/site";
import { Section } from "../section";

interface ProjectsProps {
  dict: Dictionary;
}

const PROJECT_ICON: Record<ProjectId, Icon> = {
  [ProjectId.PickleLearn]: TennisBall,
  [ProjectId.Autopilot]: CalendarCheck,
  [ProjectId.Nanoco]: Factory,
  [ProjectId.SpaPractice]: FlowerLotus,
};

const FEATURED_PROJECT = ProjectId.PickleLearn;

const toSlug = (name: string): string =>
  name.toLowerCase().replace(/\s+/g, "-");

export function Projects({ dict }: ProjectsProps) {
  const { projects } = dict;

  return (
    <Section
      id={SectionId.Projects}
      eyebrow={projects.eyebrow}
      title={projects.title}
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {PROJECT_ORDER.map((id) => {
          const project = projects.items[id];
          const ProjectIcon = PROJECT_ICON[id];
          const isFeatured = id === FEATURED_PROJECT;

          return (
            <li
              key={id}
              className={`reveal glass group relative flex flex-col overflow-hidden rounded-2xl p-6 transition motion-safe:hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_18px_50px_-24px_var(--accent)] md:p-8 ${
                isFeatured ? "md:col-span-2" : ""
              }`}
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 -z-10 size-48 rounded-full bg-accent-2 opacity-10 blur-3xl transition-opacity group-hover:opacity-25"
              />

              <div className="flex items-start justify-between gap-4">
                <span className="grid size-14 place-items-center rounded-2xl bg-accent-soft text-accent">
                  <ProjectIcon aria-hidden="true" weight="duotone" className="size-7" />
                </span>
                {isFeatured ? (
                  <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium text-accent-foreground">
                    {projects.featured}
                  </span>
                ) : (
                  <span className="font-mono text-xs text-muted">
                    {`~/${toSlug(project.name)}`}
                  </span>
                )}
              </div>

              <h3
                className={`mt-6 font-semibold tracking-tight ${
                  isFeatured ? "text-3xl md:text-4xl" : "text-2xl"
                }`}
              >
                {project.name}
              </h3>
              <p
                className={`mt-3 flex-1 leading-relaxed text-muted ${
                  isFeatured ? "max-w-2xl text-lg" : ""
                }`}
              >
                {project.summary}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
