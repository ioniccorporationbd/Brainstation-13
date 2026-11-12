import { ArrowUpRight } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const benefits = [
  {
    title: "Learner-scale platforms",
    description:
      "Role-aware portals and course delivery built for large, active cohorts.",
  },
  {
    title: "Education-first delivery",
    description:
      "LMS, assessment and publishing expertise rather than generic web work.",
  },
  {
    title: "Assessment reliability",
    description:
      "Exam flows designed for pressure moments, with integrity checks in place.",
  },
  {
    title: "Completion-focused design",
    description:
      "Progress, nudges and clear structure that keep learners moving to the end.",
  },
];

export default async function EducationBenefitsSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[900px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Why it works")}</p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Platforms learners actually finish")}</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group flex h-full flex-col justify-between rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  <ArrowUpRight size={18} />
                </span>
                <h3 className="mt-5 text-[15.5px] font-semibold leading-[1.35] text-black">
                  {t(benefit.title)}
                </h3>
              </div>
              <p className="mt-3 text-[13.5px] leading-[1.65] text-[#55585e]">{t(benefit.description)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
