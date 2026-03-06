import Link from "next/link"
import { Video } from "lucide-react"

export default function TermsPage() {
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
        <h1 className="mb-2 text-4xl font-bold">Terms of Service</h1>
        <p className="mb-12 text-muted-foreground">Last updated: March 2026</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          {[
            {
              title: "1. Eligibility",
              content: `Hallway is exclusively for verified college and university students. You must have a valid college email address (.edu, .ac.in, .edu.in, or tnu.in) to use the platform. By signing up, you confirm that you are currently enrolled at an accredited institution and are 18 years or older.`
            },
            {
              title: "2. Acceptable Use",
              content: `You agree not to use Hallway for harassment, hate speech, sexual content, spam, or any illegal activity. You agree not to impersonate other students or institutions. You agree not to attempt to bypass our verification system. Violations will result in immediate and permanent account termination.`
            },
            {
              title: "3. User Conduct",
              content: `All interactions on Hallway must be respectful. You are solely responsible for your conduct during video chats. We encourage users to report inappropriate behavior using the in-app report button. Reported users are reviewed and may be permanently banned.`
            },
            {
              title: "4. Intellectual Property",
              content: `Hallway and its original content, features, and functionality are owned by Hallway Inc. and are protected by international copyright, trademark, and other laws. You may not copy, modify, or distribute our platform without explicit written permission.`
            },
            {
              title: "5. Disclaimer",
              content: `Hallway is provided "as is" without warranties of any kind. We do not guarantee continuous availability of the service. We are not responsible for the conduct of users during video chats. Use of the platform is at your own risk.`
            },
            {
              title: "6. Termination",
              content: `We reserve the right to terminate or suspend your account at any time for violations of these terms. You may delete your account at any time. Upon termination, your right to use the service immediately ceases.`
            },
            {
              title: "7. Governing Law",
              content: `These terms are governed by the laws of India. Any disputes shall be resolved in courts of competent jurisdiction in India.`
            },
            {
              title: "8. Contact",
              content: `For terms-related questions, contact us at legal@hallwaychat.online`
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
