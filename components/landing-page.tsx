"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight, Shield, Zap, Users, CheckCircle, Moon, Sun, MonitorPlay,
  HeartHandshake, ShieldCheck, BookOpen, MapPin, MoonStar, CalendarDays,
  Trophy, AlertTriangle, Lock, X, Flag, Mail, HelpCircle, FileText,
  Cookie, Scale, MessageCircle, Flame, Instagram, Wifi, Pencil, Code2, UserPlus,
  Music
} from "lucide-react"
import { useLiveStats } from "@/hooks/useLiveStats"

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
      <rect width="100" height="100" rx="50" fill="url(#bgGradLP)" />
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

/* ─── Footer Modal Content ─── */
const MODAL_CONTENT: Record<string, { title: string; icon: React.ElementType; body: React.ReactNode }> = {
  features: {
    title: "Features",
    icon: Zap,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed">
        <p>Hallway helps verified students meet and talk without the usual spam or fake accounts.</p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Verified-Only Access</strong> — You need a valid .edu, .ac.in, or .in email to join.</li>
          <li><strong>Interest-Based Matching</strong> — Pick your interests and get matched with people who like similar things.</li>
          <li><strong>HD Video Chat</strong> — Fast 1-on-1 calls with clear audio and video.</li>
          <li><strong>Study Together Mode</strong> — Find someone to study with and stay focused.</li>
          <li><strong>Campus Filters</strong> — Match within your campus or across India.</li>
          <li><strong>Night Owl Badge</strong> — Get badges if you are active late at night.</li>
          <li><strong>Events & Hackathons</strong> — See student events happening around you.</li>
          <li><strong>Streaks & Badges</strong> — Keep a streak and unlock small rewards.</li>
        </ul>
      </div>
    ),
  },
  safety: {
    title: "Safety Guidelines",
    icon: Shield,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed">
        <p>Your safety comes first. Here is what we do to keep things safe:</p>
        <h4 className="font-bold text-foreground text-lg mt-4">Community Standards</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Be respectful. Harassment, hate speech, and discrimination are not allowed.</li>
          <li>Keep it appropriate. Nudity, sexual content, and graphic violence are not allowed.</li>
          <li>Protect personal information — yours and others'.</li>
          <li>Do not record or screenshot calls without consent.</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg mt-4">Our Safety Tools</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>1-Tap Report</strong> — Report bad behavior during a call.</li>
          <li><strong>Instant Block</strong> — Block anyone and you will not be matched with them again.</li>
          <li><strong>End-to-End Encryption</strong> — All video and text communications are fully encrypted.</li>
          <li><strong>24/7 Moderation</strong> — Our team reviews reports and takes action quickly.</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg mt-4">Consequences</h4>
        <p>Depending on severity, violations can lead to warnings, temporary suspension, or a permanent ban.</p>
      </div>
    ),
  },
  community: {
    title: "Community",
    icon: Users,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed">
        <p>Hallway is made by students, for students.</p>
        <h4 className="font-bold text-foreground text-lg mt-4">Our Mission</h4>
        <p>College is easier when you know more people. Use Hallway to find a study buddy, a new friend, or someone to talk to at night.</p>
        <h4 className="font-bold text-foreground text-lg mt-4">Campus Ambassadors</h4>
        <p>Want Hallway on your campus? Join the ambassador program and help spread the word. You will get early access to new features.</p>
        <h4 className="font-bold text-foreground text-lg mt-4">By the Numbers</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Live stats on the homepage</li>
          <li>More students joining every day</li>
        </ul>
        <p className="mt-4">Got feedback? Email us at <strong className="text-primary">hello@hallwaychat.online</strong></p>
      </div>
    ),
  },
  privacy: {
    title: "Privacy Policy",
    icon: Lock,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed">
        <p className="text-foreground/50 text-sm">Last updated: March 30, 2026</p>
        <h4 className="font-bold text-foreground text-lg">1. Information We Collect</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Account Data:</strong> Your .edu, .ac.in, or .in email address, display name, and selected interests.</li>
          <li><strong>Usage Data:</strong> Session duration, matching preferences, and feature interactions.</li>
          <li><strong>Device Data:</strong> Browser type, operating system, and IP address (for security only).</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg">2. How We Use Your Data</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>To verify your student status and create your account.</li>
          <li>To match you with compatible peers based on your interests.</li>
          <li>To improve matching and app quality.</li>
          <li>To enforce safety guidelines and investigate reports.</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg">3. Data Sharing</h4>
        <p>We do not sell your personal data. We only share limited data with trusted services we use to run the app.</p>
        <h4 className="font-bold text-foreground text-lg">4. Your Rights</h4>
        <p>You can ask to view, update, or delete your data anytime by emailing <strong className="text-primary">privacy@hallwaychat.online</strong>.</p>
        <h4 className="font-bold text-foreground text-lg">5. Data Retention</h4>
        <p>We retain your account data for as long as your account is active. After account deletion, data is permanently erased within 30 days.</p>
        <h4 className="font-bold text-foreground text-lg">6. Security</h4>
        <p>Calls and messages use end-to-end encryption. We also protect account data in storage and in transit.</p>
      </div>
    ),
  },
  terms: {
    title: "Terms of Service",
    icon: Scale,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed">
        <p className="text-foreground/50 text-sm">Last updated: March 30, 2026</p>
        <h4 className="font-bold text-foreground text-lg">1. Eligibility</h4>
        <p>You must be an enrolled college student with a valid .edu, .ac.in, or .in email. You must also be at least 18.</p>
        <h4 className="font-bold text-foreground text-lg">2. Account Responsibilities</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Keep your account secure.</li>
          <li>You agree not to share your account with others.</li>
          <li>You must provide accurate information during registration.</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg">3. Acceptable Use</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>No harassment, bullying, or threatening behavior.</li>
          <li>No sexually explicit content or nudity.</li>
          <li>No spam, advertising, or commercial solicitation.</li>
          <li>No impersonation of other users or public figures.</li>
          <li>No recording of video calls without explicit consent.</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg">4. Termination</h4>
        <p>We reserve the right to suspend or terminate accounts that violate these terms, without prior notice. Users may delete their accounts at any time.</p>
        <h4 className="font-bold text-foreground text-lg">5. Limitation of Liability</h4>
        <p>Hallway is provided "as is" without warranties. We are not liable for any damages arising from platform use, including but not limited to interactions with other users.</p>
        <h4 className="font-bold text-foreground text-lg">6. Changes</h4>
        <p>We may update these terms. If you keep using Hallway, you agree to the updated terms.</p>
      </div>
    ),
  },
  trust: {
    title: "Trust & Safety Options",
    icon: ShieldCheck,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed">
        <p>We want Hallway to be a safe place for student conversations.</p>
        <h4 className="font-bold text-foreground text-lg">Reporting</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>In-Call Reporting:</strong> Tap the report button during a call to report bad behavior.</li>
          <li><strong>Post-Call Reporting:</strong> You can also report after a call ends.</li>
          <li><strong>Anonymous Reporting:</strong> Your identity is never shared with the reported user.</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg">Safety Features</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>End-to-End Encryption:</strong> Video, audio, and text are encrypted.</li>
          <li><strong>1-Tap Block:</strong> Block any user instantly.</li>
          <li><strong>Skip Anytime:</strong> If it is not a good match, tap "Next".</li>
          <li><strong>Verified-Only Access:</strong> Only authenticated student users (.edu, .ac.in, .in) can access the platform.</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg">Moderation</h4>
        <p>Our team reviews reports within 24 hours. Serious violations lead to a permanent ban.</p>
      </div>
    ),
  },
  cookies: {
    title: "Cookie Policy",
    icon: Cookie,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed">
        <p className="text-foreground/50 text-sm">Last updated: March 30, 2026</p>
        <h4 className="font-bold text-foreground text-lg">What Are Cookies?</h4>
        <p>Cookies are small files saved on your device. They help the site remember settings and keep things working.</p>
        <h4 className="font-bold text-foreground text-lg">Cookies We Use</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Essential Cookies:</strong> Required for authentication and basic platform functionality. They cannot be disabled.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand usage and improve the app. These are anonymous.</li>
          <li><strong>Preference Cookies:</strong> Remember your settings like interests, and notification preferences.</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg">Third-Party Cookies</h4>
        <p>We use Vercel Analytics for basic usage insights. We do not use ad trackers.</p>
        <h4 className="font-bold text-foreground text-lg">Managing Cookies</h4>
        <p>You can manage cookies in your browser settings. If essential cookies are off, Hallway may not work correctly.</p>
      </div>
    ),
  },
  help: {
    title: "Help Center",
    icon: HelpCircle,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed">
        <p>Got questions? We've got answers.</p>
        <h4 className="font-bold text-foreground text-lg">Getting Started</h4>
        <div className="space-y-4">
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
            <p className="font-semibold text-foreground mb-1">How do I sign up?</p>
              <p>Click "Join Now" and use your student email. We send a magic link. Open it and you are in.</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
            <p className="font-semibold text-foreground mb-1">What if my college doesn't use .edu, .ac.in, or .in emails?</p>
              <p>We are adding support for more domains. Email <strong className="text-primary">support@hallwaychat.online</strong> and we will help verify you.</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
            <p className="font-semibold text-foreground mb-1">Is Hallway free?</p>
              <p>Yes! Hallway is free forever for all verified students. We may introduce optional premium features in the future, but core functionality will always be free.</p>
          </div>
        </div>
        <h4 className="font-bold text-foreground text-lg">Troubleshooting</h4>
        <div className="space-y-4">
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
            <p className="font-semibold text-foreground mb-1">My camera/mic isn't working</p>
              <p>Make sure you've granted browser permissions. Go to your browser settings → Privacy & Security → Site Settings → Camera/Microphone and allow access for Hallway.</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
            <p className="font-semibold text-foreground mb-1">I'm not getting matched</p>
              <p>Pick more interests to widen your matches. Or just tap "Skip" to see more people.</p>
          </div>
        </div>
      </div>
    ),
  },
  contact: {
    title: "Contact Us",
    icon: Mail,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed">
        <p>We'd love to hear from you! Here's how to reach the Hallway team:</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-6 text-center">
            <Mail className="h-8 w-8 text-success mx-auto mb-3" />
            <p className="font-bold text-foreground mb-1">General Questions</p>
            <p className="text-primary font-medium">hello@hallwaychat.online</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-6 text-center">
            <Shield className="h-8 w-8 text-success mx-auto mb-3" />
            <p className="font-bold text-foreground mb-1">Trust & Safety</p>
            <p className="text-primary font-medium">safety@hallwaychat.online</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-6 text-center">
            <HelpCircle className="h-8 w-8 text-success mx-auto mb-3" />
            <p className="font-bold text-foreground mb-1">Tech Support</p>
            <p className="text-primary font-medium">support@hallwaychat.online</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-6 text-center">
            <Lock className="h-8 w-8 text-success mx-auto mb-3" />
            <p className="font-bold text-foreground mb-1">Privacy Requests</p>
            <p className="text-primary font-medium">privacy@hallwaychat.online</p>
          </div>
        </div>
        <p className="text-foreground/50 text-sm mt-4">We usually reply within 24 hours on business days. For urgent safety issues, use the in-app report button.</p>
      </div>
    ),
  },
  report: {
    title: "Report an Issue",
    icon: Flag,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed">
        <p>If you've encountered inappropriate behavior, technical issues, or any other problems, we want to know.</p>
        <h4 className="font-bold text-foreground text-lg">How to Report</h4>
        <div className="space-y-4">
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 flex gap-3 items-start">
            <Flag className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-foreground mb-1">During a Call</p>
              <p>Tap the <strong>Report</strong> button on screen, choose a reason, and send it.</p>
            </div>
          </div>
          <div className="rounded-xl border border-success/30 bg-success/5 p-4 flex gap-3 items-start">
            <Mail className="h-5 w-5 text-success mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-foreground mb-1">After a Call</p>
              <p>Email <strong className="text-primary">safety@hallwaychat.online</strong> with the time and what happened.</p>
            </div>
          </div>
          <div className="rounded-xl border border-warning/30 bg-warning/5 p-4 flex gap-3 items-start">
            <AlertTriangle className="h-5 w-5 text-warning mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-foreground mb-1">Technical Issues</p>
              <p>For bugs, camera/mic issues, or platform glitches, email <strong className="text-primary">support@hallwaychat.online</strong>  with your browser info and a description of the issue.</p>
            </div>
          </div>
        </div>
        <h4 className="font-bold text-foreground text-lg">What Happens Next</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Our team reviews reports within 24 hours.</li>
          <li>Your identity is always kept anonymous from the reported user.</li>
          <li>Confirmed violations result in warnings, suspensions, or permanent bans.</li>
          <li>We will email you after action is taken.</li>
        </ul>
      </div>
    ),
  },
  premium: {
    title: "Premium (Coming Soon)",
    icon: Zap,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-[#5B62D1]/10 p-8 text-center">
          <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-3">Hallway Premium</h3>
          <p className="text-foreground/60 mb-6">Premium features are in development and will be released soon.</p>
          <div className="grid gap-3 sm:grid-cols-2 text-left max-w-md mx-auto">
            {[
              { name: "Priority Matching", color: "#f59e0b" },
              { name: "Extended Call Time", color: "#3b82f6" },
              { name: "Special Badges", color: "#eab308" },
              { name: "Advanced Filters", color: "#06b6d4" },
              { name: "Ad-Free Experience", color: "#10b981" },
              { name: "Whiteboard", icon: Pencil, color: "#ec4899" },
              { name: "Code Viewer", icon: Code2, color: "#8b5cf6" },
              { name: "Add Friends", icon: UserPlus, color: "#22c55e" },
            ].map(f => (
              <div key={f.name} className="flex items-center gap-2 text-sm">
                {f.icon ? (
                  <f.icon className="h-4 w-4 shrink-0" style={{ color: f.color }} />
                ) : (
                  <CheckCircle className="h-4 w-4 shrink-0" style={{ color: f.color }} />
                )}
                <span style={{ color: f.color }}>{f.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-foreground/40">Core Hallway features will stay free.</p>
        </div>
      </div>
    ),
  },
  twitter: {
    title: "Follow Us",
    icon: MessageCircle,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed text-center">
        <div className="rounded-2xl border border-border/50 bg-secondary/20 p-8">
          <MessageCircle className="h-12 w-12 text-success mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-3">Stay Connected</h3>
          <p>Follow us for the latest updates, feature announcements, and community highlights.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="https://twitter.com/hallway_chat_" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black/10 border border-foreground/20 px-6 py-3 text-foreground font-semibold hover:bg-black/20 transition-colors">
              <span className="text-black dark:text-white font-bold">𝕏</span>
            </a>
            <a href="https://www.instagram.com/hallwaychat_online?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-pink-500/10 border border-pink-500/30 px-6 py-3 text-pink-500 font-semibold hover:bg-pink-500/20 transition-colors">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
          <p className="mt-6 text-sm text-foreground/40">DM us for quick support or just to say hii!</p>
        </div>
      </div>
    ),
  },
}

/* ─── Modal Component ─── */
function FooterModal({ id, onClose }: { id: string; onClose: () => void }) {
  const content = MODAL_CONTENT[id]
  if (!content) return null
  const Icon = content.icon

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = "" }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />
      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[85vh] rounded-3xl border border-border/50 bg-card shadow-2xl shadow-black/30 overflow-hidden animate-[slideUp_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border/40 bg-card/95 backdrop-blur-md px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10">
              <Icon className="h-5 w-5 text-success" />
            </div>
            <h2 className="text-xl font-bold">{content.title}</h2>
          </div>
          <button onClick={onClose} className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
        {/* Body */}
        <div className="overflow-y-auto px-6 py-6 max-h-[calc(85vh-73px)]">
          {content.body}
        </div>
      </div>
    </div>
  )
}

/* ─── Main Landing Page ─── */
interface LandingPageProps {
  onGetStarted: () => void
}

export function LandingPage({ onGetStarted, darkMode, setDarkMode }: LandingPageProps & { darkMode: boolean, setDarkMode: (v: boolean) => void }) {
  const { stats, isConnected } = useLiveStats()
  const [activeModal, setActiveModal] = useState<string | null>(null)

  return (
    <div className="min-h-dvh bg-background text-foreground transition-colors duration-300 font-sans">
      {/* Modal */}
      {activeModal && <FooterModal id={activeModal} onClose={() => setActiveModal(null)} />}

      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <HallwayIcon size={32} className="text-[#00c896]" />
            <span className="text-xl font-bold tracking-tight font-display">
              <span className="text-foreground">hall</span>
              <span className="text-[#00c896]">way</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
            <button onClick={() => document.getElementById('more-features')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:text-foreground transition-colors">Features</button>
            <button onClick={() => document.getElementById('trust')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:text-foreground transition-colors">Trust & Safety</button>
            <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:text-foreground transition-colors">FAQ</button>
            <button onClick={() => document.getElementById('how-to-join')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:text-foreground transition-colors">How it Works</button>

          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-secondary/30">
              {isConnected ? (
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
              ) : (
                <Wifi className="h-3 w-3 text-muted-foreground animate-pulse" />
              )}
              <span className="text-foreground/80">{stats.onlineNow} online now</span>
            </div>
            

            <div className="flex items-center gap-2">
              <button onClick={onGetStarted}
                className="rounded-full cursor-pointer bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90">
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
          Verified Students Only
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl lg:leading-[1.1] font-display">
          Meet students who<br />
          <span className="bg-gradient-to-r from-primary to-[#A0A5EB] bg-clip-text text-transparent drop-shadow-sm">
            share your vibe.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/60 sm:text-xl">
          Make new friends, find study buddies, and meet people from campuses across <span className="text-success font-semibold">INDIA </span> — no bots, no outsiders.
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

        <p className="mt-5 text-sm text-foreground/50 font-medium">
          1‑on‑1 random video chats with verified college students.
        </p>

        <p className="mt-3 text-sm text-foreground/45 font-semibold">
          Join <span className="text-primary">1,200+ verified students</span> from <span className="text-primary">50+ universities</span>.
        </p>
        
        {/* Social proof */}
        <div className="mt-16 flex items-center justify-center gap-3 text-sm text-foreground/50">
          <div className="flex -space-x-3">
            {["#1F2140","#30335C","#7C83FF","#5B62D1"].map((c, i) => (
              <div key={i} className="h-9 w-9 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-white shadow-sm"
                style={{ background: c }}>
                {["IIT","KIIT","IIIT","DU"][i]}
              </div>
            ))}
          </div>
          <span>Join students from <strong className="text-foreground/80 font-semibold">KIIT, IIT, IIIT</strong> & more</span>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border/40 bg-secondary/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4 sm:py-16 text-center">
          {[
            { metric: "1,200+", label: "Verified Users", live: true },
            { metric: "50+", label: "Universities" },
            { metric: "500+", label: "Daily Matches" },
            { metric: "100%", label: "Safe & Secure" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-extrabold text-primary sm:text-4xl flex items-center justify-center gap-2">
                {"live" in stat && stat.live && (
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                )}
                {stat.metric}
              </div>
              <div className="mt-2 text-sm font-medium text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent font-display">Designed for the Student Experience</h2>
            <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
              Unlike random chat sites or generic social apps, Hallway is built for verified students only — so every match is a real peer, not a stranger from the internet.
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: Shield, title: "Verified Identity", desc: "Only real students get in. Official college email required.", color: "text-[#28D080]", bg: "bg-[#28D080]/10", hoverBorder: "hover:border-[#28D080]/40", hoverShadow: "hover:shadow-[#28D080]/5" },
              { icon: MonitorPlay, title: "Instant High-Def Matching", desc: "Jump into clear 1-on-1 video calls in seconds.", color: "text-[#FFB020]", bg: "bg-[#FFB020]/10", hoverBorder: "hover:border-[#FFB020]/40", hoverShadow: "hover:shadow-[#FFB020]/5" },
              { icon: HeartHandshake, title: "Curated Interests", desc: "Get matched with students who share your vibe.", color: "text-[#FF4A4A]", bg: "bg-[#FF4A4A]/10", hoverBorder: "hover:border-[#FF4A4A]/40", hoverShadow: "hover:shadow-[#FF4A4A]/5" },
            ].map(({ icon: Icon, title, desc, color, bg, hoverBorder, hoverShadow }) => (
              <div key={title} className={`group rounded-3xl border border-border/50 bg-card p-8 transition-all ${hoverBorder} hover:shadow-2xl ${hoverShadow} hover:-translate-y-1`}>
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

      {/* Why Students Love Hallway */}
      <section className="px-6 py-24 sm:py-28 border-t border-border/40 bg-secondary/5">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold sm:text-4xl font-display">Why Students Love Hallway</h2>
            <p className="mt-4 text-lg text-foreground/60">Hear it from the people who use Hallway every day.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "I met more people in one week on Hallway than in my entire first semester.",
              "It’s like a real campus hallway, but with students from all over India.",
              "Perfect for late-night study breaks. I found project teammates and friends here.",
            ].map((quote, i) => (
              <div key={i} className="rounded-3xl border border-border/50 bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/20">
                <p className="text-base leading-relaxed text-foreground/70">“{quote}”</p>
                <p className="mt-4 text-xs font-semibold text-foreground/45">
                  {["CSE • 1st Year", "ECE • 3rd Year", "BBA • 2nd Year"][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is Hallway For */}
      <section className="px-6 py-24 sm:py-28 border-t border-border/40">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold sm:text-4xl font-display">Who is Hallway For?</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: UserPlus, title: "Freshers", desc: "Don't know anyone? Make friends beyond your classroom from day one." },
              { icon: MoonStar, title: "Hostel Students", desc: "Couldn't sleep? Find late-night chats and real study buddies." },
              { icon: BookOpen, title: "Exam Warriors", desc: "Stressed about exams? Get accountability partners to stay on track." },
              { icon: Users, title: "Club Members", desc: "Need someone creative? Meet like-minded students across campuses." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-3xl border border-border/50 bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/30">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{title}</h3>
                <p className="text-sm text-foreground/65">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Features*/}
      <section id="more-features" className="px-6 py-24 sm:py-32 border-t border-border/40 bg-secondary/5">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent font-display">More Ways to Connect</h2>
            <p className="mt-4 text-lg text-foreground/60">Features that make Hallway more than just video chat.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Study Together */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-[#28D080]/40 hover:shadow-2xl hover:shadow-[#28D080]/5 hover:-translate-y-1">
              <div className="absolute top-4 right-4 rounded-full bg-success/10 px-2.5 py-0.5 text-[11px] font-bold text-success uppercase tracking-wider">New</div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#28D080]/10">
                <BookOpen className="h-7 w-7 text-[#28D080]" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight">Study Together</h3>
              <p className="text-base leading-relaxed text-foreground/60">Find accountability partners and shared focus sessions with students who get the grind.</p>
            </div>            
            {/* Interest Rooms*/}
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-primary/40 hover:shadow-2xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Music className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight">Interest Rooms</h3>
              <p className="text-base leading-relaxed text-foreground/60">Drop into themed rooms — from DSA grind to Anime fans. Match with your vibe.</p>
            </div>

            {/* Reconnect - Coming Soon */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-primary/40 hover:shadow-2xl">
              <div className="absolute top-4 right-4 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary uppercase tracking-wider">Coming Soon</div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <HeartHandshake className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight">Reconnect</h3>
              <p className="text-base leading-relaxed text-foreground/60">Had a great chat? Add them to friends without sharing personal contact details and connect with them anytime.</p>
            </div>

            {/* Events & Hackathons */}
            <div className="group rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-[#FF4A4A]/40 hover:shadow-2xl hover:shadow-[#FF4A4A]/5 hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF4A4A]/10">
                <CalendarDays className="h-7 w-7 text-[#FF4A4A]" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight">Events & Hackathons</h3>
              <p className="text-base leading-relaxed text-foreground/60">Discover student-run hackathons, meetups, and campus events near you.</p>
            </div>

            {/* Connection Streaks */}
            <div className="group rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-[#FF6B35]/40 hover:shadow-2xl hover:shadow-[#FF6B35]/5 hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF6B35]/10">
                <Flame className="h-7 w-7 text-[#FF6B35]" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight">Connection Streaks</h3>
              <p className="text-base leading-relaxed text-foreground/60">Chat daily to hit 7-day, 30-day, and 100-day streak milestones.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Trust & Safety Section */}
      <section id="trust" className="px-6 py-24 sm:py-32 border-t border-border/40">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-1.5 text-sm font-medium text-success">
              <Lock className="h-4 w-4" />
              Your Safety Matters
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent font-display">Built with Trust and Safety first</h2>
            <p className="mt-4 text-lg text-foreground/60">We take your safety seriously. Here's how we've got your back.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {/* Report in 1 Tap */}
            <div className="group rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-destructive/40 hover:shadow-2xl hover:shadow-destructive/5 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-destructive/10">
                  <Flag className="h-7 w-7 text-destructive" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight">Report in one tap</h3>
                  <p className="text-base leading-relaxed text-foreground/60">See something wrong? Hit the report button on your screen during a call. It takes just a few seconds and it's anonymous.</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-bold text-destructive">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    Always there during calls
                  </div>
                </div>
              </div>
            </div>

            {/* End-to-End Encryption */}
            <div className="group rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-success/40 hover:shadow-2xl hover:shadow-success/5 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-success/10">
                  <Lock className="h-7 w-7 text-success" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight">Private and secure</h3>
                  <p className="text-base leading-relaxed text-foreground/60">Every call and text is encrypted correctly. This means nobody else can see your calls — not even us.</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1.5 text-xs font-bold text-success">
                    <Lock className="h-3.5 w-3.5" />
                    Encrypted communications
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Only */}
            <div className="group rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <ShieldCheck className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight">Verified Students Only</h3>
                  <p className="text-base leading-relaxed text-foreground/60">Every user is verified through their official university email. No burner accounts, no fake profiles, no outsiders. Just real students.</p>
                </div>
              </div>
            </div>

            {/* 24/7 Moderation */}
            <div className="group rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-warning/40 hover:shadow-2xl hover:shadow-warning/5 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-warning/10">
                  <Shield className="h-7 w-7 text-warning" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight">We're always here</h3>
                  <p className="text-base leading-relaxed text-foreground/60">Our team looks at every report within a day. If someone breaks a major rule, they're gone from the site for good.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 py-24 border-t border-border/40">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold sm:text-4xl font-display">Frequently Asked Questions</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {[
            {
              q: "Is Hallway free?",
              a: "Yes. Core 1-on-1 matching is free for verified students. Optional premium perks may be added later.",
            },
            {
              q: "How do you verify students?",
              a: "You sign up using your official college email and verify via a one-time link sent there.",
            },
            {
              q: "Can non-students join?",
              a: "No. Without a valid college email verification, access is not allowed.",
            },
            {
              q: "What if I meet someone creepy?",
              a: "Use the Report button during the call. Every report is reviewed and severe violations are permanently banned.",
            },
            {
              q: "Do you record or store my calls?",
              a: "No. Calls are end-to-end encrypted and are not recorded by default.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-border/50 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary/20">
              <h3 className="text-base font-bold">{q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section id="how-to-join" className="mx-auto max-w-6xl px-6 py-24 border-t border-border/40">
            <h2 className="mb-16 text-center text-3xl font-bold sm:text-4xl font-display">How to get started</h2>
        <div className="grid gap-12 sm:grid-cols-3">
          {[
            { step: "01", title: "Verify your email", desc: "Use your official college email so we can confirm you’re a real student.", color: "hover:border-primary/40" },
            { step: "02", title: "Pick your vibe", desc: "Choose your major, interests, and hobbies so we can match you with people who get you.", color: "hover:border-[#FFB020]/40" },
            { step: "03", title: "Drop into the hallway", desc: "Jump straight into 1‑on‑1 video chats with verified peers. If the vibe’s off, just hit next.", color: "hover:border-[#28D080]/40" },
          ].map(({ step, title, desc, color }) => (
            <div key={step} className={`group relative rounded-3xl border border-transparent p-6 transition-all ${color} hover:bg-card/30 hover:shadow-xl hover:-translate-y-1`}>
              <div className="absolute -left-4 -top-8 text-8xl font-black text-primary/5 transition-colors group-hover:text-primary/10 select-none pointer-events-none">{step}</div>
              <div className="relative z-10">
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="text-base leading-relaxed text-foreground/60">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Built for India’s Campus Life */}
      <section className="px-6 py-24 sm:py-32 bg-secondary/5 border-t border-border/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <MapPin className="h-4 w-4" />
                Local Experience
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl font-display mb-6">Built for India’s Campus Life</h2>
              <p className="text-lg text-foreground/60 mb-8">
                Hallway is made for the chaos and fun of Indian colleges. From late-night hostel grinds to the buzz of fests and hackathons.
              </p>
              <ul className="space-y-4">
                {[
                  "Match with students from IITs, NITs, KIIT, VIT, SRM, DU, and 50+ more.",
                  "Discover events and meetups happening near you."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                    <CheckCircle className="h-5 w-5 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2.5rem] border border-border/50 bg-card/50 p-8 lg:p-12 text-center transition-all hover:shadow-2xl hover:border-primary/30">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">A Network of Colleges</h3>
              <p className="text-sm text-foreground/50 leading-relaxed mb-8">
                We are rapidly expanding support for more Indian university emails. Contact us if your college isn't supported yet.
              </p>
              <button onClick={() => window.open('mailto:hello@hallwaychat.online')} className="text-sm font-bold text-primary hover:underline cursor-pointer">
                Suggest your college &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* CTA banner */}
      <section id="community" className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-[#5B62D1] p-12 text-center text-primary-foreground shadow-2xl relative">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl font-display">Stop scrolling. Start connecting. </h2>
            <p className="mb-10 text-lg sm:text-xl font-medium opacity-90">The hallway never sleeps..</p>
            <button onClick={onGetStarted}
              className="group mx-auto flex h-14 items-center gap-2 rounded-full bg-background px-10 py-4 text-lg font-bold text-foreground shadow-2xl transition-all hover:scale-105 active:scale-95">
              Start Chatting Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer (4-Column Layout) */}
      <footer className="border-t border-border/10 bg-[#0A0E1A] pt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-8 mb-20">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <HallwayIcon size={28} className="text-[#00c896]" />
                <span className="text-xl font-bold tracking-tight font-display">
                  <span className="text-foreground">hall</span><span className="text-[#00c896]">way</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/70 mb-6">
                1-on-1 video chat for verified college students across India.
              </p>
              <div className="flex items-center gap-2 text-xs text-foreground/50">
                <Lock className="h-3.5 w-3.5" />
                <span>End-to-end encrypted</span>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="mb-6 text-sm font-semibold text-foreground">Product</h4>
              <ul className="space-y-4 text-sm text-foreground/70">
                <li><button onClick={() => setActiveModal("features")} className="hover:text-primary transition-colors text-left cursor-pointer">Features</button></li>
                <li><button onClick={() => setActiveModal("safety")} className="hover:text-primary transition-colors text-left cursor-pointer">Safety Guidelines</button></li>
                <li><button onClick={() => setActiveModal("community")} className="hover:text-primary transition-colors text-left cursor-pointer">Community</button></li>
                <li><button onClick={() => setActiveModal("premium")} className="hover:text-primary transition-colors text-left cursor-pointer">Premium (Coming Soon)</button></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="mb-6 text-sm font-semibold text-foreground">Legal</h4>
              <ul className="space-y-4 text-sm text-foreground/70">
                <li><button onClick={() => setActiveModal("privacy")} className="hover:text-primary transition-colors text-left cursor-pointer">Privacy Policy</button></li>
                <li><button onClick={() => setActiveModal("terms")} className="hover:text-primary transition-colors text-left cursor-pointer">Terms of Service</button></li>
                <li><button onClick={() => setActiveModal("trust")} className="hover:text-primary transition-colors text-left cursor-pointer">Trust & Safety Options</button></li>
                <li><button onClick={() => setActiveModal("cookies")} className="hover:text-primary transition-colors text-left cursor-pointer">Cookie Policy</button></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="mb-6 text-sm font-semibold text-foreground">Support</h4>
              <ul className="space-y-4 text-sm text-foreground/70">
                <li><button onClick={() => setActiveModal("help")} className="hover:text-primary transition-colors text-left cursor-pointer">Help Center</button></li>
                <li><button onClick={() => setActiveModal("contact")} className="hover:text-primary transition-colors text-left cursor-pointer">Contact Us</button></li>
                <li><button onClick={() => setActiveModal("report")} className="hover:text-primary transition-colors text-left cursor-pointer">Report an Issue</button></li>
                <li><button onClick={() => setActiveModal("twitter")} className="hover:text-primary transition-colors text-left cursor-pointer">Social</button></li>
              </ul>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="w-full flex-col sm:flex-row flex items-center justify-center gap-6 sm:gap-12 border-t border-border/10 bg-black/20 py-6 text-xs text-foreground/50 text-center">
          <p>© {new Date().getFullYear()} hallway. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <HeartHandshake className="h-3 w-3 text-destructive" /> by <a href="https://github.com/FAYEZ087" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">Fayez</a>
          </p>
        </div>
      </footer>

      {/* Modal animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  )
}
