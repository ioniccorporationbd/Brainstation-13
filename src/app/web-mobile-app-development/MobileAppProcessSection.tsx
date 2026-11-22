import { getTranslator } from "@/i18n/server";

const processSteps = [
  {
    step: "STEP 1",
    title: "Discovery & Requirement Analysis",
    description: "Scope, users, constraints and success criteria",
  },
  {
    step: "STEP 2",
    title: "UI/UX Design",
    description: "User research, flows and wireframes",
  },
  {
    step: "STEP 3",
    title: "Agile Development",
    description: "Sprints, milestones and review builds",
  },
  {
    step: "STEP 4",
    title: "QA & Testing",
    description: "Manual and automated test coverage",
  },
  {
    step: "STEP 5",
    title: "Deployment & App Store Launch",
    description: "Release readiness and store submission",
  },
  {
    step: "STEP 6",
    title: "Ongoing Support & Updates",
    description: "Monitoring, fixes and feature iterations",
  },
];

export async function MobileAppProcessSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] text-[#0a0a0a] md:pb-[112px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Delivery Process")}</p>

          <h2 className="max-sm:mx-auto max-sm:text-center text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("App Development Process")}</h2>

          <p className="mt-4 text-[15px] font-medium leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Six stages from first conversation to post-launch care.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((item, index) => (
            <article
              key={item.step}
              className="group relative flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[15px] font-bold text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-[#0a0a0a] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                {t(item.title)}
              </h3>

              <p className="mt-2 text-[14.5px] font-medium leading-[1.6] text-[#52525B] text-pretty">
                {t(item.description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
