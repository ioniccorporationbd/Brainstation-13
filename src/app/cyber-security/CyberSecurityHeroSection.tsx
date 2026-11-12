import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight, Bug, ShieldCheck, Siren } from "lucide-react";

const chips = [
  { label: "OWASP-aligned testing", icon: Bug },
  { label: "Forensics & threat intel", icon: Siren },
  { label: "Cloud & API security", icon: ShieldCheck },
];

export default async function CyberSecurityHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Service · Cyber Security")}</span>

          <h1 className="mt-6 max-w-[620px] text-[38px] font-bold leading-[1.04] tracking-[-0.03em] text-black md:text-[52px] lg:text-[56px]">{t("Cyber security services")}</h1>

          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">{t("Proactively defend against evolving threats with expert assessments, penetration testing and mitigation strategies built on digital forensics, threat intelligence and OWASP frameworks.")}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/schedule-a-call"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920] sm:flex-none"
            >{t("Schedule a Call")}<ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28] sm:flex-none"
            >{t("Talk to a specialist")}</Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {chips.map((chip) => (
              <li key={chip.label} className="flex items-center gap-2 text-[13.5px] font-medium text-[#55585e]">
                <chip.icon size={17} className="text-[#c91f28]" />
                {t(chip.label)}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1400&auto=format&fit=crop"
              alt={t("Padlock on a laptop keyboard representing enterprise endpoint security")}
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
            />
          </div>

          <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-lg border border-[#ececec] bg-white px-4 py-2.5">
            <ShieldCheck size={16} className="text-[#c91f28]" />
            <span className="text-[13px] font-semibold text-black">{t("Assessment, testing and continuous monitoring")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
