"use client"

import { motion } from "framer-motion"
import { GitCommit, GitFork, Star, Users } from "lucide-react"
import Image from "next/image"

interface GitHubStatsProps {
  username: string
}

export function GitHubStats({ username }: GitHubStatsProps) {
  // Mock stats - in production, you'd fetch these from GitHub API
  const stats = {
    totalCommits: "1,200+",
    totalStars: "50+",
    totalForks: "20+",
    followers: "30+",
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl border border-border/40 bg-card"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GitCommit className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.totalCommits}</p>
              <p className="text-sm text-muted-foreground">Total Commits</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-xl border border-border/40 bg-card"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Star className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.totalStars}</p>
              <p className="text-sm text-muted-foreground">Stars Earned</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-xl border border-border/40 bg-card"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GitFork className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.totalForks}</p>
              <p className="text-sm text-muted-foreground">Forks</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-xl border border-border/40 bg-card"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.followers}</p>
              <p className="text-sm text-muted-foreground">Followers</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* GitHub Contribution Graph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="p-6 rounded-xl border border-border/40 bg-card"
      >
        <h3 className="text-lg font-semibold mb-4">Contribution Activity</h3>
        <div className="relative w-full aspect-3/1 bg-muted/30 rounded-lg overflow-hidden">
          <Image
            src={`https://ghchart.rshah.org/2563eb/${username}`}
            alt="GitHub Contribution Graph"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          Consistent daily contributions across personal projects and open-source work
        </p>
      </motion.div>
    </div>
  )
}
