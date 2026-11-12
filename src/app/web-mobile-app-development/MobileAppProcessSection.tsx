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
    <section className="w-full bg-white px-6 pb-[96px] text-[#0a0a0a] md:pb-[112px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Delivery Process")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Our Mobile App Development Process")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("Six stages from first conversation to post-launch care.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((item, index) => (
            <article
              key={item.step}
              className="group relative flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[15px] font-bold text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                {t(item.title)}
              </h3>

              <p className="mt-2 text-[14px] font-medium leading-[1.6] text-[#565656]">
                {t(item.description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
