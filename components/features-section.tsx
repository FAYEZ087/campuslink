import { ShieldCheck, Video, Sparkles } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Students Only",
    description:
      "Every account is tied to a valid university email. Connect with confidence knowing you're chatting with real college students from verified institutions.",
  },
  {
    icon: Video,
    title: "Instant 1-on-1 Video Matching",
    description:
      "Skip the awkward intros. Our smart matching connects you instantly with students who are ready to chat. High-quality, peer-to-peer encrypted video calls.",
  },
  {
    icon: Sparkles,
    title: "Interest-Based Matching",
    description:
      "Find study buddies or lifelong friends who share your academic interests, campus hobbies, or research goals through our intelligent matching engine.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
            Designed for the Student Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hallway combines academic verification with social discovery to create a safe 
            space for meaningful peer interaction across institutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-primary/40 hover:bg-card/80"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
