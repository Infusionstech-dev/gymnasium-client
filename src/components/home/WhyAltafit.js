import Image from "next/image";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { features, whyImage } from "@/data/home";

export default function WhyAltafit() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image src={whyImage} alt="AltaFit training floor" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>

        <div>
          <p className="font-display text-xl font-bold uppercase tracking-[0.25em] text-gold">Why AltaFit</p>
          <h2 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[1.05] sm:text-7xl xl:text-8xl">
            A stronger you in a <span className="text-mint">brighter</span> tomorrow
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/75 sm:text-xl">
            We combine world-class facilities, expert guidance and a supportive community to help you build strength, confidence and a healthier, happier life.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg border border-gold/60 bg-ink-soft p-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-gold/60 text-gold">
                  <Icon name={feature.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold uppercase text-mint">{feature.title}</h3>
                <p className="mt-1 text-sm text-white/85">{feature.text}</p>
              </div>
            ))}
          </div>

          <Button href="/about" className="mt-8 min-w-64">Our Story</Button>
        </div>
      </div>
    </section>
  );
}
