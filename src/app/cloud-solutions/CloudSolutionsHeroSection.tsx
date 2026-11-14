import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight, Globe2, Layers, ShieldCheck } from "lucide-react";

const chips = [
  { label: "Multi-cloud & hybrid", icon: Globe2 },
  { label: "Infrastructure as code", icon: Layers },
  { label: "Security-first delivery", icon: ShieldCheck },
];

export default async function CloudSolutionsHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
      <div className="grid brand-container grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Service · Cloud Solutions")}</span>

          <h1 className="mt-6 max-w-[620px] text-[38px] font-bold leading-[1.04] tracking-[-0.03em] text-black md:text-[52px] lg:text-[56px]">{t("Cloud platforms built for reliability and speed")}</h1>

          <p className="mt-6 max-w-[560px] text-[15px] leading-[1.6] text-[#52525B] md:text-[15px]">{t("Migration, infrastructure-as-code and observability that make your systems faster, safer and cheaper to run.")}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/schedule-a-call"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920] sm:flex-none"
            >{t("Book a cloud review")}<ArrowRight size={18} />
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28] sm:flex-none"
            >{t("See our work")}</Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {chips.map((chip) => (
              <li key={chip.label} className="flex items-center gap-2 text-[13.5px] font-medium text-[#52525B]">
                <chip.icon size={17} className="text-[#c91f28]" />
                {t(chip.label)}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1400&auto=format&fit=crop"
              alt={t("Cloud infrastructure engineers working in a data centre")}
              className="h-[280px] w-full object-cover md:h-[420px] lg:h-[480px]"
            />
          </div>

          <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-lg border border-[#ececec] bg-white px-4 py-2.5">
            <Layers size={16} className="text-[#c91f28]" />
            <span className="text-[13px] font-semibold text-black">{t("Landing zones, automation and observability")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
