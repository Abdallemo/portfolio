import { Tool } from "../types";

export const tools: Tool[] = [
  {
    slug: "go-route-gen",
    title: "go-route-gen",
    description: "End-to-end type-safe routing for Go 1.22+ and TypeScript.",
    tech: ["Go", "TypeScript", "AST"],
    github: "https://github.com/Abdallemo/go-route-gen",
    type: "cli",
    date: "2024-04-10",
    excerpt: "End-to-end type-safe routing for Go 1.22+ and TypeScript.",
    content: ""
  },
  {
    slug: "routegen-client",
    title: "@abdallemo/routegen-client",
    description: "Strictly-typed Axios wrapper for go-route-gen routes.",
    tech: ["TypeScript", "Axios"],
    github: "https://github.com/Abdallemo/go-route-gen",
    npm: "https://www.npmjs.com/package/@abdallemo/routegen-client",
    type: "cli",
    date: "2024-04-12",
    excerpt: "Strictly-typed Axios wrapper for go-route-gen routes.",
    content: ""
  },
  {
    slug: "arch-setup",
    title: "Arch-Setup",
    description: "Daily driver reproducible Arch Linux setup with automated scripts.",
    tech: ["Bash", "Yay", "Distrobox"],
    github: "https://github.com/Abdallemo/Arch-Setup",
    type: "script",
    date: "2024-02-15",
    excerpt: "My daily driver reproducible setup for Arch Linux.",
    content: ""
  },
  {
    slug: "hyprland-wizard",
    title: "Hyprland Easy Setup Wizard",
    description: "All-in-one Hyprland customization tool for Arch and Ubuntu.",
    tech: ["Bash", "Hyprland", "Kitty"],
    github: "https://github.com/Abdallemo/hyprland-wizzard",
    type: "script",
    date: "2024-01-20",
    excerpt: "One-click Hyprland customization tool for Arch and Ubuntu.",
    content: ""
  },
  {
    slug: "neovim-settings",
    title: "Neovim Settings",
    description: "Personalized Neovim configuration optimized for Go and TS.",
    tech: ["Lua", "Neovim", "LSP"],
    github: "https://github.com/Abdallemo/neovim-settings",
    type: "dotfiles",
    date: "2024-01-10",
    excerpt: "Personalized Neovim configuration optimized for Go and TypeScript.",
    content: ""
  },
  {
    slug: "uthm-week-tracker",
    title: "UTHM Week Tracker",
    description: "Lightweight web utility to track university academic weeks.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Abdallemo/uthm_which-week",
    type: "tool",
    date: "2023-09-01",
    excerpt: "Lightweight web utility to track university academic weeks.",
    content: ""
  }
];
