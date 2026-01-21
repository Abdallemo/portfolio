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
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg"
      >
        <nav className="mx-auto max-w-6xl px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="#hero">
              <Avatar>
                <AvatarFallback>AM</AvatarFallback>
                <AvatarImage src="/abdallemo.jpg" />
              </Avatar>
            </Link>
            <div className="flex items-center gap-6">
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Contact
              </a>
              <Button asChild size="sm" variant="outline">
                <a href="/resume/resume.pdf" download>
                  <Download className="mr-2 h-3 w-3" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-border/40"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:px-8"
        >
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="relative"
              >
                <div className="h-24 w-24 rounded-2xl overflow-hidden shadow-lg">
                  <Image fill src="/abdallemo.jpg" alt="Abdullahi Mohamed" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
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
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4"
                >
                  <Sparkles className="h-3 w-3" />
                  <span>Software Engineering Intern </span>
                </motion.div>

                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-3">
                  Abdullahi Mohamed
                </h1>

                <p className="text-xl text-muted-foreground font-mono">
                  <Terminal className="inline h-5 w-5 mr-2" />
                  IT Student • Software Engineering Focus
                </p>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg leading-relaxed text-muted-foreground max-w-3xl"
            >
              I’m an IT student at Universiti Tun Hussein Onn Malaysia (UTHM)
              with a focus on software engineering. I build web-based systems
              using TypeScript, and Go, with a focus on end-to-end development —
              from backend design to implementation and deployment.
              <br />
              <br />
              I’m currently seeking an internship where I can contribute to real
              projects, learn from experienced engineers, and strengthen my
              fundamentals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
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
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-3">
              Selected Academic & Personal Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Projects built to practice software engineering concepts, system
              design, and real-world workflows.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, index) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-3">
              Technologies I’ve Worked With
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Tools and technologies used across coursework and projects
            </p>
            <SkillsMatrix />
          </motion.div>
        </div>
      </section>

      {/* Backend Concepts */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-12">
              Backend Concepts I’ve Practiced
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <ConceptCard
                icon={<Code2 />}
                title="API Development"
                description="Developing RESTful and WebSocket APIs with authentication, validation, and error handling."
                items={["JWT & OAuth 2.0", "Basic rate limiting"]}
              />

              <ConceptCard
                icon={<Database />}
                title="Database Design"
                description="Designing schemas with proper relationships, and indexing."
                items={["PostgreSQL & MongoDB", "Migrations & seeding"]}
              />

              <ConceptCard
                icon={<Zap />}
                title="Performance Considerations"
                description="Applying basic techniques to improve performance and reliability."
                items={["Redis caching", "Docker & CI/CD basics"]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  I’m currently seeking a software engineering internship where
                  I can contribute to meaningful projects and continue learning
                  in a professional environment.
                </p>

                <div className="space-y-4">
                  <ContactItem
                    icon={<Mail />}
                    label="Email"
                    value="engabdallemo@gmail.com"
                    href="mailto:engabdallemo@gmail.com"
                  />
                  <ContactItem
                    icon={<Github />}
                    label="GitHub"
                    value="@Abdallemo"
                    href="https://github.com/Abdallemo"
                  />
                  <ContactItem
                    icon={<Linkedin />}
                    label="LinkedIn"
                    value="Abdullahi Mohamed"
                    href="https://www.linkedin.com/in/abdullahi-mohamed-208b49163/"
                  />
                </div>
              </div>

              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abdullahi Mohamed.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* Small internal helpers (no styling changes) */
function ConceptCard({ icon, title, description, items }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-xl border bg-card"
    >
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <ul className="space-y-2 text-sm">
        {items.map((item: string) => (
          <li
            key={item}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ContactItem({ icon, label, value, href }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <a href={href} target="_blank" className="hover:text-primary">
          {value}
        </a>
      </div>
    </div>
  );
}
