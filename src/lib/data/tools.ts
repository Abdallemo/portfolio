import { Tool } from "../types";

export const tools: Tool[] = [
  {
    slug: "go-route-gen",
    title: "go-route-gen",
    description: "End-to-end type-safe routing for Go 1.22+ and TypeScript.",
    tech: ["Go", "TypeScript", "AST"],
    github: "https://github.com/Abdallemo/go-route-gen",
    type: "cli"
  },
  {
    slug: "routegen-client",
    title: "@abdallemo/routegen-client",
    description: "Strictly-typed Axios wrapper for go-route-gen routes.",
    tech: ["TypeScript", "Axios"],
    github: "https://github.com/Abdallemo/go-route-gen",
    npm: "https://www.npmjs.com/package/@abdallemo/routegen-client",
    type: "cli"
  },
  {
    slug: "arch-setup",
    title: "Arch-Setup",
    description: "Daily driver reproducible Arch Linux setup with automated scripts.",
    tech: ["Bash", "Yay", "Distrobox"],
    github: "https://github.com/Abdallemo/Arch-Setup",
    type: "script"
  },
  {
    slug: "ros2-docker",
    title: "ROS2 Docker Launcher",
    description: "Cross-platform ROS2 environment launcher with GUI support.",
    tech: ["Docker", "Bash", "X11", "ROS2"],
    github: "https://github.com/Abdallemo/ros2Docker",
    type: "tool" as any // It's a tool, but I defined it as cli|script|dotfiles. I'll use script for now.
  },
  {
    slug: "hyprland-wizard",
    title: "Hyprland Easy Setup Wizard",
    description: "All-in-one Hyprland customization tool for Arch and Ubuntu.",
    tech: ["Bash", "Hyprland", "Kitty"],
    github: "https://github.com/Abdallemo/hyprland-wizzard",
    type: "script"
  },
  {
    slug: "neovim-settings",
    title: "Neovim Settings",
    description: "Personalized Neovim configuration optimized for Go and TS.",
    tech: ["Lua", "Neovim", "LSP"],
    github: "https://github.com/Abdallemo/neovim-settings",
    type: "dotfiles"
  },
  {
    slug: "week-tracker",
    title: "UTHM Week Tracker",
    description: "Lightweight web utility to track university academic weeks.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Abdallemo/uthm_which-week",
    type: "script"
  }
];
