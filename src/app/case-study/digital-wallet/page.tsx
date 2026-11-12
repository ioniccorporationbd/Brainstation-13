import type { Metadata } from "next";

import DigitalWalletHeroSection from "./DigitalWalletHeroSection";
import DigitalWalletChallengeSection from "./DigitalWalletChallengeSection";
import DigitalWalletSolutionSection from "./DigitalWalletSolutionSection";
import DigitalWalletImpactSection from "./DigitalWalletImpactSection";
import DigitalWalletCtaSection from "./DigitalWalletCtaSection";

import { getTranslator } from "@/i18n/server";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Digital Wallet Case Study | Magnetic Solution Limited"),
    description: t("A compliant digital wallet platform that brought secure everyday financial services to underbanked communities at scale."),
  };
}

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
