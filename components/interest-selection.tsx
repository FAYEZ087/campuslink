"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight, BookOpen, Music, Gamepad2, Film, Dumbbell, Code2,
  Palette, Globe, Coffee, Camera, Mic, HeartPulse, Utensils,
  Telescope, GraduationCap, Dog, Mountain, Sparkles, LogOut,
  HeartHandshake, Lock, X, Shield, Zap, Users, CheckCircle,
  ShieldCheck, Cookie, Scale, HelpCircle, Mail, Flag, AlertTriangle,
  MessageCircle, Instagram
} from "lucide-react"
import type { User } from "@supabase/supabase-js"

const INTERESTS = [
  { label: "Computer Science", icon: Code2, color: "#3b82f6" },
  { label: "Music", icon: Music, color: "#a855f7" },
  { label: "Gaming", icon: Gamepad2, color: "#ef4444" },
  { label: "Movies & TV", icon: Film, color: "#f59e0b" },
  { label: "Fitness", icon: Dumbbell, color: "#10b981" },
  { label: "Art & Design", icon: Palette, color: "#ec4899" },
  { label: "Travel", icon: Globe, color: "#06b6d4" },
  { label: "Study Buddies", icon: BookOpen, color: "#00c896" },
  { label: "Photography", icon: Camera, color: "#8b5cf6" },
  { label: "Podcasts", icon: Mic, color: "#f97316" },
  { label: "Mental Health", icon: HeartPulse, color: "#ef4444" },
  { label: "Foodie", icon: Utensils, color: "#eab308" },
  { label: "Astronomy", icon: Telescope, color: "#6366f1" },
  { label: "Grad School", icon: GraduationCap, color: "#00c896" },
  { label: "Coffee Chat", icon: Coffee, color: "#d97706" },
  { label: "Pets", icon: Dog, color: "#f97316" },
  { label: "Outdoors", icon: Mountain, color: "#22c55e" },
  { label: "Party Culture", icon: Sparkles, color: "#d946ef" },
]

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
            <Mail className="h-8 w-8 text-[#00c896] mx-auto mb-3" />
            <p className="font-bold text-foreground mb-1">General Inquiries</p>
            <p className="text-primary font-medium">hello@hallwaychat.online</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-6 text-center">
            <Shield className="h-8 w-8 text-[#00c896] mx-auto mb-3" />
            <p className="font-bold text-foreground mb-1">Trust & Safety</p>
            <p className="text-primary font-medium">safety@hallwaychat.online</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-6 text-center">
            <HelpCircle className="h-8 w-8 text-[#00c896] mx-auto mb-3" />
            <p className="font-bold text-foreground mb-1">Technical Support</p>
            <p className="text-primary font-medium">support@hallwaychat.online</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-6 text-center">
            <Lock className="h-8 w-8 text-[#00c896] mx-auto mb-3" />
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
          <div className="rounded-xl border border-[#00c896]/30 bg-[#00c896]/5 p-4 flex gap-3 items-start">
            <Mail className="h-5 w-5 text-[#00c896] mt-0.5 shrink-0" />
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
  social: {
    title: "Follow Us",
    icon: MessageCircle,
    body: (
      <div className="space-y-6 text-foreground/80 text-[15px] leading-relaxed text-center">
        <div className="rounded-2xl border border-border/50 bg-secondary/20 p-8">
          <MessageCircle className="h-12 w-12 text-[#00c896] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-3">Stay Connected</h3>
          <p>Follow us on social media for the latest updates, feature announcements, and community highlights.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="https://twitter.com/hallway_chat_" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black/10 border border-foreground/20 px-6 py-3 text-foreground font-semibold hover:bg-black/20 transition-colors cursor-pointer">
              <span className="text-foreground font-bold">𝕏</span> @hallway_chat_
            </a>
            <a href="https://www.instagram.com/hallwaychat_online" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-pink-500/10 border border-pink-500/30 px-6 py-3 text-pink-500 font-semibold hover:bg-pink-500/20 transition-colors cursor-pointer">
              <Instagram className="h-4 w-4" /> @hallwaychat_online
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
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[85vh] rounded-3xl border border-border/50 bg-[#1a1f2e] shadow-2xl shadow-black/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border/40 bg-[#1a1f2e]/95 backdrop-blur-md px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00c896]/10">
              <Icon className="h-5 w-5 text-[#00c896]" />
            </div>
            <h2 className="text-xl font-bold text-foreground">{content.title}</h2>
          </div>
          <button onClick={onClose} className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer">
            <X className="h-5 w-5 text-foreground/70" />
          </button>
        </div>
        {/* Body */}
        <div className="overflow-y-auto max-h-[calc(85vh-72px)] px-6 py-6">
          {content.body}
        </div>
      </div>
    </div>
  )
}

function HallwayIcon({ size = 32 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} fill="none">
      <defs>
        <radialGradient id="bgGradIS" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="50" fill="url(#bgGradIS)" />
      <polygon points="0,0 0,100 26,78 26,22" fill="#181818" />
      <polygon points="100,0 100,100 74,78 74,22" fill="#202020" />
      <polygon points="0,0 100,0 74,22 26,22" fill="#161616" />
      <polygon points="0,100 100,100 74,78 26,78" fill="#141414" />
      <rect x="26" y="22" width="48" height="56" fill="#111111" stroke="#2a2a2a" strokeWidth="1.2" />
      <line x1="0" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <line x1="100" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <line x1="0" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <line x1="100" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <ellipse cx="50" cy="50" rx="3.5" ry="4.5" fill="#00c896" opacity="0.6" />
      <ellipse cx="50" cy="50" rx="1.5" ry="2" fill="#00c896" />
      <circle cx="50" cy="43" r="3.5" fill="#00c896" />
      <rect x="47" y="47.5" width="6" height="10" rx="1.5" fill="#00c896" />
      <rect x="63" y="40" width="9" height="22" rx="1.5" fill="none" stroke="#00c896" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

interface InterestSelectionProps {
  onStart: (interests: string[]) => void
  user?: User | null
  onSignOut?: () => void
  darkMode: boolean
  setDarkMode: (v: boolean) => void
}

export function InterestSelection({ onStart, user, onSignOut, darkMode, setDarkMode }: InterestSelectionProps) {
  const [selected, setSelected] = useState<string[]>([])
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const dark = darkMode

  function toggleInterest(label: string) {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    )
  }

  return (
    <div className="min-h-dvh bg-background text-foreground transition-colors duration-300 flex flex-col"
      style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border/40 px-6 py-4 backdrop-blur-md bg-background/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center gap-3">
            <HallwayIcon size={32} />
            <span className="text-lg tracking-tight font-display">
              <span className="text-foreground">hall</span><span className="text-[#00c896]">way</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            {user && onSignOut && (
              <div className="flex items-center gap-2">
                <span className={`hidden text-xs sm:block ${dark ? "text-white/40" : "text-black/40"}`}>{user.email}</span>
                <button onClick={onSignOut}
                  className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs transition cursor-pointer ${dark ? "border-white/10 bg-white/5 text-white/50 hover:text-white" : "border-black/10 bg-black/5 text-black/50 hover:text-black"}`}>
                  <LogOut className="h-3 w-3" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10 flex flex-col flex-1">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl tracking-tight font-display">What are you into?</h1>
          <p className={`mt-2 text-base ${dark ? "text-white/40" : "text-black/50"}`}>
            Select your interests to find the right students to connect with.
          </p>
        </div>

        {/* Interest grid */}
        <div className="mb-3 flex flex-wrap gap-2.5">
          {INTERESTS.map(({ label, icon: Icon, color }) => {
            const isActive = selected.includes(label)
            return (
              <button key={label} onClick={() => toggleInterest(label)}
                className="group flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
                style={isActive ? {
                  borderColor: color + "60",
                  background: color + "18",
                  color: color,
                  boxShadow: `0 4px 20px ${color}25`,
                } : {
                  borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)",
                  background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                  color: dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = color + "40"
                    e.currentTarget.style.background = color + "10"
                    e.currentTarget.style.color = color
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)"
                    e.currentTarget.style.background = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"
                    e.currentTarget.style.color = dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)"
                  }
                }}>
                <Icon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110" style={isActive ? { color } : {}} />
                {label}
              </button>
            )
          })}
        </div>

        {/* Count */}
        <p className={`mb-10 text-sm ${dark ? "text-white/25" : "text-black/35"}`}>
          {selected.length === 0
            ? "Pick at least one — or skip to chat randomly"
            : `${selected.length} selected · matching you with students who love ${selected.slice(0, 2).join(" & ")}${selected.length > 2 ? ` + ${selected.length - 2} more` : ""}`}
        </p>

        {/* CTA */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={() => onStart(selected)}
            className="flex h-13 items-center justify-center gap-2 rounded-2xl px-10 py-3.5 text-sm font-semibold text-black transition hover:opacity-90 cursor-pointer"
            style={{ background: "#00c896", boxShadow: "0 4px 20px rgba(0,200,150,0.3)" }}>
            Start Chatting
            <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={() => onStart([])}
            className={`flex h-13 items-center justify-center gap-2 rounded-2xl border px-8 py-3.5 text-sm font-medium transition cursor-pointer ${dark ? "border-white/10 text-white/40 hover:border-white/20 hover:text-white/70" : "border-black/10 text-black/40 hover:border-black/20 hover:text-black/70"}`}>
            Skip — chat randomly
          </button>
        </div>

        <div className="mt-auto pt-16 pb-4">
        </div>
      </main>

      {/* Footer (4-Column Layout) - Same as Landing Page */}
      <footer className="border-t border-border/10 bg-[#0A0E1A] pt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-8 mb-20">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <HallwayIcon size={28} />
                <span className="text-xl tracking-tight font-display">
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
                <li><button onClick={() => setActiveModal("features")} className="hover:text-primary transition-colors cursor-pointer">Features</button></li>
                <li><button onClick={() => setActiveModal("safety")} className="hover:text-primary transition-colors cursor-pointer">Safety Guidelines</button></li>
                <li><button onClick={() => setActiveModal("community")} className="hover:text-primary transition-colors cursor-pointer">Community</button></li>
                <li><button onClick={() => setActiveModal("premium")} className="hover:text-primary transition-colors cursor-pointer">Premium (Coming Soon)</button></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="mb-6 text-sm font-semibold text-foreground">Legal</h4>
              <ul className="space-y-4 text-sm text-foreground/70">
                <li><button onClick={() => setActiveModal("privacy")} className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</button></li>
                <li><button onClick={() => setActiveModal("terms")} className="hover:text-primary transition-colors cursor-pointer">Terms of Service</button></li>
                <li><button onClick={() => setActiveModal("trust")} className="hover:text-primary transition-colors cursor-pointer">Trust & Safety Options</button></li>
                <li><button onClick={() => setActiveModal("cookies")} className="hover:text-primary transition-colors cursor-pointer">Cookie Policy</button></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="mb-6 text-sm font-semibold text-foreground">Support</h4>
              <ul className="space-y-4 text-sm text-foreground/70">
                <li><button onClick={() => setActiveModal("help")} className="hover:text-primary transition-colors cursor-pointer">Help Center</button></li>
                <li><button onClick={() => setActiveModal("contact")} className="hover:text-primary transition-colors cursor-pointer">Contact Us</button></li>
                <li><button onClick={() => setActiveModal("report")} className="hover:text-primary transition-colors cursor-pointer">Report an Issue</button></li>
                <li><button onClick={() => setActiveModal("social")} className="hover:text-primary transition-colors cursor-pointer">Social</button></li>
              </ul>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="w-full flex-col sm:flex-row flex items-center justify-center gap-6 sm:gap-12 border-t border-border/10 bg-black/20 py-6 text-xs text-foreground/50 text-center">
          <p>© {new Date().getFullYear()} hallway. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <HeartHandshake className="h-3 w-3 text-destructive" /> by <a href="https://github.com/FAYEZ087" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium cursor-pointer">Fayez</a>
          </p>
        </div>
      </footer>

      {/* Footer Modal */}
      {activeModal && <FooterModal id={activeModal} onClose={() => setActiveModal(null)} />}
    </div>
  )
}