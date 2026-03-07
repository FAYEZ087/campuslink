"use client"

import { useState } from "react"
import {
  ArrowRight, BookOpen, Music, Gamepad2, Film, Dumbbell, Code2,
  Palette, Globe, Coffee, Camera, Mic, HeartPulse, Utensils,
  Telescope, GraduationCap, Dog, Mountain, Sparkles, LogOut, Video,
} from "lucide-react"
import type { User } from "@supabase/supabase-js"

const INTERESTS = [
  { label: "Computer Science", icon: Code2, color: "#3b82f6" },
  { label: "Music", icon: Music, color: "#a855f7" },
  { label: "Gaming", icon: Gamepad2, color: "#ef4444" },
  { label: "Movies & TV", icon: Film, color: "#f59e0b" },
  { label: "Fitness", icon: Dumbbell, color: "#10b981" },
  { label: "Art & Design", icon: Palette, color: "#ec4899" },
  { label: "Travel", icon: Globe, color: "#06b6d4" },
  { label: "Study Buddies", icon: BookOpen, color: "#3b82f6" },
  { label: "Photography", icon: Camera, color: "#8b5cf6" },
  { label: "Podcasts", icon: Mic, color: "#f97316" },
  { label: "Mental Health", icon: HeartPulse, color: "#ef4444" },
  { label: "Foodie", icon: Utensils, color: "#eab308" },
  { label: "Astronomy", icon: Telescope, color: "#6366f1" },
  { label: "Grad School", icon: GraduationCap, color: "#3b82f6" },
  { label: "Coffee Chat", icon: Coffee, color: "#d97706" },
  { label: "Pets", icon: Dog, color: "#f97316" },
  { label: "Outdoors", icon: Mountain, color: "#22c55e" },
  { label: "Party Culture", icon: Sparkles, color: "#d946ef" },
]

interface InterestSelectionProps {
  onStart: (interests: string[]) => void
  user?: User | null
  onSignOut?: () => void
}

export function InterestSelection({ onStart, user, onSignOut }: InterestSelectionProps) {
  const [selected, setSelected] = useState<string[]>([])

  function toggleInterest(label: string) {
    setSelected((prev) => prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label])
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border/40 bg-[#0a0e1a]/95 backdrop-blur-sm px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-3">
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
          {user && onSignOut && (
            <div className="flex items-center gap-3">
              <span className="hidden text-xs text-muted-foreground sm:block">{user.email}</span>
              <button onClick={onSignOut}
                className="flex items-center gap-1.5 rounded-lg border border-border/40 bg-card px-3 py-1.5 text-xs text-muted-foreground transition hover:text-white">
                <LogOut className="h-3 w-3" />
                Sign out
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-white">What are you into?</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Select your interests to find the right students to connect with.
          </p>
        </div>

        <div className="mb-4 flex flex-wrap gap-2.5">
          {INTERESTS.map(({ label, icon: Icon, color }) => {
            const isActive = selected.includes(label)
            return (
              <button key={label} onClick={() => toggleInterest(label)}
                className="flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-150"
                style={isActive ? {
                  borderColor: color + "60",
                  background: color + "18",
                  color: color,
                } : {
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.55)",
                }}>
                <Icon className="h-3.5 w-3.5" style={isActive ? { color } : {}} />
                {label}
              </button>
            )
          })}
        </div>

        <p className="mb-10 text-sm text-muted-foreground">
          {selected.length === 0
            ? "Pick at least one — or skip to chat randomly"
            : `${selected.length} selected · matching you with students who love ${selected.slice(0, 2).join(" & ")}${selected.length > 2 ? ` +${selected.length - 2} more` : ""}`}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={() => onStart(selected)}
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-10 text-sm font-semibold text-white transition hover:bg-primary/90"
            style={{ boxShadow: "0 4px 20px rgba(59,130,246,0.3)" }}>
            Start Chatting
            <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={() => onStart([])}
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-border/40 px-8 text-sm font-medium text-muted-foreground transition hover:text-white">
            Skip — chat randomly
          </button>
          <p className="text-center text-xs text-muted-foreground py-3">
            Made with 💝 by{" "}
  
             <a href="https://github.com/FAYEZ087"
             target="_blank"
             rel="noopener noreferrer"
             className="text-primary hover:underline"
             >
               Fayez
             </a>
          </p>
        </div>
      </main>
    </div>
  )
}
