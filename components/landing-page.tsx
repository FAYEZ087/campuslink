"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Shield, Zap, Users, CheckCircle, Moon, Sun } from "lucide-react"

function HallwayIcon({ size = 40 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} fill="none">
      <defs>
        <radialGradient id="bgGradLP" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </radialGradient>
        <filter id="glowLP" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#bgGradLP)" />
      <polygon points="0,0 0,100 26,78 26,22" fill="#181818" />
      <polygon points="100,0 100,100 74,78 74,22" fill="#202020" />
      <polygon points="0,0 100,0 74,22 26,22" fill="#161616" />
      <polygon points="0,100 100,100 74,78 26,78" fill="#141414" />
      <rect x="26" y="22" width="48" height="56" fill="#111111" stroke="#2a2a2a" strokeWidth="1.2" />
      <line x1="0" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <line x1="100" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <line x1="0" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <line x1="100" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <ellipse cx="50" cy="50" rx="3.5" ry="4.5" fill="#00c896" opacity="0.6" filter="url(#glowLP)" />
      <ellipse cx="50" cy="50" rx="1.5" ry="2" fill="#00c896" />
      <circle cx="50" cy="43" r="3.5" fill="#00c896" />
      <rect x="47" y="47.5" width="6" height="10" rx="1.5" fill="#00c896" />
      <rect x="63" y="40" width="9" height="22" rx="1.5" fill="none" stroke="#00c896" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

interface LandingPageProps {
  onGetStarted: () => void
}

export function LandingPage({ onGetStarted, darkMode, setDarkMode }: LandingPageProps & { darkMode: boolean, setDarkMode: (v: boolean) => void }) {
  const [onlineCount, setOnlineCount] = useState(0)

  useEffect(() => {
    // Animate counter
    let count = 0
    const target = 128
    const timer = setInterval(() => {
      count += Math.ceil((target - count) / 8)
      if (count >= target) { count = target; clearInterval(timer) }
      setOnlineCount(count)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const dark = darkMode

  return (
    <div className={`min-h-dvh ${dark ? "bg-[#0a0a0a] text-white" : "bg-[#f4f7f4] text-[#0d1a0d]"}`}
      style={{ fontFamily: "'DM Sans', sans-serif", transition: "background 0.3s, color 0.3s" }}>

      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #00c896, transparent)" }} />
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 border-b px-6 py-4 backdrop-blur-md ${dark ? "border-white/5 bg-[#0a0a0a]/80" : "border-black/5 bg-[#f4f7f4]/80"}`}>
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-3">
            <HallwayIcon size={32} />
            <span className="text-lg font-bold">
              hall<span style={{ color: "#00c896" }}>way</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${dark ? "bg-white/5" : "bg-black/5"}`}>
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00c896]" />
              <span className={dark ? "text-white/60" : "text-black/50"}>{onlineCount} online now</span>
            </div>
            <button onClick={() => setDarkMode(!dark)}
              className={`flex h-8 w-8 items-center justify-center rounded-full transition ${dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-black hover:bg-black/20"}`}>
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button onClick={onGetStarted}
              className="rounded-full px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90"
              style={{ background: "#00c896" }}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center">
        <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium ${dark ? "border-[#00c896]/30 bg-[#00c896]/10 text-[#00c896]" : "border-[#00c896]/40 bg-[#00c896]/10 text-[#008c6a]"}`}>
          <Shield className="h-3 w-3" />
          Exclusive for verified college students
        </div>

        <h1 className="mt-6 text-6xl font-bold leading-tight tracking-tight">
          Meet students who<br />
          <span style={{ color: "#00c896" }}>share your vibe.</span>
        </h1>

        <p className={`mx-auto mt-6 max-w-xl text-lg leading-relaxed ${dark ? "text-white/50" : "text-black/50"}`}>
          Random 1-on-1 video chat exclusively for college students.
          No bots, no randos — just verified peers from campuses worldwide.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button onClick={onGetStarted}
            className="flex h-14 items-center gap-2 rounded-2xl px-10 text-base font-semibold text-black shadow-xl transition hover:opacity-90"
            style={{ background: "#00c896", boxShadow: "0 8px 32px rgba(0,200,150,0.35)" }}>
            Start Chatting Free
            <ArrowRight className="h-5 w-5" />
          </button>
          <div className={`flex items-center gap-2 text-sm ${dark ? "text-white/40" : "text-black/40"}`}>
            <CheckCircle className="h-4 w-4 text-[#00c896]" />
            No download needed
          </div>
        </div>

        {/* Social proof */}
        <div className={`mt-8 flex items-center justify-center gap-2 text-sm ${dark ? "text-white/30" : "text-black/30"}`}>
          <div className="flex -space-x-2">
            {["#3b82f6","#ef4444","#a855f7","#f59e0b"].map((c, i) => (
              <div key={i} className="h-7 w-7 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
                style={{ borderColor: dark ? "#0a0a0a" : "#f4f7f4", background: c }}>
                {["A","K","P","R"][i]}
              </div>
            ))}
          </div>
          <span>Join students from KIIT, IIT, VIT and more</span>
        </div>
      </section>

      {/* Features */}
      <section className={`border-y px-6 py-20 ${dark ? "border-white/5 bg-white/[0.02]" : "border-black/5 bg-black/[0.02]"}`}>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Hallway?</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Shield, title: "Verified Students Only", desc: "Sign in with your college email. Every user is a real, verified student — no exceptions.", color: "#00c896" },
              { icon: Zap, title: "Instant Matching", desc: "Get matched in seconds based on shared interests. No endless waiting, no empty rooms.", color: "#3b82f6" },
              { icon: Users, title: "Interest-Based", desc: "Pick what you're into — CS, music, gaming, fitness — and meet students who get it.", color: "#a855f7" },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className={`rounded-2xl border p-6 transition ${dark ? "border-white/8 bg-white/3 hover:border-white/15" : "border-black/8 bg-white/60 hover:border-black/15"}`}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: color + "20" }}>
                  <Icon className="h-5 w-5" style={{ color }} />
                </div>
                <h3 className="mb-2 font-semibold">{title}</h3>
                <p className={`text-sm leading-relaxed ${dark ? "text-white/40" : "text-black/50"}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">How it works</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            { step: "01", title: "Verify your email", desc: "Enter your college email. We send a magic link — click it and you're in." },
            { step: "02", title: "Pick your vibe", desc: "Select interests from CS to coffee chats. The more you pick, the better your matches." },
            { step: "03", title: "Start chatting", desc: "Instantly matched with a verified student. Don't vibe? Hit next." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="relative">
              <div className="mb-3 text-4xl font-bold" style={{ color: "#00c896", opacity: 0.3 }}>{step}</div>
              <h3 className="mb-2 font-semibold">{title}</h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-white/40" : "text-black/50"}`}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl p-12 text-center text-black"
          style={{ background: "linear-gradient(135deg, #00c896, #00a87a)" }}>
          <h2 className="mb-3 text-4xl font-bold">Ready to meet your people?</h2>
          <p className="mb-8 text-black/60">Free forever. Verified students only. No downloads.</p>
          <button onClick={onGetStarted}
            className="rounded-2xl bg-black/90 px-10 py-4 text-base font-semibold text-white transition hover:bg-black">
            Start Chatting Now →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t px-6 py-8 text-center text-sm ${dark ? "border-white/5 text-white/20" : "border-black/5 text-black/30"}`}>
        <div className="flex items-center justify-center gap-2">
          <HallwayIcon size={20} />
          <span>hallway · college video chat · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  )
}