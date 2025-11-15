"use client"

import React from "react"
import type { SocialLink as SocialLinkType } from "@/lib/types"

interface SocialLink {
  platform: string
  url: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface SocialLinksProps {
  links: SocialLink[]
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-3">
      {links.map(({ platform, url, icon: Icon }) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={platform}
          aria-label={platform}
          className="text-muted-foreground hover:text-primary transition-colors border-2 rounded-full p-2"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  )
}
