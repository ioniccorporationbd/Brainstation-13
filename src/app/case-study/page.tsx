import React from 'react';
import CaseStudyHeroSection from './CaseStudyHeroSection';
import CaseStudyOverviewSection from './CaseStudyOverviewSection';
import CaseStudySolutionImpactSection from './CaseStudySolutionImpactSection';
import CaseStudyRelatedSection from './CaseStudyRelatedSection';

import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/case-study",
    title: t("Customer Case Studies & Success Stories | Magnetic Solution Limited"),
    description: t("Explore how Magnetic Solution Limited rebuilds digital platforms for scale — retail, e-commerce, banking and enterprise transformation stories."),
  });
}


const page = () => {
    return (
        <div>
            <CaseStudyHeroSection/>
            <CaseStudyOverviewSection/>
            <CaseStudySolutionImpactSection/>
            <CaseStudyRelatedSection/>
        </div>
    );
};

export default page;