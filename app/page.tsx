"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { LandingPage } from "@/components/landing-page"
import { AuthScreen } from "@/components/auth-screen"
import { createClient } from "@/lib/supabase"

export default function Home() {
  const router = useRouter()
  const [screen, setScreen] = useState<"loading" | "landing" | "auth">("loading")
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const supabase = createClient()
    
    async function checkSession() {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session?.user) {
        // Check if profile is complete
        const { data: profile } = await supabase
          .from("profiles")
          .select("is_profile_complete")
          .eq("id", session.user.id)
          .single()

        if (profile?.is_profile_complete) {
          router.push("/match")
        } else {
          router.push("/setup")
        }
      } else {
        setScreen("landing")
      }
    }

    checkSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("is_profile_complete")
          .eq("id", session.user.id)
          .single()

        if (profile?.is_profile_complete) {
          router.push("/match")
        } else {
          router.push("/setup")
        }
      } else {
        setScreen("landing")
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  if (screen === "loading") {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[#141929]">
        <div className="h-8 w-8 animate-spin rounded-full border-2"
          style={{ borderColor: "#00c896", borderTopColor: "transparent" }} />
      </div>
    )
  }

  if (screen === "auth") return <AuthScreen />
  return <LandingPage onGetStarted={() => setScreen("auth")} darkMode={darkMode} setDarkMode={setDarkMode} />
}