import React from 'react';
import { getTranslator } from "@/i18n/server";
import InsuranceHeroSection from './InsuranceHeroSection';
import InsuranceCapabilitiesSection from './InsuranceCapabilitiesSection';
import InsuranceProvenResultsSection from './InsuranceProvenResultsSection';
import InsuranceWhatWeSolveSection from './InsuranceWhatWeSolveSection';
import InsuranceWhatWeDeliverSection from './InsuranceWhatWeDeliverSection';
import InsuranceTechnologySolutionsSection from './InsuranceTechnologySolutionsSection';

import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/insurtech",
    title: t("AI-Powered InsurTech Solutions | Magnetic Solution Limited"),
    description: t("Modular InsurTech that modernizes claims, policy and agent operations — adopt one module or the full stack, integrated with your core systems."),
  });
}


const page = () => {
    return (
        <div>
            <InsuranceHeroSection/>
            <InsuranceCapabilitiesSection/>
            <InsuranceProvenResultsSection/>
            <InsuranceWhatWeSolveSection/>
            <InsuranceWhatWeDeliverSection/>
            <InsuranceTechnologySolutionsSection/>
        </div>
    );
};

export default page;