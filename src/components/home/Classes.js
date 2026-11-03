import Image from "next/image";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { classes } from "@/data/home";

export default function Classes() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Our Classes" title="Train your way" subtitle="Expert-led programs designed for real people and real goals." dark={false} />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((c) => (
            <article key={c.title} className="group relative aspect-[512/560] overflow-hidden rounded-xl shadow-lg">
              <Image src={c.image} alt={c.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
              <span className="absolute left-7 top-7 inline-flex h-13 w-13 items-center justify-center rounded-full border border-gold/50 bg-ink/80 text-gold">
                <Icon name={c.icon} className="h-6 w-6" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="font-display text-3xl font-bold uppercase text-white">{c.title}</h3>
                <p className="mt-1 text-lg text-white/80">{c.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button href="/membership">Explore Membership</Button>
        </div>
      </div>
    </section>
  );
}
