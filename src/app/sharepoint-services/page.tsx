import type { Metadata } from "next";
import SharePointHeroSection from "./SharePointHeroSection";
import SharePointDescriptionSection from "./SharePointDescriptionSection";
import SharePointOfferedServicesSection from "./SharePointOfferedServicesSection";
import SharePointBottomSections from "./SharePointBottomSections";

export const metadata: Metadata = {
  title: "SharePoint Services | Magnetic Solution Limited",
  description:
    "SharePoint intranets, application development, workflow, migration and managed support across Microsoft 365 estates.",
};

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
