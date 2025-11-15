"use client";

import { Star, GitFork, Lock, Globe } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Overview } from "@/lib/types"

interface OverviewContentProps {
  overview: Overview
}

export function OverviewContent({ overview }: OverviewContentProps) {
  const { pinnedRepositories } = overview

  return (
    <div className="py-6 space-y-6">
      {/* Pinned Repositories */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Pinned</h2>
          <Button variant="link" className="h-auto p-0" asChild>
            <Link href="#">
              Customize your pins
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pinnedRepositories.map((repo) => (
            <Card key={repo.id} className="hover:border-muted-foreground/30 transition-colors bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <Globe className="w-4 h-4 text-muted-foreground shrink-0" />
                    <Button variant="link" className="h-auto p-0 font-semibold text-primary hover:underline truncate" asChild>
                      <Link href={`/${repo.name}`}>
                        {repo.name}
                      </Link>
                    </Button>
                    {repo.isPrivate && (
                      <Lock className="w-3 h-3 text-muted-foreground shrink-0" />
                    )}
                  </div>
                </div>
                <CardDescription className="line-clamp-2 mt-2">
                  {repo.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <Button variant="ghost" size="sm" className="h-auto p-0 text-xs" asChild>
                    <Link href={`/${repo.name}/stargazers`} className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      <span>{repo.stars}</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-auto p-0 text-xs" asChild>
                    <Link href={`/${repo.name}/forks`} className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      <span>{repo.forks}</span>
                    </Link>
                  </Button>
                  <span className="ml-auto">Updated {new Date(repo.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contributions Graph Placeholder */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Contributions
        </h2>
        <Card className="bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">
                {overview.contributions.total} contributions in the last year
              </span>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className="w-3 h-3 rounded-sm bg-muted"
                      style={{
                        opacity: 0.1 + level * 0.2,
                      }}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
            <div className="grid grid-cols-53 gap-1 auto-rows-fr">
              {Array.from({ length: 371 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-sm bg-muted hover:ring-2 ring-border cursor-pointer"
                  style={{
                    opacity: Math.random() * 0.8 + 0.2,
                  }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Highlights */}
      {overview.highlights && overview.highlights.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Highlights
          </h2>
          <div className="space-y-2">
            {overview.highlights.map((highlight, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <CardTitle className="text-base text-card-foreground">{highlight.title}</CardTitle>
                  <CardDescription>{highlight.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
