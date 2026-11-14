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
    <section className="w-full overflow-hidden bg-white pb-[64px] pt-[56px] text-[#000000] md:pb-[88px] md:pt-[80px]">
      <div className="grid brand-container grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div>
          <span className="inline-flex rounded-full bg-[#fdecec] px-4 py-2 text-[12px] font-bold uppercase leading-none tracking-[0.14em] text-[#c91f28]">{t("Enterprise MSFA Platform")}</span>

          <h1 className="mt-6 max-w-[620px] text-[38px] font-bold leading-[1.08] tracking-[-0.03em] text-[#000000] md:text-[52px] lg:text-[56px]">{t("Govern field sales at")}{" "}
            <span className="text-[#c91f28]">{t("true scale")}</span>
          </h1>

          <p className="mt-5 max-w-[560px] text-[15px] font-medium leading-[1.7] text-[#4a4a4a] md:text-[18px]">{t("Digitize, govern, and optimize last-mile execution with an offline-first, ERP-integrated platform trusted by leading enterprises.")}</p>

          <div className="mt-7 flex flex-wrap gap-2.5">
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

                  <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#2b2b2b]">
                    {t(item.label)}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <Link
              href="/schedule-a-call"
              className="inline-flex flex-1 items-center justify-center rounded-[6px] bg-[#c91f28] px-6 py-3.5 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-[#a71920] sm:flex-none"
            >{t("Explore Platform")}</Link>

            <Link
              href="/case-studies"
              className="inline-flex flex-1 items-center justify-center rounded-[6px] border border-[#d9d9d9] bg-white px-6 py-3.5 text-[15px] font-bold text-[#000000] transition-colors duration-300 hover:border-[#c91f28] hover:text-[#c91f28] sm:flex-none"
            >{t("View Case Studies")}</Link>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden border border-[#ececec] bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1400&auto=format&fit=crop"
              alt={t("Field sales representative capturing an order on a mobile device")}
              className="h-[280px] w-full object-cover md:h-[420px] lg:h-[480px]"
            />
          </div>

          <div className="absolute -bottom-6 left-4 hidden w-[190px] border border-[#ececec] bg-white p-4 md:block lg:left-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Mobile Order")}</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-[3px] bg-[#fdecec] text-[10px] font-bold text-[#c91f28]">
                ✓
              </span>
            </div>

            <div className="mt-3 space-y-1.5">
              <div className="h-2 w-full rounded-[2px] bg-[#f2f2f2]" />
              <div className="h-2 w-[78%] rounded-[2px] bg-[#f2f2f2]" />
              <div className="h-2 w-[62%] rounded-[2px] bg-[#f2f2f2]" />
            </div>

            <div className="mt-3 flex items-center gap-2 border-t border-[#ececec] pt-3">
              <span className="h-2 w-2 rounded-full bg-[#c91f28]" />
              <span className="text-[11px] font-semibold text-[#4a4a4a]">{t("Synced to ERP offline")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
