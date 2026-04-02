import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function createServerSupabaseClient() {
  const cookieStore = await cookies()
  
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Handle server component cookie errors
          }
        },
      },
    }
  )
}

export type Profile = {
  id: string
  real_name: string | null
  display_name: string | null
  college: string | null
  profile_photo_url: string | null
  interests: string[]
  is_profile_complete: boolean
  created_at: string
  updated_at: string
}
