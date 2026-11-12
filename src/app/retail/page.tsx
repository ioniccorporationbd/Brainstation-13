import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

import GlobalFaqSection from "@/components/global/GlobalFaqSection";

import RetailHeroSection from "./RetailHeroSection";
import RetailServicesSection from "./RetailServicesSection";
import RetailCaseStudiesSection from "./RetailCaseStudiesSection";
import RetailCtaSection from "./RetailCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Retail Solutions | Magnetic Solution Limited"),
    description: t("POS, inventory, e-commerce, ERP and analytics solutions built by Magnetic Solution Limited for retail enterprises and distribution networks."),
  };
}

const faqs = [
  {
    question: "Can you connect physical stores with online channels?",
    answer:
      "Yes. We unify inventory, orders and customer records so store, marketplace and web channels operate from one source of truth.",
  },
  {
    question: "Do you work with existing POS and ERP systems?",
    answer:
      "We integrate with what you already run and phase migrations where replacement is unavoidable, so trading is not interrupted.",
  },
  {
    question: "Do you support multi-outlet and distribution networks?",
    answer:
      "Yes. Multi-outlet inventory, warehouse transfers, purchase flows and reporting are part of the platforms we build.",
  },
  {
    question: "How do you handle demand planning and reporting?",
    answer:
      "With BI dashboards over your sales, stock and fulfilment data, so buying and merchandising decisions are based on current numbers.",
  },
  {
    question: "How does an engagement start?",
    answer:
      "With a review of your outlets, systems and operating processes, followed by an architecture and a phased delivery plan.",
  },
];

export default async function RetailPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <RetailHeroSection />
      <RetailServicesSection />
      <RetailCaseStudiesSection />
      <GlobalFaqSection
        eyebrow="FAQ"
        title={t("Retail engagement questions")}
        subtitle={t("What retail teams usually ask before we start building.")}
        items={faqs}
        ctaLabel="Schedule a call"
        ctaHref="/contact"
      />
      <RetailCtaSection />
    </main>
  );
}
