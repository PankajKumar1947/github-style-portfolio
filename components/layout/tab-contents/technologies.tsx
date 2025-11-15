"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Technology } from "@/lib/types"

interface TechnologiesContentProps {
  technologies: Technology[]
}

export function TechnologiesContent({ technologies }: TechnologiesContentProps) {
  return (
    <div className="py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <Card key={index} className="hover:border-muted-foreground/30 transition-colors text-center bg-card">
            <CardHeader>
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-foreground">
                  {tech.name.charAt(0)}
                </div>
              </div>
              <CardTitle className="text-base">{tech.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${tech.proficiency}%` }}
                />
              </div>
              <CardDescription className="mt-2">
                {tech.proficiency}%
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
