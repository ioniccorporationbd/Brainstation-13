import type { Metadata } from "next";

import CaseStudiesHeroSection from "./CaseStudiesHeroSection";
import CaseStudiesSectorsSection from "./CaseStudiesSectorsSection";
import CaseStudiesGridSection from "./CaseStudiesGridSection";
import CaseStudiesCtaSection from "./CaseStudiesCtaSection";

export const metadata: Metadata = {
  title: "Case Studies | Magnetic Solution Limited",
  description:
    "Real projects, real outcomes. Explore how Magnetic Solution Limited helped clients across fintech, retail, health and more build and scale technology.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <CaseStudiesHeroSection />
      <CaseStudiesSectorsSection />
      <CaseStudiesGridSection />
      <CaseStudiesCtaSection />
    </main>
  );
}
