import type { Metadata } from "next";

import GlobalFaqSection from "@/components/global/GlobalFaqSection";

import FintechHeroSection from "./FintechHeroSection";
import FintechSolutionsTabsSection from "./FintechSolutionsTabsSection";
import FintechTechStackSection from "./FintechTechStackSection";
import FintechDeliveryModelsSection from "./FintechDeliveryModelsSection";
import FintechCaseStudiesSection from "./FintechCaseStudiesSection";
import FintechSecurityReliabilitySection from "./FintechSecurityReliabilitySection";
import FintechStrategiesSection from "./FintechStrategiesSection";
import FintechCtaSection from "./FintechCtaSection";

export const metadata: Metadata = {
  title: "Fintech Solutions | Magnetic Solution Limited",
  description:
    "Digital banking, payments, wallets, lending and cross-border platforms engineered by Magnetic Solution Limited for security, compliance and scale.",
};

const faqs = [
  {
    question: "Do you integrate with our existing core banking systems?",
    answer:
      "Yes. We work alongside the systems you already run, integrating through APIs and message queues rather than forcing a replacement. Where a core must change, we map the migration path before any code is written.",
  },
  {
    question: "How do you handle regulatory and security requirements?",
    answer:
      "Security and compliance are treated as architecture decisions, not a final checklist: encrypted data flows, role-based access, audit trails and KYC/AML hooks are designed in from the first sprint.",
  },
  {
    question: "Can we own the source code and platform?",
    answer:
      "Yes. On white-label and custom engagements you receive the complete source code and deployment tooling, so your team can operate and extend the platform independently.",
  },
  {
    question: "Do you offer white-label fintech platforms?",
    answer:
      "We adapt our existing banking, wallet, lending and remittance platforms under your brand, then customise modules, workflows and integrations to fit your market.",
  },
  {
    question: "How does an engagement usually start?",
    answer:
      "With a scoping conversation about your markets, products and constraints. From there we propose an architecture, a phased delivery plan and a team shape before development begins.",
  },
];

export default function FintechPage() {
  return (
    <main>
      <FintechHeroSection />
      <FintechSolutionsTabsSection />
      <FintechTechStackSection />
      <FintechDeliveryModelsSection />
      <FintechCaseStudiesSection />
      <FintechSecurityReliabilitySection />
      <FintechStrategiesSection />
      <GlobalFaqSection
        eyebrow="FAQ"
        title="Fintech delivery questions"
        subtitle="The things clients ask before we start building."
        items={faqs}
        ctaLabel="Talk to a fintech expert"
        ctaHref="/schedule-a-call"
      />
      <FintechCtaSection />
    </main>
  );
}
