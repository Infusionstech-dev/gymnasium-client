import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { plans } from "@/data/home";

export default function Membership({ ctaLabel = "Explore Membership", ctaHref = "/membership" }) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Membership" title="Find the right plan for you" subtitle="Flexible options to fit your goals, lifestyle and routine." dark={false} />

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-3">
          {plans.map((plan) => {
            const popular = plan.popular;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-xl p-8 ${
                  popular ? "border-2 border-gold bg-ink text-white" : "bg-white text-ink shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                }`}
              >
                {popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-12 py-1.5 font-display text-xs font-bold uppercase tracking-[0.15em] text-ink">
                    Most Popular
                  </span>
                )}

                <h3 className={`font-display text-3xl font-bold uppercase ${popular ? "text-mint" : "text-gold"}`}>{plan.name}</h3>
                <p className={`mt-3 ${popular ? "text-sm text-white/70" : "text-lg"}`}>{plan.tagline}</p>

                <p className="mt-8 flex items-baseline gap-2">
                  <span className={`font-display text-5xl font-bold ${popular ? "text-mint" : "text-gold"}`}>${plan.price}</span>
                  <span className={popular ? "text-white/70" : "text-lg"}>/ month</span>
                </p>

                <ul className="mt-6 flex-1 space-y-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-4 text-lg">
                      <Icon name="check" className={`h-6 w-6 shrink-0 ${popular ? "text-mint" : "text-gold"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button href={ctaHref} variant={popular ? "primary" : "outline-gold"} className="mt-16 w-full">
                  {ctaLabel}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
