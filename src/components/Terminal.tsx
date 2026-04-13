"use client";

import { useState, useEffect, useRef } from "react";
import { projects } from "@/src/lib/data/projects";
import { tools } from "@/src/lib/data/tools";
import { siteConfig } from "@/src/lib/data/config";

const SYSTEM_INFO = `
  _  _    
 | || |  ${siteConfig.name}@abdallemo.dev 
 | || |_ OS: Arch Linux
 |__   _| Host: Portfolio v2.0.0
    |_|   Kernel: TypeScript 5.x
          Shell: react-zsh
          Theme: Zed / Arch (Monospace)
          Stack: Go, Arch, TS, Next.js
          Rank: ${siteConfig.stats.githubRanking}
`;

const WELCOME_MESSAGE = "Type 'help' to see available commands.";

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Initial system info
    setHistory([SYSTEM_INFO, WELCOME_MESSAGE]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: string[] = [];

    if (trimmed === "") return;

    response.push(`$ ${cmd}`);

    switch (trimmed) {
      case "help":
        response.push(
          "Available commands:",
          "  ls projects - List full-stack projects",
          "  ls tools    - List CLI tools and scripts",
          "  cat about   - Show short bio",
          "  clear       - Clear the terminal",
          "  neofetch    - Show system info"
        );
        break;
      case "ls projects":
        response.push("Projects:");
        projects.forEach((p) => response.push(`  - ${p.title}: ${p.description}`));
        break;
      case "ls tools":
        response.push("Tools:");
        tools.forEach((t) => response.push(`  - ${t.title}: ${t.description}`));
        break;
      case "cat about":
        response.push(siteConfig.bio);
        break;
      case "clear":
        setHistory([]);
        return;
      case "neofetch":
        response.push(SYSTEM_INFO);
        break;
      default:
        response.push(`Command not found: ${trimmed}. Type 'help' for available commands.`);
    }

    setHistory((prev) => [...prev, ...response]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputValue);
    setInputValue("");
  };

  return (
    <div 
      className="bg-black border border-[#2a2a2a] rounded-sm p-4 font-mono text-sm h-[400px] flex flex-col shadow-2xl"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1 overflow-y-auto space-y-1 scrollbar-hide" ref={scrollRef}>
        {history.map((line, i) => (
          <pre key={i} className="whitespace-pre-wrap break-all opacity-90 leading-relaxed">
            {line}
          </pre>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex mt-2 items-center">
        <span className="text-[#3b82f6] mr-2">$</span>
        <input
          ref={inputRef}
          autoFocus
          className="flex-1 bg-transparent border-none outline-none text-white p-0 m-0 focus:ring-0"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
}
