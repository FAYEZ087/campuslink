import Link from "next/link"
import { Video } from "lucide-react"

export default function TermsPage() {
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
