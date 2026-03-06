import Link from "next/link"
import { Video, Instagram } from "lucide-react"

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Safety", href: "#safety" },
    { label: "Community", href: "#community" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Trust & Safety", href: "/trust-and-safety" },
  ],
  Support: [
    { label: "Contact Us", href: "mailto:hello@hallwaychat.online" },
    { label: "Report Issue", href: "mailto:safety@hallwaychat.online" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-[#060912] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
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
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Random 1-on-1 video chat exclusively for verified college students.
            </p>
            <div className="mt-6 flex gap-3">
                <a href="https://www.instagram.com/hallwaychat_online"
                target="_blank"
                rel="noopener noreferrer"  
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white">{category}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 Hallway. All rights reserved. For verified college students only.
          </p>
          <p className="text-center text-sm text-muted-foreground mt-2">
               Made with 💝 by{" "}
  
              <a href="https://github.com/FAYEZ087"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
              >
                Fayez
              </a>
            </p>
        </div>
      </div>
    </footer>
  )
}