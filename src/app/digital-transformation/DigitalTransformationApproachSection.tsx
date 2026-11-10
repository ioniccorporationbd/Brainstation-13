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
    <section className="bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Digital Transformation Process
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            Our Transformation Approach
          </h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">
            We blend human expertise with AI precision to deliver faster
            outcomes without compromising security, governance, or business
            continuity.
          </p>

          <Link
            href="/schedule-a-call"
            className="mt-8 inline-flex rounded-full bg-[#c91f28] px-7 py-3.5 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Steps - 4 per row on desktop */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => {
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
                  {item.eyebrow}
                </p>

                <h3 className="mt-3 text-[18px] font-bold leading-[1.25] tracking-[-0.01em] text-[#0a0a0a]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13.5px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
