import GlobalFaqSection, {
  type FaqItem,
} from "../../components/global/GlobalFaqSection";
import { getTranslator } from "@/i18n/server";

const faqs: FaqItem[] = [
  {
    question: "How long does a typical consulting engagement last?",
    answer:
      "A consulting engagement can range from a focused 1-2 week assessment to a multi-month roadmap, architecture, compliance, or implementation support program depending on your goals and complexity.",
  },
  {
    question: "Can you help with regulatory compliance projects?",
    answer:
      "Yes. We support compliance-focused consulting for security, data protection, software quality, audit readiness, and regulated industry requirements including ISO, GDPR, HIPAA, PCI DSS, and similar standards.",
  },
  {
    question: "Do you provide hands-on implementation support?",
    answer:
      "Yes. Beyond advisory, we can support architecture design, vendor selection, DevOps setup, cloud migration, integration planning, proof of concept delivery, and implementation governance.",
  },
  {
    question: "How do you measure success?",
    answer:
      "Success is measured through agreed KPIs such as roadmap completion, cost optimization, risk reduction, security posture improvement, delivery velocity, system performance, and measurable business impact.",
  },
];

export default async function TechnologyConsultingFaqSection() {
  const { t } = await getTranslator();
  return (
    <GlobalFaqSection
      eyebrow="FAQ"
      title={t("Frequently Asked Questions")}
      subtitle={t("Everything you need to know about our technology consulting engagements.")}
      items={faqs}
      defaultOpen={0}
      ctaLabel="Schedule a Call"
      ctaHref="/schedule-a-call"
    />
  );
}
