import { BrainCircuit, CloudCog, LineChart, Workflow } from "lucide-react";
import { getTranslator } from "@/i18n/server";

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

export default async function DigitalTransformationCoreCapabilitiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("What We Deliver")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("Core Capabilities")}</h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[15px]">{t("The building blocks we combine to modernize your systems and operations end to end.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.25] tracking-[-0.015em] text-[#0a0a0a]">
                  {t(card.title)}
                </h3>

                <p className="mt-2 text-[14px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B]">
                  {t(card.description)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
