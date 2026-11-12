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
    title: "Full Assessment Period",
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
    <section className="bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <h2 className="mx-auto text-[20px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0a0a0a] min-[380px]:text-[22px] sm:text-[30px] md:text-[42px]">{t("Risk-Free Talent Alignment")}</h2>
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

              <h3 className="mt-6 text-[20px] font-bold leading-[1.25] tracking-[-0.015em] text-[#0a0a0a]">
                {t(step.title)}
              </h3>

              <p className="mt-3 text-[15px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
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
