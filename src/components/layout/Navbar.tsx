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
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between font-mono">
        <Link
          href="/"
          className="text-sm font-bold tracking-tighter hover:text-accent transition-colors text-foreground"
        >
          Abdallemo.dev
        </Link>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.2em] hover:text-accent transition-colors font-bold ${
                pathname.startsWith(link.href)
                  ? "text-accent"
                  : "text-muted-foreground"
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
