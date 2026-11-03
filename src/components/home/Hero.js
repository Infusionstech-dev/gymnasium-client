import Image from "next/image";
import Button from "@/components/ui/Button";
import { heroImage, memberAvatars } from "@/data/home";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-6rem)] items-center overflow-hidden">
      <Image src={heroImage} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-ink/75" />

      <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8">
        <p className="font-display text-xl font-bold uppercase tracking-[0.3em] text-gold sm:text-2xl">More than a gym</p>
        <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-none sm:text-7xl lg:text-8xl">
          Stronger People <span className="text-mint">Brighter Lives.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg text-white/85 sm:text-2xl">
          World-class training, expert coaches, and a supportive community to help you become your strongest, healthiest self.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/book-a-free-trial">Book a Free Trial</Button>
          <Button href="/membership" variant="outline">Explore Memberships</Button>
        </div>

        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center gap-4 border-t border-white/15 pt-6 sm:flex-row">
          <div className="flex -space-x-3">
            {memberAvatars.map((src) => (
              <Image key={src} src={src} alt="" width={40} height={40} className="h-10 w-10 rounded-full border-2 border-ink object-cover" />
            ))}
          </div>
          <p className="text-lg">
            <span className="font-semibold">10,000+ members</span>{" "}
            <span className="font-light text-white/80">&quot;Real people. Real results.&quot;</span>
          </p>
        </div>
      </div>
    </section>
  );
}
