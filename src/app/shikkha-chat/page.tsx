import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";

import GlobalFaqSection from "@/components/global/GlobalFaqSection";

import ShikkhaAiPathshalaSection from "./ShikkhaAiPathshalaSection";
import ShikkhaCtaSection from "./ShikkhaCtaSection";
import ShikkhaDashboardsSection from "./ShikkhaDashboardsSection";
import ShikkhaHeroSection from "./ShikkhaHeroSection";
import ShikkhaModulesSection from "./ShikkhaModulesSection";
import ShikkhaOverviewSection from "./ShikkhaOverviewSection";
import ShikkhaSecuritySection from "./ShikkhaSecuritySection";
import ShikkhaUseCasesSection from "./ShikkhaUseCasesSection";
import ShikkhaWebsiteSection from "./ShikkhaWebsiteSection";
import ShikkhaWorkflowsSection from "./ShikkhaWorkflowsSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Shikkha Chat | Magnetic Solution Limited"),
    description: t("Shikkha Chat is a complete education management ERP for modern schools — administration, AI Pathshala learning, teachers, students, parents and government oversight in one secure platform."),
  };
}

const faqs = [
  {
    question: "What does Shikkha Chat include?",
    answer:
      "It is one platform with six integrated modules and 47 product features: school and institution management, AI Pathshala learning, teacher tools, a parent and guardian portal, content quality and AI safety, and NGO and government oversight. Eight role-based dashboards sit on top of that shared data.",
  },
  {
    question: "Do institutions also get a public website?",
    answer:
      "Yes. Every institution ships with a complete, mobile-friendly 40+ page school website — home, governing body, chairman and principal messages, academic calendar, class routine, syllabus, fees, scholarships, notice board, gallery and exam results — that parents and the public can browse before signing in.",
  },
  {
    question: "How does AI Pathshala work for a student?",
    answer:
      "Teachers publish lessons, quizzes and assessments. Students read the smart lessons, ask the AI Tutor in their own words and take the quizzes, while the platform tracks progress and shapes a personalised study plan. Content passes through a review queue before it goes live.",
  },
  {
    question: "Can parents and oversight bodies use the same system?",
    answer:
      "Yes. Parents get their own dashboard to follow attendance, assessment results, weekly learning insights and teacher messages. NGOs manage multi-institution programmes with outcomes and impact analytics, and government officers review district-level enrolment, attendance, equity and safety.",
  },
  {
    question: "Is access scoped by role?",
    answer:
      "Everyone signs in through one branded portal, and permissions decide what each role can see and do — a student never reaches an admin screen, and a district officer sees only aggregated oversight data.",
  },
  {
    question: "How do we get started?",
    answer:
      "Request a demo and we will walk your institution through the modules, dashboards and public website that fit your setup, then plan the rollout with your team.",
  },
];

export default async function ShikkhaChatPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <ShikkhaHeroSection />
      <ShikkhaOverviewSection />
      <ShikkhaWebsiteSection />
      <ShikkhaModulesSection />
      <ShikkhaAiPathshalaSection />
      <ShikkhaDashboardsSection />
      <ShikkhaWorkflowsSection />
      <ShikkhaUseCasesSection />
      <ShikkhaSecuritySection />
      <GlobalFaqSection
        eyebrow="FAQ"
        title={t("Questions schools ask about Shikkha Chat")}
        subtitle={t("Straight answers about modules, the public website, AI Pathshala and role-based access.")}
        items={faqs}
        ctaLabel="Request a Demo"
        ctaHref="/schedule-a-call"
      />
      <ShikkhaCtaSection />
    </main>
  );
}
