import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { storyImages, values } from "@/data/about";

export default function Story() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <div>
          <p className="font-display text-xl font-bold uppercase tracking-[0.25em] text-gold">Why AltaFit</p>
          <h2 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[1.15] sm:text-7xl xl:text-8xl">
            We rejected the <span className="text-mint">complacent gym</span> model.
          </h2>
          <p className="mt-10 text-lg leading-relaxed text-white/75 sm:text-xl">
            The mainstream fitness industry was constructed around passive attrition: sell recurring access to thousands, hope only thirty show up, and fill the floor with isolating machinery designed to keep people seated and disconnected.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-gold/60 bg-ink-soft p-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-gold/60 text-gold">
                  <Icon name={value.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold uppercase text-mint">{value.title}</h3>
                <p className="mt-1 text-sm text-white/85">{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two overlapping photos: top-left and bottom-right */}
        <div className="relative mx-auto aspect-[785/890] w-full max-w-xl lg:max-w-none">
          <div className="absolute left-0 top-0 h-[66%] w-[70%] overflow-hidden rounded-xl">
            <Image src={storyImages.main} alt="Vintage training weights" fill sizes="(min-width: 1024px) 35vw, 70vw" className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 h-[69%] w-[70%] overflow-hidden rounded-xl shadow-2xl">
            <Image src={storyImages.secondary} alt="Dumbbell rack" fill sizes="(min-width: 1024px) 35vw, 70vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
