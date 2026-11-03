import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Classes from "@/components/home/Classes";
import Cta from "@/components/home/Cta";
import Story from "@/components/about/Story";
import { aboutHeroImage } from "@/data/about";

export const metadata = {
  title: "About | AltaFit",
  description: "Built on discipline. Forged in community. Learn the story behind AltaFit.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        image={aboutHeroImage}
        title={
          <>
            Built on <span className="text-mint">discipline</span>.
            <br />
            Forged in <span className="text-gold">community.</span>
          </>
        }
        subtitle="Founded with a singular conviction: that athletic performance is not reserved for the elite, but an uncompromising standard to elevate everyday human potential."
      />
      <Stats />
      <Story />
      <Classes />
      <Cta />
    </>
  );
}
