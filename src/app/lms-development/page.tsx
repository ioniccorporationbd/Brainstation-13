import React from 'react';
import MoodleHeroSection from './MoodleHeroSection';
import MoodleFeaturesSection from './MoodleFeaturesSection';
import MoodleReadyPluginsSection from './MoodleReadyPluginsSection';
import ToolsAndTechSection from './ToolsAndTechSection';
import HowWeWorkSection from './HowWeWorkSection';

import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/lms-development",
    title: t("Enterprise LMS Development & Proctoring | Magnetic Solution Limited"),
    description: t("Secure, scalable, audit-ready learning and assessment platforms for institutions that cannot afford downtime."),
  });
}


const page = () => {
    return (
        <div>
            <MoodleHeroSection/>
            <MoodleFeaturesSection/>
            <MoodleReadyPluginsSection/>
            <ToolsAndTechSection/>
            <HowWeWorkSection/>
        </div>
    );
};

export default page;
