import Link from "next/link";
import { getTranslator } from "@/i18n/server";

type RiskStep = {
  number: string;
  title: string;
  description: string;
};

const riskSteps: RiskStep[] = [
  {
    number: "01",
    title: "Start Immediately",
    description: "Begin working with pre-vetted engineers right away.",
  },
  {
    number: "02",
    title: "Assessment Period",
    description:
      "Collaborate, evaluate skills, and check workflow alignment during the first 2 weeks.",
  },
  {
    number: "03",
    title: "Flexible Exit Option",
    description:
      "If the fit isn\u2019t right within the first two weeks, you can step away before committing to a long-term engagement.",
  },
  {
    number: "04",
    title: "Seamless Continuation",
    description: "If satisfied, continue engagement confidently.",
  },
];

export default async function RiskFreeTimelineSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        <div className="text-center">
          <h2 className="max-sm:mx-auto max-sm:text-center mx-auto text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Risk-Free Talent Alignment")}</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {riskSteps.map((step) => (
            <article
              key={step.number}
              className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
            >
              <span className="text-[26px] font-bold leading-none tracking-[-0.01em] text-[#c91f28]">
                {t(step.number)}
              </span>

              <h3 className="mt-6 text-[#0a0a0a] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                {t(step.title)}
              </h3>

              <p className="mt-3 text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] text-pretty">
                {t(step.description)}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/schedule-a-call"
            className="inline-flex rounded-full bg-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
          >{t("Book my Risk-Free Timeline")}</Link>
        </div>
      </div>
    </section>
  );
}
