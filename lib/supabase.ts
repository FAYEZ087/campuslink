import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

const ALLOWED_DOMAINS = [".edu", ".ac.in", ".edu.in", ".ernet.in", "tnu.in"]

export function isCollegeEmail(email: string): boolean {
  const lower = email.toLowerCase().trim()
  if (!lower.includes("@")) return false
  const domain = lower.split("@")[1]
  if (!domain) return false
  return ALLOWED_DOMAINS.some((d) =>
    d.startsWith(".") ? domain.endsWith(d) : domain === d
  )
}

export function getDomainError(email: string): string {
  const lower = email.toLowerCase().trim()
  if (!lower.includes("@")) return "Please enter a valid email address."
  const domain = lower.split("@")[1]
  return `"${domain}" is not a recognized college domain. Use a .edu, .ac.in, .edu.in, or tnu.in email.`
}
