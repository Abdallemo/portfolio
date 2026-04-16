import { getAllContent } from "@/src/lib/mdx";
import { ArrowUpRight, Code, FileText } from "lucide-react";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getAllContent("blog");

  const technicalPosts = posts.filter(
    (p) =>
      p.meta.category === "technical" ||
      p.slug.includes("origin") ||
      p.slug.includes("log"),
  );
  const generalPosts = posts.filter((p) => !technicalPosts.includes(p));

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16 font-mono">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">Writing</h1>
        <p className="text-muted-foreground max-w-lg text-sm">
          A collection of technical logs, engineering deep dives, and general
          reflections.
        </p>
      </header>

      {technicalPosts.length > 0 && (
        <section className="space-y-8">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-dim flex items-center gap-2 border-b border-border pb-2">
            <Code size={14} /> Technical Logs
          </h2>
          <div className="space-y-2">
            {technicalPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex items-center justify-between p-4 border border-transparent hover:border-border hover:bg-card transition-all group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-dim w-24">
                    {post.meta.date}
                  </span>
                  <span className="text-sm font-bold group-hover:text-accent transition-colors">
                    {post.meta.title}
                  </span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-border group-hover:text-accent"
                />
              </Link>
            ))}
          </div>
        </section>
      )}

      {generalPosts.length > 0 && (
        <section className="space-y-8">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-dim flex items-center gap-2 border-b border-border pb-2">
            <FileText size={14} /> Reflections & Thoughts
          </h2>
          <div className="space-y-6">
            {generalPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group space-y-2"
              >
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                    {post.meta.title}
                  </h3>
                  <span className="text-[10px] text-[#444] uppercase tracking-widest">
                    {post.meta.date}
                  </span>
                </div>
                <p className="text-sm text-dim leading-relaxed max-w-2xl">
                  {post.meta.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
