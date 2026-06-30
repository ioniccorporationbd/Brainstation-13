import Link from "next/link";
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
    eyebrow: "AI-Powered Discovery Audit",
    title: "Discovery & Alignment",
    description:
      "We start by understanding your goals, domain, KPIs, and key pain points. We map timelines, success metrics, and define the structure of engagement.",
    icon: BrainCircuit,
  },
  {
    step: "Step 2",
    eyebrow: "Hybrid Team Onboarding",
    title: "Service Proposal & Onboarding",
    description:
      "We present the right service tracks such as Build, Test, DevOps, Analytics, and Operations, finalize the SLA, and onboard the team with zero disruption.",
    icon: Network,
  },
  {
    step: "Step 3",
    eyebrow: "Build with AI Guardrails",
    title: "Delivery & Governance",
    description:
      "Your dedicated team works in sprints using Agile or ITIL-based processes. Weekly reports, SLA dashboards, and transparent communication keep you informed.",
    icon: ClipboardCheck,
  },
  {
    step: "Step 4",
    eyebrow: "Scale with Confidence",
    title: "Structured Transition from Incumbents",
    description:
      "We follow a clear transition model with code audit, knowledge transfer, and onboarding to ensure smooth handover and zero business impact.",
    icon: Rocket,
  },
  {
    step: "Step 5",
    eyebrow: "Continuous Improvement",
    title: "Continuous Evolution",
    description:
      "Post-launch, we support performance monitoring, incident resolution, enhancements, and roadmap updates so your platform scales with your business.",
    icon: TimerReset,
  },
];

export default function ManagedHowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[96px] text-[#11182f]">
      {/* Soft circle background */}
      <div className="pointer-events-none absolute -left-[360px] top-[30px] hidden h-[760px] w-[760px] rounded-full lg:block">
        {Array.from({ length: 42 }).map((_, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#74c4ec]/20"
            style={{
              width: `${760 - index * 17}px`,
              height: `${760 - index * 17}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px]">
        {/* Top Area */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
              Managed Service Process
            </p>

            <h2 className="max-w-[560px] text-[44px] font-bold leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[58px]">
              How It Works
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[690px] text-left text-[20px] font-medium leading-[1.65] tracking-[-0.035em] text-[#42637a] md:text-[22px]">
              We blend human expertise with AI precision to deliver faster
              outcomes without compromising security, ownership, or delivery
              quality.
            </p>

            <Link
              href="/schedule-a-call"
              className="mt-8 inline-flex rounded-full bg-[#ffab2e] px-7 py-3.5 text-[15px] font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffc15a] hover:shadow-[0_14px_34px_rgba(255,171,46,0.32)]"
            >
              Schedule a Call
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-[76px] grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative min-h-[330px] overflow-hidden rounded-[22px] border border-[#dce8f2] bg-white px-8 py-9 shadow-[0_16px_45px_rgba(17,30,64,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b7dff4] hover:shadow-[0_28px_80px_rgba(17,30,64,0.14)]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-[210px] w-[210px] rounded-full bg-[#4fa0d1]/10 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/25" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-[210px] w-[210px] rounded-full bg-[#ffb22c]/0 blur-2xl transition-all duration-300 group-hover:bg-[#ffb22c]/15" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#f4f8fc] text-[#4fa0d1] ring-1 ring-[#dce8f2] transition-all duration-300 group-hover:bg-[#4fa0d1] group-hover:text-white group-hover:ring-[#4fa0d1]">
                      <Icon size={30} strokeWidth={1.7} />
                    </div>

                    <span className="rounded-full bg-[#4fa0d1] px-4 py-2 text-[13px] font-bold leading-none text-white transition-all duration-300 group-hover:bg-[#ffab2e] group-hover:text-black">
                      {item.step}
                    </span>
                  </div>

                  <p className="mt-8 text-left text-[15px] font-bold leading-none tracking-[-0.025em] text-[#4fa0d1]">
                    {item.eyebrow}
                  </p>

                  <h3 className="mt-5 text-left text-[28px] font-bold leading-[1.15] tracking-[-0.06em] text-[#050b18] md:text-[32px]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-left text-[16px] font-medium leading-[1.65] tracking-[-0.03em] text-[#42637a]">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#4fa0d1] transition-all duration-300 group-hover:w-full" />

                <span className="pointer-events-none absolute bottom-5 right-7 text-[60px] font-bold leading-none text-[#111E40]/[0.04] transition-all duration-300 group-hover:text-[#4fa0d1]/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            );
          })}
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}