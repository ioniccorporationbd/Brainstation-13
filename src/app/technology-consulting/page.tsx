import TechnologyConsultingHeroSection from "./TechnologyConsultingHeroSection";
import { getTranslator } from "@/i18n/server";
import TechnologyConsultingBenefitsSection from "./TechnologyConsultingBenefitsSection";
import TechnologyConsultingConsultationsSection from "./TechnologyConsultingConsultationsSection";
import TechnologyConsultingProcessSection from "./TechnologyConsultingProcessSection";
import TechnologyConsultingEngagementModelsSection from "./TechnologyConsultingEngagementModelsSection";
import TechnologyConsultingPartnerSection from "./TechnologyConsultingPartnerSection";
import TechnologyConsultingFaqSection from "./TechnologyConsultingFaqSection";

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
