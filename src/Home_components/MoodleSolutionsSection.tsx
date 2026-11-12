import Link from "next/link";
import { getTranslator } from "@/i18n/server";

const solutionItems = [
  {
    title: "End-to-End Moodle Solutions",
    description:
      "Implementation, UX customization, hosting, upgrades, support, and performance tuning.",
  },
  {
    title: "Secure Proctoring & Assessments",
    description:
      "Identity checks, exam integrity, audit trails, and high-stakes assessment workflows.",
  },
  {
    title: "Powerful Moodle Plugins & Integrations",
    description:
      "Interactive content, attendance, scheduling, payments/SSO/CRM integrations, and custom plugins.",
  },
];

export default async function MoodleSolutionsSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white py-[80px] md:py-[104px] lg:py-[128px]">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-[13px] font-semibold uppercase leading-[1.4] tracking-[0.16em] text-primary">{t("Moodle Capabilities")}</p>

          <h2 className="mx-auto mt-4 max-w-[820px] text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#0A0A0A] sm:text-[46px] lg:text-[56px]">{t("Moodle Solutions for Real Impact")}</h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[16px] font-normal leading-[1.7] text-[#52525B] sm:text-[18px]">{t("Magnetic Solution Limited is Moodle’s Certified Integration Partner in Bangladesh and the first-ever organizer of MoodleMoot Bangladesh. Explore how we build secure, scalable, audit-ready Moodle LMS and proctoring for institutions that can’t afford failure.")}</p>

          <Link
            href="/lms-development"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >{t("Join Moodle Moot Bangladesh 2026")}<span aria-hidden="true" className="text-[18px] leading-none">
              →
            </span>
          </Link>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-14 h-px w-full max-w-[1080px] bg-black/[0.08] lg:mt-16" />

        {/* Solution items */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {solutionItems.map((item) => (
            <div key={item.title}>
              <span
                aria-hidden="true"
                className="mb-5 block h-[3px] w-10 rounded-full bg-primary"
              />
              <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0A0A0A] sm:text-[22px]">
                {t(item.title)}
              </h3>
              <p className="mt-3 text-[15px] font-normal leading-[1.6] text-[#52525B]">
                {t(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
