import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

import ErpDevelopmentHeroSection from "./ErpDevelopmentHeroSection";
import ErpDevelopmentIntroSection from "./ErpDevelopmentIntroSection";
import ErpDevelopmentCapabilitiesSection from "./ErpDevelopmentCapabilitiesSection";
import ErpDevelopmentModulesSection from "./ErpDevelopmentModulesSection";
import ErpDevelopmentPlatformsSection from "./ErpDevelopmentPlatformsSection";
import ErpDevelopmentProcessSection from "./ErpDevelopmentProcessSection";
import ErpDevelopmentOutcomesSection from "./ErpDevelopmentOutcomesSection";
import ErpDevelopmentFaqSection from "./ErpDevelopmentFaqSection";
import ErpDevelopmentCtaSection from "./ErpDevelopmentCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("ERP Development | Magnetic Solution Limited"),
    description: t("Custom ERPNext, Frappe and enterprise systems that unify operations, automate workflows and scale with your business."),
  };
}

export default async function ErpDevelopmentPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <ErpDevelopmentHeroSection />
      <ErpDevelopmentIntroSection />
      <ErpDevelopmentCapabilitiesSection />
      <ErpDevelopmentModulesSection />
      <ErpDevelopmentPlatformsSection />
      <ErpDevelopmentProcessSection />
      <ErpDevelopmentOutcomesSection />
      <ErpDevelopmentFaqSection />
      <ErpDevelopmentCtaSection />
    </main>
  );
}
