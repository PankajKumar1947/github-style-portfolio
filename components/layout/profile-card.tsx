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
    <div className="flex flex-col gap-4">
      {/* Avatar */}
      <div className="relative w-full aspect-square max-w-[296px] rounded-full overflow-hidden ring-4 ring-border mx-auto md:mx-0">
        <Image
          src={profile.avatar || "/placeholder.svg"}
          alt={profile.name}
          fill
          className="object-cover rounded-full"
        />
      </div>

      {/* Name and Username */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-semibold text-foreground leading-tight mb-1">
          {profile.name}
        </h1>
        <p className="text-xl text-muted-foreground mb-4">@{profile.username}</p>
        <p className="text-sm text-foreground leading-relaxed mb-4">
          {profile.bio}
        </p>
      </div>

      {/* Social Links - positioned right after bio like GitHub */}
      <div className="flex justify-center md:justify-start">
        <SocialLinks links={socialLinks.map(link => ({
          ...link,
          icon: iconMap[link.icon as keyof typeof iconMap] || GithubIcon
        }))} />
      </div>

      {/* Follow Button */}
      <Button variant="outline" className="w-full">
        Follow
      </Button>

      {/* Profile Info */}
      <div className="space-y-2 text-sm">
        {profile.location && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>{profile.location}</span>
          </div>
        )}
        {profile.website && (
          <div className="flex items-center gap-2">
            <LinkIcon className="w-4 h-4 shrink-0 text-muted-foreground" />
            <a 
              href={profile.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {profile.website.replace(/^https?:\/\//, '')}
            </a>
          </div>
        )}
        {profile.company && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="w-4 h-4 shrink-0" />
            <span>{profile.company}</span>
          </div>
        )}
      </div>

      {/* Social Stats */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
        <a href="#" className="hover:text-primary transition-colors">
          <span className="font-semibold text-foreground">{profile.followers}</span> followers
        </a>
        <span>·</span>
        <a href="#" className="hover:text-primary transition-colors">
          <span className="font-semibold text-foreground">{profile.following}</span> following
        </a>
        <span>·</span>
        <a href="#" className="hover:text-primary transition-colors">
          <span className="font-semibold text-foreground">{profile.stars}</span> stars
        </a>
      </div>
    </div>
  )
}

export default ProfileCard
