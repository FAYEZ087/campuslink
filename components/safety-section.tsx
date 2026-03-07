import { IdCard, Lock, MessageSquareWarning, Bot, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const safetyFeatures = [
  {
    icon: IdCard,
    title: "ID Verification",
    description: "Every account is tied to a valid university domain.",
  },
  {
    icon: Lock,
    title: "Private Data",
    description: "Your information is never sold to third-party recruiters.",
  },
  {
    icon: MessageSquareWarning,
    title: "Safe Chats",
    description: "AI-powered moderation keeps conversations healthy.",
  },
  {
    icon: Bot,
    title: "Zero Bots",
    description: "Verification barriers eliminate non-human profiles.",
  },
]

export function SafetySection() {
  return (
    <section id="safety" className="border-t border-border/40 bg-card/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Safety Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {safetyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border/40 bg-card p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
              Safety is in our{" "}
              <span className="italic text-primary">academic</span> DNA.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We believe that the best digital spaces are those where you know exactly 
              who you're talking to. By requiring university verification, we've eliminated 
              the noise and risks found on traditional social platforms.
            </p>
           <a href="/trust-and-safety"
  className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-card"
>
  Learn about our Trust & Safety
  <ArrowRight className="h-4 w-4" />
</a>
          </div>
        </div>
      </div>
    </section>
  )
}
