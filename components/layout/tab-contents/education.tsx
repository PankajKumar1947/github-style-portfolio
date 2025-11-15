"use client";

import { MapPin, Calendar, GraduationCap, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Education } from "@/lib/types"

interface EducationContentProps {
  education: Education[]
}

export function EducationContent({ education }: EducationContentProps) {
  return (
    <div className="py-6 space-y-6">
      {education.map((edu) => (
        <div
          key={edu.id}
          className="border-l-2 border-border pl-6 pb-6 relative"
        >
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
          
          <Card className="border-0 shadow-none bg-card">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  {edu.fieldOfStudy && (
                    <CardDescription className="mt-1">
                      {edu.fieldOfStudy}
                    </CardDescription>
                  )}
                </div>
                {edu.gpa && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    GPA: {edu.gpa}
                  </Badge>
                )}
              </div>
              <CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 flex-wrap">
                  <div className="flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(edu.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      -{" "}
                      {edu.endDate === "Present"
                        ? "Present"
                        : new Date(edu.endDate).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                    </span>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
            
            {edu.description && (
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </CardContent>
            )}
          </Card>
        </div>
      ))}
    </div>
  )
}

