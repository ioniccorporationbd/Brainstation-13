import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Cyber Security Services | Magnetic Solution Limited",
  description:
    "Security assessments, penetration testing, API and cloud security assessment, plus breach response — delivered by Magnetic Solution Limited.",
};

export default function CyberSecurityPage() {
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
