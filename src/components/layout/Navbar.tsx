"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Tools", href: "/tools" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between font-mono">
        <Link
          href="/"
          className="text-sm font-bold tracking-tighter hover:text-[#3b82f6] transition-colors text-[#ededed]"
        >
          Abdallemo.dev
        </Link>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.2em] hover:text-[#3b82f6] transition-colors font-bold ${
                pathname.startsWith(link.href)
                  ? "text-[#3b82f6]"
                  : "text-[#888]"
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
