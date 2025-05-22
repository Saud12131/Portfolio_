export interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string[];
  link?: string;
}

export interface ExperienceProps {
  experiences: ExperienceItem[];
}
