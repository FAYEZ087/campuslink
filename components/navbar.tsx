"use client"

import { Video } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  onGetStarted?: () => void
}

export function Navbar({ onGetStarted }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-[#0a0e1a]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={36} height={36} fill="none">
  <defs>
    <radialGradient id="bgN" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#1a1a2e" />
      <stop offset="100%" stopColor="#0d0d1a" />
    </radialGradient>
  </defs>
    <rect width="100" height="100" rx="22" fill="url(#bgN)" />
    <rect width="100" height="100" rx="22" fill="none" stroke="#1e3a5f" strokeWidth="1.5" />
    <polygon points="0,0 0,100 26,78 26,22" fill="#0f1629" />
    <polygon points="100,0 100,100 74,78 74,22" fill="#131a2e" />
    <polygon points="0,0 100,0 74,22 26,22" fill="#0c1220" />
    <polygon points="0,100 100,100 74,78 26,78" fill="#0a0f1a" />
    <rect x="26" y="22" width="48" height="56" fill="#0d1117" stroke="#1e3a5f" strokeWidth="1" />
    <line x1="0" y1="0" x2="50" y2="50" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" />
    <line x1="100" y1="0" x2="50" y2="50" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" />
    <line x1="0" y1="100" x2="50" y2="50" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" />
    <line x1="100" y1="100" x2="50" y2="50" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" />
    <ellipse cx="50" cy="50" rx="3.5" ry="4.5" fill="#3b82f6" opacity="0.5" />
    <ellipse cx="50" cy="50" rx="1.5" ry="2" fill="#3b82f6" />
    <circle cx="50" cy="43" r="3.5" fill="#3b82f6" />
    <rect x="47" y="47.5" width="6" height="10" rx="1.5" fill="#3b82f6" />
    <rect x="63" y="40" width="9" height="22" rx="1.5" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
  </svg>
  <span className="text-xl font-bold text-white">Hallway</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-white">Features</a>
          <a href="#safety" className="text-sm text-muted-foreground transition-colors hover:text-white">Safety</a>
          <a href="#community" className="text-sm text-muted-foreground transition-colors hover:text-white">Community</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={onGetStarted} className="text-muted-foreground hover:text-white hover:bg-transparent">
            Log in
          </Button>
          <Button onClick={onGetStarted} className="bg-primary text-white hover:bg-primary/90">
            Join Now
          </Button>
        </div>
      </div>
    </header>
  )
}
