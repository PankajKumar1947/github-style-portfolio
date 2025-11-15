"use client";

import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, Plus, Bell } from "lucide-react"
import DarkLightMode from "./dark-light-mode"
import type { Profile } from "@/lib/types"
import { Button } from "../ui/button";

interface NavbarProps {
  profile: Profile
}

export function Navbar({ profile }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-navbar border-b border-navbar-border text-navbar-foreground">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4 min-w-0 flex-shrink-0">
          {/* GitHub Icon */}
          <Button variant="ghost" size="icon" className="shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6 text-icon hover:text-icon-hover transition-colors"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.56 7.56 0 018 4.69c.68 0 1.36.09 2 .26 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.74.54 1.49 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Button>

          {/* Username - hidden on mobile */}
          <span className="font-semibold text-icon hover:text-icon-hover cursor-pointer transition-colors hidden sm:inline">
            {profile.username}
          </span>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 flex justify-center max-w-xl">
          <Input
            type="text"
            placeholder="Type / to search"
            className="w-full bg-navbar-input text-navbar-foreground border border-navbar-input-border placeholder-navbar-input-placeholder rounded-md focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none transition-colors hidden md:block"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="hidden sm:block">
            <DarkLightMode />
          </div>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Plus className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <Avatar className="w-7 h-7 border border-navbar-border cursor-pointer shrink-0">
            <AvatarImage src={profile.avatar || "/avatar.png"} alt="user" />
            <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

export default Navbar
