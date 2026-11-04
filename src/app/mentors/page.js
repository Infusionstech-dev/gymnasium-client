import Trainers from "@/components/home/Trainers";
import Cta from "@/components/home/Cta";
import { mentors } from "@/data/mentors";

export const metadata = {
  title: "Mentors | AltaFit",
  description: "Meet the AltaFit trainers. Real experts. Real results.",
};

export default function MentorsPage() {
  return (
    <>
      <div className="border-b border-white/10">
        <Trainers trainers={mentors} showViewAllButton={false} />
      </div>
      <Cta />
    </>
  );
}
