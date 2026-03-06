"use client"

import { useState, useEffect } from "react"
import { ShieldCheck, Video, Users, Zap, Lock, Globe, ArrowRight, CheckCircle, Moon, Sun } from "lucide-react"
import Link from "next/link"

const ACCENT = "#3b82f6"

function HallwayIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" rx="16" fill={ACCENT} />
      <rect x="16" y="20" width="9" height="40" rx="1.5" fill="white" />
      <rect x="35" y="34" width="9" height="9" rx="1.5" fill="white" opacity="0.7" />
      <rect x="54" y="20" width="9" height="40" rx="1.5" fill="white" />
      <rect x="16" y="40" width="47" height="2" rx="1" fill="white" opacity="0.3" />
    </svg>
  )
}

interface LandingPageProps {
  onGetStarted?: () => void
  darkMode?: boolean
  setDarkMode?: (v: boolean) => void
}

export function LandingPage({ onGetStarted, darkMode = true, setDarkMode }: LandingPageProps) {
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

  const bg = "bg-[#0a0e1a]"
  const cardBg = "bg-[#111827]"
  const border = "border-[#1e3a5f]"
  const muted = "text-slate-400"

  return (
    <div className={`min-h-dvh ${bg} text-white`} style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}>

      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b ${border} bg-[#0a0e1a]/95 backdrop-blur-sm`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <HallwayIcon />
            <span className="text-xl font-bold text-white">Hallway</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className={`text-sm ${muted} transition hover:text-white`}>Features</a>
            <a href="#network" className={`text-sm ${muted} transition hover:text-white`}>Network</a>
            <a href="#safety" className={`text-sm ${muted} transition hover:text-white`}>Safety</a>
          </div>
          <div className="flex items-center gap-3">
            {setDarkMode && (
              <button onClick={() => setDarkMode(!darkMode)} className={`flex h-9 w-9 items-center justify-center rounded-lg ${cardBg} ${muted} transition hover:text-white`}>
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <button onClick={onGetStarted} className={`text-sm ${muted} transition hover:text-white px-3 py-2`}>Log in</button>
            <button
              onClick={onGetStarted}
              className="rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ background: ACCENT }}
            >
              Join Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-10 blur-3xl"
            style={{ background: `radial-gradient(circle, ${ACCENT}, transparent)` }} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
                style={{ borderColor: ACCENT + "40", background: ACCENT + "14", color: ACCENT }}>
                <ShieldCheck className="h-3.5 w-3.5" />
                Verified Students Only
              </div>

              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                The Exclusive Space for{" "}
                <span style={{ color: ACCENT }}>Verified Scholars</span>
              </h1>

              <p className={`mt-6 text-lg leading-relaxed ${muted}`}>
                Connect with peers globally using your university email. Join a secure, verified network built for the next generation of academic leaders.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex max-w-sm flex-1 overflow-hidden rounded-xl border" style={{ borderColor: ACCENT + "40", background: "#111827" }}>
                  <input
                    type="email"
                    placeholder="Enter your .edu email"
                    className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  />
                  <button
                    onClick={onGetStarted}
                    className="m-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                    style={{ background: ACCENT }}
                  >
                    Get Started
                  </button>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[["A", "#3b82f6"], ["K", "#ef4444"], ["P", "#a855f7"], ["R", "#f59e0b"]].map(([l, c]) => (
                    <div key={l} className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0a0e1a] text-[10px] font-bold text-white" style={{ background: c }}>{l}</div>
                  ))}
                </div>
                <span className={`text-sm ${muted}`}>Joined by <span className="font-semibold text-white">500,000+</span> students this month</span>
              </div>
            </div>

            {/* Right card */}
            <div className={`relative overflow-hidden rounded-2xl border ${border} ${cardBg} p-6`}>
              <div className="mb-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border p-4" style={{ borderColor: ACCENT + "30", background: ACCENT + "0d" }}>
                  <p className={`text-xs font-medium uppercase tracking-wider ${muted}`}>Active Communities</p>
                  <p className="mt-1 text-2xl font-bold text-white">12,400<span style={{ color: ACCENT }}>+</span></p>
                </div>
                <div className="rounded-xl border p-4" style={{ borderColor: ACCENT + "30", background: ACCENT + "0d" }}>
                  <p className={`text-xs font-medium uppercase tracking-wider ${muted}`}>Verified Emails</p>
                  <p className="mt-1 text-2xl font-bold text-white">100<span style={{ color: ACCENT }}>%</span></p>
                </div>
              </div>
              <div className={`rounded-xl border ${border} ${bg} overflow-hidden`}>
                <div className="flex items-center gap-3 border-b border-[#1e3a5f] px-4 py-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: ACCENT }}>
                    <Video className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Live Video Match</p>
                    <p className={`text-xs ${muted}`}>Connecting you now...</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs"
                    style={{ borderColor: ACCENT + "40", color: ACCENT }}>
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: ACCENT }} />
                    {onlineCount} online
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex gap-2">
                    <div className="flex-1 rounded-lg bg-[#1e293b] p-3 text-xs text-slate-300">
                      👋 Hey! CS student at MIT here, looking for study partners
                    </div>
                  </div>
                  <div className="mt-2 flex justify-end gap-2">
                    <div className="rounded-lg p-3 text-xs text-white" style={{ background: ACCENT }}>
                      Nice! I'm doing my thesis on ML too 🤝
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={`border-y ${border} py-12`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[["500K+", "Verified Users"], ["1,200+", "Universities"], ["50K+", "Daily Matches"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <p className={`text-xs font-medium uppercase tracking-wider ${muted}`}>{label}</p>
                <p className="mt-2 text-4xl font-bold text-white">{val.replace(/([+K%])/g, '')}<span style={{ color: ACCENT }}>{val.match(/[+K%]/)?.[0] || ''}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Designed for the Student Experience</h2>
            <p className={`mt-4 text-lg ${muted}`}>Hallway combines academic integrity with social discovery to create a safe space for meaningful peer interaction across institutions.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Users, title: "Interest-based matching", desc: "Find study buddies or lifelong friends who share your niche academic interests, campus hobbies, or research goals through our smart matching engine." },
              { icon: Video, title: "Secure Video Chat", desc: "Experience high-quality, peer-to-peer encrypted video calls. Built-in moderation features ensure a safe and respectful environment for all members." },
              { icon: Globe, title: "Global Student Network", desc: "Expand your horizons beyond your campus. Connect with students from prestigious institutions worldwide for global collaboration and insight." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className={`rounded-2xl border ${border} ${cardBg} p-6`}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: ACCENT + "20" }}>
                  <Icon className="h-5 w-5" style={{ color: ACCENT }} />
                </div>
                <h3 className="mb-2 font-semibold text-white">{title}</h3>
                <p className={`text-sm leading-relaxed ${muted}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className={`py-20 border-t ${border}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, label: "ID Verification", desc: "Every account is tied to a verified university domain." },
                { icon: Lock, label: "Private Data", desc: "Your information is never sold to third-party services." },
                { icon: Users, label: "Safe Chats", desc: "AI-powered moderation keeps conversations respectful." },
                { icon: CheckCircle, label: "Zero Bots", desc: "Verification systems eliminate non-human accounts." },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className={`rounded-xl border ${border} ${cardBg} p-4`}>
                  <Icon className="mb-2 h-5 w-5" style={{ color: ACCENT }} />
                  <p className="font-semibold text-white text-sm">{label}</p>
                  <p className={`mt-1 text-xs ${muted} leading-relaxed`}>{desc}</p>
                </div>
              ))}
            </div>
            <div>
              <p className={`mb-3 text-xs font-medium uppercase tracking-wider ${muted}`}>Safety First</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Safety is in our{" "}
                <span className="italic" style={{ color: ACCENT }}>academic</span> DNA.
              </h2>
              <p className={`mt-4 text-lg leading-relaxed ${muted}`}>
                We believe that the best digital spaces are those where you know exactly who you're talking to. By requiring university verification, we've eliminated the noise and risks found on traditional social platforms.
              </p>
              <button onClick={onGetStarted} className={`mt-6 flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10`} style={{ borderColor: ACCENT + "60" }}>
                Learn about our Trust & Safety <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl p-10 text-center" style={{ background: ACCENT }}>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to meet your<br />academic community?</h2>
            <p className="mt-4 text-blue-100">Join students from Harvard, Oxford, Stanford, and 1,200+ other universities who are already connecting on Hallway.</p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input type="email" placeholder="yourname@university.edu"
                className="w-full max-w-xs rounded-xl bg-white/20 px-4 py-3 text-sm text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 border border-white/30" />
              <button onClick={onGetStarted}
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
                Join Now
              </button>
            </div>
            <p className="mt-4 text-xs text-blue-200">No credit card required. Educational email required for verification.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${border} py-12`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <HallwayIcon />
                <span className="font-bold text-white">Hallway</span>
              </div>
              <p className={`text-xs leading-relaxed ${muted}`}>Connecting the world's academic talent in a secure, verified environment.</p>
            </div>
            {[
              { title: "Product", links: ["Features", "Network", "Safety", "Mobile App"] },
              { title: "Company", links: ["About", "Careers", "Privacy", "Terms"] },
              { title: "Support", links: ["Help Center", "Community FAQ", "Verification Help", "Contact"] },
            ].map(({ title, links }) => (
              <div key={title}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white">{title}</p>
                <ul className="space-y-2">
                  {links.map(l => <li key={l}><a href="#" className={`text-xs ${muted} transition hover:text-white`}>{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className={`mt-10 border-t ${border} pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between`}>
            <p className={`text-xs ${muted}`}>© 2025 Hallway Inc. All rights reserved. For verified academic users only.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
