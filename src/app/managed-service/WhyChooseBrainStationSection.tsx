import { getTranslator } from "@/i18n/server";

const reasons = [
  {
    title: "Full Ownership with Built-In Accountability",
    description:
      "A dedicated Delivery Lead or Program Manager drives the engagement end to end, with clear SLAs, transparent reporting, and well-defined KPIs.",
  },
  {
    title: "Agile, Efficient, Outcome-Oriented",
    description:
      "A five-phase Agile process across planning, development, QA, release, and support delivers measurable value every 2\u20133 weeks.",
  },
  {
    title: "Quality-First Engineering Culture",
    description:
      "ISTQB-certified QA, CMMI ML3 practices, and ISO 9001 and 27001 standards keep every release at a consistently high bar.",
  },
  {
    title: "Cost Predictability & Flexible Scaling",
    description:
      "Fixed-cost or CP models help you forecast, track, and optimize spend, and scale roles up or down as your needs change.",
  },
  {
    title: "Complexity Point-Based Model",
    description:
      "Work is broken into measurable complexity units for better cost, effort, and delivery predictability with controlled midstream changes.",
  },
  {
    title: "Strategic Advisory from CoE & ARB",
    description:
      "Access an Architecture Review Board and Centers of Excellence for solution audits, code quality reviews, and strategic guidance.",
  },
  {
    title: "Global Delivery, Local Flexibility",
    description:
      "Delivery centers and legal entities across multiple regions simplify regulatory compliance and global delivery operations.",
  },
  {
    title: "Business Continuity Built-In",
    description:
      "Bench and shadow resources keep large engagements uninterrupted during attrition, transition, or scaling moments.",
  },
  {
    title: "Continuous Learning & Innovation",
    description:
      "Structured L&D, mentorship, and exposure to AI, IoT, Blockchain, and AR/VR keep your engineering future-ready.",
  },
];

export default async function WhyChooseBrainStationSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white py-[52px] text-[#0a0a0a] md:py-[96px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Managed Service Advantage")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Why Choose Magnetic Solution Limited?")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("We combine complete ownership, engineering quality, delivery governance, and flexible scaling to help businesses build, maintain, and improve software products with confidence.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[15px] font-bold text-[#c91f28]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-5 text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
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
