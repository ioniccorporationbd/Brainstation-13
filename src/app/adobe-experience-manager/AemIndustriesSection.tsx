import { Check } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const industries = [
  "Health Care",
  "Financial Services",
  "Telecommunications",
  "Media and Entertainment",
  "Government",
  "Education",
  "High-Tech",
  "Manufacturing",
  "Retail",
  "Travel and Hospitality",
];

export default async function AemIndustriesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Industries")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Industries We Build For")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("AEM engagements across regulated, content-heavy and high-traffic sectors.")}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[980px] grid-cols-1 gap-4 sm:grid-cols-2">
          {industries.map((industry) => (
            <div
              key={industry}
              className="group flex items-center gap-4 rounded-2xl border border-[#ececec] bg-white px-5 py-4 transition-colors duration-300 hover:border-[#c91f28]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                <Check size={16} strokeWidth={2.6} />
              </span>

              <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#0a0a0a]">
                {t(industry)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
