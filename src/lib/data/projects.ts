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
    images: {
      hero: "/solveit1.1.png",
      gallery: ["/solveit0.png", "/solveit1.png", "/solveit2.png"]
    }
  },
  {
    slug: "realtime-chat",
    title: "Real-Time Chat Application",
    description: "Modern chat app with instant messaging capabilities",
    longDescription: "A real-time chat application featuring instant message delivery, user authentication, and a responsive interface. Uses Socket.io for bidirectional communication.",
    tech: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "TypeScript"],
    features: [
      "Real-time bidirectional messaging",
      "Typing indicators and read receipts",
      "Message history persistence",
      "Secure NextAuth integration"
    ],
    github: "https://github.com/Abdallemo/real-time-Chat_nextjs_socketio",
    category: "Real-Time App",
    year: "2024",
    images: {
      hero: "/modern-chat-app.png",
      gallery: []
    }
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
    images: {
      hero: "/webdevTuto.png",
      gallery: ["/tutorialHub1.png", "/tutorialHub2.png", "/tutorialHub3.png"]
    }
  },
  {
    slug: "delivery-app",
    title: "DoorDash-Style Delivery App",
    description: "Flutter-based food delivery with real-time tracking",
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
    images: {
      hero: "/placeholder.jpg",
      gallery: []
    }
  }
];
