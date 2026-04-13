"use client";

import { siteConfig } from "@/src/lib/data/config";
import { projects } from "@/src/lib/data/projects";
import { tools } from "@/src/lib/data/tools";
import { Circle, Terminal as TerminalIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const ARCH_ASCII = [
  "                  -`",
  "                 .o+`",
  "                `ooo/",
  "               `+oooo:",
  "              `+oooooo:",
  "              -+oooooo+:",
  "            `/:-:++oooo+:",
  "           `/++++/+++++++:",
  "          `/++++++++++++++:",
  "         `/+++ooooooooooooo/`",
  "        ./ooosssso++osssssso+`",
  "       .oossssso-````/ossssss+`",
  "      -osssssso.      :ssssssso.",
  "     :osssssss/        osssso+++.",
  "    /ossssssss/        +ssssooo/-",
  "  `/ossssso+/:-        -:/+osssso+-",
  " `+sso+:-`                 `.-/+oso:",
  "`++:.                           `-/+/",
  ".`                                 `/",
];

const SYSTEM_INFO = [
  { key: "OS", value: "Arch Linux x86_64" },
  { key: "Host", value: "B550M AORUS ELITE" },
  { key: "Kernel", value: "Linux 6.19.11-arch1-1" },
  { key: "Shell", value: "zsh 5.9" },
  { key: "DE", value: "KDE Plasma 6.6.4" },
  { key: "WM", value: "KWin (Wayland)" },
  { key: "GPU", value: "AMD Radeon RX 6600 XT" },
];

type Line = {
  type: "cmd" | "resp" | "fetch" | "info";
  content: any;
  path?: string;
};

export default function Terminal() {
  const [history, setHistory] = useState<Line[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentPath, setCurrentPath] = useState("/");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    setHistory([{ type: "fetch", content: null }]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    const parts = trimmed.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);
    let response: any = null;

    if (trimmed === "") return;

    setHistory((prev) => [
      ...prev,
      { type: "cmd", content: trimmed, path: currentPath },
    ]);
    setCommandHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);

    const directories = ["projects", "tools", "blog"];

    switch (command) {
      case "help":
        response = [
          "FS_NAVIGATION:",
          "  ls [dir]    - List contents",
          "  cd [dir]    - Change directory",
          "  cat [file]  - Read entry",
          "  open [file] - Launch page",
          "",
          "SYSTEM:",
          "  whoami      - Identity fetch",
          "  fastfetch   - Hardware specs",
          "  clear       - Reset buffer",
          "  exit        - Terminate session",
        ];
        break;

      case "ls":
        const targetDir = args[0] || "";
        if (currentPath === "/") {
          if (!targetDir) {
            response = directories.map((d) => `${d}/`);
          } else if (targetDir === "projects") {
            response = projects.map((p) => p.slug);
          } else if (targetDir === "tools") {
            response = tools.map((t) => t.slug);
          } else {
            response = `ls: cannot access '${targetDir}': No such directory`;
          }
        } else {
          const category = currentPath.replace("/", "");
          if (category === "projects") response = projects.map((p) => p.slug);
          else if (category === "tools") response = tools.map((t) => t.slug);
          else response = ["readme.md"];
        }
        break;

      case "cd":
        const path = args[0];
        if (!path || path === "~" || path === "/") {
          setCurrentPath("/");
        } else if (path === "..") {
          setCurrentPath("/");
        } else if (directories.includes(path)) {
          setCurrentPath(`/${path}`);
        } else {
          response = `cd: no such directory: ${path}`;
        }
        break;

      case "cat":
        const file = args[0];
        if (!file) {
          response = "usage: cat [filename]";
        } else {
          const item =
            projects.find((p) => p.slug === file) ||
            tools.find((t) => t.slug === file);
          if (item) {
            response = [
              `TITLE: ${item.title}`,
              `DESC:  ${item.excerpt}`,
              "",
              "Run 'open " + file + "' to view full details.",
            ];
          } else {
            response = `cat: ${file}: No such file or directory`;
          }
        }
        break;

      case "whoami":
        response = [siteConfig.name, siteConfig.role, siteConfig.bio];
        break;

      case "open":
        const target = args[0];
        if (target) {
          const isCategory = directories.includes(target);
          const path = isCategory
            ? `/${target}`
            : projects.find((p) => p.slug === target)
              ? `/projects/${target}`
              : `/tools/${target}`;
          response = `Launching ${path}...`;
          router.push(path);
        } else {
          response = "usage: open [target]";
        }
        break;

      case "fastfetch":
      case "neofetch":
        setHistory((prev) => [...prev, { type: "fetch", content: null }]);
        return;

      case "clear":
        setHistory([]);
        return;

      case "exit":
        setIsOpen(false);
        return;

      default:
        response = `zsh: command not found: ${command}`;
    }

    if (response) {
      setHistory((prev) => [...prev, { type: "resp", content: response }]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const nextIndex = historyIndex + 1;
      if (nextIndex < commandHistory.length) {
        setHistoryIndex(nextIndex);
        setInputValue(commandHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = historyIndex - 1;
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setInputValue(commandHistory[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInputValue("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const commands = [
        "help",
        "ls",
        "cd",
        "cat",
        "open",
        "whoami",
        "fastfetch",
        "clear",
        "exit",
      ];
      const match = commands.find((c) =>
        c.startsWith(inputValue.toLowerCase()),
      );
      if (match) setInputValue(match);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-[#050505] border border-[#1a1a1a] p-3 text-[#3b82f6] hover:border-[#3b82f6] transition-all z-40 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] shadow-2xl"
      >
        <TerminalIcon size={14} />
        <span>Resume Session</span>
      </button>
    );
  }

  return (
    <div className="bg-[#050505] border border-[#1a1a1a] rounded-sm font-mono text-[11px] h-[400px] flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
      {/* Kitty-style Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#1a1a1a] bg-[#0a0a0a]">
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <Circle
              size={10}
              className="fill-[#ff5f56] stroke-none cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
            <Circle size={10} className="fill-[#ffbd2e] stroke-none" />
            <Circle size={10} className="fill-[#27c93f] stroke-none" />
          </div>
          <div className="flex items-center gap-2 text-[10px] text-[#444] font-bold uppercase tracking-tighter">
            <TerminalIcon size={10} />
            <span>
              abdallemo@arch-pc: {currentPath === "/" ? "~" : currentPath}
            </span>
          </div>
        </div>
      </div>

      <div
        className="flex-1 overflow-y-auto p-6 space-y-2 scrollbar-hide selection:bg-[#3b82f6]/30"
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, i) => (
          <div key={i} className="space-y-1">
            {item.type === "cmd" && (
              <div className="flex items-center gap-2">
                <span className="text-[#10b981] font-bold text-xs">➜</span>
                <span className="text-[#3b82f6] font-bold">
                  {item.path === "/" ? "~" : item.path?.replace("/", "")}
                </span>
                <span className="text-[#ededed]">{item.content}</span>
              </div>
            )}

            {item.type === "fetch" && (
              <div className="flex flex-col md:flex-row gap-8 py-2">
                <pre className="text-[#3b82f6] leading-tight whitespace-pre shrink-0">
                  {ARCH_ASCII.join("\n")}
                </pre>
                <div className="space-y-0.5 pt-2">
                  <div className="text-[#ededed] font-bold text-sm mb-1">
                    abdallemo@arch-pc
                  </div>
                  <div className="text-[#444] mb-2">-----------------</div>
                  {SYSTEM_INFO.map((info) => (
                    <div key={info.key} className="flex gap-2">
                      <span className="text-[#3b82f6] font-bold w-24 shrink-0">
                        {info.key}:
                      </span>
                      <span className="text-[#888]">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {item.type === "resp" && (
              <div className="pl-6 space-y-0.5">
                {(Array.isArray(item.content)
                  ? item.content
                  : [item.content]
                ).map((line: string, j: number) => (
                  <pre
                    key={j}
                    className="whitespace-pre-wrap break-all text-[#666] leading-relaxed italic"
                  >
                    {line}
                  </pre>
                ))}
              </div>
            )}
          </div>
        ))}

        <form 
          onSubmit={(e) => { e.preventDefault(); handleCommand(inputValue); setInputValue(""); }} 
          className="flex items-center gap-2"
        >
          <span className="text-[#10b981] font-bold text-xs">➜</span>
          <span className="text-[#3b82f6] font-bold">{currentPath === "/" ? "~" : currentPath.replace("/", "")}</span>
          <input
            ref={inputRef}
            className="flex-1 bg-transparent border-none outline-none text-[#ededed] p-0 m-0 focus:ring-0"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
}
