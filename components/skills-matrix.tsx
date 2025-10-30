"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface Skill {
  name: string
  level: number // 1-5
  category: string
}

const skills: Skill[] = [
  // Languages
  { name: "TypeScript", level: 5, category: "Languages" },
  { name: "JavaScript", level: 5, category: "Languages" },
  { name: "Go", level: 4, category: "Languages" },
  { name: "Dart", level: 4, category: "Languages" },
  { name: "C++", level: 3, category: "Languages" },
  { name: "C", level: 3, category: "Languages" },
  { name: "SQL", level: 4, category: "Languages" },

  // Backend
  { name: "Node.js", level: 5, category: "Backend" },
  { name: "Express.js", level: 5, category: "Backend" },
  { name: "Next.js API Routes", level: 5, category: "Backend" },
  { name: "WebSocket", level: 4, category: "Backend" },
  { name: "REST APIs", level: 5, category: "Backend" },
  { name: "GraphQL", level: 3, category: "Backend" },

  // Frontend
  { name: "React", level: 5, category: "Frontend" },
  { name: "Next.js", level: 5, category: "Frontend" },
  { name: "Flutter", level: 4, category: "Frontend" },
  { name: "Tailwind CSS", level: 5, category: "Frontend" },

  // Databases
  { name: "PostgreSQL", level: 4, category: "Databases" },
  { name: "MongoDB", level: 4, category: "Databases" },
  { name: "Firebase", level: 4, category: "Databases" },
  { name: "Drizzle ORM", level: 4, category: "Databases" },
  { name: "Prisma", level: 4, category: "Databases" },

  // DevOps & Tools
  { name: "Docker", level: 4, category: "DevOps" },
  { name: "Git", level: 5, category: "DevOps" },
  { name: "Linux/Bash", level: 4, category: "DevOps" },
  { name: "CI/CD", level: 3, category: "DevOps" },
]

const categories = Array.from(new Set(skills.map((s) => s.category)))

export function SkillsMatrix() {
  return (
    <div className="space-y-12">
      {categories.map((category, categoryIndex) => {
        const categorySkills = skills.filter((s) => s.category === category)
        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {category}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categorySkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-lg border border-border/40 bg-card hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}/5
                    </Badge>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 + i * 0.05 }}
                        className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden"
                      >
                        {i < skill.level && (
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 + i * 0.05, duration: 0.3 }}
                            className="h-full bg-primary"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
