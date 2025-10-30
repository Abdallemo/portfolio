import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type React from "react";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullahi Mohamed - Software Developer Portfolio",
  description:
    "Full-stack developer and IT student specializing in TypeScript, Next.js, and modern web technologies. View my projects and get in touch.",
  openGraph: {
    title: "Abdullahi Mohamed - Software Developer Portfolio",
    description:
      "Full-stack developer specializing in TypeScript, Next.js, and modern web technologies",
    type: "website",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
