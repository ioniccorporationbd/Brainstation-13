import TechnologyConsultingHeroSection from "./TechnologyConsultingHeroSection";
import TechnologyConsultingBenefitsSection from "./TechnologyConsultingBenefitsSection";
import TechnologyConsultingConsultationsSection from "./TechnologyConsultingConsultationsSection";
import TechnologyConsultingProcessSection from "./TechnologyConsultingProcessSection";
import TechnologyConsultingEngagementModelsSection from "./TechnologyConsultingEngagementModelsSection";
import TechnologyConsultingPartnerSection from "./TechnologyConsultingPartnerSection";
import TechnologyConsultingSuccessStoriesSection from "./TechnologyConsultingSuccessStoriesSection";
import TechnologyConsultingFaqSection from "./TechnologyConsultingFaqSection";

export default function Page() {
  return (
    <main>
      <TechnologyConsultingHeroSection />
      <TechnologyConsultingBenefitsSection />
      <TechnologyConsultingConsultationsSection />
      <TechnologyConsultingProcessSection/>
      <TechnologyConsultingEngagementModelsSection/>
      <TechnologyConsultingPartnerSection/>
      <TechnologyConsultingSuccessStoriesSection/>
      <TechnologyConsultingFaqSection/>
    </main>
  );
}