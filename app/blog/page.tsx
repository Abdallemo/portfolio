import { getAllContent } from "@/src/lib/mdx";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";

export default async function BlogPage() {
  const posts = await getAllContent("blog");

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">Personal Blog</h1>
        <p className="text-[#888] max-w-lg">
          Reflections on career, life as an IT student at UTHM, and general tech opinions.
        </p>
      </header>

      <div className="space-y-12">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`} 
            className="block group space-y-3"
          >
            <div className="flex justify-between items-baseline border-b border-[#1a1a1a] pb-4 group-hover:border-[#3b82f6] transition-all">
              <div className="space-y-1">
                <h3 className="text-xl font-bold group-hover:text-[#3b82f6] transition-colors">{post.meta.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed max-w-2xl">{post.meta.excerpt}</p>
              </div>
              <div className="text-[10px] font-mono text-[#444] uppercase tracking-[0.2em] flex items-center gap-2">
                {post.meta.date} <ArrowUpRight size={14} className="text-[#1a1a1a] group-hover:text-[#3b82f6]" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
