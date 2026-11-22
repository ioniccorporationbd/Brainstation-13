import { getTranslator } from "@/i18n/server";

const benefits = [
  {
    title: "Enhanced Agility",
    description:
      "Replace rigid, monolithic systems with flexible, microservices-based architectures that adapt to evolving business needs.",
  },
  {
    title: "Cost Savings",
    description:
      "Automate repetitive tasks and eliminate technical debt to reduce operational cost and effort.",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Harness real-time analytics and predictive insights to optimize performance across departments.",
  },
  {
    title: "Competitive Edge",
    description:
      "Innovate faster, launch new offerings, and deliver superior customer experiences with intelligent automation.",
  },
];

export default async function WhyDigitalTransformationMattersSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("The Business Case")}</p>

          <h2 className="max-sm:mx-auto max-sm:text-center text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Why It Matters")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[16px] text-pretty">{t("Legacy systems slow teams down, inflate costs, and limit growth. Modernization turns those constraints into a competitive advantage.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[15px] font-bold text-[#c91f28]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-5 text-[#0a0a0a] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                {t(item.title)}
              </h3>

              <p className="mt-2 text-[14.5px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] text-pretty">
                {t(item.description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
