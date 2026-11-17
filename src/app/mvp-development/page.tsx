import React from 'react';
import { getTranslator } from "@/i18n/server";
import MvpDevelopmentHeroSection from './MvpDevelopmentHeroSection';
import MvpIntroSection from './MvpIntroSection';
import MvpBenefitsSection from './MvpBenefitsSection';
import MvpTraditionalVsAiSection from './MvpTraditionalVsAiSection';
import MvpAiDrivenSdlcProcessSection from './MvpAiDrivenSdlcProcessSection';
import MvpFaqSection from './MvpFaqSection';

import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/mvp-development",
    title: t("MVP Development Services | Magnetic Solution Limited"),
    description: t("Validate your concept with a lean, high-impact MVP built to attract early users, prove value and support your next funding round."),
  });
}



const page = () => {
    return (
        <div>
            <MvpDevelopmentHeroSection/>
            <MvpIntroSection/>
            <MvpBenefitsSection/>
            <MvpTraditionalVsAiSection/>
            <MvpAiDrivenSdlcProcessSection/>
            <MvpFaqSection/>
        </div>
    );
};

export default page;