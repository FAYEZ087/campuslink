"use client"

import { Button } from "@/components/ui/button"

interface CTABannerProps {
  onGetStarted?: () => void
}

export function CTABanner({ onGetStarted }: CTABannerProps) {
  return (
    <section id="community" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 sm:px-16 lg:px-24">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20" />
            <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-white/20" />
          </div>
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
              Ready to meet your academic community?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Join students from top universities across India and worldwide.
              Verified. Free. No downloads.
            </p>
            <Button
              onClick={onGetStarted}
              className="mt-8 h-12 bg-[#0a0e1a] px-10 text-base font-semibold text-white hover:bg-[#0a0e1a]/90"
            >
              Join Now →
            </Button>
            <p className="mt-4 text-sm text-white/60">
              No credit card required. College email required for verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
