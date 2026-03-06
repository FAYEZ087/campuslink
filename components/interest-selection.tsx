"use client"

import { useState } from "react"
import {
  ArrowRight, BookOpen, Music, Gamepad2, Film, Dumbbell, Code2,
  Palette, Globe, Coffee, Camera, Mic, HeartPulse, Utensils,
  Telescope, GraduationCap, Dog, Mountain, Sparkles, LogOut, Moon, Sun,
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
  { label: "Study Buddies", icon: BookOpen, color: "#00c896" },
  { label: "Photography", icon: Camera, color: "#8b5cf6" },
  { label: "Podcasts", icon: Mic, color: "#f97316" },
  { label: "Mental Health", icon: HeartPulse, color: "#ef4444" },
  { label: "Foodie", icon: Utensils, color: "#eab308" },
  { label: "Astronomy", icon: Telescope, color: "#6366f1" },
  { label: "Grad School", icon: GraduationCap, color: "#00c896" },
  { label: "Coffee Chat", icon: Coffee, color: "#d97706" },
  { label: "Pets", icon: Dog, color: "#f97316" },
  { label: "Outdoors", icon: Mountain, color: "#22c55e" },
  { label: "Party Culture", icon: Sparkles, color: "#d946ef" },
]

function HallwayIcon({ size = 32 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} fill="none">
      <defs>
        <radialGradient id="bgGradIS" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#bgGradIS)" />
      <polygon points="0,0 0,100 26,78 26,22" fill="#181818" />
      <polygon points="100,0 100,100 74,78 74,22" fill="#202020" />
      <polygon points="0,0 100,0 74,22 26,22" fill="#161616" />
      <polygon points="0,100 100,100 74,78 26,78" fill="#141414" />
      <rect x="26" y="22" width="48" height="56" fill="#111111" stroke="#2a2a2a" strokeWidth="1.2" />
      <line x1="0" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <line x1="100" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <line x1="0" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <line x1="100" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <ellipse cx="50" cy="50" rx="3.5" ry="4.5" fill="#00c896" opacity="0.6" />
      <ellipse cx="50" cy="50" rx="1.5" ry="2" fill="#00c896" />
      <circle cx="50" cy="43" r="3.5" fill="#00c896" />
      <rect x="47" y="47.5" width="6" height="10" rx="1.5" fill="#00c896" />
      <rect x="63" y="40" width="9" height="22" rx="1.5" fill="none" stroke="#00c896" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

interface InterestSelectionProps {
  onStart: (interests: string[]) => void
  user?: User | null
  onSignOut?: () => void
  darkMode: boolean
  setDarkMode: (v: boolean) => void
}

export function InterestSelection({ onStart, user, onSignOut, darkMode, setDarkMode }: InterestSelectionProps) {
  const [selected, setSelected] = useState<string[]>([])
  const dark = darkMode

  function toggleInterest(label: string) {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    )
  }

  return (
    <div className={`min-h-dvh ${dark ? "bg-[#0a0a0a] text-white" : "bg-[#f4f7f4] text-[#0d1a0d]"}`}
      style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <header className={`sticky top-0 z-10 border-b px-6 py-4 backdrop-blur-md ${dark ? "border-white/5 bg-[#0a0a0a]/80" : "border-black/5 bg-[#f4f7f4]/80"}`}>
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center gap-3">
            <HallwayIcon size={32} />
            <span className="text-lg font-bold">hall<span style={{ color: "#00c896" }}>way</span></span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setDarkMode(!dark)}
              className={`flex h-8 w-8 items-center justify-center rounded-full transition ${dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-black hover:bg-black/20"}`}>
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            {user && onSignOut && (
              <div className="flex items-center gap-2">
                <span className={`hidden text-xs sm:block ${dark ? "text-white/40" : "text-black/40"}`}>{user.email}</span>
                <button onClick={onSignOut}
                  className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs transition ${dark ? "border-white/10 bg-white/5 text-white/50 hover:text-white" : "border-black/10 bg-black/5 text-black/50 hover:text-black"}`}>
                  <LogOut className="h-3 w-3" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">What are you into?</h1>
          <p className={`mt-2 text-base ${dark ? "text-white/40" : "text-black/50"}`}>
            Select your interests to find the right students to connect with.
          </p>
        </div>

        {/* Interest grid */}
        <div className="mb-3 flex flex-wrap gap-2.5">
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
                  borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)",
                  background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                  color: dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)",
                }}>
                <Icon className="h-3.5 w-3.5" style={isActive ? { color } : {}} />
                {label}
              </button>
            )
          })}
        </div>

        {/* Count */}
        <p className={`mb-10 text-sm ${dark ? "text-white/25" : "text-black/35"}`}>
          {selected.length === 0
            ? "Pick at least one — or skip to chat randomly"
            : `${selected.length} selected · matching you with students who love ${selected.slice(0, 2).join(" & ")}${selected.length > 2 ? ` + ${selected.length - 2} more` : ""}`}
        </p>

        {/* CTA */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={() => onStart(selected)}
            className="flex h-13 items-center justify-center gap-2 rounded-2xl px-10 py-3.5 text-sm font-semibold text-black transition hover:opacity-90"
            style={{ background: "#00c896", boxShadow: "0 4px 20px rgba(0,200,150,0.3)" }}>
            Start Chatting
            <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={() => onStart([])}
            className={`flex h-13 items-center justify-center gap-2 rounded-2xl border px-8 py-3.5 text-sm font-medium transition ${dark ? "border-white/10 text-white/40 hover:border-white/20 hover:text-white/70" : "border-black/10 text-black/40 hover:border-black/20 hover:text-black/70"}`}>
            Skip — chat randomly
          </button>
        </div>
      </main>
    </div>
  )
}