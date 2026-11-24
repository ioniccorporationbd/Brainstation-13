import React from 'react';
import { getTranslator } from "@/i18n/server";
import DigitalTransformationHeroSection from './DigitalTransformationHeroSection';
import DigitalTransformationFindingsSection from './DigitalTransformationFindingsSection';
import WhyDigitalTransformationMattersSection from './WhyDigitalTransformationMattersSection';
import DigitalTransformationCoreCapabilitiesSection from './DigitalTransformationCoreCapabilitiesSection';
import DigitalTransformationApproachSection from './DigitalTransformationApproachSection';
import DigitalTransformationPartnerSection from './DigitalTransformationPartnerSection';
import DigitalTransformationFaqSection from './DigitalTransformationFaqSection';

import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/services/digital-transformation",
    title: t("Digital Transformation & Legacy Modernization | Magnetic Solution Limited"),
    description: t("Modernize legacy applications with AI, RPA and cloud automation — turn manual processes into smart, automated workflows."),
  });
}


const page = () => {
    return (
        <div>
            <DigitalTransformationHeroSection/>
            <DigitalTransformationFindingsSection/>
            <WhyDigitalTransformationMattersSection/>
            <DigitalTransformationCoreCapabilitiesSection/>
            <DigitalTransformationApproachSection/>
            <DigitalTransformationPartnerSection/>
            <DigitalTransformationFaqSection/>
        </div>
    );
};

export default page;
