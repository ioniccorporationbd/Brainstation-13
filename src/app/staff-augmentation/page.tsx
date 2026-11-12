import React from 'react';
import { getTranslator } from "@/i18n/server";
import StaffAugmentationHeroSection from './StaffAugmentationHeroSection';
import CompanyStatsAwardsSection from './CompanyStatsAwardsSection';
import BorderlessTechProfessionalsSection from './BorderlessTechProfessionalsSection';
import BtpDifferentSection from './BtpDifferentSection';
import RiskFreeTimelineSection from './RiskFreeTimelineSection';
import FlexibleEngagementModelsSection from './FlexibleEngagementModelsSection';
import TrustedTechTeamsSection from './TrustedTechTeamsSection';
import WhyClientsTrustUsSection from './WhyClientsTrustUsSection';
import ClientVideoTestimonialsSection from './ClientVideoTestimonialsSection';
import StaffAugmentationFaqSection from './StaffAugmentationFaqSection';
import DeliveryCentersGallerySection from './DeliveryCentersGallerySection';


const page = () => {
    return (
        <div>
            <StaffAugmentationHeroSection/>
            <CompanyStatsAwardsSection/>
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
