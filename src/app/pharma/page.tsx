import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

import GlobalFaqSection from "@/components/global/GlobalFaqSection";

import PharmaHeroSection from "./PharmaHeroSection";
import PharmaSolutionsGridSection from "./PharmaSolutionsGridSection";
import PharmaCustomerSuccessSection from "./PharmaCustomerSuccessSection";
import PharmaCtaSection from "./PharmaCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Pharma Solutions | Magnetic Solution Limited"),
    description: t("HCP activation, compliance automation, pharma e-commerce and LMS platforms built by Magnetic Solution Limited for healthcare and pharmaceutical enterprises."),
  };
}

const faqs = [
  {
    question:
      "What types of solutions do you offer for the healthcare and pharmaceutical industries?",
    answer:
      "We provide pharma marketing platforms, HCP engagement solutions, LMS systems, AR/VR engagement tools, pharma e-commerce, compliance automation, and custom healthcare software solutions.",
  },
  {
    question:
      "What are the key features of your Learning Management Systems (LMS) for the pharma sector?",
    answer:
      "Our LMS supports custom course development, HCP audience segmentation, progress tracking, certification, reporting, and integration with CRM, Veeva, and other pharma tools.",
  },
  {
    question:
      "Can your LMS solutions be tailored for both internal teams and healthcare professionals?",
    answer:
      "Yes. We can customize LMS platforms for internal employee training, sales teams, medical representatives, healthcare professionals, and partner education programs.",
  },
  {
    question:
      "We would like to transform our legacy systems into a more agile, future-ready infrastructure. Do you have experience with custom development in the pharma and healthcare industry?",
    answer:
      "Yes. We build custom healthcare and pharma systems including workflow automation, data platforms, compliance tools, customer portals, and integration-ready enterprise applications.",
  },
  {
    question: "What is Omnizia and how can Omnizia support HCP engagement?",
    answer:
      "Omnizia is an HCP activation suite that helps pharma brands manage cross-channel engagement, analyze data, personalize campaigns, and improve communication with healthcare professionals.",
  },
  {
    question: "How does Time2Publish improve the MLR approval process?",
    answer:
      "Time2Publish streamlines MLR approval by connecting content workflows, reducing manual approval effort, improving compliance visibility, and accelerating publishing timelines.",
  },
  {
    question:
      "For which purposes is an LMS used in the pharma and healthcare industry?",
    answer:
      "An LMS can be used for medical training, product education, compliance learning, HCP engagement, internal onboarding, certification, and continuous professional development.",
  },
  {
    question: "How can augmented reality be used in medical education?",
    answer:
      "AR can create interactive product demos, virtual procedure training, 3D medical visualization, immersive learning modules, and engaging HCP education experiences.",
  },
];

export default async function PharmaPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <PharmaHeroSection />
      <PharmaSolutionsGridSection />
      <PharmaCustomerSuccessSection />
      <GlobalFaqSection
        eyebrow="FAQ"
        title={t("Frequently asked questions")}
        subtitle={t("Common questions about our pharma and healthcare engagements.")}
        items={faqs}
        ctaLabel="Schedule a call"
        ctaHref="/contact"
      />
      <PharmaCtaSection />
    </main>
  );
}
