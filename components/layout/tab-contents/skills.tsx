"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { SkillCategory } from "@/lib/types"

interface SkillsContentProps {
  skills: SkillCategory[]
}

export function SkillsContent({ skills }: SkillsContentProps) {
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "expert":
        return "bg-success"
      case "advanced":
        return "bg-primary"
      case "intermediate":
        return "bg-warning"
      default:
        return "bg-muted"
    }
  }

  return (
    <div className="py-6 space-y-8">
      {skills.map((category, index) => (
        <div key={index}>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {category.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.items.map((skill, skillIndex) => (
              <Card key={skillIndex} className="hover:border-muted-foreground/30 transition-colors bg-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base text-card-foreground">{skill.name}</CardTitle>
                    <CardDescription className="text-xs">
                      {skill.level}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getLevelColor(skill.level)} transition-all`}
                      style={{
                        width:
                          skill.level === "Expert"
                            ? "95%"
                            : skill.level === "Advanced"
                            ? "80%"
                            : skill.level === "Intermediate"
                            ? "60%"
                            : "40%",
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
