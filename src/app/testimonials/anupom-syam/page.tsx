import type { Metadata } from "next";

import AnupomCtaSection from "./AnupomCtaSection";
import AnupomHeroSection from "./AnupomHeroSection";
import AnupomTakeawaysSection from "./AnupomTakeawaysSection";

export const metadata: Metadata = {
  title: "Anupom Syam Testimonial | Magnetic Solution Limited",
  description:
    "Anupom Syam, Founder & CEO at Tackle, on how resource augmentation delivered their fintech platform 8X faster than expected.",
};

export default function AnupomSyamPage() {
  return (
    <main>
      <AnupomHeroSection />
      <AnupomTakeawaysSection />
      <AnupomCtaSection />
    </main>
  );
}
