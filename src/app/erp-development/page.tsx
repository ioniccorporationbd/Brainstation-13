import type { Metadata } from "next";

import ErpDevelopmentHeroSection from "./ErpDevelopmentHeroSection";
import ErpDevelopmentIntroSection from "./ErpDevelopmentIntroSection";
import ErpDevelopmentCapabilitiesSection from "./ErpDevelopmentCapabilitiesSection";
import ErpDevelopmentModulesSection from "./ErpDevelopmentModulesSection";
import ErpDevelopmentPlatformsSection from "./ErpDevelopmentPlatformsSection";
import ErpDevelopmentProcessSection from "./ErpDevelopmentProcessSection";
import ErpDevelopmentOutcomesSection from "./ErpDevelopmentOutcomesSection";
import ErpDevelopmentFaqSection from "./ErpDevelopmentFaqSection";
import ErpDevelopmentCtaSection from "./ErpDevelopmentCtaSection";

export const metadata: Metadata = {
  title: "ERP Development | Magnetic Solution Limited",
  description:
    "Custom ERPNext, Frappe and enterprise systems that unify operations, automate workflows and scale with your business.",
};

export default function ErpDevelopmentPage() {
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
