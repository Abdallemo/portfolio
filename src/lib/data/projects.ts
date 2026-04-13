import { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "solveit",
    title: "SolveIt",
    description: "AI-Powered Student Job Board & Mentoring Platform",
    longDescription: "SaaS platform connecting students with academic tasks and mentoring opportunities. Features AI task categorization, secure payments with Stripe, and real-time updates.",
    tech: ["Next.js", "Go", "PostgreSQL", "Stripe", "WebSocket", "OpenAI"],
    features: [
      "AI-powered task categorization",
      "Secure Stripe payments",
      "Real-time WebSocket communication",
      "Mentorship and bidding system"
    ],
    github: "https://github.com/Abdallemo/solveit",
    category: "Full-Stack SaaS",
    year: "2024",
    pinned: true,
    images: {
      hero: "/solveit1.1.png",
      gallery: ["/solveit0.png", "/solveit1.png", "/solveit2.png"]
    },
    date: "2024-05-15",
    excerpt: "AI-Powered Student Job Board & Mentoring Platform",
    content: ""
  },
  {
    slug: "ros2-docker",
    title: "ROS2 Docker Launcher",
    description: "Cross-platform ROS2 environment launcher with GUI support",
    longDescription: "A developer tool that simplifies the setup and deployment of ROS2 (Robot Operating System 2) environments using Docker containers.",
    tech: ["Docker", "Bash", "X11", "ROS2"],
    features: ["One-command setup", "GUI support via X11", "Cross-platform", "Automatic dependency checks"],
    github: "https://github.com/Abdallemo/ros2Docker",
    category: "DevOps Tool",
    year: "2024",
    pinned: true,
    images: {
      hero: "/ros2docker.png",
      gallery: []
    },
    date: "2024-03-20",
    excerpt: "Cross-platform ROS2 environment launcher with GUI support",
    content: ""
  },
  {
    slug: "learnhub",
    title: "LearnHub",
    description: "Tutorial Sharing Platform with Markdown Support",
    longDescription: "Educational platform for creating and sharing tutorials. Features a rich markdown editor and secure file uploads.",
    tech: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Multer"],
    features: [
      "Rich markdown tutorial editor",
      "Secure file upload system",
      "User profile management",
      "Tutorial categorization and search"
    ],
    github: "https://github.com/Abdallemo/Web-Dev-Final-Project-UTHM",
    category: "Web Platform",
    year: "2023",
    pinned: false,
    images: {
      hero: "/webdevTuto.png",
      gallery: ["/tutorialHub1.png", "/tutorialHub2.png", "/tutorialHub3.png"]
    },
    date: "2023-11-20",
    excerpt: "Tutorial sharing platform with rich markdown support.",
    content: ""
  },
  {
    slug: "delivery-app",
    title: "Delivery App",
    description: "DoorDash-style food delivery with real-time tracking",
    longDescription: "A mobile food delivery application inspired by DoorDash. Features smooth animations and real-time order tracking with Firebase.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    features: [
      "Real-time order tracking",
      "Smooth 60fps animations",
      "Firebase authentication and database",
      "Restaurant search and filtering"
    ],
    github: "https://github.com/Abdallemo/delivery_app",
    category: "Mobile App",
    year: "2024",
    pinned: false,
    images: {
      hero: "/placeholder.jpg",
      gallery: []
    },
    date: "2024-02-15",
    excerpt: "DoorDash-style food delivery with real-time location tracking.",
    content: ""
  },
  {
    slug: "go-route-gen",
    title: "go-route-gen",
    description: "End-to-end type-safe routing for Go 1.22+ and TypeScript.",
    longDescription: "A CLI tool that uses Go's AST to scrape net/http routes and generate TypeScript definitions for type-safe API communication.",
    tech: ["Go", "TypeScript", "AST"],
    features: [
      "Go AST parsing",
      "Type-safe route generation",
      "TS client integration",
      "Support for path parameters"
    ],
    github: "https://github.com/Abdallemo/go-route-gen",
    category: "Developer Tool",
    year: "2024",
    pinned: true,
    images: {
      hero: "/placeholder.jpg",
      gallery: []
    },
    date: "2024-04-10",
    excerpt: "End-to-end type-safe routing for Go 1.22+ and TypeScript.",
    content: ""
  },
  {
    slug: "routegen-client",
    title: "@abdallemo/routegen-client",
    description: "Strictly-typed Axios wrapper for go-route-gen routes.",
    longDescription: "The frontend counterpart to go-route-gen, providing a type-safe Axios wrapper that enforces route and parameter safety at compile time.",
    tech: ["TypeScript", "Axios", "Generics"],
    features: [
      "Template literal types",
      "Path parameter safety",
      "Strictly-typed Axios wrapper",
      "NPM package"
    ],
    github: "https://github.com/Abdallemo/go-route-gen",
    category: "Frontend Library",
    year: "2024",
    pinned: false,
    images: {
      hero: "/placeholder.jpg",
      gallery: []
    },
    date: "2024-04-12",
    excerpt: "Strictly-typed Axios wrapper for go-route-gen routes.",
    content: ""
  }
];
