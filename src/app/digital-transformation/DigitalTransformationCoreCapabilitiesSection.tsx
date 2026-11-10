import { BrainCircuit, CloudCog, LineChart, Workflow } from "lucide-react";

type CapabilityCard = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const capabilities: CapabilityCard[] = [
  {
    title: "AI & RPA Integration",
    description:
      "Automate rule-based workflows, reduce errors, and free up teams for strategic work.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud-Native Modernization",
    description:
      "Migrate legacy systems to AWS, Azure, or GCP using containers and serverless patterns.",
    icon: CloudCog,
  },
  {
    title: "Process Mining & Optimization",
    description:
      "Visualize end-to-end processes, identify bottlenecks, and implement continuous improvements.",
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
    <section className="bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            What We Deliver
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            Core Capabilities
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">
            The building blocks we combine to modernize your systems and
            operations end to end.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[18px] font-bold leading-[1.25] tracking-[-0.015em] text-[#0a0a0a]">
                  {card.title}
                </h3>

                <p className="mt-2 text-[14px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
