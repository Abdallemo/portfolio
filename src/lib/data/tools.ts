import { Tool } from "../types";

export const tools: Tool[] = [
  {
    slug: "arch-setup",
    title: "Arch-Setup",
    description:
      "Daily driver reproducible Arch Linux setup with automated scripts.",
    tech: ["Bash", "Yay", "Distrobox"],
    github: "https://github.com/Abdallemo/Arch-Setup",
    type: "script",
    date: "2024-02-15",
    excerpt: "My daily driver reproducible setup for Arch Linux.",
    content: "",
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
    content: "",
  },
  {
    slug: "neovim-settings",
    title: "Neovim Settings",
    description: "Personalized Neovim configuration optimized for Go and TS.",
    tech: ["Lua", "Neovim", "LSP"],
    github: "https://github.com/Abdallemo/neovim-settings",
    type: "dotfiles",
    date: "2024-01-10",
    excerpt:
      "Personalized Neovim configuration optimized for Go and TypeScript.",
    content: "",
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
    content: "",
  },
  {
    slug: "kde-cli-wrappers",
    title: "KDE Plasma CLI Job Trackers",
    description:
      "Native KDE Plasma notification integrations for heavy CLI tools like FFmpeg and Whisper AI.",
    tech: ["C++", "Qt6", "KDE Frameworks", "FFmpeg"],
    github: "https://github.com/Abdallemo/kde-cli-wrappers",
    type: "tool",
    date: "2026-08-25",
    excerpt:
      "Native KDE Plasma notification integrations for heavy CLI tools like FFmpeg and Whisper AI.",
    content: "",
  },
];
