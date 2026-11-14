import { Check } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const industries = [
  {
    title: "Banks",
    text: "Commercial and retail banks running internet banking, card services and process automation on our platforms.",
  },
  {
    title: "Financial Organization",
    text: "Non-bank financial institutions that need secure account, payment and reporting workflows.",
  },
  {
    title: "Banking & Fin-Tech Solution Providers",
    text: "Fintech and solution partners extending banking products with customized modules and integrations.",
  },
];

export default async function BankingFinancialIndustriesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] md:pb-[104px]">
      <div className="grid brand-container grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Clients we have served in")}</p>
          <h2 className="mt-4 text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px]">{t("Industries")}</h2>

          <ul className="mt-8 space-y-4">
            {industries.map((industry) => (
              <li
                key={industry.title}
                className="group flex gap-4 rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50 md:p-7"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Check size={18} strokeWidth={2.6} />
                </span>

                <div>
                  <h3 className="text-[16.5px] font-semibold text-black md:text-[17.5px]">
                    {t(industry.title)}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.7] text-[#52525B]">
                    {t(industry.text)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#ececec]">
          <img
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1400&auto=format&fit=crop"
            alt={t("Banking and financial industry")}
            className="h-[280px] w-full object-cover md:h-[380px] lg:h-[440px]"
          />
        </div>
      </div>
    </section>
  );
}
