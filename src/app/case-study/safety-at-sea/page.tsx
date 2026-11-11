import type { Metadata } from "next";

import SafetyAtSeaHeroSection from "./SafetyAtSeaHeroSection";
import SafetyAtSeaChallengeSection from "./SafetyAtSeaChallengeSection";
import SafetyAtSeaSolutionSection from "./SafetyAtSeaSolutionSection";
import SafetyAtSeaImpactSection from "./SafetyAtSeaImpactSection";
import SafetyAtSeaCtaSection from "./SafetyAtSeaCtaSection";

export const metadata: Metadata = {
  title: "Safety at Sea Case Study | Magnetic Solution Limited",
  description:
    "An IoT boat-safety platform giving crews and authorities real-time visibility to prevent and respond to incidents at sea.",
};

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
