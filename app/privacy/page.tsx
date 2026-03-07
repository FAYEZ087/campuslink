import Link from "next/link"
import { Video } from "lucide-react"

export default function PrivacyPage() {
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
        <h1 className="mb-2 text-4xl font-bold">Privacy Policy</h1>
        <p className="mb-12 text-muted-foreground">Last updated: March 2026</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          {[
            {
              title: "1. Information We Collect",
              content: `We collect your college email address to verify your student status. We do not collect passwords — authentication is handled via magic links. We collect usage data such as session duration and match preferences to improve our service. Video and audio from your calls are peer-to-peer encrypted and never pass through or stored on our servers.`
            },
            {
              title: "2. How We Use Your Information",
              content: `Your email is used solely for verification and to send magic link sign-in emails. We use anonymized usage data to improve matching algorithms and platform performance. We never sell your personal information to third parties, advertisers, or recruiters.`
            },
            {
              title: "3. Data Storage & Security",
              content: `Your account data is stored securely using Supabase with industry-standard encryption. Video calls are peer-to-peer via WebRTC — we never record, store, or access your video or audio. We use HTTPS everywhere and follow OWASP security guidelines.`
            },
            {
              title: "4. Cookies",
              content: `We use session cookies only to keep you signed in. We do not use tracking cookies or third-party advertising cookies. You can clear cookies at any time through your browser settings.`
            },
            {
              title: "5. Your Rights",
              content: `You can request deletion of your account and all associated data at any time by emailing us. You can sign out at any time, which immediately terminates your session. You have the right to access any data we hold about you.`
            },
            {
              title: "6. Changes to This Policy",
              content: `We may update this policy periodically. Continued use of Hallway after changes constitutes acceptance of the new policy. Significant changes will be communicated via email.`
            },
            {
              title: "7. Contact",
              content: `For privacy-related questions, contact us at privacy@hallwaychat.online`
            },
          ].map(({ title, content }) => (
            <section key={title}>
              <h2 className="mb-3 text-xl font-semibold text-white">{title}</h2>
              <p>{content}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <Link href="/" className="text-primary hover:underline">← Back to Hallway</Link>
        </div>
      </main>
    </div>
  )
}
