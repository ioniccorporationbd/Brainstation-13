import React from 'react';
import SoftwareTestingHero from './SoftwareTestingHero';
import TestingIntroSection from './TestingIntroSection';
import OfferedServicesSection from './OfferedServicesSection';

import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/services/qa-testing-and-automation",
    title: t("QA Testing & Test Automation Services | Magnetic Solution Limited"),
    description: t("Software testing as a service — a dedicated QA team that finds bugs in realistic test environments and keeps every release reliable."),
  });
}


const page = () => {
    return (
        <div>
            <SoftwareTestingHero/>
            <TestingIntroSection/>
            <OfferedServicesSection/>
        </div>
    );
};

export default page;
