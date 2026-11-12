import { Boxes, Factory, Plane, ShoppingBag, Store } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const industries = [
  { title: "Healthcare & Life Science", description: "Patient, clinical and operational reporting.", icon: Boxes },
  { title: "Retail", description: "Basket, store and promotion analytics.", icon: Store },
  { title: "Manufacturing", description: "Production, quality and downtime analysis.", icon: Factory },
  { title: "Aerospace", description: "Maintenance and supply-chain visibility.", icon: Plane },
  { title: "Ecommerce", description: "Funnel, cohort and fulfilment reporting.", icon: ShoppingBag },
];

export default async function DataScienceIndustriesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[700px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Our experience in")}</p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Industries")}</h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("The data problems differ by sector; the discipline does not.")}</p>
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
              <h3 className="mt-4 text-[14.5px] font-semibold leading-[1.35] text-black">
                {t(item.title)}
              </h3>
              <p className="mt-1.5 text-[13px] leading-[1.6] text-[#55585e]">
                {t(item.description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
