import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SKILLS, SITE, SectionId, SkillGroupId } from "@/lib/site";
import { Section } from "../section";

interface SkillsProps {
  dict: Dictionary;
}

const GROUP_ORDER: readonly SkillGroupId[] = [
  SkillGroupId.Frontend,
  SkillGroupId.Backend,
  SkillGroupId.DataCloud,
];

const LINE_COUNT = 9;
const MONOGRAM = "NT";

/** Điểm bắt đầu của các đường cong hội tụ về tâm (toạ độ theo viewBox 0-100). */
const LINE_STARTS: readonly number[] = Array.from(
  { length: LINE_COUNT },
  (_, i) => 10 + (i * 80) / (LINE_COUNT - 1),
);

export function Skills({ dict }: SkillsProps) {
  const { skills } = dict;

  return (
    <Section id={SectionId.Skills} eyebrow={skills.eyebrow} title={skills.title}>
      <div className="reveal flex flex-col items-center">
        <ul className="flex max-w-xl flex-wrap justify-center gap-2.5">
          {GROUP_ORDER.flatMap((group) => SKILLS[group]).map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-accent/30 bg-accent-soft px-4 py-2 font-mono text-xs transition-colors hover:border-accent hover:text-accent md:text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>

        {/* Các đường hội tụ về logo, chỉ mang tính trang trí */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="h-24 w-full max-w-xl text-accent/40 md:h-32"
        >
          {LINE_STARTS.map((x) => (
            <path
              key={x}
              d={`M ${x} 0 C ${x} 22, 50 14, 50 40`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        <div
          aria-hidden="true"
          className="relative grid size-40 place-items-center md:size-56"
        >
          <span className="absolute -inset-20 rounded-full bg-accent-2 opacity-30 blur-3xl" />
          <span className="absolute inset-[-3rem] scale-y-[0.35] rounded-full border border-accent/30 md:inset-[-5rem]" />
          <span className="absolute inset-[-1.5rem] scale-y-[0.35] -rotate-6 rounded-full border border-accent/40 md:inset-[-2.5rem]" />
          <span className="grid size-24 place-items-center rounded-full border border-accent/50 bg-accent-soft font-mono text-2xl font-bold text-accent shadow-[0_0_60px_-6px_var(--accent)] md:size-28 md:text-3xl">
            {MONOGRAM}
          </span>
        </div>
        <p className="sr-only">{SITE.name}</p>
      </div>
    </Section>
  );
}
