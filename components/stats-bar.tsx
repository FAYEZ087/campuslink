export function StatsBar() {
  const stats = [
    { label: "Verified Users", value: "250K+" },
    { label: "Universities", value: "800+" },
    { label: "Daily Matches", value: "35K+" },
  ]

  return (
    <section className="border-y border-border/40 bg-card/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-2 text-4xl font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
