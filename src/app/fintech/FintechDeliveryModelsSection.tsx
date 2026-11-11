import { Boxes, Code2, Cpu, Layers3, Rocket, Settings2 } from "lucide-react";

const cards = [
  {
    title: "White-Label Ready",
    description: "Launch under your own brand with full creative and operational control.",
    icon: Boxes,
  },
  {
    title: "Source Code Ownership",
    description: "Receive complete source code rights to ensure independence and flexibility.",
    icon: Code2,
  },
  {
    title: "Microservice Architecture",
    description: "Utilize modular design for smooth scaling and rapid feature deployment.",
    icon: Layers3,
  },
  {
    title: "End-to-End Customization",
    description: "Adapt every feature, module, and workflow to match your exact needs.",
    icon: Settings2,
  },
  {
    title: "Fast GTM Delivery",
    description: "Go from concept to launch quickly without sacrificing quality or compliance.",
    icon: Rocket,
  },
  {
    title: "Feature Enrichment",
    description: "Get expert assistance to modernize existing infrastructure without costly overhauls.",
    icon: Cpu,
  },
];

export default function FintechDeliveryModelsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Flexible delivery models
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
            From go-to-market to fully customized
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
            Choose a ready-to-launch fintech platform or build a fully tailored
            solution with enterprise-grade architecture, ownership and
            scalability.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  <card.icon size={21} />
                </span>
                <span className="text-[26px] font-bold leading-none text-[#ececec] transition-colors duration-200 group-hover:text-[#f6d5d7]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-[17px] font-semibold leading-[1.3] text-black">{card.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-[#55585e]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
