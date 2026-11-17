import React from 'react';
import { getTranslator } from "@/i18n/server";
import MLAIHeroSection from './MLAIHeroSection';
import MLAIServicesSection from './MLAIServicesSection';
import MLAITechnologiesSection from './MLAITechnologiesSection';
import MLAIIndustriesSection from './MLAIIndustriesSection';
import MLAIWorkedWithSection from './MLAIWorkedWithSection';
import MLAICapabilitiesSection from './MLAICapabilitiesSection';
import MLAIWhyChooseSection from './MLAIWhyChooseSection';
import MLAIFAQSection from './MLAIFAQSection';

import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/ml-ai-development",
    title: t("Machine Learning & AI Development | Magnetic Solution Limited"),
    description: t("We design, build and deploy production-ready machine learning and AI systems that automate processes and uncover hidden patterns."),
  });
}




const page = () => {
  return (
    <div>
      <MLAIHeroSection/>
      <MLAIServicesSection/>
      <MLAITechnologiesSection/>
      <MLAIIndustriesSection/>
      <MLAIWorkedWithSection/>
      <MLAICapabilitiesSection/>
      <MLAIWhyChooseSection/>
      <MLAIFAQSection/>
      
    </div>
  );
};

export default page;