"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { FeaturesSection } from "@/components/features-section"
import { SafetySection } from "@/components/safety-section"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"
import { AuthScreen } from "@/components/auth-screen"
import { InterestSelection } from "@/components/interest-selection"
import { ChatRoom } from "@/components/chat-room"
import { createClient } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"

type Screen = "loading" | "landing" | "auth" | "interests" | "chat"

export default function HomePage() {
  const [screen, setScreen] = useState<Screen>("loading")
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) { setUser(session.user); setScreen("interests") }
      else setScreen("landing")
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) { setUser(session.user); setScreen("interests") }
      else { setUser(null); setScreen("landing") }
    })
    return () => subscription.unsubscribe()
  }, [])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    setScreen("landing")
    setUser(null)
    setSelectedInterests([])
  }

  if (screen === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0e1a]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-t-transparent border-primary" />
      </div>
    )
  }

  if (screen === "auth") return <AuthScreen />

  if (screen === "interests") return (
    <InterestSelection
      onStart={(interests) => { setSelectedInterests(interests); setScreen("chat") }}
      user={user}
      onSignOut={handleSignOut}
    />
  )

  if (screen === "chat") return (
    <ChatRoom
      interests={selectedInterests}
      onExit={() => { setScreen("interests"); setSelectedInterests([]) }}
    />
  )

  // Landing page
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navbar onGetStarted={() => setScreen("auth")} />
      <main>
        <HeroSection onGetStarted={() => setScreen("auth")} />
        <StatsBar />
        <FeaturesSection />
        <SafetySection />
        <CTABanner onGetStarted={() => setScreen("auth")} />
      </main>
      <Footer />
    </div>
  )
}
