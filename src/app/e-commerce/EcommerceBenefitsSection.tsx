import { ArrowUpRight } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const benefits = [
  {
    title: "Checkout built for speed",
    description:
      "Fewer steps, clear error states and fast payment paths keep buyers moving.",
  },
  {
    title: "Peak-season ready",
    description:
      "Architecture sized for real traffic spikes, with caching and queues in the right places.",
  },
  {
    title: "Conversion-focused delivery",
    description:
      "Experimentation and Core Web Vitals tuning continue after launch, not only before it.",
  },
  {
    title: "Full-stack ownership",
    description:
      "Storefront, checkout, fulfilment and the analytics layer delivered by one team.",
  },
];

export default async function EcommerceBenefitsSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] md:pb-[104px]">
      <div className="mx-auto brand-container">
        <div className="max-w-[900px]">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Why it works")}</p>
          <h2 className="max-sm:mx-auto max-sm:text-center mt-4 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Built for traffic, not just launch day")}</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group flex h-full flex-col justify-between rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  <ArrowUpRight size={18} />
                </span>
                <h3 className="mt-5 text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                  {t(benefit.title)}
                </h3>
              </div>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-[#52525B] text-pretty">{t(benefit.description)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
