import Image from "next/image";
import Button from "@/components/ui/Button";
import { ctaImage } from "@/data/home";

export default function Cta() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[783/506] overflow-hidden rounded-xl border border-white/20 shadow-2xl">
          <Image src={ctaImage} alt="Athlete ready to train" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover grayscale" />
          <div className="absolute inset-0 bg-ink/20" />
        </div>

        <div>
          <p className="font-display text-xl font-bold uppercase tracking-[0.3em] text-gold">Ready for a change?</p>
          <h2 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[1.1] sm:text-7xl">
            Start your <span className="text-mint">fitness</span> journey today
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/75 sm:text-xl">
            Book a free trial, meet our team and experience what makes AltaFit different.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/book-a-free-trial">Book a Free Trial</Button>
            <Button href="/membership" variant="outline">Explore Membership</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
