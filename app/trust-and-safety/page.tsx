import Link from "next/link"
import { Video, ShieldCheck, Eye, Ban, AlertTriangle, Lock, Users } from "lucide-react"

export default function TrustAndSafetyPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <header className="border-b border-border/40 bg-[#0a0e1a]/95 px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={36} height={36} fill="none">
              <defs>
                <radialGradient id="bgN" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1a1a2e" />
                  <stop offset="100%" stopColor="#0d0d1a" />
                </radialGradient>
              </defs>
              <rect width="100" height="100" rx="22" fill="url(#bgN)" />
              <rect width="100" height="100" rx="22" fill="none" stroke="#1e3a5f" strokeWidth="1.5" />
              <polygon points="0,0 0,100 26,78 26,22" fill="#0f1629" />
              <polygon points="100,0 100,100 74,78 74,22" fill="#131a2e" />
              <polygon points="0,0 100,0 74,22 26,22" fill="#0c1220" />
              <polygon points="0,100 100,100 74,78 26,78" fill="#0a0f1a" />
              <rect x="26" y="22" width="48" height="56" fill="#0d1117" stroke="#1e3a5f" strokeWidth="1" />
              <line x1="0" y1="0" x2="50" y2="50" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" />
              <line x1="100" y1="0" x2="50" y2="50" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" />
              <line x1="0" y1="100" x2="50" y2="50" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" />
              <line x1="100" y1="100" x2="50" y2="50" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" />
              <ellipse cx="50" cy="50" rx="3.5" ry="4.5" fill="#3b82f6" opacity="0.5" />
              <ellipse cx="50" cy="50" rx="1.5" ry="2" fill="#3b82f6" />
              <circle cx="50" cy="43" r="3.5" fill="#3b82f6" />
              <rect x="47" y="47.5" width="6" height="10" rx="1.5" fill="#3b82f6" />
              <rect x="63" y="40" width="9" height="22" rx="1.5" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
            </svg>
            <span className="text-xl font-bold text-white">Hallway</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Safety First</span>
        </div>

        <h1 className="mb-4 text-4xl font-bold">Trust & Safety</h1>
        <p className="mb-16 text-lg text-muted-foreground">
          Hallway is built from the ground up with safety as the core principle —
          not an afterthought.
        </p>

        <div className="mb-16 grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: ShieldCheck,
              title: "College Email Verification",
              desc: "Every single user must verify a valid college email address. No exceptions. This eliminates bots, catfishing, and non-students from day one."
            },
            {
              icon: Lock,
              title: "Encrypted Video Calls",
              desc: "All video calls are peer-to-peer via WebRTC. Your video and audio never touch our servers — they cannot be recorded, stored, or accessed by us."
            },
            {
              icon: Eye,
              title: "Zero Data Selling",
              desc: "We never sell your data to advertisers, recruiters, or third parties. Your email is used only for login. That's it."
            },
            {
              icon: AlertTriangle,
              title: "One-Tap Reporting",
              desc: "Every chat has a report button. Reports are reviewed promptly. Accounts with multiple reports are automatically flagged for review."
            },
            {
              icon: Ban,
              title: "Instant Banning",
              desc: "Confirmed violations result in immediate permanent bans. There are no second chances for harassment, sexual content, or hate speech."
            },
            {
              icon: Users,
              title: "Students Only",
              desc: "Hallway is exclusively for college students. This creates a community of peers who share a common context — campus life."
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border/40 bg-card p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
          <h2 className="mb-3 text-2xl font-bold">Report an Issue</h2>
          <p className="mb-4 text-muted-foreground">
            If you experience or witness any violations during a chat, use the
            in-app report button immediately. For serious concerns outside of a chat,
            contact us directly.
          </p>
          <p className="text-primary font-medium">safety@hallwaychat.online</p>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <Link href="/" className="text-primary hover:underline">← Back to Hallway</Link>
        </div>
      </main>
    </div>
  )
}
