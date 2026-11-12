import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import AemHeroSection from "./AemHeroSection";
import AemDescriptionSection from "./AemDescriptionSection";
import AemOfferedServicesSection from "./AemOfferedServicesSection";
import AemIndustriesSection from "./AemIndustriesSection";
import AemWorkedWithSection from "./AemWorkedWithSection";
import AemProjectHelpSection from "./AemProjectHelpSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Adobe Experience Manager (AEM) | Magnetic Solution Limited"),
    description: t("AEM implementation, integration, managed service, migration and upgrade — full Adobe Experience Manager lifecycle services."),
  };
}

export default async function Page() {
  const { t } = await getTranslator();
  return (
    <div>
      <AemHeroSection />
      <AemDescriptionSection />
      <AemOfferedServicesSection />
      <AemIndustriesSection />
      <AemWorkedWithSection />
      <AemProjectHelpSection />
    </div>
  );
}
