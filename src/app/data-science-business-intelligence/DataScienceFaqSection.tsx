import GlobalFaqSection, { type FaqItem } from "../../components/global/GlobalFaqSection";
import { getTranslator } from "@/i18n/server";

const faqs: FaqItem[] = [
  {
    question: "Where do you start with an existing data stack?",
    answer:
      "With an audit of sources, owners and the questions the business already asks. That inventory decides what gets modelled first, so early dashboards answer real decisions.",
  },
  {
    question: "Can you work with our current BI tool?",
    answer:
      "Yes. We build on the warehouse layer so Power BI, Tableau or an in-house tool can all read the same model — dashboards migrate, definitions do not fork.",
  },
  {
    question: "How do you keep dashboards trustworthy?",
    answer:
      "Metric definitions live in the semantic layer, not in individual reports, and quality checks run with the pipeline so a broken feed is flagged before a meeting.",
  },
  {
    question: "Do you build machine learning models or only reports?",
    answer:
      "Both. Forecasting, scoring and classification models are trained, evaluated and deployed into the workflow, with monitoring for drift after release.",
  },
  {
    question: "What does handover look like?",
    answer:
      "Documented pipelines, model definitions and dashboard ownership, plus enablement sessions so your team can extend the stack without us.",
  },
];

export default async function DataScienceFaqSection() {
  const { t } = await getTranslator();
  return (
    <GlobalFaqSection
      eyebrow="Help Center"
      title={t("Frequently Asked Questions")}
      subtitle={t("Get answers to common questions about Data Science & Business Intelligence from Magnetic Solution Limited.")}
      items={faqs}
      defaultOpen={0}
      ctaLabel="Contact us"
      ctaHref="/contact"
    />
  );
}
