"use client";

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Overview } from "@/lib/types"

interface OverviewContentProps {
  overview: Overview
}

export function OverviewContent({ overview }: OverviewContentProps) {



  return (
    <div className="py-6 space-y-6">
      {/* Pinned Repositories */}
      {/* Portfolio Summary */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">About Me</h2>
        </div>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Welcome to my Portfolio</CardTitle>
            <CardDescription>Full Stack Developer & Open Source Enthusiast</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              Hi there! I'm a passionate developer focused on building scalable web applications and contributing to the open source community.
              I love working with modern technologies like React, Next.js, Node.js, and TypeScript.
            </p>
            <p>
              This portfolio showcases my projects, contributions, and the journey of my learning.
              Feel free to explore my repositories and get in touch if you'd like to collaborate!
            </p>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/repositories">
                  View Repositories
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="mailto:contact@example.com">
                  Contact Me
                </Link>
              </Button>
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
