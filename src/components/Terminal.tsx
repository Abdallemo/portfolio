"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/src/lib/data/projects";
import { tools } from "@/src/lib/data/tools";
import { siteConfig } from "@/src/lib/data/config";
import { Terminal as TerminalIcon, X, Maximize2 } from "lucide-react";

const SYSTEM_INFO = `
  _  _    
 | || |  ${siteConfig.name}@abdallemo.dev 
 | || |_ OS: Arch Linux
 |__   _| Host: Portfolio v2.0.0
    |_|   Kernel: TypeScript 5.x
          Shell: react-zsh
          Rank: ${siteConfig.stats.githubRanking}
`;

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    setHistory([SYSTEM_INFO, "Type 'help' to see available commands."]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const [command, ...args] = trimmed.split(" ");
    let response: string[] = [];

    if (trimmed === "") return;

    response.push(`$ ${cmd}`);

    switch (command) {
      case "help":
        response.push(
          "Available commands:",
          "  ls projects  - List projects",
          "  ls tools     - List tools",
          "  open [path]  - Navigate to page (e.g. open projects)",
          "  clear        - Clear terminal",
          "  neofetch     - Show system info",
          "  exit         - Close terminal"
        );
        break;
      case "ls":
        if (args[0] === "projects") {
          projects.forEach((p) => response.push(`  - ${p.title}`));
        } else if (args[0] === "tools") {
          tools.forEach((t) => response.push(`  - ${t.title}`));
        } else {
          response.push("Usage: ls [projects|tools]");
        }
        break;
      case "open":
        if (args[0]) {
          const path = args[0].startsWith("/") ? args[0] : `/${args[0]}`;
          response.push(`Navigating to ${path}...`);
          router.push(path);
        } else {
          response.push("Usage: open [path]");
        }
        break;
      case "clear":
        setHistory([]);
        return;
      case "neofetch":
        response.push(SYSTEM_INFO);
        break;
      case "exit":
        setIsOpen(false);
        return;
      default:
        response.push(`Command not found: ${command}. Type 'help' for available commands.`);
    }

    setHistory((prev) => [...prev, ...response]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputValue);
    setInputValue("");
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-black border border-[#2a2a2a] p-3 text-[#3b82f6] hover:border-[#3b82f6] transition-all z-40 flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
      >
        <TerminalIcon size={16} />
        <span>Open Terminal</span>
      </button>
    );
  }

  return (
    <div className="bg-black border border-[#2a2a2a] rounded-sm font-mono text-[11px] h-[300px] flex flex-col shadow-2xl relative">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#2a2a2a] bg-[#0d0d0d]">
        <div className="flex items-center gap-2">
          <TerminalIcon size={12} className="text-[#555]" />
          <span className="text-[10px] text-[#888] uppercase tracking-tighter">Terminal — react-zsh</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setIsOpen(false)} className="text-[#555] hover:text-[#3b82f6] transition-colors">
            <X size={12} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-0.5 p-3 scrollbar-hide" ref={scrollRef} onClick={() => inputRef.current?.focus()}>
        {history.map((line, i) => (
          <pre key={i} className="whitespace-pre-wrap break-all opacity-80 leading-normal">
            {line}
          </pre>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-[#3b82f6] mr-1.5">$</span>
          <input
            ref={inputRef}
            autoFocus
            className="flex-1 bg-transparent border-none outline-none text-[#ededed] p-0 m-0 focus:ring-0 selection:bg-[#3b82f6]"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
