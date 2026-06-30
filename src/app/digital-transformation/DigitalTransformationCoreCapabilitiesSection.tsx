import {
  BrainCircuit,
  CloudCog,
  LineChart,
  Workflow,
} from "lucide-react";

type CapabilityCard = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const capabilities: CapabilityCard[] = [
  {
    title: "AI & RPA Integration",
    description:
      "Automate rule based workflows, reduce errors, and free up-teams for strategic work.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud Native-Modernization",
    description:
      "Migrate legacy systems to AWS, AEM, Azure, or GCP using containers and serverless patterns.",
    icon: CloudCog,
  },
  {
    title: "Process Mining & Optimization",
    description:
      "Visualize end-to-end processes, identify-bottlenecks, and implement continuous improvements.",
    icon: Workflow,
  },
  {
    title: "Predictive Analytics",
    description:
      "Deploy machine learning models to forecast demand, maintenance needs, and fraud risk.",
    icon: LineChart,
  },
];

export default function DigitalTransformationCoreCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[104px] text-white">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-center text-[44px] font-normal leading-[1.08] tracking-[-0.075em] text-white md:text-[58px]">
          Core Capabilities
        </h2>

        <div className="mt-[92px] grid grid-cols-1 gap-[32px] sm:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative min-h-[280px] overflow-hidden rounded-[8px] border border-white/0 bg-[#223f5c] px-[32px] py-[38px] shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#4fa0d1]/70 hover:bg-[#284a6d] hover:shadow-[0_28px_80px_rgba(79,160,209,0.18)]"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#4fa0d1]/0 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/25" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-[190px] w-[190px] rounded-full bg-[#ffb22c]/0 blur-2xl transition-all duration-300 group-hover:bg-[#ffb22c]/10" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#183253] text-[#4fa0d1] ring-1 ring-white/10 transition-all duration-300 group-hover:bg-[#4fa0d1] group-hover:text-white group-hover:ring-[#4fa0d1]">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <span className="text-[18px] font-bold leading-none text-white/20 transition-all duration-300 group-hover:text-[#ffb22c]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-12">
                    <h3 className="max-w-[280px] text-[26px] font-bold leading-[1.18] tracking-[-0.055em] text-white md:text-[30px]">
                      {card.title}
                    </h3>

                    <p className="mt-7 max-w-[280px] text-[17px] font-bold leading-[1.5] tracking-[-0.035em] text-white/90">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#4fa0d1] transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-white/45">
        Powered by NeuralFlow
      </span>
    </section>
  );
}