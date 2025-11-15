"use client";

import Image from "next/image"
import { SocialLinks } from "./social-links"
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon, MapPin, Link as LinkIcon, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Profile, SocialLink as SocialLinkType } from "@/lib/types"

const iconMap = {
  github: GithubIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
}

interface ProfileCardProps {
  profile: Profile
  socialLinks: SocialLinkType[]
}

export function ProfileCard({ profile, socialLinks }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Avatar */}
      <div className="relative w-full aspect-square max-w-[250px] rounded-full overflow-hidden ring-4 ring-border mx-auto md:mx-0">
        <Image
          src={profile.avatar || "/placeholder.svg"}
          alt={profile.name}
          fill
          className="object-cover rounded-full"
        />
      </div>

      {/* Name and Username */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-foreground leading-tight mb-1">
          {profile.name}
        </h1>
        <p className="text-xl text-muted-foreground mb-4">@{profile.username}</p>
        <p className="text-sm text-foreground leading-relaxed mb-4">
          {profile.bio}
        </p>
      </div>

      {/* Social Links - positioned right after bio like GitHub */}
      <div className="flex justify-center">
        <SocialLinks links={socialLinks.map(link => ({
          ...link,
          icon: iconMap[link.icon as keyof typeof iconMap] || GithubIcon
        }))} />
      </div>
    </div>
  )
}

export default ProfileCard
