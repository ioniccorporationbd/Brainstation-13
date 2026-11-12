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
    <section className="bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("The Business Case")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Why Digital Transformation Matters")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("Legacy systems slow teams down, inflate costs, and limit growth. Modernization turns those constraints into a competitive advantage.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[15px] font-bold text-[#c91f28]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-5 text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                {t(item.title)}
              </h3>

              <p className="mt-2 text-[14px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
                {t(item.description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
