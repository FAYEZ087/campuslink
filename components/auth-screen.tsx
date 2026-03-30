"use client"

import { useState } from "react"
import { createClient, isCollegeEmail, getDomainError } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

function HallwayIcon({ size = 64 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} fill="none">
      <defs>
        <filter id="glow-auth" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="bgGrad-auth" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="50" fill="url(#bgGrad-auth)" />
      <rect width="100" height="100" rx="50" fill="none" stroke="#222222" strokeWidth="1" />
      <polygon points="0,0 0,100 26,78 26,22" fill="#181818" />
      <polygon points="100,0 100,100 74,78 74,22" fill="#202020" />
      <polygon points="0,0 100,0 74,22 26,22" fill="#161616" />
      <polygon points="0,100 100,100 74,78 26,78" fill="#141414" />
      <rect x="26" y="22" width="48" height="56" fill="#111111" stroke="#2a2a2a" strokeWidth="1.2" />
      <line x1="0" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <line x1="100" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <line x1="0" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <line x1="100" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <ellipse cx="50" cy="50" rx="3.5" ry="4.5" fill="#00c896" opacity="0.5" />
      <ellipse cx="50" cy="50" rx="1.5" ry="2" fill="#00c896" />
      <circle cx="50" cy="43" r="3.5" fill="#00c896" />
      <rect x="47" y="47.5" width="6" height="10" rx="1.5" fill="#00c896" />
      <rect x="63" y="40" width="9" height="22" rx="1.5" fill="none" stroke="#00c896" strokeWidth="1" opacity="0.45" />
    </svg>
  )
}

type AuthState = "idle" | "loading" | "sent" | "error"

export function AuthScreen() {
  const [email, setEmail] = useState("")
  const [authState, setAuthState] = useState<AuthState>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit() {
    if (!email.trim()) return

    // Validate college email domain
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
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        shouldCreateUser: true,
      },
    })

    if (error) {
      setErrorMsg(error.message)
      setAuthState("error")
    } else {
      setAuthState("sent")
    }
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 py-12">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-8">

        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <HallwayIcon size={64} />
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-foreground">hall</span>
            <span style={{ color: "#00c896" }}>way</span>
          </h1>
          <p className="text-center text-sm text-muted-foreground">
            Random video chat exclusively for college students
          </p>
          <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#00c896", opacity: 0.7 }}>
            college video chat
          </span>
        </div>

        {authState === "sent" ? (
          // ── Success state ───────────────────────────────────────────────────
          <div className="flex w-full flex-col items-center gap-4 rounded-2xl border border-border bg-secondary/50 p-6 text-center">
            <CheckCircle className="h-12 w-12" style={{ color: "#00c896" }} />
            <div>
              <p className="font-semibold text-foreground">Check your email!</p>
              <p className="mt-1 text-sm text-muted-foreground">
                We sent a magic link to
              </p>
              <p className="mt-1 text-sm font-medium" style={{ color: "#00c896" }}>
                {email}
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Click the link in your email to sign in. Check your spam folder if you don't see it.
            </p>
            <button
              onClick={() => { setAuthState("idle"); setEmail("") }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Use a different email
            </button>
          </div>
        ) : (
          // ── Email input state ───────────────────────────────────────────────
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                College Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (authState === "error") setAuthState("idle")
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="you@university.ac.in"
                  className="w-full rounded-xl border border-border bg-secondary pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all"
                  style={{ "--tw-ring-color": "#00c896" } as React.CSSProperties}
                />
              </div>

              {/* Allowed domains hint */}
              <p className="text-xs text-muted-foreground">
                Accepted: <span style={{ color: "#00c896" }}>.edu · .ac.in · .edu.in · tnu.in</span>
              </p>
            </div>

            {/* Error message */}
            {authState === "error" && (
              <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3">
                <AlertCircle className="h-4 w-4 mt-0.5 shrink-0 text-destructive" />
                <p className="text-xs text-destructive">{errorMsg}</p>
              </div>
            )}

            <Button
              onClick={handleSubmit}
              disabled={authState === "loading" || !email.trim()}
              className="h-12 w-full gap-2 rounded-xl font-semibold text-black transition-all disabled:opacity-50"
              style={{ background: "#00c896" }}
            >
              {authState === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending magic link...
                </>
              ) : (
                <>
                  Continue with College Email
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              We'll send you a magic link — no password needed 🪄
            </p>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground">
          By continuing you agree to keep it respectful 🤝
        </p>
      </div>
    </div>
  )
}