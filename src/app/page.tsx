import HeroBannerSlider from "@/Home_components/HeroBannerSlider";
import TrustedTeamsSection from "@/Home_components/TrustedTeamsSection";
import CoreCapabilitiesSection from "@/Home_components/CoreCapabilitiesSection";
import MoodleSolutionsSection from "@/Home_components/MoodleSolutionsSection";
import IndustriesInnovationSection from "@/Home_components/IndustriesInnovationSection";
import AIDevelopmentExcellenceSection from "@/Home_components/AIDevelopmentExcellenceSection";
import ProductsSolutionsSection from "@/Home_components/ProductsSolutionsSection";
import MainIntroSection from "@/Home_components/MainIntroSection";
import TechStackSection from "@/Home_components/TechStackSection";
import ProcessSection from "@/Home_components/ProcessSection";
import CaseStudiesSection from "@/Home_components/CaseStudiesSection";

import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/",
    title: t("Enterprise Software, AI & Digital Transformation Services | Magnetic Solution Limited"),
    description: t("Magnetic Solution Limited delivers enterprise-grade software, AI, data engineering, staff augmentation, Shopify, blockchain and LMS solutions for banks, fintechs and enterprises."),
  });
}



export default function Home() {
  return (
    <main className="home-mobile">
      <HeroBannerSlider />
      <TrustedTeamsSection/>
      <CoreCapabilitiesSection />
        <MoodleSolutionsSection />
         <IndustriesInnovationSection />
         <AIDevelopmentExcellenceSection />
          <ProductsSolutionsSection />
          <MainIntroSection />
          <TechStackSection/>
          <ProcessSection/>
          <CaseStudiesSection/>
      
    </main>
  );
}