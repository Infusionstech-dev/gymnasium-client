import { stats } from "@/data/home";

export default function Stats() {
  return (
    <section className="border-y border-gold/50 bg-ink-soft">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-10 sm:px-8 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`py-4 text-center ${index % 2 === 1 ? "border-l border-mint/70" : ""} ${index === 2 ? "lg:border-l lg:border-mint/70" : ""}`}
          >
            <p className="font-display text-5xl font-bold">{stat.value}</p>
            <p className="mt-1 font-display text-base font-semibold uppercase tracking-[0.15em] text-gold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
