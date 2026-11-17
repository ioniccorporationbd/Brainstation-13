import React from "react";
import ThreeDModelingHeroSection from "./ThreeDModelingHeroSection";
import ModelingServicesSection from "./ModelingServicesSection";
import RenderingServicesSection from "./RenderingServicesSection";
import HoloGuideSection from "./HoloGuideSection";
import CaseStudiesSection from "./CaseStudiesSection";
import FaqSection from "./FaqSection";
import FinalPickSection from "./FinalPickSection";

import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/3d-modeling-services",
    title: t("3D Modeling, Rendering & Animation Services | Magnetic Solution Limited"),
    description: t("High-precision 3D modeling, animation, technical explainers and AI-powered system visualization for global industries."),
  });
}


const page = () => {
  return (
    <div>
      <ThreeDModelingHeroSection />
      <ModelingServicesSection />
      <RenderingServicesSection />
      <HoloGuideSection />
      <CaseStudiesSection />
      <FaqSection />
      <FinalPickSection />
    </div>
  );
};

export default page;
