import { Cpu, Globe2, Network, TrendingUp } from "lucide-react";
import { getTranslator } from "@/i18n/server";

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const features: Feature[] = [
  {
    title: "Deep Data DNA",
    description:
      "Gain clarity and control over complex, large-scale data and turn it into actionable intelligence.",
    icon: Network,
  },
  {
    title: "AI & Future Readiness",
    description:
      "Move from reactive reporting to predictive, AI-driven insight that keeps you ahead.",
    icon: Cpu,
  },
  {
    title: "Business-Centric ROI",
    description:
      "Lower operational costs while enabling faster, smarter decisions across your organization.",
    icon: TrendingUp,
  },
  {
    title: "Global-Grade Standards",
    description:
      "Operate with built-in security and compliance practices you can trust at enterprise scale.",
    icon: Globe2,
  },
];

export default async function DataWhyBrainStationSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white py-[52px] text-[#0a0a0a] md:py-[96px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Why Magnetic")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Why Magnetic Solution Limited")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("A data-engineering partner that pairs deep technical depth with a delivery process built for reliability and measurable impact.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group flex h-full items-start gap-4 rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-[16px] font-semibold leading-[1.35] tracking-[-0.01em] text-[#0a0a0a]">
                    {t(feature.title)}
                  </h3>

                  <p className="mt-2 text-[14.5px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
                    {t(feature.description)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
