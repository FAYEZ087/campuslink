import Link from "next/link"
import { Video, ShieldCheck, Eye, Ban, AlertTriangle, Lock, Users } from "lucide-react"

export default function TrustAndSafetyPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <header className="border-b border-border/40 bg-[#0a0e1a]/95 px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Video className="h-5 w-5 text-white" />
            </div>
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
