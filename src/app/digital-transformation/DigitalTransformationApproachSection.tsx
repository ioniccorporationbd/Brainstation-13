import Link from "next/link";
import {
  BrainCircuit,
  ClipboardCheck,
  Network,
  Rocket,
  TimerReset,
} from "lucide-react";

type ApproachStep = {
  step: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const steps: ApproachStep[] = [
  {
    step: "Step 1",
    eyebrow: "Discovery & Strategy",
    title: "Assessment & Vision",
    description:
      "Conduct stakeholder workshops, system audits, and process mapping to define transformation goals, priorities, and success metrics.",
    icon: BrainCircuit,
  },
  {
    step: "Step 2",
    eyebrow: "Transformation Planning",
    title: "Roadmap & Blueprint",
    description:
      "Develop a phased plan that prioritizes high-impact initiatives by combining AI pilots, cloud migration, and process automation.",
    icon: Network,
  },
  {
    step: "Step 3",
    eyebrow: "Validation First",
    title: "Proof of Concept",
    description:
      "Build lightweight POCs for quick validation of AI models, RPA bots, or microservice modules before full-scale rollout.",
    icon: ClipboardCheck,
  },
  {
    step: "Step 4",
    eyebrow: "Modern Delivery",
    title: "Implementation & Scaling",
    description:
      "Execute agile sprints to refactor, containerize, and deploy modernized components with CI/CD pipelines and automated testing.",
    icon: Rocket,
  },
  {
    step: "Step 5",
    eyebrow: "Continuous Optimization",
    title: "Continuous Evolution",
    description:
      "Monitor performance with dashboards and KPIs, refine automation logic, and plan next-generation enhancements.",
    icon: TimerReset,
  },
];

export default function DigitalTransformationApproachSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[96px] text-[#11182f]">
      {/* Soft Circle Background */}
      <div className="pointer-events-none absolute -left-[360px] top-[40px] hidden h-[780px] w-[780px] rounded-full lg:block">
        {Array.from({ length: 44 }).map((_, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#74c4ec]/20"
            style={{
              width: `${780 - index * 17}px`,
              height: `${780 - index * 17}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px]">
        {/* Top Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
              Digital Transformation Process
            </p>

            <h2 className="max-w-[620px] text-[42px] font-bold leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[56px]">
              Our Transformation Approach
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[690px] text-left text-[19px] font-medium leading-[1.65] tracking-[-0.035em] text-[#42637a] md:text-[21px]">
              We blend human expertise with AI precision to deliver faster
              outcomes without compromising security, governance, or business
              continuity. Every step is designed to reduce risk and accelerate
              measurable transformation.
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
                className="group relative min-h-[335px] overflow-hidden rounded-[22px] border border-[#dce8f2] bg-white px-8 py-9 shadow-[0_16px_45px_rgba(17,30,64,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b7dff4] hover:shadow-[0_28px_80px_rgba(17,30,64,0.14)]"
              >
                {/* Hover Glow */}
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

                  <p className="mt-8 text-left text-[14px] font-bold uppercase leading-none tracking-[0.08em] text-[#4fa0d1]">
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