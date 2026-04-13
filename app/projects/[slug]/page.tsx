import CodeBlock from "@/src/components/ui/CodeBlock";
import { getContentBySlug, getSlugs } from "@/src/lib/mdx";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  ShieldCheck,
  Tag as TagIcon,
} from "lucide-react";
import { Tag } from "@/src/components/ui/Tag";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";

export async function generateStaticParams() {
  const slugs = await getSlugs("projects");
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let project;

  try {
    project = await getContentBySlug("projects", slug);
  } catch (e) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16 font-sans">
      <Link
        href="/projects"
        className="text-xs font-mono text-[#555] hover:text-[#3b82f6] transition-colors mb-12 flex items-center gap-2 uppercase tracking-widest"
      >
        <ArrowLeft size={14} /> Back to projects
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-3 space-y-12">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-[#ededed]">
              {project.meta.title}
            </h1>
            <p className="text-lg text-[#a1a1aa] leading-relaxed max-w-2xl">
              {project.meta.excerpt}
            </p>
          </header>

          <div className="prose prose-invert max-w-none prose-sm">
            <MDXRemote
              source={project.content}
              components={{
                pre: CodeBlock,
              }}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </div>
        </div>

        <aside className="md:col-span-1 space-y-8 font-mono text-xs">
          <div className="space-y-2">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#333] border-b border-[#1a1a1a] pb-2">
              Meta
            </h3>
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-[#888]">
                <Calendar size={14} className="text-[#333]" />{" "}
                {project.meta.year}
              </div>
              <div className="flex items-center gap-2 text-[#888]">
                <TagIcon size={14} className="text-[#333]" />{" "}
                {project.meta.category}
              </div>
              <div className="flex gap-4 pt-2">
                {project.meta.github !== "Private" && (
                  <a
                    href={project.meta.github}
                    target="_blank"
                    className="p-2 border border-[#1a1a1a] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.meta.npm && (
                  <a
                    href={project.meta.npm}
                    target="_blank"
                    className="p-2 border border-[#1a1a1a] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all text-[10px] font-bold flex items-center justify-center"
                  >
                    NPM
                  </a>
                )}
                {project.meta.live && (
                  <a
                    href={project.meta.live}
                    target="_blank"
                    className="p-2 border border-[#1a1a1a] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#333] border-b border-[#1a1a1a] pb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.meta.tech.map((t: string) => (
                <Tag key={t} tag={t} />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#333] border-b border-[#1a1a1a] pb-2">
              Features
            </h3>
            <div className="space-y-2 pt-2">
              {project.meta.features.map((f: string) => (
                <div
                  key={f}
                  className="flex items-start gap-2 text-[11px] text-[#666] leading-tight"
                >
                  <ShieldCheck size={12} className="text-[#333] mt-0.5" />{" "}
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <footer className="pt-20 border-t border-[#1a1a1a] flex justify-between items-center font-mono">
        <span className="text-[10px] text-[#333] uppercase tracking-widest">
          End of segment // {project.slug}
        </span>
        <Link
          href="/projects"
          className="text-[10px] text-[#555] hover:text-[#3b82f6] uppercase tracking-widest transition-colors"
        >
          View all projects
        </Link>
      </footer>
    </main>
  );
}
