"use client";

import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import type { Contact } from "@/lib/types"

interface ContactContentProps {
  contact: Contact
}

export function ContactContent({ contact }: ContactContentProps) {
  return (
    <div className="py-6">
      <div className="max-w-2xl space-y-6">
        <div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {contact.message}
          </p>
        </div>
        
        <Card className="bg-card">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <Button variant="link" className="h-auto p-0 text-primary" asChild>
                  <a href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </Button>
              </div>
            </div>
            
            {contact.phone && (
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <Button variant="link" className="h-auto p-0 text-primary" asChild>
                    <a href={`tel:${contact.phone}`}>
                      {contact.phone}
                    </a>
                  </Button>
                </div>
              </div>
            )}
            
            {contact.location && (
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">{contact.location}</p>
                </div>
              </div>
            )}
            
            <Separator />
            
            <div className="flex items-center gap-3 pt-2">
              <CheckCircle2
                className={`w-5 h-5 ${
                  contact.available ? "text-success" : "text-muted-foreground"
                }`}
              />
              <div>
                <p className="text-sm text-muted-foreground">Availability</p>
                <p
                  className={`font-medium ${
                    contact.available ? "text-success" : "text-muted-foreground"
                  }`}
                >
                  {contact.available ? "Available for opportunities" : "Not available"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
