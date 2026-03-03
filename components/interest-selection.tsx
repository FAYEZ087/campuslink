"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Video,
  Sparkles,
  ArrowRight,
  BookOpen,
  Music,
  Gamepad2,
  Film,
  Dumbbell,
  Code2,
  Palette,
  Globe,
  Coffee,
  Camera,
  Mic,
  HeartPulse,
  Utensils,
  Telescope,
  GraduationCap,
  Dog,
  Mountain,
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
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
            <Video className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-balance text-center font-sans text-4xl font-bold tracking-tight text-foreground">
            CampusLink
          </h1>
          <p className="text-pretty text-center text-base text-muted-foreground">
            Meet students who share your vibe. Pick your interests to get matched.
          </p>
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
                <Icon
                  className={`h-4 w-4 transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  }`}
                />
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
            className="h-14 gap-2 rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
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
