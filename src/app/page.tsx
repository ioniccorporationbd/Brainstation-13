import HeroBannerSlider from "@/Home_components/HeroBannerSlider";
import TrustedTeamsSection from "@/Home_components/TrustedTeamsSection";
import CoreCapabilitiesSection from "@/Home_components/CoreCapabilitiesSection";
import MoodleSolutionsSection from "@/Home_components/MoodleSolutionsSection";
import IndustriesInnovationSection from "@/Home_components/IndustriesInnovationSection";
import AIDevelopmentExcellenceSection from "@/Home_components/AIDevelopmentExcellenceSection";
import ProductsSolutionsSection from "@/Home_components/ProductsSolutionsSection";
import MainIntroSection from "@/Home_components/MainIntroSection";
import BrandCollective from "@/Home_components/BrandCollective";
import TechStackSection from "@/Home_components/TechStackSection";
import ProcessSection from "@/Home_components/ProcessSection";
import CaseStudiesSection from "@/Home_components/CaseStudiesSection";
import JoinOurTeamSection from "@/Home_components/JoinOurTeamSection";


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
          <MainIntroSection />
          <BrandCollective/>
          <TechStackSection/>
          <ProcessSection/>
          <CaseStudiesSection/>
          <JoinOurTeamSection/>
      
    </main>
  );
}