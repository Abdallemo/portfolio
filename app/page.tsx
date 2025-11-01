"use client";

import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
import { SkillsMatrix } from "@/components/skills-matrix";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects-data";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <nav className="mx-auto max-w-6xl px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="#hero">
              <Avatar>
                <AvatarFallback>AM</AvatarFallback>
                <AvatarImage
                  src={"/abdallemo.jpg"}
                  className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                />
              </Avatar>
            </Link>
            <div className="flex items-center gap-6">
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a
                href="#skills"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <Button asChild size="sm" variant="outline">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-3 w-3" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="relative">
                <div className="h-24 w-24 rounded-2xl bg-linear-to-br from-primary/80 to-primary/40 flex items-center justify-center text-primary-foreground text-3xl font-bold shadow-lg ">
                  <Image
                    fill
                    src={"/abdallemo.jpg"}
                    alt="AM"
                    className="rounded-2xl text-center"
                    
                  />
                </div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-2 rounded-2xl bg-primary/20 blur-xl -z-10"
                />
              </motion.div>
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
                  <Sparkles className="h-3 w-3" />
                  <span>Open to internship opportunities</span>
                </motion.div>
                <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance mb-3">
                  Abdullahi Mohamed
                </h1>
                <p className="text-xl text-muted-foreground font-mono">
                  <Terminal className="inline h-5 w-5 mr-2" />
                  Software Developer | IT Student
                </p>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
              Full-stack developer passionate about building type-safe, scalable
              systems. Currently pursuing IT at UTHM with plans for a Master's
              in Software Engineering. I code 6+ hours daily, exploring modern
              technologies from Next.js to Go, and building solutions that solve
              real problems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="group">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://github.com/Abdallemo"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-3">GitHub Activity</h2>
            <p className="text-muted-foreground text-lg mb-12">Consistent contributions and open-source involvement</p>
            <GitHubStats username="Abdallemo" />
          </motion.div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-3">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Building solutions that matter, one commit at a time
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="skills" className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-3">
              Technical Skills
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Proficiency across the full stack
            </p>
            <SkillsMatrix />
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-12">
              Backend Engineering Focus
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl border border-border/40 bg-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">API Design</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  RESTful and WebSocket APIs with proper authentication, rate
                  limiting, and error handling
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      JWT & OAuth 2.0
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      OpenAPI/Swagger
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Rate Limiting</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl border border-border/40 bg-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Database Architecture
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Designing scalable schemas with proper indexing,
                  relationships, and query optimization
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      PostgreSQL & MongoDB
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Query Optimization
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Migrations & Seeding
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl border border-border/40 bg-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Performance & Scale
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Building systems that handle high traffic with caching, load
                  balancing, and optimization
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Redis Caching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Docker & CI/CD
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Load Testing</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                  Let's Build Something
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Currently seeking internship opportunities where I can
                  contribute to meaningful projects and grow as a backend
                  engineer. Let's connect and discuss how I can add value to
                  your team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:engabdallemo@gmail.com"
                        className="text-foreground hover:text-primary transition-colors">
                        engabdallemo@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <a
                        href="https://github.com/Abdallemo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors">
                        @Abdallemo
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/abdullahi-mohamed-208b49163/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors">
                        Abdullahi Mohamed
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Abdullahi Mohamed.
          </p>
        </div>
      </footer>
    </div>
  );
}
