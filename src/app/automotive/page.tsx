import type { Metadata } from "next";

import GlobalFaqSection from "@/components/global/GlobalFaqSection";

import AutomotiveHeroSection from "./AutomotiveHeroSection";
import AutomotiveServicesSection from "./AutomotiveServicesSection";
import AutomotiveCaseStudiesSection from "./AutomotiveCaseStudiesSection";
import AutomotiveCtaSection from "./AutomotiveCtaSection";

export const metadata: Metadata = {
  title: "Automotive Solutions | Magnetic Solution Limited",
  description:
    "Automotive technology, connected mobility, enterprise systems and customer experience solutions built by Magnetic Solution Limited.",
};

const faqs = [
  {
    question: "Can you work with our existing enterprise systems?",
    answer:
      "Yes. We integrate with the platforms you already run and phase changes so operations are not interrupted.",
  },
  {
    question: "Do you deliver mobile apps for automotive customers?",
    answer:
      "Yes. We build customer-facing apps, dealer tools and internal apps for vehicle and service journeys.",
  },
  {
    question: "How do you handle connected vehicle data?",
    answer:
      "With secure integration layers that keep vehicle, customer and operational data consistent and permission-aware.",
  },
  {
    question: "Do you support AR/VR in automotive delivery?",
    answer:
      "Yes. AR/VR work is scoped to a defined customer or training use case so the value is measurable.",
  },
  {
    question: "How does an engagement start?",
    answer:
      "With a scoping conversation about your products, systems and customers, followed by an architecture and a phased delivery plan.",
  },
];

export default function AutomotivePage() {
  return (
    <main>
      <AutomotiveHeroSection />
      <AutomotiveServicesSection />
      <AutomotiveCaseStudiesSection />
      <GlobalFaqSection
        eyebrow="FAQ"
        title="Questions we hear before we start"
        subtitle="What teams usually ask about scope, delivery and working together."
        items={faqs}
        ctaLabel="Schedule a call"
        ctaHref="/contact"
      />
      <AutomotiveCtaSection />
    </main>
  );
}
