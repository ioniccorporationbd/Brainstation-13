import {
  BrainCircuit,
  Languages,
  LineChart,
  Network,
  ScanEye,
  Workflow,
} from "lucide-react";
import { getTranslator } from "@/i18n/server";

type Capability = {
  title: string;
  icon: React.ElementType;
};

const capabilities: Capability[] = [
  {
    title:
      "Build scalable ML models for prediction, classification, and automation.",
    icon: BrainCircuit,
  },
  {
    title: "Enable systems to understand and process human language (NLP).",
    icon: Languages,
  },
  {
    title:
      "Implement computer vision for image, video, face, and object recognition.",
    icon: ScanEye,
  },
  {
    title: "Deliver predictive and prescriptive analytics for smarter decisions.",
    icon: LineChart,
  },
  {
    title: "Automate workflows to boost efficiency and reduce manual work.",
    icon: Workflow,
  },
  {
    title: "Support complex decision-making with AI-driven insights.",
    icon: Network,
  },
];

export default async function MLAICapabilitiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("What We Deliver")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("Our AI Capabilities")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[15px]">{t("End-to-end machine learning and AI engineering — from data preparation and model building to deployment, monitoring, and optimization.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#c91f28]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B]">
                  {t(capability.title)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
