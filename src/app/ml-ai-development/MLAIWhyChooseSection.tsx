import {
  BadgeCheck,
  Layers,
  Users,
  Settings2,
  ShieldCheck,
  Zap,
} from "lucide-react";

type Reason = {
  title: string;
  icon: React.ElementType;
};

const reasons: Reason[] = [
  {
    title:
      "Proven ML solutions for finance, healthcare, research, e-commerce, and enterprises.",
    icon: BadgeCheck,
  },
  {
    title:
      "End-to-end support: data prep, model building, deployment, and optimization.",
    icon: Layers,
  },
  {
    title: "Expert data scientists using advanced algorithms and modern frameworks.",
    icon: Users,
  },
  {
    title: "Fully customized ML solutions aligned with your business goals.",
    icon: Settings2,
  },
  {
    title: "Enterprise-grade quality, security, and compliance throughout.",
    icon: ShieldCheck,
  },
  {
    title: "Faster delivery with AI-ready teams and streamlined processes.",
    icon: Zap,
  },
];

export default function MLAIWhyChooseSection() {
  return (
    <section className="w-full bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Why Magnetic
          </p>

          <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0a0a0a] md:text-[40px]">
            Why Choose Magnetic Solution Limited for Machine Learning
            Development?
          </h2>

          <p className="mx-auto mt-5 max-w-[660px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">
            A team that pairs deep data-science expertise with a delivery process
            built for reliability, security, and measurable business impact.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group flex h-full items-start gap-4 rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <p className="text-[15px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
                  {reason.title}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
