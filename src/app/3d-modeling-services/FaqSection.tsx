import GlobalFaqSection, {
  type FaqItem,
} from "../../components/global/GlobalFaqSection";

const faqs: FaqItem[] = [
  {
    question: "What industries do you create 3D visuals for?",
    answer:
      "Automotive, heavy machinery, semiconductor manufacturing, robotics and automation, architecture, and other engineering-driven industries that need accurate, high-precision visualizations.",
  },
  {
    question: "Do you provide engineering-accurate simulations?",
    answer:
      "Yes. We work from CAD data to build engineering-accurate models and process simulations of real mechanical and industrial systems.",
  },
  {
    question:
      "Can you create fully animated assembly and disassembly sequences?",
    answer:
      "Yes. We produce step-by-step assembly and disassembly animations for training, technical explainers, and marketing content.",
  },
  {
    question: "Do you offer AI-driven visualization or sensor simulations?",
    answer:
      "Yes. We visualize data flows, sensor networks and control-system logic, and build AI-driven experiences such as our HoloGuide AI assistant.",
  },
  {
    question: "How do we start a project with your team?",
    answer:
      "Share your CAD files or references with us. We review the requirements, propose a scope and timeline, and start with a short kickoff call to align on goals.",
  },
  {
    question: "What file formats and CAD data do you support?",
    answer:
      "We work with the standard CAD and 3D formats commonly used across engineering industries, and we advise on the best export during project kickoff.",
  },
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      subtitle="Get answers to common questions about 3D Modeling and Rendering Services from Magnetic Solution Limited."
      items={faqs}
      defaultOpen={0}
    />
  );
}
