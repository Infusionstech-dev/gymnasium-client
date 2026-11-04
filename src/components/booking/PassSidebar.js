import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { TestimonialCard } from "@/components/home/Testimonials";
import { testimonials } from "@/data/home";
import { facilityHighlight, passIncludes } from "@/data/booking";

export default function PassSidebar() {
  return (
    <aside className="flex flex-col gap-8">
      <div className="rounded-xl bg-[#151e22] p-6 sm:p-10">
        <div className="flex justify-between gap-4 font-display text-sm font-bold uppercase tracking-wider">
          <span className="text-gold">All-Access Ticket</span>
          <span className="text-gold">100% Complimentary</span>
        </div>
        <h2 className="mt-10 font-display text-4xl font-bold uppercase">What your pass includes</h2>

        <ul className="mt-8 space-y-6">
          {passIncludes.map((perk) => (
            <li key={perk.title} className="flex gap-5">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-ink-soft text-gold">
                <Icon name={perk.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold uppercase leading-tight">{perk.title}</h3>
                <p className="mt-1 text-white/75">{perk.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <TestimonialCard testimonial={testimonials[0]} className="w-full" />

      <div className="relative aspect-[635/235] overflow-hidden rounded-xl">
        <Image src={facilityHighlight.image} alt={facilityHighlight.title} fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-gold">{facilityHighlight.eyebrow}</p>
            <p className="font-display text-2xl font-bold uppercase sm:text-3xl">{facilityHighlight.title}</p>
          </div>
          <span className="shrink-0 rounded bg-ink/80 px-3 py-1.5 font-display text-sm font-bold uppercase tracking-wider text-mint">
            {facilityHighlight.size}
          </span>
        </div>
      </div>
    </aside>
  );
}
