"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Video, Mail, Lock, Eye, EyeOff, User, GraduationCap, ShieldCheck, Users, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  const searchParams = useSearchParams()
  const defaultTab = searchParams.get("tab") === "register" ? "register" : "login"
  const [tab, setTab] = useState<"login" | "register">(defaultTab as "login" | "register")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-[52%] bg-[#060a14] px-14 py-12 relative overflow-hidden">
        {/* Background subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(to right, #3b82f6 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <Video className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">Hallway</span>
        </Link>

        {/* Center content */}
        <div className="relative space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Verified Students Only</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white text-balance">
              Meet students who<br />
              <span className="text-primary">share your vibe.</span>
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground max-w-sm">
              Instant 1-on-1 video chats with verified college students. Connect with peers who share your interests — no creeps, no bots, just real students.
            </p>
          </div>

          {/* Feature pills */}
          <div className="space-y-3">
            {[
              { icon: ShieldCheck, text: "Verified with .edu email — students only" },
              { icon: Users, text: "Matched by shared interests & major" },
              { icon: MessageSquare, text: "Instant video — no waiting, no swiping" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/15 border border-primary/20">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-slate-300">{text}</span>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 border-t border-border/40 pt-8">
            <div>
              <p className="text-2xl font-bold text-white">250K+</p>
              <p className="text-xs text-muted-foreground">Verified Students</p>
            </div>
            <div className="h-8 w-px bg-border/60" />
            <div>
              <p className="text-2xl font-bold text-white">800+</p>
              <p className="text-xs text-muted-foreground">Universities</p>
            </div>
            <div className="h-8 w-px bg-border/60" />
            <div>
              <p className="text-2xl font-bold text-white">35K+</p>
              <p className="text-xs text-muted-foreground">Daily Matches</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <p className="relative text-xs text-muted-foreground/60">
          &copy; 2024 Hallway Inc. For verified academic users only.
        </p>
      </div>

      {/* Right panel — form */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 lg:px-16">
        {/* Mobile logo */}
        <Link href="/" className="mb-10 flex items-center gap-2 lg:hidden">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Video className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Hallway</span>
        </Link>

        <div className="w-full max-w-md">
          {/* Tab switcher */}
          <div className="mb-8 flex rounded-xl border border-border/60 bg-[#111827] p-1">
            <button
              onClick={() => setTab("login")}
              className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${
                tab === "login"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => setTab("register")}
              className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${
                tab === "register"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              Create Account
            </button>
          </div>

          {tab === "login" ? (
            <div className="space-y-5">
              <div className="space-y-1.5">
                <h2 className="text-2xl font-bold text-white">Welcome back</h2>
                <p className="text-sm text-muted-foreground">Sign in to your Hallway account.</p>
              </div>

              {/* SSO buttons */}
              <div className="space-y-3">
                <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-border/70 bg-[#111827] px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-primary/40 hover:bg-[#1a2540]">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Continue with University Google
                </button>
                <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-border/70 bg-[#111827] px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-primary/40 hover:bg-[#1a2540]">
                  <svg className="h-4 w-4" viewBox="0 0 23 23" fill="none">
                    <path d="M11 0H0v11h11V0z" fill="#F25022"/>
                    <path d="M23 0H12v11h11V0z" fill="#7FBA00"/>
                    <path d="M11 12H0v11h11V12z" fill="#00A4EF"/>
                    <path d="M23 12H12v11h11V12z" fill="#FFB900"/>
                  </svg>
                  Continue with Microsoft School Account
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-border/50" />
                <span className="text-xs text-muted-foreground">OR USE EMAIL</span>
                <div className="h-px flex-1 bg-border/50" />
              </div>

              <form className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm text-slate-300">University Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="student.name@university.edu"
                      className="bg-[#111827] border-border/70 pl-10 text-white placeholder:text-muted-foreground/50 focus-visible:ring-primary focus-visible:border-primary/60 h-11"
                    />
                  </div>
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ShieldCheck className="h-3 w-3 text-primary/70" />
                    Must end in .edu or verified university domain
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-sm text-slate-300">Password</Label>
                    <button type="button" className="text-xs text-primary hover:text-primary/80 transition-colors">
                      Forgot?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-[#111827] border-border/70 pl-10 pr-10 text-white placeholder:text-muted-foreground/50 focus-visible:ring-primary focus-visible:border-primary/60 h-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-border/70 bg-[#111827] accent-primary"
                  />
                  <label htmlFor="remember" className="text-sm text-muted-foreground">
                    Keep me signed in on this device
                  </label>
                </div>

                <Button className="w-full h-11 bg-primary text-white font-semibold hover:bg-primary/90 text-sm">
                  Sign In
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground">
                {"Don't have an account? "}
                <button
                  onClick={() => setTab("register")}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Create an account
                </button>
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="space-y-1.5">
                <h2 className="text-2xl font-bold text-white">Join Hallway</h2>
                <p className="text-sm text-muted-foreground">Create your verified student account.</p>
              </div>

              {/* SSO buttons */}
              <div className="space-y-3">
                <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-border/70 bg-[#111827] px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-primary/40 hover:bg-[#1a2540]">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Sign up with University Google
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-border/50" />
                <span className="text-xs text-muted-foreground">OR USE EMAIL</span>
                <div className="h-px flex-1 bg-border/50" />
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="first-name" className="text-sm text-slate-300">First Name</Label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="first-name"
                        placeholder="Alex"
                        className="bg-[#111827] border-border/70 pl-10 text-white placeholder:text-muted-foreground/50 focus-visible:ring-primary focus-visible:border-primary/60 h-11"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="last-name" className="text-sm text-slate-300">Last Name</Label>
                    <Input
                      id="last-name"
                      placeholder="Chen"
                      className="bg-[#111827] border-border/70 text-white placeholder:text-muted-foreground/50 focus-visible:ring-primary focus-visible:border-primary/60 h-11"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="reg-email" className="text-sm text-slate-300">University Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="reg-email"
                      type="email"
                      placeholder="yourname@university.edu"
                      className="bg-[#111827] border-border/70 pl-10 text-white placeholder:text-muted-foreground/50 focus-visible:ring-primary focus-visible:border-primary/60 h-11"
                    />
                  </div>
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ShieldCheck className="h-3 w-3 text-primary/70" />
                    Must end in .edu or verified university domain
                  </p>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="major" className="text-sm text-slate-300">Major / Field of Study</Label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="major"
                      placeholder="e.g. Computer Science"
                      className="bg-[#111827] border-border/70 pl-10 text-white placeholder:text-muted-foreground/50 focus-visible:ring-primary focus-visible:border-primary/60 h-11"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="reg-password" className="text-sm text-slate-300">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="reg-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-[#111827] border-border/70 pl-10 pr-10 text-white placeholder:text-muted-foreground/50 focus-visible:ring-primary focus-visible:border-primary/60 h-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="confirm-password" className="text-sm text-slate-300">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-[#111827] border-border/70 pl-10 pr-10 text-white placeholder:text-muted-foreground/50 focus-visible:ring-primary focus-visible:border-primary/60 h-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  By creating an account you agree to our{" "}
                  <Link href="#" className="text-primary hover:text-primary/80">Terms of Service</Link>
                  {" "}and{" "}
                  <Link href="#" className="text-primary hover:text-primary/80">Privacy Policy</Link>.
                  A verification email will be sent to your .edu address.
                </p>

                <Button className="w-full h-11 bg-primary text-white font-semibold hover:bg-primary/90 text-sm">
                  Create Account
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <button
                  onClick={() => setTab("login")}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Sign in
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
