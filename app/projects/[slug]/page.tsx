import CodeBlock from "@/src/components/ui/CodeBlock";
import { getContentBySlug, getSlugs } from "@/src/lib/mdx";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  ShieldCheck,
  Tag,
} from "lucide-react";
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
        className="text-xs font-mono text-dim hover:text-accent transition-colors mb-12 flex items-center gap-2 uppercase tracking-widest"
      >
        <ArrowLeft size={14} /> Back to projects
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-3 space-y-12">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-foreground">
              {project.meta.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
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
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-dim border-b border-border pb-2">
              Meta
            </h3>
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={14} className="text-dim" /> {project.meta.year}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Tag size={14} className="text-dim" /> {project.meta.category}
              </div>
              <div className="flex gap-4 pt-2">
                {project.meta.github !== "Private" && (
                  <a
                    href={project.meta.github}
                    target="_blank"
                    className="p-2 border border-border hover:border-accent hover:text-accent transition-all"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.meta.npm && (
                  <a
                    href={project.meta.npm}
                    target="_blank"
                    className="p-2 border border-border hover:border-accent hover:text-accent transition-all text-[10px] font-bold flex items-center justify-center"
                  >
                    NPM
                  </a>
                )}
                {project.meta.live && (
                  <a
                    href={project.meta.live}
                    target="_blank"
                    className="p-2 border border-border hover:border-accent hover:text-accent transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-dim border-b border-border pb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.meta.tech.map((t: string) => (
                <span
                  key={t}
                  className="text-[10px] uppercase border border-border px-2 py-0.5 text-dim"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-dim border-b border-border pb-2">
              Features
            </h3>
            <div className="space-y-2 pt-2">
              {project.meta.features.map((f: string) => (
                <div
                  key={f}
                  className="flex items-start gap-2 text-[11px] text-dim leading-tight"
                >
                  <ShieldCheck size={12} className="text-dim mt-0.5" />{" "}
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <footer className="pt-20 border-t border-border flex justify-between items-center font-mono">
        <span className="text-[10px] text-dim uppercase tracking-widest">
          End of segment // {project.slug}
        </span>
        <Link
          href="/projects"
          className="text-[10px] text-dim hover:text-accent uppercase tracking-widest transition-colors"
        >
          View all projects
        </Link>
      </footer>
    </main>
  );
}
