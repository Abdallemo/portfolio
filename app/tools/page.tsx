import { tools } from "@/src/lib/data/tools";
import { Github, ExternalLink, Terminal, Cpu, FileJson } from "lucide-react";

export default function ToolsPage() {
  const categories = [
    { name: "CLI Tools", type: "cli", icon: <Terminal size={14} /> },
    { name: "Scripts & Automation", type: "script", icon: <Cpu size={14} /> },
    { name: "Dotfiles & Config", type: "dotfiles", icon: <FileJson size={14} /> },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">Workbench</h1>
        <p className="text-[#888] max-w-lg">
          A collection of CLI tools, scripts, and configurations I use to optimize my development workflow.
        </p>
      </header>

      <div className="space-y-12">
        {categories.map((cat) => {
          const catTools = tools.filter((t) => t.type === cat.type);
          if (catTools.length === 0) return null;

          return (
            <section key={cat.name} className="space-y-4">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#333] flex items-center gap-2">
                {cat.icon} {cat.name}
              </h2>
              <div className="border border-[#1a1a1a] divide-y divide-[#1a1a1a]">
                {catTools.map((tool) => (
                  <div key={tool.slug} className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-[#0d0d0d] transition-colors group">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-sm font-bold group-hover:text-[#3b82f6] transition-colors">{tool.title}</h3>
                        <div className="flex gap-1.5">
                          {tool.tech.map(t => (
                            <span key={t} className="text-[9px] font-mono text-[#444] uppercase tracking-tighter border border-[#1a1a1a] px-1">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-[#666] max-w-xl leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                    <div className="flex gap-4 mt-4 md:mt-0">
                      <a 
                        href={tool.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[10px] font-mono uppercase tracking-widest text-[#555] hover:text-[#ededed] flex items-center gap-1.5 transition-colors"
                      >
                        <Github size={12} /> Source
                      </a>
                      {tool.npm && (
                        <a 
                          href={tool.npm} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[10px] font-mono uppercase tracking-widest text-[#555] hover:text-[#ededed] flex items-center gap-1.5 transition-colors"
                        >
                          <ExternalLink size={12} /> NPM
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
