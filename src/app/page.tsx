import HeroBannerSlider from "@/Home_components/HeroBannerSlider";
import TrustedTeamsSection from "@/Home_components/TrustedTeamsSection.tsx";
import CoreCapabilitiesSection from "@/Home_components/CoreCapabilitiesSection";
import MoodleSolutionsSection from "@/Home_components/MoodleSolutionsSection";
import IndustriesInnovationSection from "@/Home_components/IndustriesInnovationSection";
import AIDevelopmentExcellenceSection from "@/Home_components/AIDevelopmentExcellenceSection";
import ProductsSolutionsSection from "@/Home_components/ProductsSolutionsSection";

export default function Home() {
  return (
    <main>
      <HeroBannerSlider />
      <TrustedTeamsSection/>
      <CoreCapabilitiesSection />
        <MoodleSolutionsSection />
         <IndustriesInnovationSection />
         <AIDevelopmentExcellenceSection />
          <ProductsSolutionsSection />
      
    </main>
  );
}