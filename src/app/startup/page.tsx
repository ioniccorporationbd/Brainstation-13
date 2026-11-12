import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

import GlobalFaqSection from "@/components/global/GlobalFaqSection";

import StartupHeroSection from "./StartupHeroSection";
import StartupServicesSection from "./StartupServicesSection";
import StartupCaseStudiesSection from "./StartupCaseStudiesSection";
import StartupCtaSection from "./StartupCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Startup Solutions | Magnetic Solution Limited"),
    description: t("Technology solutions for startups — MVP development, product engineering and the digital platforms that make growth possible."),
  };
}

const faqs = [
  {
    question: "Do you build MVPs or full products?",
    answer:
      "Both. We scope a first release that proves the model, then extend it into a full product as usage grows.",
  },
  {
    question: "Will you work with our existing codebase?",
    answer:
      "Yes. We work inside existing stacks and fix foundations where they would block growth.",
  },
  {
    question: "How do you keep costs predictable?",
    answer:
      "By fixing scope per phase and delivering in increments, so spend tracks progress rather than assumptions.",
  },
  {
    question: "Can you help after launch?",
    answer:
      "Yes. We support, monitor and iterate after launch so the product keeps improving with real usage.",
  },
  {
    question: "How does an engagement start?",
    answer:
      "With a scoping conversation about your business model and users, followed by an architecture and a phased delivery plan.",
  },
];

export default async function StartupPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <StartupHeroSection />
      <StartupServicesSection />
      <StartupCaseStudiesSection />
      <GlobalFaqSection
        eyebrow="FAQ"
        title={t("Questions we hear before we start")}
        subtitle={t("What teams usually ask about scope, delivery and working together.")}
        items={faqs}
        ctaLabel="Schedule a call"
        ctaHref="/contact"
      />
      <StartupCtaSection />
    </main>
  );
}
