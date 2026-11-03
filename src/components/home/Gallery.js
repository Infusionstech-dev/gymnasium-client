import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { gallery } from "@/data/home";

export default function Gallery() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          center
          eyebrow="Gallery"
          title={<>Our <span className="text-mint">Facilities</span></>}
          subtitle="Take a look inside our state-of-the-art gym and see where champions are made."
        />

        <div className="mt-14 columns-1 gap-8 sm:columns-2 lg:columns-4">
          {gallery.map((g) => (
            <div key={g.alt} className={`relative mb-8 break-inside-avoid overflow-hidden rounded-xl ${g.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
              <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
