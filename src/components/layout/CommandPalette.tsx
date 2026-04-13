"use client";

import { projects } from "@/src/lib/data/projects";
import { tools } from "@/src/lib/data/tools";
import { Command } from "cmdk";
import { Folder, Layout, Search, Terminal } from "lucide-react";
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
        className="fixed bottom-6 right-6 border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-1.5 text-[10px] text-[#555] font-mono cursor-pointer hover:border-[#3b82f6] transition-colors flex items-center gap-2 z-40 hidden md:flex"
        onClick={() => setOpen(true)}
      >
        <span className="flex items-center gap-1">
          <kbd>Ctrl</kbd> + <kbd>K</kbd>
        </span>
        <span>COMMAND PALETTE</span>
      </div>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Palette"
        className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl bg-black border border-[#2a2a2a] p-2 font-mono shadow-2xl z-50 animate-in fade-in zoom-in duration-150"
      >
        <div className="flex items-center gap-2 border-b border-[#2a2a2a] px-3 pb-2 mb-2">
          <Search size={14} className="text-[#555]" />
          <Command.Input
            placeholder="Type a command or search..."
            className="w-full bg-transparent border-none outline-none text-sm py-1 text-[#ededed] placeholder-[#555]"
          />
        </div>
        <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden space-y-1 p-1">
          <Command.Empty className="text-xs text-[#555] p-2">
            No results found.
          </Command.Empty>

          <Command.Group
            heading="Navigation"
            className="text-[10px] uppercase tracking-widest text-[#444] px-2 py-1 mb-1"
          >
            <Command.Item
              onSelect={() => runCommand(() => router.push("/"))}
              className="command-item"
            >
              <Layout size={14} /> <span>Go to Dashboard</span>
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => router.push("/projects"))}
              className="command-item"
            >
              <Folder size={14} /> <span>Browse Projects</span>
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => router.push("/tools"))}
              className="command-item"
            >
              <Terminal size={14} /> <span>View Workbench</span>
            </Command.Item>
          </Command.Group>

          <Command.Group
            heading="Projects"
            className="text-[10px] uppercase tracking-widest text-[#444] px-2 py-1 mb-1"
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
            className="text-[10px] uppercase tracking-widest text-[#444] px-2 py-1 mb-1"
          >
            {tools.map((t) => (
              <Command.Item
                key={t.slug}
                onSelect={() => runCommand(() => router.push(`/tools`))}
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
            gap: 8px;
            padding: 8px;
            font-size: 13px;
            color: #888;
            cursor: pointer;
            border-radius: 0px;
          }
          .command-item[data-selected="true"] {
            background-color: #1a1a1a;
            color: #3b82f6;
          }
        `}</style>
      </Command.Dialog>
    </>
  );
}
