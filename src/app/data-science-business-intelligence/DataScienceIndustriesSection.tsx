import { Boxes, Factory, Plane, ShoppingBag, Store } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const industries = [
  { title: "Healthcare & Life Science", description: "Patient, clinical and operational reporting.", icon: Boxes },
  { title: "Retail", description: "Basket, store and promotion analytics.", icon: Store },
  { title: "Manufactur\u00ADing", description: "Production, quality and downtime analysis.", icon: Factory },
  { title: "Aerospace", description: "Maintenance and supply-chain visibility.", icon: Plane },
  { title: "Ecommerce", description: "Funnel, cohort and fulfilment reporting.", icon: ShoppingBag },
];

export default async function DataScienceIndustriesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] max-sm:pb-7 md:pb-[104px]">
      <div className="brand-container">
        <div className="max-w-[700px]">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Our experience in")}</p>
          <h2 className="max-sm:mx-auto max-sm:text-center mt-4 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Industries")}</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("The data problems differ by sector; the discipline does not.")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={19} />
              </span>
              <h3 className="mt-4 text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px] [overflow-wrap:anywhere]">
                {t(item.title)}
              </h3>
              <p className="mt-1.5 text-[13px] leading-[1.6] text-[#52525B] text-pretty">
                {t(item.description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
