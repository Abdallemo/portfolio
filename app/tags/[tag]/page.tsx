import { getContentByTag, getAllTags } from "@/src/lib/mdx";
import { Tag as TagIcon, ArrowLeft, ArrowUpRight, Folder, FileText, Terminal } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({
    tag: tag,
  }));
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const content = await getContentByTag(decodedTag);

  if (content.length === 0) {
    notFound();
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "projects": return <Folder size={14} />;
      case "blog": return <FileText size={14} />;
      case "tools": return <Terminal size={14} />;
      default: return <ArrowUpRight size={14} />;
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16 font-mono">
      <Link
        href="/"
        className="text-xs text-[#555] hover:text-[#3b82f6] transition-colors mb-12 flex items-center gap-2 uppercase tracking-widest"
      >
        <ArrowLeft size={14} /> Back to home
      </Link>

      <header className="space-y-4">
        <div className="flex items-center gap-2 text-[#3b82f6]">
          <TagIcon size={20} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Tag Index</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter text-[#ededed]">
          {decodedTag}
        </h1>
        <p className="text-[#888] max-w-lg text-sm">
          Found {content.length} item{content.length === 1 ? "" : "s"} tagged with "{decodedTag}".
        </p>
      </header>

      <div className="space-y-12">
        <section className="space-y-4">
          <div className="border border-[#1a1a1a] divide-y divide-[#1a1a1a]">
            {content.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.contentType}/${item.slug}`}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-[#0d0d0d] transition-colors group relative overflow-hidden"
              >
                <div className="space-y-1 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="text-[#333] group-hover:text-[#3b82f6] transition-colors">
                      {getIcon(item.contentType)}
                    </div>
                    <h3 className="text-sm font-bold group-hover:text-[#3b82f6] transition-colors">
                      {item.meta.title}
                    </h3>
                    <span className="text-[9px] text-[#333] uppercase tracking-widest">
                      {item.contentType}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#666] max-w-xl leading-relaxed">
                    {item.meta.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0 relative z-10">
                  <span className="text-[10px] text-[#333] group-hover:text-[#444]">{item.meta.date || item.meta.year}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#1a1a1a] group-hover:text-[#3b82f6] transition-all"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
