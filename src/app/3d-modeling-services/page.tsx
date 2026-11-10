import React from "react";
import ThreeDModelingHeroSection from "./ThreeDModelingHeroSection";
import ModelingServicesSection from "./ModelingServicesSection";
import RenderingServicesSection from "./RenderingServicesSection";
import HoloGuideSection from "./HoloGuideSection";
import CaseStudiesSection from "./CaseStudiesSection";
import FaqSection from "./FaqSection";
import FinalPickSection from "./FinalPickSection";

const page = () => {
  return (
    <div>
      <ThreeDModelingHeroSection />
      <ModelingServicesSection />
      <RenderingServicesSection />
      <HoloGuideSection />
      <CaseStudiesSection />
      <FaqSection />
      <FinalPickSection />
    </div>
  );
};

export default page;
