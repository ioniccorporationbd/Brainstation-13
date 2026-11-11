import type { Metadata } from "next";

import DigitalWalletHeroSection from "./DigitalWalletHeroSection";
import DigitalWalletChallengeSection from "./DigitalWalletChallengeSection";
import DigitalWalletSolutionSection from "./DigitalWalletSolutionSection";
import DigitalWalletImpactSection from "./DigitalWalletImpactSection";
import DigitalWalletCtaSection from "./DigitalWalletCtaSection";

export const metadata: Metadata = {
  title: "Digital Wallet Case Study | Magnetic Solution Limited",
  description:
    "A compliant digital wallet platform that brought secure everyday financial services to underbanked communities at scale.",
};

export default function DigitalWalletCaseStudyPage() {
  return (
    <main>
      <DigitalWalletHeroSection />
      <DigitalWalletChallengeSection />
      <DigitalWalletSolutionSection />
      <DigitalWalletImpactSection />
      <DigitalWalletCtaSection />
    </main>
  );
}
