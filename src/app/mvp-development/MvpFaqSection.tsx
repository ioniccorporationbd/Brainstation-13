import GlobalFaqSection, {
  type FaqItem,
} from "../../components/global/GlobalFaqSection";
import { getTranslator } from "@/i18n/server";

const faqs: FaqItem[] = [
  {
    question: "How long does an MVP take to build?",
    answer:
      "A focused MVP usually takes 8–12 weeks depending on product complexity, integrations, design depth, and the number of core features required for validation.",
  },
  {
    question: "What's included in the MVP scope?",
    answer:
      "MVP scope usually includes product discovery, feature prioritization, UX/UI design, core functionality development, basic integrations, testing, deployment, and post-launch feedback planning.",
  },
  {
    question: "What happens after the MVP launch?",
    answer:
      "After launch, we collect user feedback, analyze product usage, fix priority issues, improve the experience, and plan the next roadmap for scaling into a full product.",
  },
  {
    question: "Can you help us validate the product idea before development?",
    answer:
      "Yes. We can help with market research, user journey mapping, prototype validation, feature prioritization, technical feasibility, and a clear MVP roadmap before development starts.",
  },
];

export default async function MvpFaqSection() {
  const { t } = await getTranslator();
  return (
    <GlobalFaqSection
      eyebrow="FAQ"
      title={t("Still Have Questions?")}
      subtitle={t("Everything you need to know about building your MVP with Magnetic Solution Limited.")}
      items={faqs}
      defaultOpen={0}
      ctaLabel="Schedule a Call"
      ctaHref="/schedule-a-call"
    />
  );
}
