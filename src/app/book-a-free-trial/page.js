import BookingForm from "@/components/booking/BookingForm";
import PassSidebar from "@/components/booking/PassSidebar";
import Cta from "@/components/home/Cta";

export const metadata = {
  title: "Book a Free Trial | AltaFit",
  description: "Configure your free AltaFit trial: choose your track, facility, time and lock in your spot.",
};

export default function BookFreeTrialPage() {
  return (
    <>
      <section className="border-b border-white/10 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 sm:px-8 lg:grid-cols-[910fr_635fr] lg:gap-14">
          <BookingForm />
          <PassSidebar />
        </div>
      </section>
      <Cta />
    </>
  );
}
