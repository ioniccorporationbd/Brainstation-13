import GlobalFaqSection, {
  type FaqItem,
} from "../../components/global/GlobalFaqSection";

const faqs: FaqItem[] = [
  {
    question: "How much does it cost to develop a mobile app in Bangladesh?",
    answer:
      "The cost depends on features, platform, UI/UX complexity, integrations, and project timeline.",
  },
  {
    question: "How long does it take to build a mobile app?",
    answer:
      "A simple app may take 6–10 weeks, while complex enterprise apps may take several months.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes, we provide bug fixing, monitoring, upgrades, optimization, and feature improvements.",
  },
  {
    question: "How do you ensure app security and IP protection?",
    answer:
      "We follow secure coding practices, access control, NDA, code ownership agreement, and deployment security.",
  },
  {
    question: "Do you sign NDAs and ensure code ownership?",
    answer:
      "Yes, NDA and code ownership can be included based on project requirements.",
  },
];

export default function WebMobileFaqSection() {
  return (
    <GlobalFaqSection
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      subtitle="Get answers to common questions about mobile app development and our delivery process."
      items={faqs}
      defaultOpen={0}
      ctaLabel="Book a Meeting"
      ctaHref="/schedule-a-call"
    />
  );
}
