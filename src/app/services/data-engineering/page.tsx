import React from "react";
import { getTranslator } from "@/i18n/server";
import DataEngineeringHeroSection from "./DataEngineeringHeroSection";
import DataTrustedBySection from "./DataTrustedBySection";
import DataCoreServicesSection from "./DataCoreServicesSection";
import DataToolsSection from "./DataToolsSection";
import DataCaseStudiesSection from "./DataCaseStudiesSection";
import DataWhyBrainStationSection from "./DataWhyBrainStationSection";

import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/services/data-engineering",
    title: t("AI-Ready Data Engineering Platforms | Magnetic Solution Limited"),
    description: t("Cloud-native, governance-first data platforms engineered for reliability and AI readiness — secure pipelines with fast, low-risk rollout."),
  });
}


const page = () => {
  return (
    <div>
      <DataEngineeringHeroSection />
      <DataTrustedBySection />
      <DataCoreServicesSection />
      <DataToolsSection />
      <DataCaseStudiesSection />
      <DataWhyBrainStationSection />
    </div>
  );
};

export default page;
