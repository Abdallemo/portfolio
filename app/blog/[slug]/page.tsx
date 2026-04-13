import { getContentBySlug, getSlugs } from "@/src/lib/mdx";
import { ArrowLeft, Calendar } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";

export async function generateStaticParams() {
  const slugs = await getSlugs("blog");
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;

  try {
    post = await getContentBySlug("blog", slug);
  } catch (e) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-12">
      <Link
        href="/blog"
        className="text-xs font-mono text-[#555] hover:text-[#3b82f6] transition-colors mb-12 flex items-center gap-2 uppercase tracking-widest"
      >
        <ArrowLeft size={14} /> Back to blog
      </Link>

      <article className="space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-[#ededed]">
            {post.meta.title}
          </h1>
          <div className="flex items-center gap-4 text-xs font-mono text-[#555] uppercase tracking-widest">
            <Calendar size={14} className="text-[#333]" /> {post.meta.date}
          </div>
        </header>

        <div className="prose prose-invert max-w-none prose-sm border-t border-[#1a1a1a] pt-12">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeHighlight],
              },
            }}
          />
        </div>
      </article>

      <footer className="pt-20 border-t border-[#1a1a1a] flex justify-between items-center text-[10px] font-mono text-[#333] uppercase tracking-widest">
        <span>Segment closed // {post.slug}</span>
        <Link href="/blog" className="text-[#555] hover:text-[#3b82f6]">
          Return to index
        </Link>
      </footer>
    </main>
  );
}
