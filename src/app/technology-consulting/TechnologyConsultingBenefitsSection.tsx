import {
  Lightbulb,
  Map,
  ShieldCheck,
  Cpu,
} from "lucide-react";

type BenefitCard = {
  title: string;
  points: string[];
  icon: React.ElementType;
};

const benefits: BenefitCard[] = [
  {
    title: "Strategic IT Roadmap",
    points: [
      "Prioritized Initiatives: Roadmaps focus resources on high impact-projects that deliver fast ROI.",
      "Clear Execution Plan: Align teams, timelines, budgets, and business outcomes before development begins.",
    ],
    icon: Map,
  },
  {
    title: "Optimized Architecture & Infrastructure",
    points: [
      "Scalable Solutions: Design resilient, future-proof systems that grow with your organization.",
      "Cost Efficiency: Identify and eliminate waste, consolidating platforms and leveraging the latest technologies.",
    ],
    icon: Cpu,
  },
  {
    title: "Enhanced Security & Compliance",
    points: [
      "Risk Assessment: Comprehensive audits uncover vulnerabilities and compliance gaps.",
      "Mitigation Strategies: Implement policies, controls, and technologies to safeguard data and operations.",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Accelerated Innovation",
    points: [
      "Emerging Tech Insights: From AI/ML to IoT and blockchain, we evaluate new technologies for your context.",
      "Proof of Concepts: Rapid pilots demonstrate viability before full scale investment.",
    ],
    icon: Lightbulb,
  },
];

export default function TechnologyConsultingBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] px-6 py-[96px] text-[#0a0a0a]">
      {/* Left circle background */}
      <div className="pointer-events-none absolute -left-[360px] top-[-40px] hidden h-[820px] w-[820px] rounded-full lg:block">
        {Array.from({ length: 48 }).map((_, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#c91f28]/20"
            style={{
              width: `${820 - index * 17}px`,
              height: `${820 - index * 17}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px]">
        {/* Top Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Consulting Advantage
            </p>

            <h2 className="max-w-[500px] text-[42px] font-bold leading-[1.08] tracking-[-0.02em] text-[#0a0a0a] md:text-[56px]">
              Key Benefits
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[700px] text-left text-[19px] font-medium leading-[1.65] tracking-[-0.01em] text-[#565656] md:text-[21px]">
              Our technology consulting services help businesses reduce risk,
              modernize architecture, improve security, and unlock innovation
              through practical, scalable, and business-aligned technology
              decisions.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-[76px] grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative min-h-[350px] overflow-hidden rounded-[22px] border border-[#c91f28]/40 bg-[#141414] px-8 py-9 text-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-[#c91f28]/80 hover:bg-[#1a1a1a] hover:shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#c91f28]/10 blur-2xl transition-all duration-300 group-hover:bg-[#c91f28]/30" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-[220px] w-[220px] rounded-full bg-[#c91f28]/0 blur-2xl transition-all duration-300 group-hover:bg-[#c91f28]/16" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#1a1a1a] text-[#f87171] ring-1 ring-white/10 transition-all duration-300 group-hover:bg-[#c91f28] group-hover:text-white group-hover:ring-[#c91f28]">
                      <Icon size={31} strokeWidth={1.7} />
                    </div>

                    <span className="text-[18px] font-bold leading-none text-white/20 transition-all duration-300 group-hover:text-[#c91f28]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-10 max-w-[330px] text-left text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-[32px]">
                    {card.title}
                  </h3>

                  <div className="mt-7 space-y-5">
                    {card.points.map((point) => (
                      <p
                        key={point}
                        className="flex gap-3 text-left text-[16px] font-semibold leading-[1.55] tracking-[-0.01em] text-white/86"
                      >
                        <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#f87171]" />
                        <span>{point}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#c91f28] transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#c91f28]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}