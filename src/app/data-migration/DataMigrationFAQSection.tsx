import GlobalFaqSection, { type FaqItem } from "../../components/global/GlobalFaqSection";

const faqs: FaqItem[] = [
  {
    question: "Can you migrate data from legacy systems?",
    answer:
      "Yes. We migrate data from legacy databases, spreadsheets, old enterprise systems, cloud platforms, and custom applications into modern, secure, and scalable environments.",
  },
  {
    question: "Do you offer zero-downtime migration?",
    answer:
      "Yes. For business-critical systems, we plan phased migration, parallel runs, validation checkpoints, and rollback strategies to reduce downtime as much as possible.",
  },
  {
    question: "How do you maintain data quality and integrity?",
    answer:
      "We use data profiling, mapping, cleansing, deduplication, validation rules, reconciliation reports, and post-migration testing to make sure migrated data remains accurate and reliable.",
  },
  {
    question: "Do you support hybrid or multi-cloud migrations?",
    answer:
      "Yes. We support on-premise to cloud, cloud to cloud, hybrid cloud, and multi-cloud migration across modern platforms depending on your business and technical requirements.",
  },
  {
    question: "How do you handle large-scale datasets?",
    answer:
      "We design scalable migration workflows using batching, automation, monitoring, secure transfer methods, and optimized pipelines to handle large datasets safely and efficiently.",
  },
];

export default function DataMigrationFAQSection() {
  return (
    <GlobalFaqSection
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      subtitle="Get answers to common questions about Data Migration Services from Magnetic Solution Limited."
      items={faqs}
      defaultOpen={0}
    />
  );
}
