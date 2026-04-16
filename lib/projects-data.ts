export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  link: string;

  category: string;
  year: string;
  role: string;
  challenges?: string[];
  outcomes?: string[];
  architecture?: {
    description: string;
    diagram: string;
  };
  apiDocs?: {
    endpoint: string;
    method: string;
    description: string;
    request?: string;
    response?: string;
  }[];
  codeSnippet?: {
    title: string;
    language: string;
    code: string;
  };
  performance?: {
    metric: string;
    value: string;
  }[];
  testing?: {
    coverage: string;
    types: string[];
  };
  images: {
    hero: string;
    gallery: string[];
  };
  videos?: {
    hero: string;
  };
}
