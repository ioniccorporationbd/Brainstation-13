import React from 'react';
import { getTranslator } from "@/i18n/server";
import ManagedServiceHeroSection from './ManagedServiceHeroSection';
import WhyChooseBrainStationSection from './WhyChooseBrainStationSection';
import ManagedHowItWorksSection from './ManagedHowItWorksSection';
import EngagementModelsSection from './EngagementModelsSection';
import ManagedServicesFaqSection from './ManagedServicesFaqSection';

import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/services/managed-service",
    title: t("Managed Software Delivery Services | Magnetic Solution Limited"),
    description: t("From planning to release and post-launch support, we run your complete software lifecycle so your team can focus on the business."),
  });
}


const page = () => {
  return (
    <div>
      <ManagedServiceHeroSection />
      <WhyChooseBrainStationSection />
      <ManagedHowItWorksSection />
      <EngagementModelsSection />
      <ManagedServicesFaqSection />
    </div>
  );
};

export default page;
