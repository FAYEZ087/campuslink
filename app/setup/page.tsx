"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { ArrowRight, Upload, User, Loader2, Camera } from "lucide-react"

function HallwayIcon({ size = 64 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} fill="none">
      <defs>
        <radialGradient id="bgGrad-setup" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="50" fill="url(#bgGrad-setup)" />
      <rect width="100" height="100" rx="50" fill="none" stroke="#222222" strokeWidth="1" />
      <polygon points="0,0 0,100 26,78 26,22" fill="#181818" />
      <polygon points="100,0 100,100 74,78 74,22" fill="#202020" />
      <polygon points="0,0 100,0 74,22 26,22" fill="#161616" />
      <polygon points="0,100 100,100 74,78 26,78" fill="#141414" />
      <rect x="26" y="22" width="48" height="56" fill="#111111" stroke="#2a2a2a" strokeWidth="1.2" />
      <line x1="0" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <line x1="100" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <line x1="0" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <line x1="100" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <ellipse cx="50" cy="50" rx="3.5" ry="4.5" fill="#00c896" opacity="0.5" />
      <ellipse cx="50" cy="50" rx="1.5" ry="2" fill="#00c896" />
      <circle cx="50" cy="43" r="3.5" fill="#00c896" />
      <rect x="47" y="47.5" width="6" height="10" rx="1.5" fill="#00c896" />
      <rect x="63" y="40" width="9" height="22" rx="1.5" fill="none" stroke="#00c896" strokeWidth="1" opacity="0.45" />
    </svg>
  )
}

export default function SetupPage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const [realName, setRealName] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [college, setCollege] = useState("")
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push("/")
      } else {
        setIsLoading(false)
      }
    })
  }, [router])

  function handlePhotoSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("Photo must be less than 5MB")
        return
      }
      setPhotoFile(file)
      const reader = new FileReader()
      reader.onload = (e) => setPhotoPreview(e.target?.result as string)
      reader.readAsDataURL(file)
      setError("")
    }
  }

  async function handleSubmit() {
    if (!realName.trim() || !displayName.trim() || !college.trim()) {
      setError("Please fill in all fields")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push("/")
        return
      }

      let profilePhotoUrl: string | null = null

      // Upload photo if selected
      if (photoFile) {
        const fileExt = photoFile.name.split(".").pop()
        const fileName = `${user.id}/${Date.now()}.${fileExt}`
        
        const { error: uploadError } = await supabase.storage
          .from("avatars")
          .upload(fileName, photoFile, { upsert: true })

        if (uploadError) {
          console.error("Upload error:", uploadError)
        } else {
          const { data: { publicUrl } } = supabase.storage
            .from("avatars")
            .getPublicUrl(fileName)
          profilePhotoUrl = publicUrl
        }
      }

      // Update profile
      const { error: updateError } = await supabase
        .from("profiles")
        .upsert({
          id: user.id,
          real_name: realName.trim(),
          display_name: displayName.trim(),
          college: college.trim(),
          profile_photo_url: profilePhotoUrl,
          is_profile_complete: true,
        })

      if (updateError) {
        throw updateError
      }

      router.push("/match")
    } catch (err) {
      console.error("Setup error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-2"
          style={{ borderColor: "#00c896", borderTopColor: "transparent" }} />
      </div>
    )
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 py-12 relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-md flex-col items-center gap-8 z-10 w-full mb-16">
        
        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <HallwayIcon size={56} />
          <h1 className="text-3xl tracking-tight font-display">
            <span className="text-foreground">Complete Your </span>
            <span style={{ color: "#00c896" }}>Profile</span>
          </h1>
          <p className="text-center text-sm text-muted-foreground">
            Let others know who they're chatting with
          </p>
        </div>

        {/* Form */}
        <div className="flex w-full flex-col gap-5">
          
          {/* Profile Photo */}
          <div className="flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="group relative h-24 w-24 rounded-full border-2 border-dashed border-border bg-secondary/50 flex items-center justify-center overflow-hidden transition-all hover:border-[#00c896] hover:bg-secondary"
            >
              {photoPreview ? (
                <>
                  <img src={photoPreview} alt="Profile" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center gap-1 text-muted-foreground group-hover:text-[#00c896] transition-colors">
                  <Upload className="h-6 w-6" />
                  <span className="text-xs">Upload</span>
                </div>
              )}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoSelect}
              className="hidden"
            />
            <p className="text-xs text-muted-foreground">Profile photo (optional)</p>
          </div>

          {/* Real Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              Real Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={realName}
                onChange={(e) => setRealName(e.target.value)}
                placeholder="Your full name"
                className="w-full rounded-xl border border-border bg-secondary pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all"
                style={{ "--tw-ring-color": "#00c896" } as React.CSSProperties}
              />
            </div>
          </div>

          {/* Display Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              Display Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Nickname shown to others"
              className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all"
              style={{ "--tw-ring-color": "#00c896" } as React.CSSProperties}
            />
            <p className="text-xs text-muted-foreground">
              This is what other users will see
            </p>
          </div>

          {/* College */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              College / University
            </label>
            <input
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              placeholder="e.g., KIIT University"
              className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all"
              style={{ "--tw-ring-color": "#00c896" } as React.CSSProperties}
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-3">
              <p className="text-xs text-destructive">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || !realName.trim() || !displayName.trim() || !college.trim()}
            className="h-12 w-full gap-2 rounded-xl font-semibold text-black transition-all disabled:opacity-50"
            style={{ background: "#00c896" }}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Setting up...
              </>
            ) : (
              <>
                Continue to Hallway
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mb-4">
          Your real name is only visible to you 🔒
        </p>
      </div>

      {/* Bottom Footer */}
      <div className="absolute bottom-0 w-full flex-col sm:flex-row flex items-center justify-center gap-6 sm:gap-12 border-t border-border/10 bg-black/20 py-6 text-xs text-foreground/50 text-center">
        <p>© {new Date().getFullYear()} hallway. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <span className="text-destructive inline-block">❤️</span> by <a href="https://github.com/FAYEZ087" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">Fayez</a>
        </p>
      </div>
    </div>
  )
}
