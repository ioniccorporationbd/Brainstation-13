import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

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
    <section className="relative overflow-hidden bg-white pb-[64px] pt-[56px] text-black max-sm:pb-[44px] max-sm:pt-[40px] md:pb-[104px] md:pt-[80px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(58%_100%_at_50%_0%,rgba(201,31,40,0.06)_0%,rgba(255,255,255,0)_72%)]"
      />

      <div className="relative mx-auto min-w-0 brand-container">
        <div className="mx-auto flex min-w-0 max-w-[820px] flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-normal text-[#c91f28]">
            <Sparkles size={14} strokeWidth={2.2} />{t("Product · Education ERP")}</span>

          <div className="mt-7 flex items-center justify-center">
            <Image
              src="/images/shikkha/shikkha-logo.png"
              alt={t("Shikkha Chat logo")}
              width={833}
              height={313}
              priority
              className="h-[54px] w-auto md:h-[62px]"
            />
          </div>

          <h1 className="mx-auto mt-6 max-w-[720px] text-center font-semibold text-black text-[clamp(28px,8.387vw,36px)] leading-[1.08] tracking-[-0.035em] sm:text-[40px] md:text-[50px] lg:text-[54px]">{t("Complete education ERP")}</h1>

          <p className="mx-auto mt-5 max-w-[620px] text-center text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Shikkha Chat brings school administration, AI-powered learning, teachers, students, parents and government oversight together in one secure platform — across every class, section and subject.")}</p>

          <div className="mt-8 flex w-full max-w-[420px] flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <Link
              href="/schedule-a-call"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg text-center bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920] sm:w-auto sm:shrink-0 lg:max-xl:px-4 lg:max-xl:text-[13px]"
            >{t("Request a Demo")}<ArrowRight size={17} />
            </Link>
            <Link
              href="#dashboards"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg text-center border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28] sm:w-auto sm:shrink-0 lg:max-xl:px-4 lg:max-xl:text-[13px]"
            >{t("See the dashboards")}</Link>
          </div>

          <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2.5">
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

        <div className="mx-auto mt-14 min-w-0 max-w-[820px] max-sm:mt-10 md:mt-16">
          <div
            aria-hidden
            className="h-px w-full bg-gradient-to-r from-transparent via-[#e8e8e8] to-transparent"
          />
          <dl className="mt-8 grid grid-cols-2 gap-y-7 md:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="text-center">
                <dt className="sr-only">{t(fact.label)}</dt>
                <dd>
                  <span className="block text-[30px] font-bold leading-none tracking-[-0.03em] text-[#c91f28] md:text-[34px]">
                    {t(fact.value)}
                  </span>
                  <span className="mt-2 block text-[13px] font-medium uppercase tracking-normal text-[#52525B]">
                    {t(fact.label)}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
