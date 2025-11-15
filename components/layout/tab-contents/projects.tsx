"use client";

import { Star, GitFork, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { Project } from "@/lib/types"

interface ProjectsContentProps {
  projects: Project[]
}

export function ProjectsContent({ projects }: ProjectsContentProps) {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:border-muted-foreground/30 transition-colors bg-card">
            {/* Project Image */}
            <div className="relative w-full h-48 bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Project Content */}
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <div className="flex items-center gap-2">
                  {project.demo && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </Button>
                  )}
                  {project.url && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Source Code"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              <CardDescription className="leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <Separator />
              
              {/* Stats */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  <span>{project.forks}</span>
                </div>
                <Badge
                  variant={project.status === "active" ? "success" : "secondary"}
                  className="ml-auto"
                >
                  {project.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
