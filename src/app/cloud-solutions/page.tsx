import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

import CloudSolutionsHeroSection from "./CloudSolutionsHeroSection";
import CloudSolutionsIntroSection from "./CloudSolutionsIntroSection";
import CloudSolutionsCapabilitiesSection from "./CloudSolutionsCapabilitiesSection";
import CloudSolutionsProcessSection from "./CloudSolutionsProcessSection";
import CloudSolutionsStatsSection from "./CloudSolutionsStatsSection";
import CloudSolutionsTechnologiesSection from "./CloudSolutionsTechnologiesSection";
import CloudSolutionsCtaSection from "./CloudSolutionsCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Cloud Solutions | Magnetic Solution Limited"),
    description: t("Cloud migration, infrastructure-as-code, observability and cost optimisation that make systems faster, safer and cheaper to run."),
  };
}

export default async function CloudSolutionsPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <CloudSolutionsHeroSection />
      <CloudSolutionsIntroSection />
      <CloudSolutionsCapabilitiesSection />
      <CloudSolutionsProcessSection />
      <CloudSolutionsStatsSection />
      <CloudSolutionsTechnologiesSection />
      <CloudSolutionsCtaSection />
    </main>
  );
}
