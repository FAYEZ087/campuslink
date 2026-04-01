"use client"

import { useState, useEffect } from "react"
import { LandingPage } from "@/components/landing-page"
import { AuthScreen } from "@/components/auth-screen"
import { InterestSelection } from "@/components/interest-selection"
import { ChatRoom } from "@/components/chat-room"
import { createClient } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"

export default function Home() {
  const [screen, setScreen] = useState<"loading" | "landing" | "auth" | "interests" | "chat">("loading")
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [user, setUser] = useState<User | null>(null)
  const [darkMode, setDarkMode] = useState(true)

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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    setScreen("landing")
    setUser(null)
    setSelectedInterests([])
  }

  function handleStart(interests: string[]) {
    setSelectedInterests(interests)
    setScreen("chat")
  }

  function handleExit() {
    setScreen("interests")
    setSelectedInterests([])
  }

  if (screen === "loading") {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[#141929]">
        <div className="h-8 w-8 animate-spin rounded-full border-2"
          style={{ borderColor: "#00c896", borderTopColor: "transparent" }} />
      </div>
    )
  }

  if (screen === "landing") return <LandingPage onGetStarted={() => setScreen("auth")} darkMode={darkMode} setDarkMode={setDarkMode} />
  if (screen === "auth") return <AuthScreen />
  if (screen === "chat") return <ChatRoom interests={selectedInterests} onExit={handleExit} darkMode={darkMode} setDarkMode={setDarkMode} />
  return <InterestSelection onStart={handleStart} user={user} onSignOut={handleSignOut} darkMode={darkMode} setDarkMode={setDarkMode} />
}