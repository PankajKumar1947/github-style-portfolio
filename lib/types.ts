export interface Profile {
  name: string
  username: string
  bio: string
  avatar?: string
  location?: string
  website?: string
  company?: string
  twitter?: string
  followers: number
  following: number
  stars: number
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface PinnedRepository {
  id: number
  name: string
  description: string
  language?: string
  languageColor?: string
  stars: number
  forks: number
  isPrivate: boolean
  updatedAt: string
}

export interface Repository {
  id: number
  name: string
  description: string
  language?: string
  languageColor?: string
  stars: number
  forks: number
  isPrivate: boolean
  updatedAt: string
  url?: string
}

export interface ContributionStats {
  total: number
  thisYear: number
  streak: number
}

export interface Highlight {
  title: string
  description: string
}

export interface Overview {
  pinnedRepositories: PinnedRepository[]
  contributions: ContributionStats
  highlights?: Highlight[]
}

export interface Skill {
  name: string
  level: "Expert" | "Advanced" | "Intermediate" | "Beginner"
}

export interface SkillCategory {
  category: string
  items: Skill[]
}

export interface Experience {
  id: number
  title: string
  company: string
  location: string
  type: string
  startDate: string
  endDate: string
  description: string
  technologies: string[]
}

export interface Education {
  id: number
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  description?: string
  gpa?: string
  fieldOfStudy?: string
}

export interface Project {
  id: number
  name: string
  description: string
  url?: string
  demo?: string
  image?: string
  technologies: string[]
  stars: number
  forks: number
  status: "active" | "archived" | "deprecated"
}

export interface Technology {
  name: string
  icon?: string
  proficiency: number
}

export interface Contact {
  email: string
  phone?: string
  location?: string
  available: boolean
  message: string
}

export interface PortfolioData {
  profile: Profile
  socialLinks: SocialLink[]
  overview: Overview
  skills: SkillCategory[]
  experience: Experience[]
  education?: Education[]
  projects: Project[]
  repositories?: Repository[]
  technologies: Technology[]
  contact: Contact
}

export interface Tab {
  name: string
  value: string
}
