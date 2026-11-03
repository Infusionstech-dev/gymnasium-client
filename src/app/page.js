import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyAltafit from "@/components/home/WhyAltafit";
import Classes from "@/components/home/Classes";
import Gallery from "@/components/home/Gallery";
import Membership from "@/components/home/Membership";
import Trainers from "@/components/home/Trainers";
import Faq from "@/components/home/Faq";
import Testimonials from "@/components/home/Testimonials";
import Cta from "@/components/home/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyAltafit />
      <Classes />
      <Gallery />
      <Membership />
      <Trainers />
      <Faq />
      <Testimonials />
      <Cta />
    </>
  );
}
