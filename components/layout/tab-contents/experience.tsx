"use client";

import { MapPin, Calendar, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Experience } from "@/lib/types"

interface ExperienceContentProps {
  experience: Experience[]
}

export function ExperienceContent({ experience }: ExperienceContentProps) {
  return (
    <div className="py-6 space-y-6">
      {experience.map((exp) => (
        <div
          key={exp.id}
          className="border-l-2 border-border pl-6 pb-6 relative"
        >
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
          
          <Card className="border-0 shadow-none ">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{exp.title}</CardTitle>
              <CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1 flex-wrap">
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(exp.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      -{" "}
                      {exp.endDate === "Present"
                        ? "Present"
                        : new Date(exp.endDate).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                    </span>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
