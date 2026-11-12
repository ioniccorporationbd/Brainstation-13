import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

import AnupomCtaSection from "./AnupomCtaSection";
import AnupomHeroSection from "./AnupomHeroSection";
import AnupomTakeawaysSection from "./AnupomTakeawaysSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Anupom Syam Testimonial | Magnetic Solution Limited"),
    description: t("Anupom Syam, Founder & CEO at Tackle, on how resource augmentation delivered their fintech platform 8X faster than expected."),
  };
}

export default async function AnupomSyamPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <AnupomHeroSection />
      <AnupomTakeawaysSection />
      <AnupomCtaSection />
    </main>
  );
}
