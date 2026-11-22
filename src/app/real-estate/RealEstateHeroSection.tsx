import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight, Building2, Home, Layers } from "lucide-react";

const facts = [
  { label: "Property platforms", icon: Home },
  { label: "Smart buildings", icon: Building2 },
  { label: "Industry 4.0", icon: Layers },
];

export default async function RealEstateHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white max-sm:pb-[44px] pb-[64px] pt-[56px] text-black md:pb-[104px] md:pt-[80px]">
      <div className="mx-auto grid brand-container grid-cols-1 items-center max-sm:gap-8 gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:flex max-sm:w-fit max-sm:mx-auto">{t("Industry · Real Estate")}</span>

          <h1 className="max-sm:mx-auto max-sm:text-center mt-6 max-w-[620px] font-semibold text-black text-[clamp(28px,8.387vw,36px)] leading-[1.08] tracking-[-0.035em] sm:text-[40px] md:text-[50px] lg:text-[54px]">{t("Real Estate Tech, Industry 4.0")}</h1>

          <p className="max-sm:mx-auto max-sm:text-center mt-6 max-w-[560px] text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("We help real estate companies align their business with modern technology — from process automation to reality technologies that open new avenues of engagement.")}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact"
              className="inline-flex flex-1 items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920] sm:flex-none"
            >{t("Start a project")}<ArrowRight size={18} />
            </Link>
            <Link
              href="#services"
              className="inline-flex flex-1 items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28] sm:flex-none"
            >{t("Explore services")}</Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {facts.map((fact) => (
              <li key={fact.label} className="flex items-center gap-2 text-[13.5px] font-medium text-[#52525B]">
                <fact.icon size={17} className="text-[#c91f28]" />
                {t(fact.label)}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#ececec]">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop"
            alt={t("Modern commercial buildings seen from street level")}
            className="h-[280px] w-full object-cover md:h-[420px] lg:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
