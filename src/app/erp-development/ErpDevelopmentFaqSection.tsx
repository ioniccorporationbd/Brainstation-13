import GlobalFaqSection, { type FaqItem } from "../../components/global/GlobalFaqSection";

const faqs: FaqItem[] = [
  {
    question: "Which ERP platforms do you build on?",
    answer:
      "Custom development is centred on ERPNext and the Frappe framework, and we integrate with SAP, Oracle, Microsoft Dynamics and Odoo where a system already exists.",
  },
  {
    question: "Can you customise an existing ERPNext instance?",
    answer:
      "Yes. We add custom doctypes, workflows, reports and integrations to a running instance without forking the core app, so upgrades stay clean.",
  },
  {
    question: "How do you handle data migration?",
    answer:
      "Legacy data is profiled, cleaned and validated against the target schema before loading, with reconciliation reports so nothing is silently dropped.",
  },
  {
    question: "What happens after go-live?",
    answer:
      "Role-based training, a support window for the first release cycle and periodic reviews to tune workflows as processes change.",
  },
  {
    question: "Can the ERP connect to our existing tools?",
    answer:
      "Payment gateways, logistics, CRM platforms and BI tools connect through whitelisted APIs and scheduled sync jobs, with access controlled per role.",
  },
];

export default function ErpDevelopmentFaqSection() {
  return (
    <GlobalFaqSection
      eyebrow="Help Center"
      title="Frequently Asked Questions"
      subtitle="Get answers to common questions about ERP Development from Magnetic Solution Limited."
      items={faqs}
      defaultOpen={0}
      ctaLabel="Book an ERP consult"
      ctaHref="/schedule-a-call"
    />
  );
}
