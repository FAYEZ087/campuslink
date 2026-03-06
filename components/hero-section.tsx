"use client"

import Image from "next/image"
import { ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onGetStarted?: () => void
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Verified Students Only</span>
            </div>

            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Meet Students{" "}
              <span className="text-primary">Who Share Your Vibe</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Connect instantly with verified college students through 1-on-1 video chats.
              Find study partners, make new friends — all in a safe, students-only space.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={onGetStarted}
                className="h-12 bg-primary px-8 text-white hover:bg-primary/90 text-base font-semibold"
              >
                Start Chatting Free →
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground px-2">
                ✓ No download needed &nbsp;·&nbsp; ✓ Free forever
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[["A","#3b82f6"],["K","#ef4444"],["P","#a855f7"],["R","#f59e0b"]].map(([letter, color]) => (
                  <div key={letter}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0a0e1a] text-xs font-bold text-white"
                    style={{ background: color }}>
                    {letter}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Join students from <span className="font-semibold text-white">KIIT, IIT, VIT</span> and more
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/students-video-chat.jpg"
                alt="Students connecting via video chat"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0e1a]/90 to-transparent p-6">
                <div className="flex justify-center gap-8">
                  <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Verified Emails</p>
                    <p className="text-2xl font-bold text-primary">100%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">College Only</p>
                    <p className="text-2xl font-bold text-primary">Always</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
