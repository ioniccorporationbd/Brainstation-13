import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

import GlobalFaqSection from "@/components/global/GlobalFaqSection";

import EducationHeroSection from "./EducationHeroSection";
import EducationIntroSection from "./EducationIntroSection";
import EducationServicesSection from "./EducationServicesSection";
import EducationBenefitsSection from "./EducationBenefitsSection";
import EducationCtaSection from "./EducationCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Education Solutions | Magnetic Solution Limited"),
    description: t("Learning management, assessment and proctoring, content publishing and learning analytics built by Magnetic Solution Limited for education providers."),
  };
}

const faqs = [
  {
    question: "Do you build on existing LMS platforms or from scratch?",
    answer:
      "Both. We extend established platforms where they fit, and build custom learning platforms where off-the-shelf tools cannot match the pedagogy.",
  },
  {
    question: "How do you protect online exams?",
    answer:
      "With a combination of live proctoring, browser-level controls, AI-assisted integrity checks and audit trails, configured to your assessment policy.",
  },
  {
    question: "Can you publish and distribute digital course content?",
    answer:
      "Yes. We deliver authoring, review and publishing workflows so institutions can produce and update course material without engineering help.",
  },
  {
    question: "Do your platforms meet accessibility requirements?",
    answer:
      "We build to WCAG guidelines, with keyboard navigation, screen-reader support and contrast handled as part of delivery, not as an afterthought.",
  },
  {
    question: "How does an engagement usually start?",
    answer:
      "With a scoping conversation about your programmes, learner base and current systems, followed by an architecture and a phased delivery plan.",
  },
];

export default async function EducationPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <EducationHeroSection />
      <EducationIntroSection />
      <EducationServicesSection />
      <EducationBenefitsSection />
      <GlobalFaqSection
        eyebrow="FAQ"
        title={t("Education engagement questions")}
        subtitle={t("What institutions and EdTech teams usually ask before we start.")}
        items={faqs}
        ctaLabel="Schedule a call"
        ctaHref="/contact"
      />
      <EducationCtaSection />
    </main>
  );
}
