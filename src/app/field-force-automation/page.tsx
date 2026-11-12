import type { Metadata } from "next";
import EnterpriseMsfaHeroSection from "./EnterpriseMsfaHeroSection";
import EnterpriseMsfaClientsLogoSwiperSection from "./EnterpriseMsfaClientsLogoSwiperSection";
import EnterpriseMsfaChallengesSection from "./EnterpriseMsfaChallengesSection";
import EnterpriseMsfaWorkflowEngineSection from "./EnterpriseMsfaWorkflowEngineSection";
import EnterpriseMsfaCoreEcosystemSection from "./EnterpriseMsfaCoreEcosystemSection";
import EnterpriseMsfaPlatformHighlightsSection from "./EnterpriseMsfaPlatformHighlightsSection";
import EnterpriseMsfaArchitectureSection from "./EnterpriseMsfaArchitectureSection";
import EnterpriseMsfaTrustedEnterprisesSection from "./EnterpriseMsfaTrustedEnterprisesSection";
import EnterpriseMsfaMeasuredOutcomesSection from "./EnterpriseMsfaMeasuredOutcomesSection";
import EnterpriseMsfaIntegrationsSection from "./EnterpriseMsfaIntegrationsSection";
import EnterpriseMsfaAiRoadmapSection from "./EnterpriseMsfaAiRoadmapSection";
import EnterpriseMsfaCaseStudiesSection from "./EnterpriseMsfaCaseStudiesSection";

import { getTranslator } from "@/i18n/server";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Field Force Automation | Magnetic Solution Limited"),
    description: t("Digitize, govern, and optimize last-mile field sales execution with Magnetic Solution Limited's offline-first, ERP-integrated field force automation platform."),
  };
}

const FieldForceAutomationPage = () => {
  return (
    <main className="overflow-hidden bg-white text-[#000000]">
      <EnterpriseMsfaHeroSection />
      <EnterpriseMsfaClientsLogoSwiperSection />
      <EnterpriseMsfaChallengesSection />
      <EnterpriseMsfaWorkflowEngineSection />
      <EnterpriseMsfaCoreEcosystemSection />
      <EnterpriseMsfaPlatformHighlightsSection />
      <EnterpriseMsfaArchitectureSection />
      <EnterpriseMsfaTrustedEnterprisesSection />
      <EnterpriseMsfaMeasuredOutcomesSection />
      <EnterpriseMsfaIntegrationsSection />
      <EnterpriseMsfaAiRoadmapSection />
      <EnterpriseMsfaCaseStudiesSection />
    </main>
  );
};

export default FieldForceAutomationPage;
