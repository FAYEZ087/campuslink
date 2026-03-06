import Link from "next/link"
import { Video } from "lucide-react"

export default function PrivacyPage() {
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
