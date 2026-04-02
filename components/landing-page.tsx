"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight, Shield, Zap, Users, CheckCircle, Moon, Sun, MonitorPlay,
  HeartHandshake, ShieldCheck, BookOpen, MapPin, MoonStar, CalendarDays,
  Trophy, AlertTriangle, Lock, X, Flag, Mail, HelpCircle, FileText,
  Cookie, Scale, MessageCircle, Flame, Instagram, Wifi
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
        <p>Hallway is packed with features designed to help verified college students connect in meaningful ways.</p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Verified-Only Access</strong> — Every user is authenticated through their .edu, .ac.in, or .in email. No exceptions.</li>
          <li><strong>Interest-Based Matching</strong> — Select topics you care about and get matched with peers who share them.</li>
          <li><strong>HD Video Chat</strong> — Crystal clear, low-latency video calls powered by WebRTC.</li>
          <li><strong>Study Together Mode</strong> — Find accountability partners and study buddies in real-time.</li>
          <li><strong>Campus Filters</strong> — Choose to match with students from your own university or across India.</li>
          <li><strong>Night Owl Badge</strong> — Earn badges for late-night activity and more.</li>
          <li><strong>Events & Hackathons</strong> — Discover student-run events and hackathons near you.</li>
          <li><strong>Streaks & Badges</strong> — Gamify your experience with connection streaks and achievement badges.</li>
        </ul>
      </div>
    ),
  },
  safety: {
    title: "Safety Guidelines",
    icon: Shield,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed">
        <p>Your safety is our #1 priority. Here's how we keep Hallway a secure space:</p>
        <h4 className="font-bold text-foreground text-lg mt-4">Community Standards</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Be respectful and kind. Harassment, hate speech, and discrimination are never tolerated.</li>
          <li>Keep conversations appropriate. Nudity, sexual content, and graphic violence are strictly prohibited.</li>
          <li>Protect personal information — yours and others'.</li>
          <li>No recording or screenshotting of video calls without consent.</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg mt-4">Our Safety Tools</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>1-Tap Report</strong> — Report inappropriate behavior instantly during any call.</li>
          <li><strong>Instant Block</strong> — Block any user and they'll never be matched with you again.</li>
          <li><strong>End-to-End Encryption</strong> — All video and text communications are fully encrypted.</li>
          <li><strong>24/7 Moderation</strong> — Our team reviews reports and acts within hours.</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg mt-4">Consequences</h4>
        <p>Violations can result in warnings, temporary suspensions, or permanent bans depending on severity. We take a zero-tolerance approach to serious misconduct.</p>
      </div>
    ),
  },
  community: {
    title: "Community",
    icon: Users,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed">
        <p>Hallway isn't just a platform — it's a movement. Built by students, for students.</p>
        <h4 className="font-bold text-foreground text-lg mt-4">Our Mission</h4>
        <p>We believe college should be about connections. Whether you're looking for a study partner, a friend who shares your love of indie music, or just someone to chat with at 2 AM — Hallway makes it happen.</p>
        <h4 className="font-bold text-foreground text-lg mt-4">Campus Ambassadors</h4>
        <p>Want to bring Hallway to your campus? Join our ambassador program and help grow the community. Ambassadors get early access to features, exclusive swag, and a direct line to our team.</p>
        <h4 className="font-bold text-foreground text-lg mt-4">By the Numbers</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Real-time stats displayed on the homepage</li>
          <li>Growing every single day</li>
        </ul>
        <p className="mt-4">Got feedback? We'd love to hear from you. Reach out at <strong className="text-primary">hello@hallwaychat.online</strong></p>
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
          <li>To improve our matching algorithms and platform experience.</li>
          <li>To enforce safety guidelines and investigate reports.</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg">3. Data Sharing</h4>
        <p>We never sell your personal data. Period. We only share data with service providers (hosting, analytics) who are bound by strict privacy agreements.</p>
        <h4 className="font-bold text-foreground text-lg">4. Your Rights</h4>
        <p>You can request access to, correction of, or deletion of your personal data at any time by contacting <strong className="text-primary">privacy@hallwaychat.online</strong>.</p>
        <h4 className="font-bold text-foreground text-lg">5. Data Retention</h4>
        <p>We retain your account data for as long as your account is active. After account deletion, data is permanently erased within 30 days.</p>
        <h4 className="font-bold text-foreground text-lg">6. Security</h4>
        <p>All communications are protected with end-to-end encryption. We use industry-standard security measures to protect your data at rest and in transit.</p>
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
        <p>You must be a currently enrolled college or university student with a valid .edu, .ac.in, or .in email address to use Hallway. You must be at least 18 years old.</p>
        <h4 className="font-bold text-foreground text-lg">2. Account Responsibilities</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>You are responsible for maintaining the security of your account.</li>
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
        <p>We may update these terms periodically. Continued use of the platform constitutes acceptance of any changes.</p>
      </div>
    ),
  },
  trust: {
    title: "Trust & Safety Options",
    icon: ShieldCheck,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed">
        <p>Hallway is committed to creating the safest possible environment for student connections.</p>
        <h4 className="font-bold text-foreground text-lg">Reporting</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>In-Call Reporting:</strong> Tap the 🚩 flag icon during any video call to instantly report inappropriate behavior.</li>
          <li><strong>Post-Call Reporting:</strong> Reports can also be submitted after a call ends.</li>
          <li><strong>Anonymous Reporting:</strong> Your identity is never shared with the reported user.</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg">Safety Features</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>End-to-End Encryption:</strong> All video, audio, and text messages are encrypted. Nobody — not even us — can see your conversations.</li>
          <li><strong>1-Tap Block:</strong> Instantly block any user. They'll never be able to contact you again.</li>
          <li><strong>Skip Anytime:</strong> Don't feel a connection? Hit "Next" — no questions asked.</li>
          <li><strong>Verified-Only Access:</strong> Only authenticated student users (.edu, .ac.in, .in) can access the platform.</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg">Moderation</h4>
        <p>Our dedicated trust & safety team reviews every report within 24 hours. Serious violations result in immediate permanent bans.</p>
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
        <p>Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and improve your experience.</p>
        <h4 className="font-bold text-foreground text-lg">Cookies We Use</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Essential Cookies:</strong> Required for authentication and basic platform functionality. They cannot be disabled.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how students use Hallway so we can improve the experience. These are anonymous.</li>
          <li><strong>Preference Cookies:</strong> Remember your settings like dark mode, interests, and notification preferences.</li>
        </ul>
        <h4 className="font-bold text-foreground text-lg">Third-Party Cookies</h4>
        <p>We use Vercel Analytics for usage insights. No advertising cookies or third-party trackers are ever used on Hallway.</p>
        <h4 className="font-bold text-foreground text-lg">Managing Cookies</h4>
        <p>You can manage cookies through your browser settings. Note that disabling essential cookies may prevent you from using Hallway.</p>
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
            <p>Click "Join Now" and enter your student email (.edu, .ac.in, or .in). We'll send you a magic link — click it and you're in! No passwords needed.</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
            <p className="font-semibold text-foreground mb-1">What if my college doesn't use .edu, .ac.in, or .in emails?</p>
            <p>We're expanding support for more Indian university emails. Contact us at <strong className="text-primary">support@hallwaychat.online</strong> and we'll help verify your student status.</p>
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
            <p>Try selecting more interests to widen your match pool. Also make sure you're not in Campus-Only mode if your campus has few active users.</p>
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
            <p className="font-bold text-foreground mb-1">General Inquiries</p>
            <p className="text-primary font-medium">hello@hallwaychat.online</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-6 text-center">
            <Shield className="h-8 w-8 text-success mx-auto mb-3" />
            <p className="font-bold text-foreground mb-1">Trust & Safety</p>
            <p className="text-primary font-medium">safety@hallwaychat.online</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-6 text-center">
            <HelpCircle className="h-8 w-8 text-success mx-auto mb-3" />
            <p className="font-bold text-foreground mb-1">Technical Support</p>
            <p className="text-primary font-medium">support@hallwaychat.online</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-6 text-center">
            <Lock className="h-8 w-8 text-success mx-auto mb-3" />
            <p className="font-bold text-foreground mb-1">Privacy Requests</p>
            <p className="text-primary font-medium">privacy@hallwaychat.online</p>
          </div>
        </div>
        <p className="text-foreground/50 text-sm mt-4">We typically respond within 24 hours during business days. For urgent safety concerns, use the in-app report feature for immediate action.</p>
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
              <p>Tap the 🚩 <strong>Report</strong> button visible on screen during any video call. Select the reason and submit — it takes less than 5 seconds.</p>
            </div>
          </div>
          <div className="rounded-xl border border-success/30 bg-success/5 p-4 flex gap-3 items-start">
            <Mail className="h-5 w-5 text-success mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-foreground mb-1">After a Call</p>
              <p>Email us at <strong className="text-primary">safety@hallwaychat.online</strong> with the approximate time and description of what happened.</p>
            </div>
          </div>
          <div className="rounded-xl border border-warning/30 bg-warning/5 p-4 flex gap-3 items-start">
            <AlertTriangle className="h-5 w-5 text-warning mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-foreground mb-1">Technical Issues</p>
              <p>For bugs, camera/mic issues, or platform glitches, email <strong className="text-primary">support@hallwaychat.online</strong> with your browser info and a description of the issue.</p>
            </div>
          </div>
        </div>
        <h4 className="font-bold text-foreground text-lg">What Happens Next</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Reports are reviewed by our trust & safety team within 24 hours.</li>
          <li>Your identity is always kept anonymous from the reported user.</li>
          <li>Confirmed violations result in warnings, suspensions, or permanent bans.</li>
          <li>You'll receive an update on the action taken via email.</li>
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
          <p className="text-foreground/60 mb-6">We're cooking up something special. Premium features are in development and will roll out soon.</p>
          <div className="grid gap-3 sm:grid-cols-2 text-left max-w-md mx-auto">
            {["Priority Matching", "Extended Call Time", "Custom Themes", "Exclusive Badges", "Advanced Filters", "Ad-Free Experience"].map(f => (
              <div key={f} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-foreground/40">Core Hallway features will always remain free.</p>
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
          <p>Follow us on social media for the latest updates, feature announcements, and community highlights.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="https://twitter.com/hallway_chat_" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black/10 border border-foreground/20 px-6 py-3 text-foreground font-semibold hover:bg-black/20 transition-colors">
              <span className="text-black dark:text-white font-bold">𝕏</span> @hallway_chat_
            </a>
            <a href="https://www.instagram.com/hallwaychat_online?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-pink-500/10 border border-pink-500/30 px-6 py-3 text-pink-500 font-semibold hover:bg-pink-500/20 transition-colors">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
          <p className="mt-6 text-sm text-foreground/40">DM us for quick support or just to say hi 👋</p>
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
            <button onClick={() => document.getElementById('how-to-join')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:text-foreground transition-colors">Community</button>
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
              <button onClick={onGetStarted} className="hidden sm:block px-4 py-2 text-sm font-semibold cursor-pointer hover:text-primary transition-colors">
                Log in
              </button>
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
          🛡️ Verified Students Only
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl lg:leading-[1.1] font-display">
          Meet students who<br />
          <span className="bg-gradient-to-r from-primary to-[#A0A5EB] bg-clip-text text-transparent drop-shadow-sm">
            share your vibe.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/60 sm:text-xl">
          Random 1‑on‑1 video chat exclusively for verified college students.
          No bots, no randos — just real students from campuses all around <span className="font-bold text-green-500">INDIA</span>.
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

        <p className="mt-8 text-sm text-foreground/40 font-medium">
          Hallway’s core matching is <span className="text-success font-semibold">free forever</span> for students.
          Optional perks coming soon.
        </p>
        
        {/* Social proof */}
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
              { icon: Shield, title: "Verified Identity", desc: "Only real students get in. Your official university email is your key — no bots, no outsiders, ever.", color: "text-[#28D080]", bg: "bg-[#28D080]/10", hoverBorder: "hover:border-[#28D080]/40", hoverShadow: "hover:shadow-[#28D080]/5" },
              { icon: MonitorPlay, title: "Instant High-Def Matching", desc: "Jump into crystal clear video calls in seconds based on shared interests. No endless waiting.", color: "text-[#FFB020]", bg: "bg-[#FFB020]/10", hoverBorder: "hover:border-[#FFB020]/40", hoverShadow: "hover:shadow-[#FFB020]/5" },
              { icon: HeartHandshake, title: "Curated Interests", desc: "From late-night coding sessions to campus memes — find people who just get it.", color: "text-[#FF4A4A]", bg: "bg-[#FF4A4A]/10", hoverBorder: "hover:border-[#FF4A4A]/40", hoverShadow: "hover:shadow-[#FF4A4A]/5" },
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

      {/* Extra Features — New Section */}
      <section id="more-features" className="px-6 py-24 sm:py-32 border-t border-border/40 bg-secondary/5">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Zap className="h-4 w-4" />
              New & Exciting
            </div>
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
              <h3 className="mb-3 text-xl font-bold tracking-tight">📚 Study Together</h3>
              <p className="text-base leading-relaxed text-foreground/60">Find accountability partners and crush your study goals together. Shared focus sessions with fellow students who get the grind.</p>
            </div>

            {/* Campus Filters */}
            <div className="group rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-[#FFB020]/40 hover:shadow-2xl hover:shadow-[#FFB020]/5 hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFB020]/10">
                <MapPin className="h-7 w-7 text-[#FFB020]" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight">🎯 Campus Filters</h3>
              <p className="text-base leading-relaxed text-foreground/60">Meet peers from your own university or explore across India. Toggle between campus-only and India-wide matching whenever you want.</p>
            </div>

            {/* Night Owl */}
            <div className="group rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-[#A0A5EB]/40 hover:shadow-2xl hover:shadow-[#A0A5EB]/5 hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A0A5EB]/10">
                <MoonStar className="h-7 w-7 text-[#A0A5EB]" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight">🌙 Night Owl Badge</h3>
              <p className="text-base leading-relaxed text-foreground/60">Active at 2 AM? Own it. Earn the Night Owl badge and connect with fellow late-night warriors. We see you, insomniacs. 🦉</p>
            </div>

            {/* Events & Hackathons */}
            <div className="group rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-[#FF4A4A]/40 hover:shadow-2xl hover:shadow-[#FF4A4A]/5 hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF4A4A]/10">
                <CalendarDays className="h-7 w-7 text-[#FF4A4A]" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight">📅 Events & Hackathons</h3>
              <p className="text-base leading-relaxed text-foreground/60">Discover student-run hackathons, meetups, and campus events happening near you. Never miss the action.</p>
            </div>

            {/* Streaks & Badges */}
            <div className="group rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Trophy className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight">🏆 Streaks & Badges</h3>
              <p className="text-base leading-relaxed text-foreground/60">Keep your connection streak alive and unlock achievement badges. The more you connect, the more you earn. Gotta collect 'em all.</p>
            </div>

            {/* Connection Streaks */}
            <div className="group rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-[#FF6B35]/40 hover:shadow-2xl hover:shadow-[#FF6B35]/5 hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF6B35]/10">
                <Flame className="h-7 w-7 text-[#FF6B35]" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight">🔥 Connection Streaks</h3>
              <p className="text-base leading-relaxed text-foreground/60">Chat daily to build your streak. Hit milestones like 7-day, 30-day, and legendary 100-day streaks for exclusive rewards.</p>
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
            <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent font-display">Built with Trust & Safety First</h2>
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
                  <h3 className="mb-2 text-xl font-bold tracking-tight">🚩 Report in 1 Tap</h3>
                  <p className="text-base leading-relaxed text-foreground/60">See something wrong? Hit the report button visible on screen during any call. It takes less than 5 seconds, and your report is anonymous.</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-bold text-destructive">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    Always visible during calls
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
                  <h3 className="mb-2 text-xl font-bold tracking-tight">🔒 End-to-End Encrypted</h3>
                  <p className="text-base leading-relaxed text-foreground/60">Every video call, every text message — fully encrypted end-to-end. Nobody can see your conversations. Not even us. Your privacy is non-negotiable.</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1.5 text-xs font-bold text-success">
                    <Lock className="h-3.5 w-3.5" />
                    E2E encryption on all communications
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
                  <h3 className="mb-2 text-xl font-bold tracking-tight">✅ Verified Students Only</h3>
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
                  <h3 className="mb-2 text-xl font-bold tracking-tight">🛡️ 24/7 Moderation</h3>
                  <p className="text-base leading-relaxed text-foreground/60">Our trust & safety team reviews every report within 24 hours. Serious violations mean an instant permanent ban. Zero tolerance. Period.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="how-to-join" className="mx-auto max-w-6xl px-6 py-24 border-t border-border/40">
        <h2 className="mb-16 text-center text-3xl font-bold sm:text-4xl font-display">How to join the community</h2>
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

      {/* CTA banner */}
      <section id="community" className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-[#5B62D1] p-12 text-center text-primary-foreground shadow-2xl relative">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl font-display">Ready to meet your people?</h2>
            <p className="mb-10 text-lg sm:text-xl font-medium opacity-90">Free forever. Only verified students. Zero downloads required.</p>
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
                The exclusive 1-on-1 video chat platform for verified college students across India.
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