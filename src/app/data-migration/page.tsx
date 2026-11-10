import React from "react";
import DataMigrationHeroSection from "./DataMigrationHeroSection";
import DataMigrationWorkedWithSection from "./DataMigrationWorkedWithSection";
import DataMigrationServicesSection from "./DataMigrationServicesSection";
import DataMigrationTechnologiesSection from "./DataMigrationTechnologiesSection";
import DataMigrationCapabilitiesSection from "./DataMigrationCapabilitiesSection";
import DataMigrationFAQSection from "./DataMigrationFAQSection";

const page = () => {
  return (
    <div>
      <DataMigrationHeroSection />
      <DataMigrationWorkedWithSection />
      <DataMigrationServicesSection />
      <DataMigrationTechnologiesSection />
      <DataMigrationCapabilitiesSection />
      <DataMigrationFAQSection />
    </div>
  );
};

export default page;
