import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

import GlobalFaqSection from "@/components/global/GlobalFaqSection";

import NonProfitHeroSection from "./NonProfitHeroSection";
import NonProfitServicesSection from "./NonProfitServicesSection";
import NonProfitCaseStudiesSection from "./NonProfitCaseStudiesSection";
import NonProfitCtaSection from "./NonProfitCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Non-Profit Solutions | Magnetic Solution Limited"),
    description: t("Digital solutions for non-profit organisations — community platforms, programme reporting and tools built for humanitarian work."),
  };
}

const faqs = [
  {
    question: "Do you work with existing donor and programme systems?",
    answer:
      "Yes. We integrate with the systems you already use and phase changes so programme work is not disrupted.",
  },
  {
    question: "Can you build low-bandwidth friendly tools?",
    answer:
      "Yes. Field-facing tools are designed for limited connectivity, including offline-tolerant flows where needed.",
  },
  {
    question: "How do you handle sensitive beneficiary data?",
    answer:
      "With permission-aware access, minimal data collection and secure storage aligned to your safeguarding policy.",
  },
  {
    question: "Do you help with reporting to donors?",
    answer:
      "Yes. We build reporting and dashboards over programme data so outcomes are documented consistently.",
  },
  {
    question: "How does an engagement start?",
    answer:
      "With a scoping conversation about your programmes and constraints, followed by an architecture and a phased delivery plan.",
  },
];

export default async function NonProfitPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <NonProfitHeroSection />
      <NonProfitServicesSection />
      <NonProfitCaseStudiesSection />
      <GlobalFaqSection
        eyebrow="FAQ"
        title={t("Questions we hear before we start")}
        subtitle={t("What teams usually ask about scope, delivery and working together.")}
        items={faqs}
        ctaLabel="Schedule a call"
        ctaHref="/contact"
      />
      <NonProfitCtaSection />
    </main>
  );
}
