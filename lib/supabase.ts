import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// ── Allowed college email domains ─────────────────────────────────────────────
const ALLOWED_DOMAINS = [
  ".edu",
  ".ac.in",
  ".edu.in",
  ".ernet.in",
  "tnu.in",
]

export function isCollegeEmail(email: string): boolean {
  if (!email || !email.includes("@")) return false
  const domain = email.split("@")[1].toLowerCase()
  return ALLOWED_DOMAINS.some((allowed) => domain.endsWith(allowed))
}

export function getDomainError(email: string): string {
  const domain = email.split("@")[1] || ""
  return `"${domain}" is not a recognized college email domain. Please use your institutional email (.edu, .ac.in, .edu.in)`
}