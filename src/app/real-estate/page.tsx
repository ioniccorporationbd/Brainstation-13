import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

import GlobalFaqSection from "@/components/global/GlobalFaqSection";

import RealEstateHeroSection from "./RealEstateHeroSection";
import RealEstateServicesSection from "./RealEstateServicesSection";
import RealEstateCaseStudiesSection from "./RealEstateCaseStudiesSection";
import RealEstateCtaSection from "./RealEstateCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Real Estate Solutions | Magnetic Solution Limited"),
    description: t("Property marketplaces, smart-building integrations, ERP, cloud and AR/VR engagement built by Magnetic Solution Limited for real estate companies."),
  };
}

const faqs = [
  {
    question: "What can you build for a real estate business?",
    answer:
      "Property marketplaces and listing platforms, agent portals, ERP and finance automation, CRM and chatbot support, analytics dashboards, plus AR/VR property experiences.",
  },
  {
    question: "Can you integrate with our existing property management systems?",
    answer:
      "Yes. We work with the systems you already run, using APIs and staged migrations instead of forced replacement.",
  },
  {
    question: "Do you work with both sales and rental businesses?",
    answer:
      "Yes. Platforms we build cover sales funnels, rental enquiries, tenant communication, agent workflows and investor reporting.",
  },
  {
    question: "How does a real estate engagement start?",
    answer:
      "With a scoping conversation about your portfolio, sales process and delivery constraints. From there we propose an architecture and a phased delivery plan.",
  },
];

export default async function RealEstatePage() {
  const { t } = await getTranslator();
  return (
    <main>
      <RealEstateHeroSection />
      <RealEstateServicesSection />
      <RealEstateCaseStudiesSection />
      <GlobalFaqSection
        eyebrow="FAQ"
        title={t("Real estate engagement questions")}
        subtitle={t("What property companies usually ask before we start building.")}
        items={faqs}
        ctaLabel="Schedule a call"
        ctaHref="/contact"
      />
      <RealEstateCtaSection />
    </main>
  );
}
