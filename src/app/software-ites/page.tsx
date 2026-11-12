import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

import GlobalFaqSection from "@/components/global/GlobalFaqSection";

import SoftwareItesHeroSection from "./SoftwareItesHeroSection";
import SoftwareItesServicesSection from "./SoftwareItesServicesSection";
import SoftwareItesCaseStudiesSection from "./SoftwareItesCaseStudiesSection";
import SoftwareItesCtaSection from "./SoftwareItesCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Software & IT Services | Magnetic Solution Limited"),
    description: t("Custom applications, enterprise ERP, BI analytics, cloud and AR/VR solutions built by Magnetic Solution Limited for ICT and software businesses."),
  };
}

const faqs = [
  {
    question: "What kind of software work do you take on?",
    answer:
      "Custom web and mobile applications, enterprise ERP and internal tooling, BI and analytics, cloud migration, chatbot support and AR/VR experiences.",
  },
  {
    question: "Do you join existing teams or deliver end to end?",
    answer:
      "Both. We can extend your engineering team, or own a project from discovery through architecture, delivery and support.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "Modern JavaScript and TypeScript stacks, Python, React and Next.js, Node, Odoo for ERP, plus cloud infrastructure and standard integrations.",
  },
  {
    question: "How do you handle handover and maintenance?",
    answer:
      "With documented architecture, tests and a staged handover. We also offer ongoing support and iteration after launch.",
  },
  {
    question: "How does an engagement usually start?",
    answer:
      "With a scoping conversation about your product, systems and delivery constraints. From there we propose an architecture and a phased delivery plan.",
  },
];

export default async function SoftwareItesPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <SoftwareItesHeroSection />
      <SoftwareItesServicesSection />
      <SoftwareItesCaseStudiesSection />
      <GlobalFaqSection
        eyebrow="FAQ"
        title={t("Software engagement questions")}
        subtitle={t("What ICT and software businesses usually ask before we start.")}
        items={faqs}
        ctaLabel="Schedule a call"
        ctaHref="/contact"
      />
      <SoftwareItesCtaSection />
    </main>
  );
}
