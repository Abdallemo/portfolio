import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/layout/Navbar";
import CommandPalette from "@/src/components/layout/CommandPalette";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "abdallemo.dev // Engineering Home Base",
  description: "Software Engineer focused on high-performance backend systems and developer tooling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-[#0a0a0a] text-[#ededed] antialiased selection:bg-[#3b82f6] selection:text-white">
        <Navbar />
        <CommandPalette />
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
