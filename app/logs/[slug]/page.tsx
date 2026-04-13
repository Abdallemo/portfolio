import { getLogBySlug, getLogSlugs } from "@/src/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await getLogSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export default async function LogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let log;

  try {
    log = await getLogBySlug(slug);
  } catch (e) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-mono">
      <Link href="/" className="text-xs text-[#555] hover:text-[#3b82f6] transition-colors mb-8 block uppercase tracking-widest">
        ← Back to terminal
      </Link>
      
      <article className="space-y-8">
        <header className="space-y-2 border-b border-[#2a2a2a] pb-6">
          <h1 className="text-2xl font-bold tracking-tight">{log.meta.title}</h1>
          <time className="text-xs text-[#555] block uppercase tracking-widest">{log.meta.date}</time>
        </header>

        <div className="prose prose-invert max-w-none prose-sm prose-pre:bg-black prose-pre:border prose-pre:border-[#2a2a2a] prose-pre:rounded-none">
          <MDXRemote source={log.content} />
        </div>
      </article>

      <footer className="mt-20 pt-8 border-t border-[#2a2a2a] text-[10px] text-[#444] uppercase tracking-widest">
        End of log segment // {slug}
      </footer>
    </main>
  );
}
