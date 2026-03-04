"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight, BookOpen, Music, Gamepad2, Film, Dumbbell, Code2,
  Palette, Globe, Coffee, Camera, Mic, HeartPulse, Utensils,
  Telescope, GraduationCap, Dog, Mountain, Sparkles,
} from "lucide-react"

const INTERESTS = [
  { label: "Computer Science", icon: Code2 },
  { label: "Music", icon: Music },
  { label: "Gaming", icon: Gamepad2 },
  { label: "Movies & TV", icon: Film },
  { label: "Fitness", icon: Dumbbell },
  { label: "Art & Design", icon: Palette },
  { label: "Travel", icon: Globe },
  { label: "Study Buddies", icon: BookOpen },
  { label: "Photography", icon: Camera },
  { label: "Podcasts", icon: Mic },
  { label: "Mental Health", icon: HeartPulse },
  { label: "Foodie", icon: Utensils },
  { label: "Astronomy", icon: Telescope },
  { label: "Grad School", icon: GraduationCap },
  { label: "Coffee Chat", icon: Coffee },
  { label: "Pets", icon: Dog },
  { label: "Outdoors", icon: Mountain },
  { label: "Party Culture", icon: Sparkles },
]

function HallwayIcon({ size = 64 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} fill="none" aria-label="Hallway app icon">
      <defs>
        <filter id="glow-icon" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="bgGrad-icon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#bgGrad-icon)" />
      <rect width="100" height="100" rx="22" fill="none" stroke="#222222" strokeWidth="1" />
      <polygon points="0,0 0,100 26,78 26,22" fill="#181818" />
      <polygon points="100,0 100,100 74,78 74,22" fill="#202020" />
      <polygon points="0,0 100,0 74,22 26,22" fill="#161616" />
      <polygon points="0,100 100,100 74,78 26,78" fill="#141414" />
      <rect x="26" y="22" width="48" height="56" fill="#111111" stroke="#2a2a2a" strokeWidth="1.2" />
      <line x1="0" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <line x1="100" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <line x1="0" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <line x1="100" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <ellipse cx="50" cy="50" rx="12" ry="14" fill="#00c896" opacity="0.1" filter="url(#glow-icon)" />
      <ellipse cx="50" cy="50" rx="7" ry="9" fill="#00c896" opacity="0.2" filter="url(#glow-icon)" />
      <ellipse cx="50" cy="50" rx="3.5" ry="4.5" fill="#00c896" opacity="0.5" />
      <ellipse cx="50" cy="50" rx="1.5" ry="2" fill="#00c896" opacity="1" />
      <circle cx="50" cy="43" r="3.5" fill="#00c896" />
      <rect x="47" y="47.5" width="6" height="10" rx="1.5" fill="#00c896" />
      <rect x="63" y="40" width="9" height="22" rx="1.5" fill="none" stroke="#00c896" strokeWidth="1" opacity="0.45" />
      <circle cx="64.5" cy="51.5" r="1" fill="#00c896" opacity="0.55" />
    </svg>
  )
}

interface InterestSelectionProps {
  onStart: (interests: string[]) => void
}

export function InterestSelection({ onStart }: InterestSelectionProps) {
  const [selected, setSelected] = useState<string[]>([])

  function toggleInterest(label: string) {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    )
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 py-12">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8">
        {/* Logo & branding */}
        <div className="flex flex-col items-center gap-3">
          <HallwayIcon size={64} />
          <h1 className="text-balance text-center font-sans text-4xl font-bold tracking-tight text-foreground">
            <span className="text-foreground">hall</span><span style={{ color: "#00c896" }}>way</span>
          </h1>
          <p className="text-pretty text-center text-base text-muted-foreground">
            Meet students who share your vibe. Pick your interests to get matched.
          </p>
          <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#00c896", opacity: 0.7 }}>
            college video chat
          </span>
        </div>

        {/* Interest bubbles */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {INTERESTS.map(({ label, icon: Icon }) => {
            const isActive = selected.includes(label)
            return (
              <button
                key={label}
                onClick={() => toggleInterest(label)}
                aria-pressed={isActive}
                className={`group flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "border-primary bg-primary/15 text-primary shadow-[0_0_12px_rgba(0,200,150,0.15)]"
                    : "border-border bg-secondary text-muted-foreground hover:border-muted-foreground/40 hover:text-foreground"
                }`}
              >
                <Icon className={`h-4 w-4 transition-colors ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
                {label}
              </button>
            )
          })}
        </div>

        {/* Selected count */}
        <p className="text-sm text-muted-foreground">
          {selected.length === 0
            ? "Select at least one interest to get better matches"
            : `${selected.length} interest${selected.length === 1 ? "" : "s"} selected`}
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <Button
            size="lg"
            onClick={() => onStart(selected)}
            className="h-14 gap-2 rounded-full px-10 text-base font-semibold shadow-lg transition-all hover:shadow-xl"
            style={{ background: "#00c896", color: "#0d0d0d" }}
          >
            Start Chatting
            <ArrowRight className="h-5 w-5" />
          </Button>
          <button
            onClick={() => onStart([])}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Skip and chat randomly
          </button>
        </div>
      </div>
    </div>
  )
}