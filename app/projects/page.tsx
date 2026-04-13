import { getAllContent } from "@/src/lib/mdx";
import Link from "next/link";
import { ArrowUpRight, Folder, Tag as TagIcon } from "lucide-react";
import { Tag } from "@/src/components/ui/Tag";

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
          <div key={project.slug} className="group card flex flex-col justify-between h-full">
            <div className="space-y-6">
              <Link href={`/projects/${project.slug}`}>
                <div className="flex justify-between items-start">
                  <div className="p-2 border border-[#1a1a1a] text-[#555] group-hover:text-[#3b82f6] group-hover:border-[#3b82f6] transition-colors">
                    <Folder size={18} />
                  </div>
                  <div className="text-[10px] font-mono text-[#444] uppercase tracking-widest">{project.meta.year}</div>
                </div>
              </Link>
              <div className="space-y-3">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold group-hover:text-[#3b82f6] transition-colors flex items-center gap-2">
                    {project.meta.title} <ArrowUpRight size={16} className="text-[#1a1a1a] group-hover:text-[#3b82f6] transition-all" />
                  </h3>
                </Link>
                <p className="text-sm text-[#888] leading-relaxed">
                  {project.meta.excerpt}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.meta.tech.map((t: string) => (
                  <Tag key={t} tag={t} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
