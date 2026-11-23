import { Cloud, ShieldCheck } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const blocks = [
  {
    icon: Cloud,
    title: "Architected deliberately",
    text: "The cloud only pays off when it’s architected deliberately. We design landing zones, automate infrastructure and instrument systems so your team ships faster with fewer 3am pages.",
  },
  {
    icon: ShieldCheck,
    title: "Security-first, cost-aware",
    text: "Whether you’re migrating monoliths or scaling microservices, we bring a security-first, cost-aware approach.",
  },
];

export default async function CloudSolutionsIntroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[52px] max-sm:pb-7 pt-[8px] text-black md:pb-[104px]">
      <div className="brand-container">
        <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Overview")}</p>
        <h2 className="max-sm:mx-auto max-sm:text-center mt-4 max-w-[760px] text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Cloud your team can operate")}</h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 max-sm:gap-4">
          {blocks.map((block) => (
            <article
              key={block.title}
              className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/40 md:p-8 max-sm:p-4"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <block.icon size={22} />
              </span>

              <h3 className="mt-5 text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                {t(block.title)}
              </h3>

              <p className="mt-3 text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">
                {t(block.text)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
