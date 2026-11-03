import { stats } from "@/data/home";

export default function Stats() {
  return (
    <section className="border-y border-gold/50 bg-ink-soft">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-10 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`py-4 text-center ${i % 2 === 1 ? "border-l border-mint/70" : ""} ${i === 2 ? "lg:border-l lg:border-mint/70" : ""}`}
          >
            <p className="font-display text-5xl font-bold">{s.value}</p>
            <p className="mt-1 font-display text-base font-semibold uppercase tracking-[0.15em] text-gold">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
