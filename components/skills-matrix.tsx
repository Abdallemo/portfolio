"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Braces,
  Database,
  Server,
  Cpu,
  Boxes,
  GitBranch,
  Terminal,
  Cloud,
  Shield,
  Brain,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  category: string;
}

const skills: Skill[] = [
  // Languages
  { name: "Go", icon: Cpu, category: "Languages" },
  { name: "TypeScript", icon: Code, category: "Languages" },
  { name: "JavaScript", icon: Code, category: "Languages" },
  { name: "Dart", icon: Code, category: "Languages" },
  { name: "C / C++", icon: Braces, category: "Languages" },
  { name: "SQL", icon: Database, category: "Languages" },

  { name: "React", icon: Braces, category: "Frontend Frameworks" },
  {
    name: "Next.js (App Router)",
    icon: Braces,
    category: "Frontend Frameworks",
  },
  { name: "Flutter", icon: Braces, category: "Frontend Frameworks" },

  { name: "Node.js", icon: Server, category: "Backend Frameworks & Runtime" },
  {
    name: "Express.js",
    icon: Server,
    category: "Backend Frameworks & Runtime",
  },
  {
    name: "Go(net/http)",
    icon: Server,
    category: "Backend Frameworks & Runtime",
  },

  { name: "REST APIs", icon: Server, category: "Backend Concepts & APIs" },
  { name: "WebSockets", icon: Server, category: "Backend Concepts & APIs" },
  {
    name: "Auth (JWT, OAuth)",
    icon: Shield,
    category: "Backend Concepts & APIs",
  },

  // Databases
  { name: "PostgreSQL", icon: Database, category: "Databases" },
  { name: "MongoDB", icon: Database, category: "Databases" },
  { name: "Drizzle ORM", icon: Database, category: "Databases" },
  { name: "Firebase", icon: Cloud, category: "Databases" },
  { name: "Supabase", icon: Cloud, category: "Databases" },

  { name: "Linux (Arch)", icon: Terminal, category: "DevOps & Systems" },
  { name: "Docker", icon: Boxes, category: "DevOps & Systems" },
  { name: "Bash Scripting", icon: Terminal, category: "DevOps & Systems" },
  { name: "Git & GitHub", icon: GitBranch, category: "DevOps & Systems" },
  { name: "CI/CD Basics", icon: Cloud, category: "DevOps & Systems" },
];

const categories = Array.from(new Set(skills.map((s) => s.category)));

export function SkillsMatrix() {
  return (
    <div className="space-y-12">
      {categories.map((category, categoryIndex) => {
        const categorySkills = skills.filter((s) => s.category === category);

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.08 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {category}
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categorySkills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="flex items-center gap-3 p-4 rounded-lg border border-border/40 bg-card hover:border-primary/40 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
