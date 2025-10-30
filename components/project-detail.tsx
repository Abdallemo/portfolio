"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/lib/projects-data";
import { openInNewTab } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Github,
  User,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 sticky top-0 bg-background/80 backdrop-blur-lg z-50">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Back to Portfolio</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Badge variant="outline" className="text-xs sm:text-sm">
                {project.category}
              </Badge>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                <User className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{project.role}</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Button asChild size="default" className="w-full sm:w-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          {project.videos ? (
            <div className="relative rounded-lg sm:rounded-xl  border border-border/40 bg-muted">
              <video src={project.videos?.hero} autoPlay controls />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden border border-border/40 bg-muted">
              <Image
                src={project.images.hero || "/placeholder.svg"}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 sm:space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  Overview
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.div>

              {project.architecture && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <Database className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    System Architecture
                  </h2>
                  <Card className="border-primary/20">
                    <CardContent className="pt-4 sm:pt-6">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                        {project.architecture.description}
                      </p>
                      <div className="relative aspect-video rounded-lg overflow-hidden border border-border/40 bg-muted/30">
                        <div className="absolute inset-0 flex items-center justify-center">
                          {project.architecture.diagram !== "" ? (
                            <Image
                              onClick={async () => {
                                if (project.architecture) {
                                  await openInNewTab(
                                    project.architecture.diagram
                                  );
                                }
                              }}
                              src={project.architecture.diagram}
                              alt={`$Architecture Diagram`}
                              fill
                              className="object-contain hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              Architecture Diagram
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {project.apiDocs && project.apiDocs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.37 }}>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    API Documentation
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    {project.apiDocs.map((api, i) => (
                      <Card key={i} className="border-border/40">
                        <CardContent className="pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                            <Badge
                              variant={
                                api.method === "GET" ? "secondary" : "default"
                              }
                              className="w-fit text-xs">
                              {api.method}
                            </Badge>
                            <code className="text-xs sm:text-sm font-mono text-foreground break-all">
                              {api.endpoint}
                            </code>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {api.description}
                          </p>
                          {api.request && (
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground mb-2">
                                Request Body:
                              </p>
                              <pre className="p-2 sm:p-3 rounded-lg bg-muted text-xs overflow-x-auto">
                                <code>{api.request}</code>
                              </pre>
                            </div>
                          )}
                          {api.response && (
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground mb-2">
                                Response:
                              </p>
                              <pre className="p-2 sm:p-3 rounded-lg bg-muted text-xs overflow-x-auto">
                                <code>{api.response}</code>
                              </pre>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}

              {project.codeSnippet && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.39 }}>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                    Code Highlight
                  </h2>
                  <Card className="border-primary/20">
                    <CardContent className="pt-4 sm:pt-6 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="font-semibold text-sm sm:text-base text-foreground">
                          {project.codeSnippet.title}
                        </h3>
                        <Badge variant="outline" className="w-fit text-xs">
                          {project.codeSnippet.language}
                        </Badge>
                      </div>
                      <pre className="p-3 sm:p-4 rounded-lg bg-muted text-xs overflow-x-auto leading-relaxed">
                        <code>{project.codeSnippet.code}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {project.performance && project.performance.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.41 }}>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    Performance Metrics
                  </h2>
                  <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                    {project.performance.map((metric, i) => (
                      <Card key={i} className="border-primary/20">
                        <CardContent className="pt-4 sm:pt-6">
                          <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                            {metric.metric}
                          </p>
                          <p className="text-xl sm:text-2xl font-bold text-primary">
                            {metric.value}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}

              {project.challenges && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                    Challenges
                  </h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <span className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs sm:text-sm font-medium shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {project.outcomes && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                    Outcomes & Impact
                  </h2>
                  <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                    {project.outcomes.map((outcome, i) => (
                      <Card key={i} className="border-primary/20">
                        <CardContent className="pt-4 sm:pt-6">
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {outcome}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}

              {project.testing && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    Testing & Quality
                  </h2>
                  <Card className="border-primary/20">
                    <CardContent className="pt-4 sm:pt-6 space-y-4">
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                          Code Coverage
                        </p>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{ width: project.testing.coverage }}
                            />
                          </div>
                          <span className="text-base sm:text-lg font-bold text-primary">
                            {project.testing.coverage}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                          Test Types
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.testing.types.map((type, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-xs">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Gallery */}
              {project.images.gallery.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                    Gallery
                  </h2>
                  <div className="grid gap-4 sm:gap-6">
                    {project.images.gallery.map((image, i) => (
                      <div
                        key={i}
                        className="relative aspect-video sm:aspect-16/10 rounded-lg overflow-hidden border border-border/40 bg-muted hover:border-primary/40 transition-colors">
                        <Image
                          onClick={async () => await openInNewTab(image)}
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} screenshot ${i + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar - moves below main content on mobile */}
            <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-24 lg:self-start">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}>
                <Card>
                  <CardContent className="pt-4 sm:pt-6 space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3">
                        Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                            <span className="text-primary mt-1 shrink-0">
                              •
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © 2025 Abdullahi Mohamed
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
