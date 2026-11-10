import React from "react";
import DataEngineeringHeroSection from "./DataEngineeringHeroSection";
import DataTrustedBySection from "./DataTrustedBySection";
import DataCoreServicesSection from "./DataCoreServicesSection";
import DataToolsSection from "./DataToolsSection";
import DataCaseStudiesSection from "./DataCaseStudiesSection";
import DataWhyBrainStationSection from "./DataWhyBrainStationSection";

const page = () => {
  return (
    <div>
      <DataEngineeringHeroSection />
      <DataTrustedBySection />
      <DataCoreServicesSection />
      <DataToolsSection />
      <DataCaseStudiesSection />
      <DataWhyBrainStationSection />
    </div>
  );
};

export default page;
