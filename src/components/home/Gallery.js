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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-[376fr_408fr_408fr_312fr] lg:gap-8">
          {gallery.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-6 lg:gap-8">
              {column.map((photo) => (
                <div
                  key={photo.alt}
                  style={{ "--photo-height": `${photo.height}px` }}
                  className="relative h-72 overflow-hidden rounded-xl lg:h-(--photo-height)"
                >
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
