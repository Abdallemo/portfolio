import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/layout/Navbar";
import CommandPalette from "@/src/components/layout/CommandPalette";
import { siteConfig } from "@/src/lib/data/config";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abdallemo.dev"),
  title: {
    default: `${siteConfig.name} // Engineering Home Base`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.bio,
  keywords: [
    "Software Engineer",
    "Go Developer",
    "Arch Linux",
    "Full-stack Developer",
    "Developer Tooling",
    "Backend Systems",
    "Malaysia Developer",
    "UTHM Student",
  ],
  authors: [{ name: siteConfig.name, url: "https://abdallemo.dev" }],
  creator: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdallemo.dev",
    title: `${siteConfig.name} // Engineering Home Base`,
    description: siteConfig.bio,
    siteName: siteConfig.name,
    images: [
      {
        url: "/abdallemo.jpg",
        width: 1050,
        height: 1087,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} // Engineering Home Base`,
    description: siteConfig.bio,
    creator: "@AbdullahiM3816",
    images: ["/abdallemo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} dark`}>
      <body className="bg-[#0a0a0a] text-[#a1a1aa] antialiased selection:bg-[#3b82f6]/30 selection:text-[#3b82f6]">
        <Navbar />
        <CommandPalette />
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
