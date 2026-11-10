import MobileAppHeroSection from "./MobileAppHeroSection";
import MobileAppDescriptionSection from "./MobileAppDescriptionSection";
import OfferedServicesSection from "./OfferedServicesSection";
import TechnologiesSection from "./TechnologiesSection";
import IndustriesSection from "./IndustriesSection";
import WorkedWithSection from "./WorkedWithSection";
import MobileAppTypesSection from "./MobileAppTypesSection";
import { MobileAppProcessSection } from "./MobileAppProcessSection";
import WebMobileFaqSection from "./WebMobileFaqSection";

const page = () => {
  return (
    <div>
      <MobileAppHeroSection />
      <MobileAppDescriptionSection />
      <OfferedServicesSection />
      <TechnologiesSection />
      <IndustriesSection />
      <WorkedWithSection />
      <MobileAppTypesSection />
      <MobileAppProcessSection />
      <WebMobileFaqSection />
    </div>
  );
};

export default page;
