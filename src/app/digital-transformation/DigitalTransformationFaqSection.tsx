import GlobalFaqSection, { type FaqItem } from "../../components/global/GlobalFaqSection";

const faqs: FaqItem[] = [
  {
    question: "How long does a typical transformation take?",
    answer:
      "Timeline depends on the size of the legacy system, integrations, automation scope, and business priorities. A discovery or assessment phase can start quickly, while full transformation usually runs in phased milestones.",
  },
  {
    question: "Can you integrate with existing ERP and CRM systems?",
    answer:
      "Yes. We can integrate with existing ERP, CRM, HRM, accounting, warehouse, payment, and third-party business systems using APIs, middleware, automation flows, and secure data pipelines.",
  },
  {
    question: "What level of disruption should we expect?",
    answer:
      "We follow a phased transformation approach to reduce disruption. Critical systems can be modernized gradually with parallel testing, controlled migration, backup planning, and rollback support.",
  },
  {
    question: "Do you provide AI automation and cloud migration together?",
    answer:
      "Yes. We can combine AI automation, RPA, workflow optimization, cloud-native modernization, DevOps, and application refactoring into one structured transformation roadmap.",
  },
  {
    question: "How do you measure transformation success?",
    answer:
      "Success is measured through agreed KPIs such as cost reduction, process efficiency, system performance, release speed, user adoption, automation coverage, uptime, and business impact.",
  },
];

export default function DigitalTransformationFaqSection() {
  return (
    <GlobalFaqSection
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about our digital transformation engagements."
      items={faqs}
      defaultOpen={0}
      ctaLabel="Schedule a Call"
      ctaHref="/schedule-a-call"
    />
  );
}
