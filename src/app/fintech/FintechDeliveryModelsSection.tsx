import {
  Boxes,
  Code2,
  Cpu,
  Layers3,
  Rocket,
  Settings2,
} from "lucide-react";

type DeliveryCard = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const cards: DeliveryCard[] = [
  {
    title: "White-Label Ready",
    description:
      "Launch under your own brand with full creative and operational control.",
    icon: Boxes,
  },
  {
    title: "Source Code Ownership",
    description:
      "Receive complete source code rights to ensure independence and flexibility.",
    icon: Code2,
  },
  {
    title: "Microservice Architecture",
    description:
      "Utilize modular design for smooth scaling and rapid feature deployment.",
    icon: Layers3,
  },
  {
    title: "End-to-End Customization",
    description:
      "Adapt every feature, module, and workflow to match your exact needs.",
    icon: Settings2,
  },
  {
    title: "Fast GTM Delivery",
    description:
      "Go from concept to launch in weeks without sacrificing quality or compliance.",
    icon: Rocket,
  },
  {
    title: "Feature Enrichment",
    description:
      "Get expert assistance to modernize existing infrastructure without costly overhauls.",
    icon: Cpu,
  },
];

export default function FintechDeliveryModelsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto max-w-[1180px]">
        {/* Top Center Title */}
        <div className="mx-auto max-w-[850px] text-center">
          <p className="text-[16px] font-bold uppercase tracking-[0.12em] text-[#3f93cf]">
            Flexible Delivery Models
          </p>

          <h2 className="mt-5 text-[38px] font-bold leading-[1.08] tracking-[-0.065em] text-[#050b18] md:text-[54px]">
            From Go-To-Market to Fully Customized, We Deliver Both
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[17px] font-medium leading-[1.6] tracking-[-0.035em] text-[#42637a] md:text-[19px]">
            Choose a ready-to-launch fintech platform or build a fully tailored
            solution with enterprise-grade architecture, ownership, and
            scalability.
          </p>
        </div>

        {/* Cards - One Row 3 Cards */}
        <div className="mt-[68px] grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative min-h-[315px] overflow-hidden rounded-[14px] bg-[#111E40] px-8 py-8 text-white shadow-[0_18px_55px_rgba(17,30,64,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(17,30,64,0.26)]"
              >
                {/* Hover Light */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-[190px] w-[190px] rounded-full bg-[#4fa0d1]/0 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/25" />
                <div className="pointer-events-none absolute -bottom-24 -left-20 h-[170px] w-[170px] rounded-full bg-[#ffab2e]/0 blur-2xl transition-all duration-300 group-hover:bg-[#ffab2e]/15" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition-all duration-300 group-hover:scale-110 group-hover:border-[#4fa0d1] group-hover:bg-[#4fa0d1]">
                      <Icon size={28} strokeWidth={1.6} />
                    </div>

                    <span className="text-[42px] font-bold leading-none text-white/[0.05] transition duration-300 group-hover:text-white/[0.10]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-16">
                    <h3 className="text-[28px] font-bold leading-[1.15] tracking-[-0.055em] text-white md:text-[30px]">
                      {card.title}
                    </h3>

                    <p className="mt-6 max-w-[330px] text-[16px] font-medium leading-[1.55] tracking-[-0.025em] text-white/82">
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
    </section>
  );
}