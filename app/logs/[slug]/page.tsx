import { getContentBySlug, getSlugs } from "@/src/lib/mdx";
import { ArrowLeft, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await getSlugs("logs");
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export default async function LogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let log;

  try {
    log = await getContentBySlug("logs", slug);
  } catch (e) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-20 font-mono">
      <Link
        href="/logs"
        className="text-xs text-[#555] hover:text-[#3b82f6] transition-colors mb-8 block uppercase tracking-widest flex items-center gap-2"
      >
        <ArrowLeft size={14} /> Back to logs
      </Link>

      <article className="space-y-8">
        <header className="space-y-2 border-b border-[#1a1a1a] pb-6">
          <h1 className="text-2xl font-bold tracking-tight">
            {log.meta.title}
          </h1>
          <div className="flex items-center gap-2 text-xs text-[#555] uppercase tracking-widest">
            <Clock size={12} /> {log.meta.date}
          </div>
        </header>

        <div className="prose prose-invert max-w-none prose-sm prose-pre:bg-black prose-pre:border prose-pre:border-[#1a1a1a] prose-pre:rounded-none">
          <MDXRemote source={log.content} />
        </div>
      </article>

      <footer className="mt-20 pt-8 border-t border-[#1a1a1a] text-[10px] text-[#333] uppercase tracking-widest">
        End of segment // {slug}
      </footer>
    </main>
  );
}
