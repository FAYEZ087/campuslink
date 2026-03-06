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
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Video className="h-5 w-5 text-white" />
            </div>
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
        </div>
      </main>
    </div>
  )
}
