import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

import GlobalFaqSection from "@/components/global/GlobalFaqSection";

import EcommerceHeroSection from "./EcommerceHeroSection";
import EcommerceIntroSection from "./EcommerceIntroSection";
import EcommerceServicesSection from "./EcommerceServicesSection";
import EcommerceBenefitsSection from "./EcommerceBenefitsSection";
import EcommerceCtaSection from "./EcommerceCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("E-commerce Solutions | Magnetic Solution Limited"),
    description: t("Storefronts, checkout, payments, fulfilment and growth analytics built by Magnetic Solution Limited for online commerce."),
  };
}

const faqs = [
  {
    question: "Can you replatform an existing store without losing SEO?",
    answer:
      "Yes. We plan redirects, URL structure and content migration before launch so organic traffic and rankings carry over.",
  },
  {
    question: "Do you build on existing platforms or custom stacks?",
    answer:
      "Both. We work with established commerce platforms where they fit, and custom storefront and checkout stacks where performance or flexibility demand it.",
  },
  {
    question: "How do you handle payments and local gateways?",
    answer:
      "We integrate local and global gateways, wallets and buy-now-pay-later providers, with tokenisation and reconciliation built in.",
  },
  {
    question: "Do you support marketplace and omnichannel models?",
    answer:
      "Yes. Connected web, app, marketplace and in-store experiences running off one source of truth for inventory and orders.",
  },
  {
    question: "How does an engagement start?",
    answer:
      "With an audit of your storefront, funnel and stack, followed by an architecture and a phased delivery plan.",
  },
];

export default async function EcommercePage() {
  const { t } = await getTranslator();
  return (
    <main>
      <EcommerceHeroSection />
      <EcommerceIntroSection />
      <EcommerceServicesSection />
      <EcommerceBenefitsSection />
      <GlobalFaqSection
        eyebrow="FAQ"
        title={t("Commerce engagement questions")}
        subtitle={t("What commerce teams usually ask before we start building.")}
        items={faqs}
        ctaLabel="Schedule a call"
        ctaHref="/contact"
      />
      <EcommerceCtaSection />
    </main>
  );
}
