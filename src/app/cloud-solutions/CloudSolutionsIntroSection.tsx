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
    <section className="relative overflow-hidden bg-white px-6 pb-[80px] pt-[8px] text-black md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Overview")}</p>
        <h2 className="mt-4 max-w-[760px] text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[38px]">{t("Cloud that your team can actually operate")}</h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {blocks.map((block) => (
            <article
              key={block.title}
              className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/40 md:p-8"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <block.icon size={22} />
              </span>

              <h3 className="mt-5 text-[19px] font-bold tracking-[-0.01em] text-black md:text-[21px]">
                {t(block.title)}
              </h3>

              <p className="mt-3 text-[15px] leading-[1.75] text-[#55585e] md:text-[15.5px]">
                {t(block.text)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
