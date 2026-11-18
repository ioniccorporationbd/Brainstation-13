import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import {
  BrainCircuit,
  ClipboardCheck,
  Network,
  Rocket,
  TimerReset,
} from "lucide-react";

type StepItem = {
  step: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const steps: StepItem[] = [
  {
    step: "Step 1",
    eyebrow: "Discovery & Alignment",
    title: "Discovery & Alignment",
    description:
      "We understand your goals, domain, KPIs, and pain points, then map timelines, success metrics, and the engagement structure.",
    icon: BrainCircuit,
  },
  {
    step: "Step 2",
    eyebrow: "Team Onboarding",
    title: "Proposal & Setup",
    description:
      "We present the right service tracks (Build, Test, DevOps, Analytics, Operations), finalize the SLA, and onboard with zero disruption.",
    icon: Network,
  },
  {
    step: "Step 3",
    eyebrow: "Delivery & Governance",
    title: "Delivery & Govern\u00ADance",
    description:
      "Your dedicated team works in sprints with Agile or ITIL processes, backed by weekly reports and SLA dashboards.",
    icon: ClipboardCheck,
  },
  {
    step: "Step 4",
    eyebrow: "Structured Transition",
    title: "Structured Transition",
    description:
      "A clear transition model with code audit, knowledge transfer, and onboarding ensures a smooth handover and zero business impact.",
    icon: Rocket,
  },
  {
    step: "Step 5",
    eyebrow: "Continuous Evolution",
    title: "Continu\u00ADous Evolution",
    description:
      "Post-launch, we support performance monitoring, incident resolution, enhancements, and roadmap updates.",
    icon: TimerReset,
  },
];

export default async function ManagedHowItWorksSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        {/* Heading */}
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Managed Service Process")}</p>

          <h2 className="text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("How It Works")}</h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[16px] text-pretty">{t("We blend human expertise with AI precision to deliver faster outcomes without compromising security, ownership, or delivery quality.")}</p>

          <Link
            href="/schedule-a-call"
            className="mt-8 inline-flex rounded-full bg-[#c91f28] px-7 py-3.5 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
          >{t("Schedule a Call")}</Link>
        </div>

        {/* Steps */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28]">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-[12px] font-bold uppercase tracking-normal text-[#c91f28]">
                    {t(item.step)}
                  </span>
                </div>

                <h3 className="mt-5 text-[#0a0a0a] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px] [overflow-wrap:anywhere]">
                  {t(item.title)}
                </h3>

                <p className="mt-2 text-[13.5px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] text-pretty">
                  {t(item.description)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
