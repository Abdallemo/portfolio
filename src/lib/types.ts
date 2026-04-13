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
  };
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github: string;
  live?: string;
  category: string;
  year: string;
  images: {
    hero: string;
    gallery: string[];
  };
}

export interface Tool {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  npm?: string;
  type: "cli" | "script" | "dotfiles";
}

export interface Log {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}
