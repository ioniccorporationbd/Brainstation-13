import React from 'react';
import { getTranslator } from "@/i18n/server";
import StaffAugmentationHeroSection from './StaffAugmentationHeroSection';
import BorderlessTechProfessionalsSection from './BorderlessTechProfessionalsSection';
import BtpDifferentSection from './BtpDifferentSection';
import RiskFreeTimelineSection from './RiskFreeTimelineSection';
import FlexibleEngagementModelsSection from './FlexibleEngagementModelsSection';
import TrustedTechTeamsSection from './TrustedTechTeamsSection';
import WhyClientsTrustUsSection from './WhyClientsTrustUsSection';
import ClientVideoTestimonialsSection from './ClientVideoTestimonialsSection';
import StaffAugmentationFaqSection from './StaffAugmentationFaqSection';
import DeliveryCentersGallerySection from './DeliveryCentersGallerySection';

import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/staff-augmentation",
    title: t("IT Staff Augmentation Services | Magnetic Solution Limited"),
    description: t("Onboard pre-vetted offshore engineers within weeks, with offshore account management support built for speed."),
  });
}



const page = () => {
    return (
        <div>
            <StaffAugmentationHeroSection/>
            <BorderlessTechProfessionalsSection/>
            <BtpDifferentSection/>
            <RiskFreeTimelineSection/>
            <FlexibleEngagementModelsSection/>
            <TrustedTechTeamsSection/>
            <WhyClientsTrustUsSection/>
            <ClientVideoTestimonialsSection/>
            <StaffAugmentationFaqSection/>
            <DeliveryCentersGallerySection/>
        </div>
    );
};

export default page;
