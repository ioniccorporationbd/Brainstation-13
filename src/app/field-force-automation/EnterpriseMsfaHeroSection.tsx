import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { Cpu, RefreshCcw, WifiOff } from "lucide-react";

const heroFeatures = [
  {
    label: "AI Integrated",
    icon: Cpu,
  },
  {
    label: "ERP Integrated",
    icon: RefreshCcw,
  },
  {
    label: "Offline Ready",
    icon: WifiOff,
  },
];

export default async function EnterpriseMsfaHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-hidden bg-white pb-[64px] pt-[56px] text-[#000000] max-sm:pb-[40px] max-sm:pt-[44px] md:pb-[88px] md:pt-[80px]">
      <div className="brand-container">
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          <span className="inline-flex rounded-full bg-[#fdecec] px-4 py-2 text-[12px] font-bold uppercase leading-none tracking-normal text-[#c91f28]">{t("Enterprise MSFA Platform")}</span>

          <h1 className="mt-6 max-w-[640px] text-center font-bold text-[#000000] text-[clamp(28px,8.387vw,36px)] leading-[1.08] tracking-[-0.035em] sm:text-[40px] md:text-[50px] lg:text-[54px]">{t("Govern field sales at")}{" "}
            <span className="whitespace-nowrap text-[#c91f28]">{t("true scale")}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[600px] text-center text-[15px] font-medium leading-[1.7] text-[#4a4a4a] md:text-[18px]">{t("Digitize, govern, and optimize last-mile execution with an offline-first, ERP-integrated platform trusted by leading enterprises.")}</p>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {heroFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2.5 border border-[#ececec] bg-white px-3.5 py-2.5 transition-colors duration-300 hover:border-[#c91f28]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#fdecec] text-[#c91f28]">
                    <Icon size={14} strokeWidth={2.1} />
                  </span>

                  <span className="text-[12px] font-bold uppercase tracking-normal text-[#2b2b2b]">
                    {t(item.label)}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex w-full max-w-[420px] flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/schedule-a-call"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[6px] bg-[#c91f28] px-6 py-3.5 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-[#a71920] sm:w-auto"
            >{t("Explore Platform")}</Link>

            <Link
              href="/case-studies"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[6px] border border-[#d9d9d9] bg-white px-6 py-3.5 text-[15px] font-bold text-[#000000] transition-colors duration-300 hover:border-[#c91f28] hover:text-[#c91f28] sm:w-auto"
            >{t("View Case Studies")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
