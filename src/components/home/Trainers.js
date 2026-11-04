import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { trainers as featuredTrainers } from "@/data/home";

export default function Trainers({ trainers = featuredTrainers, showViewAllButton = true }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Meet our trainers"
          title={<>Real experts. <span className="text-mint">Real</span> results.</>}
          subtitle="Expert-led programs designed for real people and real goals."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <article key={trainer.name} className="group relative aspect-square overflow-hidden rounded-xl">
              <Image src={trainer.image} alt={trainer.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="font-display text-3xl font-bold uppercase text-mint">{trainer.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-wide text-gold">{trainer.role}</p>
              </div>
            </article>
          ))}
        </div>

        {showViewAllButton && (
          <div className="mt-16 text-center">
            <Button href="/mentors">View All Mentors</Button>
          </div>
        )}
      </div>
    </section>
  );
}
