import { getAllContent } from "@/src/lib/mdx";
import Link from "next/link";
import { ArrowUpRight, Folder, Tag } from "lucide-react";

export default async function ProjectsPage() {
  const projects = await getAllContent("projects");

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">Projects</h1>
        <p className="text-[#888] max-w-lg">
          Full-stack applications and technical experiments. Focused on architecture, performance, and developer experience.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group card flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-2 border border-[#1a1a1a] text-[#555] group-hover:text-[#3b82f6] group-hover:border-[#3b82f6] transition-colors">
                  <Folder size={18} />
                </div>
                <div className="text-[10px] font-mono text-[#444] uppercase tracking-widest">{project.meta.year}</div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold group-hover:text-[#3b82f6] transition-colors flex items-center gap-2">
                  {project.meta.title} <ArrowUpRight size={16} className="text-[#1a1a1a] group-hover:text-[#3b82f6] transition-all" />
                </h3>
                <p className="text-sm text-[#888] leading-relaxed">
                  {project.meta.excerpt}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.meta.tech.map((t: string) => (
                  <span key={t} className="text-[10px] font-mono uppercase border border-[#1a1a1a] px-2 py-0.5 text-[#555]">
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
