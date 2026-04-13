import { getAllContent } from "@/src/lib/mdx";
import Link from "next/link";
import { Github, ExternalLink, Terminal, Cpu, FileJson, ArrowUpRight } from "lucide-react";

export default async function ToolsPage() {
  const tools = await getAllContent("tools");
  
  const categories = [
    { name: "CLI Tools", type: "cli", icon: <Terminal size={14} /> },
    { name: "Scripts & Automation", type: "script", icon: <Cpu size={14} /> },
    { name: "Dotfiles & Config", type: "dotfiles", icon: <FileJson size={14} /> },
    { name: "Utility Tools", type: "tool", icon: <FileJson size={14} /> },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16 font-mono">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">Workbench</h1>
        <p className="text-[#888] max-w-lg text-sm">
          A collection of CLI tools, scripts, and configurations I use to optimize my development workflow.
        </p>
      </header>

      <div className="space-y-12">
        {categories.map((cat) => {
          const catTools = tools.filter((t) => t.meta.type === cat.type);
          if (catTools.length === 0) return null;

          return (
            <section key={cat.name} className="space-y-4">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#333] flex items-center gap-2">
                {cat.icon} {cat.name}
              </h2>
              <div className="border border-[#1a1a1a] divide-y divide-[#1a1a1a]">
                {catTools.map((tool) => (
                  <Link 
                    key={tool.slug} 
                    href={`/tools/${tool.slug}`}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-[#0d0d0d] transition-colors group relative overflow-hidden"
                  >
                    <div className="space-y-1 relative z-10">
                      <div className="flex items-center gap-3">
                        <h3 className="text-sm font-bold group-hover:text-[#3b82f6] transition-colors">{tool.meta.title}</h3>
                        <div className="flex gap-1.5">
                          {tool.meta.tech.map((t: string) => (
                            <span key={t} className="text-[9px] text-[#444] uppercase tracking-tighter border border-[#1a1a1a] px-1 group-hover:border-[#2a2a2a] transition-colors">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-[11px] text-[#666] max-w-xl leading-relaxed">
                        {tool.meta.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 md:mt-0 relative z-10">
                      <ArrowUpRight size={16} className="text-[#1a1a1a] group-hover:text-[#3b82f6] transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
