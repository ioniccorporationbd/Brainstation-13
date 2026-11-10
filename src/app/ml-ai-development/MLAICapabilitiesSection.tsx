import {
  BrainCircuit,
  Languages,
  LineChart,
  Network,
  ScanEye,
  Workflow,
} from "lucide-react";

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

export default function MLAICapabilitiesSection() {
  return (
    <section className="w-full bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            What We Deliver
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            Our AI Capabilities
          </h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">
            End-to-end machine learning and AI engineering — from data
            preparation and model building to deployment, monitoring, and
            optimization.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#c91f28]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 text-[15px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
                  {capability.title}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
