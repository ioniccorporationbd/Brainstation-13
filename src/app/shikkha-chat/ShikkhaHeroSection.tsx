import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import ShikkhaFrame from "./ShikkhaFrame";

const facts = [
  { value: "6", label: "Core modules" },
  { value: "47", label: "Product features" },
  { value: "8", label: "Role dashboards" },
  { value: "1", label: "Unified platform" },
];

const chips = [
  "All roles, one login",
  "AI Pathshala learning",
  "40+ page school website",
];

export default async function ShikkhaHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[64px] pt-[56px] text-black md:pb-[104px] md:pt-[80px]">
      <div className="mx-auto grid min-w-0 brand-container items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-16">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
            <Sparkles size={14} strokeWidth={2.2} />{t("Product · Education ERP")}</span>

          <div className="mt-6 flex items-center gap-3">
            <Image
              src="/images/shikkha/shikkha-logo.png"
              alt={t("Shikkha Chat logo")}
              width={833}
              height={313}
              priority
              className="h-[54px] w-auto md:h-[62px]"
            />
          </div>

          <h1 className="mt-6 text-[clamp(30px,8.9vw,38px)] font-semibold leading-[1.08] tracking-[-0.03em] text-black md:text-[52px] lg:text-[56px]">{t("The complete education management ERP for modern schools")}</h1>

          <p className="mt-5 max-w-[560px] text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Shikkha Chat brings school administration, AI-powered learning, teachers, students, parents and government oversight together in one secure platform — across every class, section and subject.")}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
            >{t("Request a Demo")}<ArrowRight size={17} />
            </Link>
            <Link
              href="#dashboards"
              className="inline-flex items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
            >{t("See the dashboards")}</Link>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
            {chips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#52525B]"
              >
                <CheckCircle2
                  size={15}
                  strokeWidth={2.4}
                  className="text-[#c91f28]"
                />
                {t(chip)}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <ShikkhaFrame
            src="/images/shikkha/sc-hero.webp"
            alt={t("Shikkha Chat platform overview on shikkhachat.com")}
            url="shikkhachat.com"
            priority
          />
          <p className="mt-3 text-center text-[12px] font-medium text-[#8a8f97]">{t("The Shikkha Chat teacher workspace, captured from the live application.")}</p>
        </div>
      </div>

      <div className="mx-auto mt-14 brand-container border-t border-[#ececec] pt-8 md:mt-16">
        <dl className="grid grid-cols-2 gap-y-7 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="text-center md:text-left">
              <dt className="sr-only">{t(fact.label)}</dt>
              <dd>
                <span className="block text-[30px] font-bold leading-none tracking-[-0.03em] text-[#c91f28] md:text-[34px]">
                  {t(fact.value)}
                </span>
                <span className="mt-2 block text-[13px] font-medium uppercase tracking-[0.1em] text-[#52525B]">
                  {t(fact.label)}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
