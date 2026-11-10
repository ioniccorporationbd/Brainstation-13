import type { Metadata } from "next";
import BlockchainHeroSection from "./BlockchainHeroSection";
import BlockchainTrustedSection from "./BlockchainTrustedSection";
import BlockchainCapabilitySection from "./BlockchainCapabilitySection";
import BlockchainExcellenceSection from "./BlockchainExcellenceSection";
import BlockchainInfrastructureSection from "./BlockchainInfrastructureSection";
import BlockchainEnterpriseSection from "./BlockchainEnterpriseSection";
import BlockchainGlobalAchievementsSection from "./BlockchainGlobalAchievementsSection";
import TechStackSwiperSection from "./TechStackSwiperSection";
import RelatedBlogsSection from "./RelatedBlogsSection";

export const metadata: Metadata = {
  title: "Blockchain Development Services | Magnetic Solution Limited",
  description:
    "Enterprise blockchain and Web3 development: smart contracts, settlement, on-chain compliance, RWA tokenization and managed infrastructure.",
};

export default function BlockchainDevelopmentPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <BlockchainHeroSection />
      <BlockchainTrustedSection />
      <BlockchainCapabilitySection />
      <BlockchainExcellenceSection />
      <BlockchainInfrastructureSection />
      <BlockchainEnterpriseSection />
      <BlockchainGlobalAchievementsSection />
      <TechStackSwiperSection />
      <RelatedBlogsSection />
    </main>
  );
}
