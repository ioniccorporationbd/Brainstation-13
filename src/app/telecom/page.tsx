import type { Metadata } from "next";

import GlobalFaqSection from "@/components/global/GlobalFaqSection";

import TelecomHeroSection from "./TelecomHeroSection";
import TelecomServicesSection from "./TelecomServicesSection";
import TelecomCaseStudiesSection from "./TelecomCaseStudiesSection";
import TelecomCtaSection from "./TelecomCtaSection";

export const metadata: Metadata = {
  title: "Telecom Solutions | Magnetic Solution Limited",
  description:
    "Network platforms, enterprise CMS, ERP, cloud and analytics solutions built by Magnetic Solution Limited for telecom operators and service providers.",
};

const faqs = [
  {
    question: "Do you work with existing telco platforms and legacy systems?",
    answer:
      "Yes. We integrate with the systems operators already run, using APIs, enterprise CMS platforms such as AEM and Sitecore, and staged migration paths rather than forced replacement.",
  },
  {
    question: "Can you build customer-facing portals for high order volumes?",
    answer:
      "We build portals and self-service journeys designed for large order volumes, with content management, order tracking and billing flows handled in one platform.",
  },
  {
    question: "Which enterprise platforms do you work with?",
    answer:
      "Adobe Experience Manager, Sitecore, Odoo, SharePoint and standard cloud stacks, alongside custom applications and integrations.",
  },
  {
    question: "How do you handle training and internal enablement?",
    answer:
      "We deliver LMS platforms for onboarding, employee training and partner enablement, with course authoring, progress tracking and reporting.",
  },
  {
    question: "How does an engagement usually start?",
    answer:
      "With a scoping conversation about your network, products and delivery constraints. From there we propose an architecture and a phased delivery plan.",
  },
];

export default function TelecomPage() {
  return (
    <main>
      <TelecomHeroSection />
      <TelecomServicesSection />
      <TelecomCaseStudiesSection />
      <GlobalFaqSection
        eyebrow="FAQ"
        title="Telecom engagement questions"
        subtitle="What operators usually ask before we start building."
        items={faqs}
        ctaLabel="Schedule a call"
        ctaHref="/contact"
      />
      <TelecomCtaSection />
    </main>
  );
}
