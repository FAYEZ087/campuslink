"use client"

import { useState } from "react"
import { createClient, isCollegeEmail, getDomainError } from "@/lib/supabase"
import { ArrowRight, Mail, CheckCircle, AlertCircle, Loader2, Video } from "lucide-react"

type AuthState = "idle" | "loading" | "sent" | "error"

export function AuthScreen() {
  const [email, setEmail] = useState("")
  const [authState, setAuthState] = useState<AuthState>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit() {
    if (!email.trim()) return
    if (!isCollegeEmail(email)) {
      setErrorMsg(getDomainError(email))
      setAuthState("error")
      return
    }
    setAuthState("loading")
    setErrorMsg("")
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: { emailRedirectTo: `${window.location.origin}/auth/callback`, shouldCreateUser: true },
    })
    if (error) { setErrorMsg(error.message); setAuthState("error") }
    else setAuthState("sent")
  }

  return (
    <div className="flex min-h-screen bg-[#0a0e1a]">
      {/* Left side */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center p-16 bg-[#060912]">
        <div className="flex items-center gap-3 mb-12">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Video className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">Hallway</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Verified Campus Community</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Join verified college students for real 1-on-1 video chats.
          Hallway requires a valid college email to keep our community safe and exclusive.
        </p>
        {[
          "College email verification required",
          "Private & secure video calls",
          "Interest-based student matching",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3 mb-4">
            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </div>
        ))}
      </div>

      {/* Right side */}
      <div className="flex flex-1 flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Video className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Hallway</span>
          </div>

          {authState === "sent" ? (
            <div className="rounded-2xl border border-border/40 bg-card p-8 text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Check your email!</h3>
              <p className="text-muted-foreground mb-2">We sent a magic link to</p>
              <p className="font-semibold text-primary mb-6">{email}</p>
              <p className="text-sm text-muted-foreground mb-6">Click the link to sign in. Check spam if you don't see it.</p>
              <button onClick={() => { setAuthState("idle"); setEmail("") }}
                className="text-sm text-muted-foreground hover:text-white transition-colors">
                Use a different email
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border border-border/40 bg-card p-8">
              <h2 className="text-2xl font-bold text-white mb-2">Sign in to Hallway</h2>
              <p className="text-muted-foreground mb-8">Use your college email to get started</p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">College Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (authState === "error") setAuthState("idle") }}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                      placeholder="you@university.ac.in"
                      className="w-full rounded-xl border border-border bg-secondary pl-10 pr-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Accepted: <span className="text-primary">.edu · .ac.in · .edu.in · tnu.in</span>
                  </p>
                </div>

                {authState === "error" && (
                  <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3">
                    <AlertCircle className="h-4 w-4 mt-0.5 shrink-0 text-destructive" />
                    <p className="text-xs text-destructive">{errorMsg}</p>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={authState === "loading" || !email.trim()}
                  className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-primary text-white font-semibold text-sm transition hover:bg-primary/90 disabled:opacity-50"
                >
                  {authState === "loading" ? (
                    <><Loader2 className="h-4 w-4 animate-spin" />Sending magic link...</>
                  ) : (
                    <>Continue with College Email <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  We'll send you a magic link — no password needed 🪄
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
