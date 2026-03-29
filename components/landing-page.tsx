"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Shield, Zap, Users, CheckCircle, Moon, Sun, MonitorPlay, HeartHandshake, ShieldCheck } from "lucide-react"

function HallwayIcon({ size = 40, className = "" }: { size?: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} fill="none" className={className}>
      <defs>
        <radialGradient id="bgGradLP" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </radialGradient>
        <filter id="glowLP" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#bgGradLP)" />
      <polygon points="0,0 0,100 26,78 26,22" fill="currentColor" opacity="0.1" />
      <polygon points="100,0 100,100 74,78 74,22" fill="currentColor" opacity="0.15" />
      <polygon points="0,0 100,0 74,22 26,22" fill="currentColor" opacity="0.08" />
      <polygon points="0,100 100,100 74,78 26,78" fill="currentColor" opacity="0.05" />
      <rect x="26" y="22" width="48" height="56" fill="currentColor" opacity="0.03" stroke="currentColor" strokeWidth="1.2" />
      <line x1="0" y1="0" x2="50" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="100" y1="0" x2="50" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="0" y1="100" x2="50" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="100" y1="100" x2="50" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <ellipse cx="50" cy="50" rx="3.5" ry="4.5" fill="currentColor" opacity="0.6" filter="url(#glowLP)" />
      <ellipse cx="50" cy="50" rx="1.5" ry="2" fill="currentColor" />
      <circle cx="50" cy="43" r="3.5" fill="currentColor" />
      <rect x="47" y="47.5" width="6" height="10" rx="1.5" fill="currentColor" />
      <rect x="63" y="40" width="9" height="22" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

interface LandingPageProps {
  onGetStarted: () => void
}

export function LandingPage({ onGetStarted, darkMode, setDarkMode }: LandingPageProps & { darkMode: boolean, setDarkMode: (v: boolean) => void }) {
  const [onlineCount, setOnlineCount] = useState(0)

  useEffect(() => {
    let count = 0
    const target = 128
    const timer = setInterval(() => {
      count += Math.ceil((target - count) / 8)
      if (count >= target) { count = target; clearInterval(timer) }
      setOnlineCount(count)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-dvh bg-background text-foreground transition-colors duration-300 font-sans">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <HallwayIcon size={32} className="text-primary" />
            <span className="text-xl font-bold tracking-tight">
              hall<span className="text-primary">way</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#safety" className="hover:text-foreground transition-colors">Safety</a>
            <a href="#community" className="hover:text-foreground transition-colors">Community</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-secondary/30">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
              <span className="text-foreground/80">{onlineCount} online now</span>
            </div>
            
            <button onClick={() => setDarkMode(!darkMode)}
              className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary transition-colors text-foreground/80">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <div className="flex items-center gap-2">
              <button onClick={onGetStarted} className="hidden sm:block px-4 py-2 text-sm font-semibold hover:text-primary transition-colors">
                Log in
              </button>
              <button onClick={onGetStarted}
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 text-center lg:py-40">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
          <ShieldCheck className="h-4 w-4" />
          🛡️ Verified Students Only
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl lg:leading-[1.1]">
          Meet students who<br />
          <span className="bg-gradient-to-r from-primary to-[#A0A5EB] bg-clip-text text-transparent drop-shadow-sm">
            share your vibe.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/60 sm:text-xl">
          Random 1-on-1 video chat exclusively for verified college students.
          No bots, no randos — just genuine peers from campuses worldwide.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <button onClick={onGetStarted}
            className="group flex h-14 items-center gap-2 rounded-full bg-primary px-8 text-lg font-bold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:scale-105 hover:bg-primary/90">
            Start Chatting Free
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <div className="flex items-center gap-2 text-sm font-medium text-foreground/50">
            <CheckCircle className="h-5 w-5 text-success" />
            No download required
          </div>
        </div>
        
        {/* Social proof embedded inside Hero */}
        <div className="mt-16 flex items-center justify-center gap-3 text-sm text-foreground/50">
          <div className="flex -space-x-3">
            {["#1F2140","#30335C","#7C83FF","#5B62D1"].map((c, i) => (
              <div key={i} className="h-9 w-9 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-white shadow-sm"
                style={{ background: c }}>
                {["A","K","P","R"][i]}
              </div>
            ))}
          </div>
          <span>Join students from <strong className="text-foreground/80 font-semibold">KIIT, IIT, VIT</strong> & more</span>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border/40 bg-secondary/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4 sm:py-16 text-center">
          {[
            { metric: "250K+", label: "Verified Users" },
            { metric: "800+", label: "Universities" },
            { metric: "35K+", label: "Daily Matches" },
            { metric: "100%", label: "Safe & Secure" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-extrabold text-primary sm:text-4xl">{stat.metric}</div>
              <div className="mt-2 text-sm font-medium text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">Designed for the Student Experience</h2>
            <p className="mt-4 text-lg text-foreground/60">Everything you need to make genuine connections gracefully.</p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: Shield, title: "Verified Identity", desc: "Rigorous .edu email validation ensures every user is a real, verified student. Zero exceptions.", color: "text-primary", bg: "bg-primary/10" },
              { icon: MonitorPlay, title: "Instant High-Def Matching", desc: "Jump into crystal clear video calls in seconds based on shared interests. No endless waiting.", color: "text-[#A0A5EB]", bg: "bg-[#A0A5EB]/10" },
              { icon: HeartHandshake, title: "Curated Interests", desc: "Pick what you're into — CS, music, gaming, fitness — and let the algorithm do the rest.", color: "text-foreground", bg: "bg-secondary" },
            ].map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="group rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${bg}`}>
                  <Icon className={`h-7 w-7 ${color}`} />
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight">{title}</h3>
                <p className="text-base leading-relaxed text-foreground/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="safety" className="mx-auto max-w-6xl px-6 py-24 border-t border-border/40">
        <h2 className="mb-16 text-center text-3xl font-bold sm:text-4xl">How to join the community</h2>
        <div className="grid gap-12 sm:grid-cols-3">
          {[
            { step: "01", title: "Verify your email", desc: "Enter your official college email. We'll send a magic secure link straight to your inbox." },
            { step: "02", title: "Pick your vibe", desc: "Select tags from your major to your hobbies. The more you pick, the deeper the match." },
            { step: "03", title: "Drop into the hallway", desc: "Instantly connected with a verified peer. If the energy isn't right, just hit next." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="relative group">
              <div className="absolute -left-4 -top-8 text-8xl font-black text-primary/5 transition-colors group-hover:text-primary/10 select-none pointer-events-none">{step}</div>
              <div className="relative z-10">
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="text-base leading-relaxed text-foreground/60">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-[#5B62D1] p-12 text-center text-primary-foreground shadow-2xl relative">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">Ready to meet your people?</h2>
            <p className="mb-10 text-lg sm:text-xl font-medium opacity-90">Free forever. Only verified students. Zero downloads required.</p>
            <button onClick={onGetStarted}
              className="rounded-full bg-background px-10 py-4 text-lg font-bold text-foreground shadow-2xl transition-transform hover:scale-105">
              Start Chatting Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer (4-Column Layout) */}
      <footer id="community" className="border-t border-border bg-card/60 pt-20 pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <HallwayIcon size={28} className="text-primary" />
                <span className="text-xl font-bold tracking-tight">hallway</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                The exclusive 1-on-1 video chat platform for verified college students worldwide.
              </p>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="mb-6 text-sm font-semibold text-foreground">Product</h4>
              <ul className="space-y-4 text-sm text-foreground/60">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#safety" className="hover:text-primary transition-colors">Safety Guidelines</a></li>
                <li><a href="#community" className="hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Premium (Coming Soon)</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="mb-6 text-sm font-semibold text-foreground">Legal</h4>
              <ul className="space-y-4 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Trust & Safety Options</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="mb-6 text-sm font-semibold text-foreground">Support</h4>
              <ul className="space-y-4 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Report an Issue</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter Support</a></li>
              </ul>
            </div>
            
          </div>
          
          {/* Bottom Row */}
          <div className="mt-20 flex flex-col items-center justify-between border-t border-border/60 pt-8 sm:flex-row text-xs text-foreground/40">
            <p>© {new Date().getFullYear()} Hallway. All rights reserved.</p>
            <p className="mt-4 sm:mt-0 flex items-center gap-1">
              Made with <HeartHandshake className="h-3 w-3 text-destructive" /> by Fayez
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}