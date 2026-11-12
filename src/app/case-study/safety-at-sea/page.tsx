import type { Metadata } from "next";

import SafetyAtSeaHeroSection from "./SafetyAtSeaHeroSection";
import SafetyAtSeaChallengeSection from "./SafetyAtSeaChallengeSection";
import SafetyAtSeaSolutionSection from "./SafetyAtSeaSolutionSection";
import SafetyAtSeaImpactSection from "./SafetyAtSeaImpactSection";
import SafetyAtSeaCtaSection from "./SafetyAtSeaCtaSection";

import { getTranslator } from "@/i18n/server";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Safety at Sea Case Study | Magnetic Solution Limited"),
    description: t("An IoT boat-safety platform giving crews and authorities real-time visibility to prevent and respond to incidents at sea."),
  };
}

export default function SafetyAtSeaCaseStudyPage() {
  return (
    <main>
      <SafetyAtSeaHeroSection />
      <SafetyAtSeaChallengeSection />
      <SafetyAtSeaSolutionSection />
      <SafetyAtSeaImpactSection />
      <SafetyAtSeaCtaSection />
    </main>
  );
}
