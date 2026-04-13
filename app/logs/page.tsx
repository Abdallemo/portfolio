import { getAllContent } from "@/src/lib/mdx";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

export default async function LogsPage() {
  const logs = await getAllContent("logs");

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">Technical Logs</h1>
        <p className="text-[#888] max-w-lg">
          Short, deep technical dives into engineering problems, optimizations, and new tools.
        </p>
      </header>

      <div className="space-y-4">
        {logs.map((log) => (
          <Link 
            key={log.slug} 
            href={`/logs/${log.slug}`} 
            className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-[#1a1a1a] hover:border-[#3b82f6] hover:bg-[#0d0d0d] transition-all group gap-4"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-bold group-hover:text-[#3b82f6] transition-colors">{log.meta.title}</h3>
              <p className="text-sm text-[#666] line-clamp-2 leading-relaxed">{log.meta.excerpt}</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-[10px] font-mono text-[#444] uppercase tracking-widest flex items-center gap-1.5">
                <Clock size={12} /> {log.meta.date}
              </span>
              <ArrowUpRight size={16} className="text-[#222] group-hover:text-[#3b82f6] transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
