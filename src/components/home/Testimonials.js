import Image from "next/image";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/home";

function Card({ t }) {
  return (
    <figure className="w-[85vw] max-w-[640px] shrink-0 rounded-xl bg-ink-soft p-8">
      <div className="flex items-center justify-between">
        <div className="flex gap-1 text-gold">
          {Array.from({ length: 5 }, (_, i) => (
            <Icon key={i} name="star" className="h-5 w-5" />
          ))}
        </div>
        <span className="font-display text-sm font-bold uppercase tracking-wider text-mint">Verified Athlete</span>
      </div>
      <blockquote className="mt-6 text-lg leading-relaxed text-white/85 sm:text-xl">&quot;{t.quote}&quot;</blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <Image src={t.avatar} alt={t.name} width={64} height={64} className="h-16 w-16 rounded-full object-cover" />
        <div>
          <p className="font-display text-2xl font-bold uppercase">{t.name}</p>
          <p className="text-sm text-white/70">{t.location}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  // Rendered twice so the marquee can loop seamlessly.
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden border-b border-white/5 py-20 lg:py-28">
      <SectionHeading center eyebrow="Testimonials" title="Success stories" />
      <div className="mt-16 flex w-max animate-marquee gap-8">
        {loop.map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>
    </section>
  );
}
