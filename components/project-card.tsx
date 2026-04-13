"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/projects-data";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card className="group flex flex-col h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-3">
          <Badge variant="outline" className="shrink-0">
            {project.category}
          </Badge>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="shrink-0 opacity-60 group-hover:opacity-100"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <CardTitle className="text-xl text-balance group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <div>
          <p className="text-sm font-medium text-foreground mb-2">
            Key Features:
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto space-y-3">
          <div>
            <p className="text-sm font-medium text-foreground mb-2">
              Tech Stack:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((tech, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.tech.length > 4 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.tech.length - 4}
                </Badge>
              )}
            </div>
          </div>
          <Button
            asChild
            variant="outline"
            className="w-full group/btn bg-transparent"
            size="sm"
          >
            <Link href={`/projects/${project.slug}`}>
              View Details
              <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
