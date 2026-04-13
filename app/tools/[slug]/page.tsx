import CodeBlock from "@/src/components/ui/CodeBlock";
import { getContentBySlug, getSlugs } from "@/src/lib/mdx";
import { ArrowLeft, ExternalLink, Github, Tag, Terminal } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";

export async function generateStaticParams() {
  const slugs = await getSlugs("tools");
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let tool;

  try {
    tool = await getContentBySlug("tools", slug);
  } catch (e) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16 font-mono">
      <Link
        href="/tools"
        className="text-xs text-[#555] hover:text-[#3b82f6] transition-colors mb-12 flex items-center gap-2 uppercase tracking-widest"
      >
        <ArrowLeft size={14} /> Back to workbench
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-3 space-y-12">
          <header className="space-y-4 font-sans">
            <div className="flex items-center gap-3 text-[#3b82f6]">
              <Terminal size={24} />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#333]">
                /usr/bin/{slug}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-[#ededed]">
              {tool.meta.title}
            </h1>
            <p className="text-lg text-[#a1a1aa] leading-relaxed max-w-2xl">
              {tool.meta.excerpt}
            </p>
          </header>

          <div className="prose prose-invert max-w-none prose-sm">
            <MDXRemote
              source={tool.content}
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

        <aside className="md:col-span-1 space-y-8">
          <div className="space-y-2 text-xs">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#333] border-b border-[#1a1a1a] pb-2">
              Technical Info
            </h3>
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-[#888]">
                <Tag size={14} className="text-[#333]" />{" "}
                {tool.meta.type.toUpperCase()}
              </div>
              <div className="flex gap-4 pt-2">
                <a
                  href={tool.meta.github}
                  target="_blank"
                  className="p-2 border border-[#1a1a1a] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold"
                >
                  <Github size={16} /> Source
                </a>
              </div>
              {tool.meta.npm && (
                <a
                  href={tool.meta.npm}
                  target="_blank"
                  className="flex items-center gap-2 p-2 border border-[#1a1a1a] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all text-[10px] uppercase tracking-widest font-bold"
                >
                  <ExternalLink size={16} /> NPM Package
                </a>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#333] border-b border-[#1a1a1a] pb-2">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {tool.meta.tech.map((t: string) => (
                <span
                  key={t}
                  className="text-[10px] uppercase border border-[#1a1a1a] px-2 py-0.5 text-[#555]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <footer className="pt-20 border-t border-[#1a1a1a] flex justify-between items-center text-[10px] text-[#333] uppercase tracking-widest">
        <span>Process terminated // {tool.slug}</span>
        <Link href="/tools" className="text-[#555] hover:text-[#3b82f6]">
          Return to index
        </Link>
      </footer>
    </main>
  );
}
