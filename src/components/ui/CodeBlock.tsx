"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CodeBlock({ children }: { children: React.ReactNode }) {
  const [copied, setInternalCopied] = useState(false);

  const extractText = (node: any): string => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(extractText).join("");
    if (node?.props?.children) return extractText(node.props.children);
    return "";
  };

  const onCopy = () => {
    const text = extractText(children);
    navigator.clipboard.writeText(text);
    setInternalCopied(true);
    setTimeout(() => setInternalCopied(false), 2000);
  };

  return (
    <div className="my-8 border border-[#1a1a1a] bg-[#0d1117] rounded-sm overflow-hidden">
      <div className="flex items-center justify-end px-4 py-1.5 border-b border-[#1a1a1a] bg-[#161b22]">
        {/*<span className="text-[10px] font-mono text-[#8b949e] uppercase tracking-widest">Code Block</span>*/}
        <button
          onClick={onCopy}
          className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
          title="Copy to clipboard"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <div className="whitespace-pre-wrap break-words text-[13px] leading-relaxed font-mono">
          {children}
        </div>
      </div>
    </div>
  );
}
