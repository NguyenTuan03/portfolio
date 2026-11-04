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

          return (
            <li
              key={id}
              className="reveal card-purple group flex gap-5 rounded-2xl p-6 transition motion-safe:hover:-translate-y-1 hover:shadow-[0_18px_50px_-24px_var(--accent)]"
            >
              <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent shadow-[0_0_30px_-8px_var(--accent)]">
                <ProjectIcon aria-hidden="true" weight="duotone" className="size-8" />
              </span>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-accent/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
