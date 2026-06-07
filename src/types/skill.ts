export interface Skill {
  name: string;
  level: number; // 0 to 100
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
