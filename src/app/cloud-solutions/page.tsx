import type { Metadata } from "next";

import CloudSolutionsHeroSection from "./CloudSolutionsHeroSection";
import CloudSolutionsIntroSection from "./CloudSolutionsIntroSection";
import CloudSolutionsCapabilitiesSection from "./CloudSolutionsCapabilitiesSection";
import CloudSolutionsProcessSection from "./CloudSolutionsProcessSection";
import CloudSolutionsStatsSection from "./CloudSolutionsStatsSection";
import CloudSolutionsTechnologiesSection from "./CloudSolutionsTechnologiesSection";
import CloudSolutionsCtaSection from "./CloudSolutionsCtaSection";

export const metadata: Metadata = {
  title: "Cloud Solutions | Magnetic Solution Limited",
  description:
    "Cloud migration, infrastructure-as-code, observability and cost optimisation that make systems faster, safer and cheaper to run.",
};

export default function CloudSolutionsPage() {
  return (
    <main>
      <CloudSolutionsHeroSection />
      <CloudSolutionsIntroSection />
      <CloudSolutionsCapabilitiesSection />
      <CloudSolutionsProcessSection />
      <CloudSolutionsStatsSection />
      <CloudSolutionsTechnologiesSection />
      <CloudSolutionsCtaSection />
    </main>
  );
}
