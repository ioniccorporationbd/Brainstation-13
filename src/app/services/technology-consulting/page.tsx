import TechnologyConsultingHeroSection from "./TechnologyConsultingHeroSection";
import { getTranslator } from "@/i18n/server";
import TechnologyConsultingBenefitsSection from "./TechnologyConsultingBenefitsSection";
import TechnologyConsultingConsultationsSection from "./TechnologyConsultingConsultationsSection";
import TechnologyConsultingProcessSection from "./TechnologyConsultingProcessSection";
import TechnologyConsultingEngagementModelsSection from "./TechnologyConsultingEngagementModelsSection";
import TechnologyConsultingPartnerSection from "./TechnologyConsultingPartnerSection";
import TechnologyConsultingFaqSection from "./TechnologyConsultingFaqSection";

import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/services/technology-consulting",
    title: t("Technology Consulting Services | Magnetic Solution Limited"),
    description: t("We help teams modernize systems, adopt emerging technology and build digital products with strategy that scales."),
  });
}


export default async function Page() {
  const { t } = await getTranslator();
  return (
    <main>
      <TechnologyConsultingHeroSection />
      <TechnologyConsultingBenefitsSection />
      <TechnologyConsultingConsultationsSection />
      <TechnologyConsultingProcessSection />
      <TechnologyConsultingEngagementModelsSection />
      <TechnologyConsultingPartnerSection />
      <TechnologyConsultingFaqSection />
    </main>
  );
}
