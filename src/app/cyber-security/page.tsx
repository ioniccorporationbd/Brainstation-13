import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

import CyberSecurityHeroSection from "./CyberSecurityHeroSection";
import CyberSecurityFindingsSection from "./CyberSecurityFindingsSection";
import CyberSecurityMattersSection from "./CyberSecurityMattersSection";
import CyberSecurityCapabilitiesSection from "./CyberSecurityCapabilitiesSection";
import CyberSecurityApproachSection from "./CyberSecurityApproachSection";
import CyberSecurityPartnerSection from "./CyberSecurityPartnerSection";
import CyberSecurityEngagementsSection from "./CyberSecurityEngagementsSection";
import CyberSecurityToolsSection from "./CyberSecurityToolsSection";
import CyberSecurityFaqSection from "./CyberSecurityFaqSection";
import CyberSecurityCtaSection from "./CyberSecurityCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Cyber Security Services | Magnetic Solution Limited"),
    description: t("Security assessments, penetration testing, API and cloud security assessment, plus breach response — delivered by Magnetic Solution Limited."),
  };
}

export default async function CyberSecurityPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <CyberSecurityHeroSection />
      <CyberSecurityFindingsSection />
      <CyberSecurityMattersSection />
      <CyberSecurityCapabilitiesSection />
      <CyberSecurityApproachSection />
      <CyberSecurityPartnerSection />
      <CyberSecurityEngagementsSection />
      <CyberSecurityToolsSection />
      <CyberSecurityFaqSection />
      <CyberSecurityCtaSection />
    </main>
  );
}
