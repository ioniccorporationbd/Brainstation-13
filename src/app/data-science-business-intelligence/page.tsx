import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

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

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Data Science & Business Intelligence | Magnetic Solution Limited"),
    description: t("Data analytics, business intelligence, predictive analytics and machine learning services — pipelines, dashboards and models built on a single trusted model."),
  };
}

export default async function DataScienceBusinessIntelligencePage() {
  const { t } = await getTranslator();
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
