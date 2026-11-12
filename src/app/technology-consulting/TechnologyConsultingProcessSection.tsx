import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import {
  BrainCircuit,
  ClipboardCheck,
  Network,
  Rocket,
} from "lucide-react";

type ProcessStep = {
  step: string;
  eyebrow: string;
  title: string;
  points: string[];
  icon: React.ElementType;
};

const processSteps: ProcessStep[] = [
  {
    step: "Step 1",
    eyebrow: "Discover & Assess",
    title: "Discovery & Assessment",
    points: [
      "Stakeholder interviews, process reviews, and technology audits.",
      "Current-state mapping and gap analysis to pinpoint opportunities.",
    ],
    icon: BrainCircuit,
  },
  {
    step: "Step 2",
    eyebrow: "Plan the Roadmap",
    title: "Strategic Roadmap & Blueprint",
    points: [
      "Define target architecture, integration patterns, and change plans.",
      "Prioritize initiatives by business value, complexity, and risk.",
    ],
    icon: Network,
  },
  {
    step: "Step 3",
    eyebrow: "Design & Validate",
    title: "Solution Design & Validation",
    points: [
      "Detailed design for data models, integration flows, and security.",
      "Proof of concept development and user feedback loops.",
    ],
    icon: ClipboardCheck,
  },
  {
    step: "Step 4",
    eyebrow: "Implement & Optimize",
    title: "Implementation & Improvement",
    points: [
      "Hands-on guidance for governance, vendor selection, and best practice.",
      "Knowledge transfer plus ongoing optimization as needs evolve.",
    ],
    icon: Rocket,
  },
];

export default async function TechnologyConsultingProcessSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Technology Consulting Process")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Our Technology Consulting Process")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("A clear four-step path to assess, plan, validate, and implement your technology strategy without compromising security.")}</p>

          <Link
            href="/schedule-a-call"
            className="mt-8 inline-flex rounded-full bg-[#c91f28] px-7 py-3.5 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
          >{t("Schedule a Call")}</Link>
        </div>

        {/* 4 Process Cards - 4 per row desktop */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#c91f28]">
                    {item.step}
                  </span>
                </div>

                <p className="mt-5 text-[11px] font-bold uppercase leading-none tracking-[0.1em] text-[#c91f28]">
                  {t(item.eyebrow)}
                </p>

                <h3 className="mt-3 text-[18px] font-bold leading-[1.25] tracking-[-0.01em] text-[#0a0a0a]">
                  {t(item.title)}
                </h3>

                <ul className="mt-3 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-[13.5px] font-medium leading-[1.5] tracking-[-0.01em] text-[#565656]"
                    >
                      <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#c91f28]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
