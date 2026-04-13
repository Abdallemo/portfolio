import Terminal from "@/src/components/Terminal";
import { projects } from "@/src/lib/data/projects";
import { tools } from "@/src/lib/data/tools";
import { getAllLogs } from "@/src/lib/mdx";
import Link from "next/link";

export default async function Home() {
  const logs = await getAllLogs();

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-20 font-mono">
      {/* Hero / Terminal Section */}
      <section className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">abdallemo.dev</h1>
          <p className="text-[#888] text-sm">Software Engineer // Johor, Malaysia</p>
        </header>
        <Terminal />
      </section>

      {/* Projects Section */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#555] border-b border-[#2a2a2a] pb-2">
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.slug} className="group border border-[#2a2a2a] p-5 hover:border-[#3b82f6] transition-colors">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-[#888] mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] uppercase border border-[#2a2a2a] px-2 py-0.5 text-[#666]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#555] border-b border-[#2a2a2a] pb-2">
          Tools & Infrastructure
        </h2>
        <div className="space-y-4">
          {tools.map((tool) => (
            <div key={tool.slug} className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-[#1a1a1a] pb-4">
              <div>
                <h3 className="text-sm font-bold text-[#ededed]">{tool.title}</h3>
                <p className="text-xs text-[#888]">{tool.description}</p>
              </div>
              <div className="flex gap-4 text-xs font-bold text-[#3b82f6]">
                <a href={tool.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                {tool.npm && <a href={tool.npm} target="_blank" rel="noopener noreferrer" className="hover:underline">NPM</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Logs Section */}
      <section className="space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#555] border-b border-[#2a2a2a] pb-2">
          Technical Logs
        </h2>
        <div className="space-y-4">
          {logs.map((log) => (
            <Link 
              key={log.slug} 
              href={`/logs/${log.slug}`}
              className="block group"
            >
              <div className="flex justify-between items-baseline border-b border-[#1a1a1a] pb-4 group-hover:border-[#3b82f6] transition-colors">
                <span className="text-sm font-bold group-hover:text-[#3b82f6]">{log.meta.title}</span>
                <span className="text-xs text-[#555]">{log.meta.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="pt-20 text-[10px] text-[#444] text-center uppercase tracking-[0.2em]">
        Built with Go, TypeScript, and Arch Linux // 2024
      </footer>
    </main>
  );
}
