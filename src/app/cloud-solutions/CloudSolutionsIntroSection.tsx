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
    <section className="relative overflow-hidden bg-white pb-[52px] pt-[8px] text-black md:pb-[104px]">
      <div className="brand-container">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Overview")}</p>
        <h2 className="text-[clamp(27px,8vw,32px)] mt-4 max-w-[760px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px] text-balance">{t("Cloud that your team can actually operate")}</h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {blocks.map((block) => (
            <article
              key={block.title}
              className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/40 md:p-8"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <block.icon size={22} />
              </span>

              <h3 className="text-[18px] md:text-[20px] leading-[1.3] mt-5 font-semibold tracking-[-0.01em] text-black text-balance">
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
