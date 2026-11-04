export interface SiteConfig {
  name: string;
  handle: string;
  url: string;
  github: string;
  /** Chỉ hiển thị trên trang khi có giá trị. */
  email?: string;
  linkedin?: string;
}

export const SITE: SiteConfig = {
  name: "Nguyễn Tuấn",
  handle: "nguyentuan03",
  url: "https://nguyentuan03.com",
  github: "https://github.com/NguyenTuan03",
};

export enum SectionId {
  About = "about",
  Skills = "skills",
  Projects = "projects",
  Contact = "contact",
}

export const SECTION_ORDER: readonly SectionId[] = [
  SectionId.About,
  SectionId.Skills,
  SectionId.Projects,
  SectionId.Contact,
];

export enum ProjectId {
  PickleLearn = "pickleLearn",
  Autopilot = "autopilot",
  Nanoco = "nanoco",
  SpaPractice = "spaPractice",
}

export const PROJECT_ORDER: readonly ProjectId[] = [
  ProjectId.PickleLearn,
  ProjectId.Autopilot,
  ProjectId.Nanoco,
  ProjectId.SpaPractice,
];

export enum SkillGroupId {
  Frontend = "frontend",
  Backend = "backend",
  DataCloud = "dataCloud",
}

export const SKILLS: Record<SkillGroupId, readonly string[]> = {
  [SkillGroupId.Frontend]: [
    "Next.js",
    "React",
    "TypeScript",
    "Ant Design",
    "Tailwind CSS",
  ],
  [SkillGroupId.Backend]: ["PHP / Laravel", "NestJS", "Ruby", "Go"],
  [SkillGroupId.DataCloud]: ["PostgreSQL", "AWS"],
};
