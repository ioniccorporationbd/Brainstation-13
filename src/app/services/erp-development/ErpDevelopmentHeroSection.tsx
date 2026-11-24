import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight, BarChart3, Blocks, Plug } from "lucide-react";

const chips = [
  { label: "ERPNext & Frappe", icon: Blocks },
  { label: "Custom modules", icon: Plug },
  { label: "Reporting & BI", icon: BarChart3 },
];

export default async function ErpDevelopmentHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[64px] pt-[56px] text-black max-sm:pb-[40px] max-sm:pt-[44px] md:pb-[88px] md:pt-[80px]">
      <div className="brand-container">
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Service · ERP Development")}</span>

          <h1 className="mt-6 max-w-[640px] text-center font-bold text-black text-[clamp(28px,8.387vw,36px)] leading-[1.08] tracking-[-0.035em] sm:text-[40px] md:text-[50px] lg:text-[54px]">{t("ERP built around how you work")}</h1>

          <p className="mt-6 max-w-[600px] text-center text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Custom ERPNext, Frappe and enterprise systems that unify operations, automate workflows and scale with the business.")}</p>

          <div className="mt-8 flex w-full max-w-[420px] flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <Link
              href="/schedule-a-call"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 sm:w-auto sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920] sm:flex-none"
            >{t("Book an ERP consult")}<ArrowRight size={18} />
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 sm:w-auto sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28] sm:flex-none"
            >{t("See our work")}</Link>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3">
            {chips.map((chip) => (
              <li key={chip.label} className="flex items-center gap-2 text-[13.5px] font-medium text-[#52525B]">
                <chip.icon size={17} className="text-[#c91f28]" />
                {t(chip.label)}
              </li>
            ))}
          </ul>
          <div className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#52525B]">
            <Blocks size={16} className="text-[#c91f28]" />
            <span>{t("Modules, workflows and integrations built to fit")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
