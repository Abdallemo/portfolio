"use client";

import { projects } from "@/src/lib/data/projects";
import { tools } from "@/src/lib/data/tools";
import { Command } from "cmdk";
import { FileText, Folder, Layout, Search, Terminal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <div
        className="fixed bottom-6 right-6 border border-border bg-background px-3 py-1.5 text-[10px] text-muted-foreground font-mono cursor-pointer hover:border-accent hover:text-accent transition-colors flex items-center gap-2 z-40 hidden md:flex"
        onClick={() => setOpen(true)}
      >
        <span className="flex items-center gap-1">
          <kbd className="border border-border px-1 text-dim">Ctrl</kbd> +{" "}
          <kbd className="border border-border px-1 text-dim">K</kbd>
        </span>
        <span className="font-bold tracking-widest uppercase">
          Command Palette
        </span>
      </div>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Palette"
        className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl bg-black border border-border p-2 font-mono shadow-2xl z-50 animate-in fade-in zoom-in duration-150"
      >
        <div className="sr-only">
          <h2>Command Palette</h2>
          <p>Search for projects, tools, and blog posts.</p>
        </div>

        <div className="flex items-center gap-2 border-b border-border px-3 pb-2 mb-2">
          <Search size={14} className="text-dim" />
          <Command.Input
            placeholder="Search..."
            className="w-full bg-transparent border-none outline-none text-sm py-1 text-foreground placeholder-dim"
          />
        </div>
        <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden space-y-1 p-1">
          <Command.Empty className="text-xs text-muted-foreground p-2 font-mono">
            No results found.
          </Command.Empty>

          <Command.Group
            heading="Navigation"
            className="text-[10px] uppercase tracking-[0.2em] text-dim px-2 py-1 mb-1 font-bold"
          >
            <Command.Item
              onSelect={() => runCommand(() => router.push("/"))}
              className="command-item"
            >
              <Layout size={14} /> <span>Dashboard</span>
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => router.push("/projects"))}
              className="command-item"
            >
              <Folder size={14} /> <span>Projects</span>
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => router.push("/tools"))}
              className="command-item"
            >
              <Terminal size={14} /> <span>Tools</span>
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => router.push("/blog"))}
              className="command-item"
            >
              <FileText size={14} /> <span>Blog</span>
            </Command.Item>
          </Command.Group>

          <Command.Group
            heading="Projects"
            className="text-[10px] uppercase tracking-[0.2em] text-dim px-2 py-1 mb-1 font-bold"
          >
            {projects.map((p) => (
              <Command.Item
                key={p.slug}
                onSelect={() =>
                  runCommand(() => router.push(`/projects/${p.slug}`))
                }
                className="command-item"
              >
                <Folder size={14} /> <span>{p.title}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group
            heading="Tools"
            className="text-[10px] uppercase tracking-[0.2em] text-dim px-2 py-1 mb-1 font-bold"
          >
            {tools.map((t) => (
              <Command.Item
                key={t.slug}
                onSelect={() =>
                  runCommand(() => router.push(`/tools/${t.slug}`))
                }
                className="command-item"
              >
                <Terminal size={14} /> <span>{t.title}</span>
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>

        <style jsx global>{`
          .command-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px;
            font-size: 12px;
            color: var(--color-muted-foreground);
            cursor: pointer;
            border-radius: 0px;
            transition: all 0.1s ease;
            font-weight: 500;
          }
          .command-item[data-selected="true"] {
            background-color: var(--color-card);
            color: var(--color-accent);
          }
        `}</style>
      </Command.Dialog>
    </>
  );
}
