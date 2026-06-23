export interface Skill {
  name: string;
  level: number; // 0 to 100 for percentage visualization
  icon?: string; // Icon name reference
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  role?: string;
  duration?: string;
  keyFeatures?: string[];
  image: string; // Background visual placeholder
  githubUrl?: string;
  demoUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  grade?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  skillsLearned?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}
