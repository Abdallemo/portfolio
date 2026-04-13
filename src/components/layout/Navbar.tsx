"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/src/lib/data/config";

const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Tools", href: "/tools" },
  { name: "Logs", href: "/logs" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-[#2a2a2a] bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between font-mono">
        <Link href="/" className="text-sm font-bold tracking-tighter hover:text-[#3b82f6] transition-colors">
          ABD@DEV:/$
        </Link>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-widest hover:text-[#3b82f6] transition-colors ${
                pathname.startsWith(link.href) ? "text-[#3b82f6] font-bold" : "text-[#555]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
