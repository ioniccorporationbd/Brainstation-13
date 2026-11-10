import type { Metadata } from "next";
import AemHeroSection from "./AemHeroSection";
import AemDescriptionSection from "./AemDescriptionSection";
import AemOfferedServicesSection from "./AemOfferedServicesSection";
import AemIndustriesSection from "./AemIndustriesSection";
import AemWorkedWithSection from "./AemWorkedWithSection";
import AemProjectHelpSection from "./AemProjectHelpSection";

export const metadata: Metadata = {
  title: "Adobe Experience Manager (AEM) | Magnetic Solution Limited",
  description:
    "AEM implementation, integration, managed service, migration and upgrade — full Adobe Experience Manager lifecycle services.",
};

export default function Page() {
  return (
    <div>
      <AemHeroSection />
      <AemDescriptionSection />
      <AemOfferedServicesSection />
      <AemIndustriesSection />
      <AemWorkedWithSection />
      <AemProjectHelpSection />
    </div>
  );
}
