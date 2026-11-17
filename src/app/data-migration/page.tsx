import React from "react";
import { getTranslator } from "@/i18n/server";
import DataMigrationHeroSection from "./DataMigrationHeroSection";
import DataMigrationWorkedWithSection from "./DataMigrationWorkedWithSection";
import DataMigrationServicesSection from "./DataMigrationServicesSection";
import DataMigrationTechnologiesSection from "./DataMigrationTechnologiesSection";
import DataMigrationCapabilitiesSection from "./DataMigrationCapabilitiesSection";
import DataMigrationFAQSection from "./DataMigrationFAQSection";

import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/data-migration",
    title: t("Data Migration Services | Magnetic Solution Limited"),
    description: t("Modernize legacy systems with secure, clean and fast data migration — zero data loss and minimal downtime across complex platforms."),
  });
}


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
