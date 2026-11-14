import { Banknote, Gauge, Lightbulb, Rocket } from "lucide-react";
import { getTranslator } from "@/i18n/server";

type MvpBenefit = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const benefits: MvpBenefit[] = [
  {
    title: "Speed to Market",
    description:
      "Rapid prototyping and sprint-based delivery get your MVP into users' hands fast.",
    icon: Rocket,
  },
  {
    title: "Investor-Ready",
    description:
      "Impress stakeholders with a polished MVP that demonstrates value, traction, and scalability.",
    icon: Lightbulb,
  },
  {
    title: "Cost Efficiency",
    description:
      "Eliminate wasteful development by prioritizing must-have features and deferring extras until validated.",
    icon: Banknote,
  },
  {
    title: "Expert Guidance",
    description:
      "Product strategists, UX designers, and engineers align your vision with market realities and technical feasibility.",
    icon: Gauge,
  },
];

export default async function MvpBenefitsSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        {/* Centered Heading */}
        <div className="mx-auto max-w-[780px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("MVP Advantage")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("Why Build an MVP with Magnetic Solution Limited?")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[15px]">{t("Build smarter, validate faster, and reduce product risk with a focused MVP strategy designed around real users, business goals, and rapid market learning.")}</p>
        </div>

        {/* Cards - 4 per row desktop */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.25] tracking-[-0.015em] text-[#0a0a0a]">
                  {t(item.title)}
                </h3>

                <p className="mt-2 text-[14px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B]">
                  {t(item.description)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
