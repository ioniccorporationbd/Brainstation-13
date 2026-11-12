import GlobalFaqSection, { type FaqItem } from "../../components/global/GlobalFaqSection";
import { getTranslator } from "@/i18n/server";

const faqs: FaqItem[] = [
  {
    question: "What do you need to initiate an ML project?",
    answer:
      "We usually begin with your business goals, available data, expected outcomes, technical environment, and timeline. After that, we define the model scope, data requirements, and implementation plan.",
  },
  {
    question: "How long does it typically take to deploy a solution?",
    answer:
      "A basic proof of concept can take a few weeks, while a production-ready ML solution may take several weeks or months depending on data quality, integrations, and complexity.",
  },
  {
    question: "Is a large dataset required for ML implementation?",
    answer:
      "Not always. Larger datasets often help, but we can also work with smaller datasets using data preparation, feature engineering, transfer learning, or staged model improvements.",
  },
  {
    question: "Can ML solutions integrate with existing business systems?",
    answer:
      "Yes. ML solutions can integrate with CRMs, ERPs, web apps, mobile apps, analytics tools, cloud platforms, and internal business workflows.",
  },
  {
    question: "How is model accuracy and performance ensured?",
    answer:
      "We use proper data validation, model testing, performance monitoring, retraining strategies, and real-world feedback loops to maintain reliable accuracy.",
  },
];

export default async function MLAIFAQSection() {
  const { t } = await getTranslator();
  return (
    <GlobalFaqSection
      eyebrow="FAQ"
      title={t("Frequently Asked Questions")}
      subtitle={t("Get answers to common questions about the Machine Learning (ML) & Artificial Intelligence (AI) process.")}
      items={faqs}
      defaultOpen={0}
    />
  );
}
