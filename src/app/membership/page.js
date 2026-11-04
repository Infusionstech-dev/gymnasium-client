import Membership from "@/components/home/Membership";
import Cta from "@/components/home/Cta";

export const metadata = {
  title: "Membership | AltaFit",
  description: "Flexible membership plans to fit your goals, lifestyle and routine.",
};

export default function MembershipPage() {
  return (
    <>
      <Membership ctaLabel="Book Plan" ctaHref="/book-a-free-trial" />
      <Cta showMembershipButton={false} />
    </>
  );
}
