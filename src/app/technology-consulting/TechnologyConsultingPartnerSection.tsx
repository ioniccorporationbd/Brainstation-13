import {
  BadgeCheck,
  Globe2,
  Handshake,
  Layers3,
  ShieldCheck,
} from "lucide-react";

type PartnerPoint = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const partnerPoints: PartnerPoint[] = [
  {
    title: "Holistic Approach",
    description:
      "We blend business acumen, technical depth, and change management expertise.",
    icon: Layers3,
  },
  {
    title: "Proven Methodology",
    description:
      "Structured frameworks ensure repeatable success and predictable outcomes.",
    icon: BadgeCheck,
  },
  {
    title: "Cross Industry Experience",
    description:
      "HealthTech, FinTech, Pharma, Retail, Manufacturing, and more.",
    icon: Handshake,
  },
  {
    title: "Global Delivery",
    description:
      "On-site, nearshore, and remote consulting models to fit your timeline and budget.",
    icon: Globe2,
  },
  {
    title: "Trusted Advisors",
    description:
      "Seasoned consultants and certified architects with a track record of transformation.",
    icon: ShieldCheck,
  },
];

export default function TechnologyConsultingPartnerSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[96px] text-[#11182f]">
      {/* Soft Circle Background */}
      <div className="pointer-events-none absolute -left-[360px] top-[-40px] hidden h-[820px] w-[820px] rounded-full lg:block">
        {Array.from({ length: 48 }).map((_, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#74c4ec]/20"
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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
              Consulting Partnership
            </p>

            <h2 className="max-w-[620px] text-[42px] font-bold leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[56px]">
              Why Partner with Brain Station 23?
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[690px] text-left text-[19px] font-medium leading-[1.65] tracking-[-0.035em] text-[#42637a] md:text-[21px]">
              We help organizations make better technology decisions with
              practical guidance, proven delivery models, and enterprise-ready
              consulting support from strategy to execution.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-[76px] grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {partnerPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative min-h-[300px] overflow-hidden rounded-[22px] border border-[#dce8f2] bg-white px-8 py-9 shadow-[0_16px_45px_rgba(17,30,64,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b7dff4] hover:shadow-[0_28px_80px_rgba(17,30,64,0.14)]"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-[210px] w-[210px] rounded-full bg-[#4fa0d1]/10 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/25" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-[210px] w-[210px] rounded-full bg-[#ffb22c]/0 blur-2xl transition-all duration-300 group-hover:bg-[#ffb22c]/15" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#f4f8fc] text-[#4fa0d1] ring-1 ring-[#dce8f2] transition-all duration-300 group-hover:bg-[#4fa0d1] group-hover:text-white group-hover:ring-[#4fa0d1]">
                      <Icon size={30} strokeWidth={1.7} />
                    </div>

                    <span className="text-[18px] font-bold leading-none text-[#111E40]/20 transition-all duration-300 group-hover:text-[#ffab2e]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-10 text-left text-[28px] font-bold leading-[1.15] tracking-[-0.06em] text-[#050b18] md:text-[32px]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-left text-[17px] font-medium leading-[1.65] tracking-[-0.03em] text-[#42637a]">
                    {item.description}
                  </p>
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

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}