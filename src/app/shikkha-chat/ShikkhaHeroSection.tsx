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
    <section className="relative overflow-hidden bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div>
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

          <h1 className="mt-6 text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[50px]">{t("The complete education management ERP for modern schools")}</h1>

          <p className="mt-5 max-w-[560px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">{t("Shikkha Chat brings school administration, AI-powered learning, teachers, students, parents and government oversight together in one secure platform — across every class, section and subject.")}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
            >{t("Request a Demo")}<ArrowRight size={17} />
            </Link>
            <Link
              href="#dashboards"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
            >{t("See the dashboards")}</Link>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
            {chips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#55585e]"
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

        <div>
          <ShikkhaFrame
            src="/images/shikkha/shikkha-teacher.webp"
            alt={t("Shikkha Chat teacher dashboard")}
            url="dash.shikkhachat.com/dashboard/teacher"
            priority
          />
          <p className="mt-3 text-center text-[12px] font-medium text-[#8a8f97]">{t("The Shikkha Chat teacher workspace, captured from the live application.")}</p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1240px] border-t border-[#ececec] pt-8 md:mt-16">
        <dl className="grid grid-cols-2 gap-y-7 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="text-center md:text-left">
              <dt className="sr-only">{t(fact.label)}</dt>
              <dd>
                <span className="block text-[30px] font-bold leading-none tracking-[-0.03em] text-[#c91f28] md:text-[34px]">
                  {t(fact.value)}
                </span>
                <span className="mt-2 block text-[13px] font-medium uppercase tracking-[0.1em] text-[#6b6f76]">
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
