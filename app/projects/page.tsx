import { getAllContent } from "@/src/lib/mdx";
import { ArrowUpRight, Folder } from "lucide-react";
import Link from "next/link";

export default async function ProjectsPage() {
  const projects = await getAllContent("projects");

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">Projects</h1>
        <p className="text-muted-foreground max-w-lg">
          Full-stack applications and technical experiments. Focused on
          architecture, performance, and developer experience.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group card flex flex-col justify-between h-full"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-2 border border-border text-dim group-hover:text-accent group-hover:border-accent transition-colors">
                  <Folder size={18} />
                </div>
                <div className="text-[10px] font-mono text-[#444] uppercase tracking-widest">
                  {project.meta.year}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors flex items-center gap-2">
                  {project.meta.title}{" "}
                  <ArrowUpRight
                    size={16}
                    className="text-border group-hover:text-accent transition-all"
                  />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.meta.excerpt}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.meta.tech.map((t: string) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase border border-border px-2 py-0.5 text-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
