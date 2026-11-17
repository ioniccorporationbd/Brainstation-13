import MobileAppHeroSection from "./MobileAppHeroSection";
import MobileAppDescriptionSection from "./MobileAppDescriptionSection";
import OfferedServicesSection from "./OfferedServicesSection";
import TechnologiesSection from "./TechnologiesSection";
import IndustriesSection from "./IndustriesSection";
import WorkedWithSection from "./WorkedWithSection";
import MobileAppTypesSection from "./MobileAppTypesSection";
import { MobileAppProcessSection } from "./MobileAppProcessSection";
import WebMobileFaqSection from "./WebMobileFaqSection";

import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/web-mobile-app-development",
    title: t("Web & Mobile App Development Services | Magnetic Solution Limited"),
    description: t("Native, cross-platform and web applications engineered for performance, security and long-term maintainability."),
  });
}


const page = () => {
  return (
    <div>
      <MobileAppHeroSection />
      <MobileAppDescriptionSection />
      <OfferedServicesSection />
      <TechnologiesSection />
      <IndustriesSection />
      <WorkedWithSection />
      <MobileAppTypesSection />
      <MobileAppProcessSection />
      <WebMobileFaqSection />
    </div>
  );
};

export default page;
