const reasons = [
  {
    title: "Full Ownership with Built-In Accountability",
    description:
      "You get a dedicated Delivery Lead or Program Manager who drives the engagement from start to finish. Clear SLAs, transparent reporting, and well-defined KPIs ensure that you always know what is being delivered and when.",
  },
  {
    title: "Agile, Efficient, Outcome-Oriented",
    description:
      "Our five-phase Agile delivery process spans planning, development, QA, release, and support delivering measurable value every 2–3 weeks. Daily standups, sprint demos, retrospectives, and backlog grooming are all part of the rhythm.",
  },
  {
    title: "Quality-First Engineering Culture",
    description:
      "With 40+ ISTQB-certified QA professionals, CMMI ML3 compliance, and ISO 9001, 27001 certifications, we ensure every release meets the highest standards.",
  },
  {
    title: "Cost Predictability & Flexible Scaling",
    description:
      "Whether you prefer fixed-cost or CP models, we help you forecast, track, and optimize spend. Need to add roles or scale up your team mid-project? We scale with your needs.",
  },
  {
    title: "Complexity Point-Based Model",
    description:
      "Our CP model breaks work into measurable complexity units, allowing better cost, effort, delivery predictability, and controlled midstream changes.",
  },
  {
    title: "Strategic Advisory from CoE & ARB",
    description:
      "Gain access to Architecture Review Board and Centers of Excellence for solution audits, code quality reviews, and strategic guidance whenever needed.",
  },
  {
    title: "Global Delivery, Local Flexibility",
    description:
      "With delivery centers and legal entities across multiple regions, we simplify regulatory compliance and global delivery operations.",
  },
  {
    title: "Business Continuity Built-In",
    description:
      "We maintain bench and shadow resources for large engagements to ensure uninterrupted service during attrition, transition, or scaling moments.",
  },
  {
    title: "Continuous Learning & Innovation",
    description:
      "Our resources are backed by structured L&D, mentorship, and exposure to AI, IoT, Blockchain, AR/VR, and future-ready engineering practices.",
  },
];

export default function WhyChooseBrainStationSection() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] px-6 py-[96px] text-[#0a0a0a]">
      {/* Soft Circle Background */}
      <div className="pointer-events-none absolute -left-[360px] top-[40px] hidden h-[780px] w-[780px] rounded-full lg:block">
        {Array.from({ length: 44 }).map((_, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#c91f28]/20"
            style={{
              width: `${780 - index * 17}px`,
              height: `${780 - index * 17}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px]">
        {/* Top Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Managed Service Advantage
            </p>

            <h2 className="max-w-[500px] text-[42px] font-bold leading-[1.08] tracking-[-0.02em] text-[#0a0a0a] md:text-[56px]">
              Why Choose Magnetic Solution Limited?
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[680px] text-left text-[19px] font-medium leading-[1.65] tracking-[-0.01em] text-[#565656] md:text-[21px]">
              We combine complete ownership, engineering quality, delivery
              governance, and flexible scaling to help businesses build,
              maintain, and improve software products with confidence.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-[76px] grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((item, index) => (
            <article
              key={item.title}
              className="group relative min-h-[310px] overflow-hidden rounded-[22px] border border-[#ececec] bg-white px-8 py-9 shadow-[0_16px_45px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-[#e9b0b4] hover:shadow-[0_28px_80px_rgba(0,0,0,0.14)]"
            >
              {/* Hover Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-[210px] w-[210px] rounded-full bg-[#c91f28]/10 blur-2xl transition-all duration-300 group-hover:bg-[#c91f28]/25" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-[210px] w-[210px] rounded-full bg-[#c91f28]/0 blur-2xl transition-all duration-300 group-hover:bg-[#c91f28]/15" />

              <div className="relative z-10">
                <div className="mb-8 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#ffffff] text-[18px] font-bold text-[#c91f28] ring-1 ring-[#ececec] transition-all duration-300 group-hover:bg-[#c91f28] group-hover:text-white group-hover:ring-[#c91f28]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-[25px] font-bold leading-[1.18] tracking-[-0.02em] text-[#0a0a0a] md:text-[29px]">
                  {item.title}
                </h3>

                <p className="mt-6 text-left text-[16px] font-medium leading-[1.65] tracking-[-0.01em] text-[#565656]">
                  {item.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#c91f28] transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#c91f28]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}