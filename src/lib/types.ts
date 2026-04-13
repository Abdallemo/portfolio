export interface BaseContent {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  links: {
    github: string;
    twitter: string;
    linkedin: string;
    discord: string;
  };
  subdomains: {
    lab: string;
    docs: string;
    status: string;
    git: string;
  };
  stats: {
    githubRanking: string;
    location: string;
    status: string;
  };
}

export interface Project extends BaseContent {
  tech: string[];
  features: string[];
  github: string;
  live?: string;
  category: string;
  year: string;
  pinned: boolean;
  images: {
    hero: string;
    gallery: string[];
  };
}

export interface Tool extends BaseContent {
  tech: string[];
  github: string;
  npm?: string;
  type: "cli" | "script" | "dotfiles" | "tool";
  isPinned?: boolean;
}

export interface BlogPost extends BaseContent {
  tags?: string[];
  category: "technical" | "general" | "career";
}
