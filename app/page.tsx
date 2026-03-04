"use client"

import { useState, useEffect } from "react"
import { InterestSelection } from "@/components/interest-selection"
import { ChatRoom } from "@/components/chat-room"
import { AuthScreen } from "@/components/auth-screen"
import { createClient } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"

export default function Home() {
  const [screen, setScreen] = useState<"loading" | "auth" | "interests" | "chat">("loading")
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const supabase = createClient()

    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user)
        setScreen("interests")
      } else {
        setScreen("auth")
      }
    })

    // Listen for auth state changes (magic link click)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user)
        setScreen("interests")
      } else {
        setUser(null)
        setScreen("auth")
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    setScreen("auth")
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

  // Loading state
  if (screen === "loading") {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div
            className="h-10 w-10 animate-spin rounded-full border-2 border-t-transparent"
            style={{ borderColor: "#00c896", borderTopColor: "transparent" }}
          />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  // Auth screen
  if (screen === "auth") {
    return <AuthScreen />
  }

  // Chat screen
  if (screen === "chat") {
    return <ChatRoom interests={selectedInterests} onExit={handleExit} />
  }

  // Interest selection screen
  return <InterestSelection onStart={handleStart} user={user} onSignOut={handleSignOut} />
}