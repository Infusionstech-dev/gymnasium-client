import Gallery from "@/components/home/Gallery";
import Cta from "@/components/home/Cta";

export const metadata = {
  title: "Gallery | AltaFit",
  description: "Take a look inside our state-of-the-art gym and see where champions are made.",
};

export default function GalleryPage() {
  return (
    <>
      <div className="border-b border-white/10">
        <Gallery />
      </div>
      <Cta />
    </>
  );
}
