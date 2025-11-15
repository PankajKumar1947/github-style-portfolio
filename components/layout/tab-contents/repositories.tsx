"use client";

import { Star, GitFork, Lock, Globe, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Repository } from "@/lib/types"

interface RepositoriesContentProps {
  repositories: Repository[]
}

export function RepositoriesContent({ repositories }: RepositoriesContentProps) {
  return (
    <div className="py-6 space-y-4">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          type="text"
          placeholder="Find a repository..."
          className="flex-1"
        />
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Type: All
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
          <Button variant="outline" size="sm">
            Language: All
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      {/* Repositories List */}
      <div className="space-y-4">
        {repositories.map((repo) => (
          <Card key={repo.id} className="hover:border-muted-foreground/30 transition-colors bg-card">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <Globe className="w-4 h-4 text-muted-foreground shrink-0" />
                  <Button variant="link" className="h-auto p-0 font-semibold text-primary hover:underline truncate" asChild>
                    <Link href={repo.url || `/${repo.name}`}>
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
  )
}

