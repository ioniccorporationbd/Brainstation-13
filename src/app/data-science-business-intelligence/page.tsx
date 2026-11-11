import type { Metadata } from "next";

import DataScienceBusinessIntelligenceHeroSection from "./DataScienceBusinessIntelligenceHeroSection";
import DataScienceBusinessIntelligenceIntroSection from "./DataScienceBusinessIntelligenceIntroSection";
import DataScienceServicesSection from "./DataScienceServicesSection";
import DataSciencePipelineSection from "./DataSciencePipelineSection";
import DataScienceCapabilitiesSection from "./DataScienceCapabilitiesSection";
import DataScienceTechnologiesSection from "./DataScienceTechnologiesSection";
import DataScienceProcessSection from "./DataScienceProcessSection";
import DataScienceOutcomesSection from "./DataScienceOutcomesSection";
import DataScienceIndustriesSection from "./DataScienceIndustriesSection";
import DataScienceResourcesSection from "./DataScienceResourcesSection";
import DataScienceFaqSection from "./DataScienceFaqSection";
import DataScienceCtaSection from "./DataScienceCtaSection";

export const metadata: Metadata = {
  title: "Data Science & Business Intelligence | Magnetic Solution Limited",
  description:
    "Data analytics, business intelligence, predictive analytics and machine learning services — pipelines, dashboards and models built on a single trusted model.",
};

export default function DataScienceBusinessIntelligencePage() {
  return (
    <main>
      <DataScienceBusinessIntelligenceHeroSection />
      <DataScienceBusinessIntelligenceIntroSection />
      <DataScienceServicesSection />
      <DataSciencePipelineSection />
      <DataScienceCapabilitiesSection />
      <DataScienceTechnologiesSection />
      <DataScienceProcessSection />
      <DataScienceOutcomesSection />
      <DataScienceIndustriesSection />
      <DataScienceResourcesSection />
      <DataScienceFaqSection />
      <DataScienceCtaSection />
    </main>
  );
}
