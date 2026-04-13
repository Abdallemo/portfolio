import Terminal from "@/src/components/Terminal";
import { siteConfig } from "@/src/lib/data/config";
import { getAllContent } from "@/src/lib/mdx";
import { Activity, ArrowUpRight, Github, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const allProjects = await getAllContent("projects");
  const allBlogs = await getAllContent("blog");

  const pinnedProjects = allProjects.filter((p) => p.meta.pinned).slice(0, 3);
  const recentBlogs = allBlogs.slice(0, 3);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-24 font-sans">
      {/* System Status / Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
              {siteConfig.name}
            </h1>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-lg">
              {siteConfig.bio}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-mono uppercase tracking-widest text-dim">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="me"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Github size={14} /> Github
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail size={14} /> Contact
            </a>
            <span className="flex items-center gap-1.5 cursor-default">
              <MapPin size={14} /> {siteConfig.stats.location}
            </span>
          </div>
        </div>

        <div className="border border-border p-5 space-y-4 bg-card-bg/50">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <span className="text-[10px] font-mono text-dim uppercase tracking-widest flex items-center gap-2">
              <Activity size={12} /> System Status
            </span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          </div>
          <div className="space-y-3 font-mono">
            <div className="flex justify-between text-[11px]">
              <span className="text-dim">GITHUB_STATUS</span>
              <span className="text-accent font-bold">
                {siteConfig.stats.githubRanking}
              </span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-dim">STATUS</span>
              <span className="text-green-500 font-bold">
                {siteConfig.stats.status}
              </span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-dim">TECH_STACK</span>
              <span className="text-foreground font-bold">Go/TS/Arch</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-dim">
            // Interactive Shell
          </h2>
        </div>
        <Terminal />
      </section>

      <section className="py-12 border-l-2 border-border pl-8 space-y-8 max-w-2xl ml-4">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed italic">
            "I've always spent a lot of time messing with computers and trying
            out new tools. I wanted to build a place where I could keep track of
            everything I'm working on, from my Arch Linux setup to the random
            CLI tools I build during my internship."
          </p>
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-foreground">
              What this is for
            </h2>
            <p className="text-dim leading-relaxed text-[15px]">
              This site is basically my{" "}
              <span className="font-semibold text-muted-foreground">
                digital notebook.
              </span>{" "}
              I'm not here to teach anyone—I'm just a student who likes to
              tinker and build things. I wanted a way to show my work that feels
              authentic to how I actually code, which is usually in a terminal
              or a highly customized editor.
            </p>
          </div>
        </div>
      </section>

      {/* Pinned Projects Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
            Pinned Projects
          </h2>
          <Link
            href="/projects"
            className="text-[10px] font-mono uppercase tracking-widest text-dim hover:text-accent flex items-center gap-1 transition-colors"
          >
            View All <ArrowUpRight size={12} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pinnedProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group card flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                    {project.meta.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-dim group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="text-[15px] text-muted-foreground leading-relaxed line-clamp-2">
                  {project.meta.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.meta.tech.map((t: string) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono uppercase border border-border px-2 py-0.5 text-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Writing Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
            Latest Writing
          </h2>
          <Link
            href="/blog"
            className="text-[10px] font-mono uppercase tracking-widest text-dim hover:text-accent flex items-center gap-1 transition-colors"
          >
            Read Blog <ArrowUpRight size={12} />
          </Link>
        </div>
        <div className="space-y-2">
          {recentBlogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex items-center justify-between p-4 border border-transparent hover:border-border hover:bg-card-bg/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-dim w-20">
                  {post.meta.date}
                </span>
                <span className="text-sm font-bold group-hover:text-accent transition-colors">
                  {post.meta.title}
                </span>
              </div>
              <ArrowUpRight
                size={14}
                className="text-dim group-hover:text-accent"
              />
            </Link>
          ))}
        </div>
      </section>

      <footer className="pt-20 border-t border-border flex flex-col md:flex-row justify-end items-center gap-4 font-mono">
        <div className="flex gap-6 text-[10px] text-muted-foreground font-semibold uppercase tracking-widest">
          <a
            href={siteConfig.links.github}
            target="_blank"
            className="hover:text-accent"
          >
            Github
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            className="hover:text-accent"
          >
            Twitter
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
