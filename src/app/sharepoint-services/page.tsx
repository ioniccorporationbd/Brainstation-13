import type { Metadata } from "next";
import SharePointHeroSection from "./SharePointHeroSection";
import SharePointDescriptionSection from "./SharePointDescriptionSection";
import SharePointOfferedServicesSection from "./SharePointOfferedServicesSection";
import SharePointBottomSections from "./SharePointBottomSections";

import { getTranslator } from "@/i18n/server";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("SharePoint Services | Magnetic Solution Limited"),
    description: t("SharePoint intranets, application development, workflow, migration and managed support across Microsoft 365 estates."),
  };
}

export default function Page() {
  return (
    <div>
      <SharePointHeroSection />
      <SharePointDescriptionSection />
      <SharePointOfferedServicesSection />
      <SharePointBottomSections />
    </div>
  );
}
