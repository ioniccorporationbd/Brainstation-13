const benefits = [
  {
    title: "Enhanced Agility",
    description:
      "Replace rigid, monolithic systems with flexible, microservices based-architectures that adapt to evolving business needs.",
  },
  {
    title: "Cost Savings",
    description:
      "Automate repetitive tasks and eliminate technical debt to reduce operational expenses by up to 50%.",
  },
  {
    title: "Data Driven- Decision",
    description:
      "Harness real-time analytics and predictive insights to optimize-performance across departments.",
  },
  {
    title: "Competitive Edge",
    description:
      "Innovate faster, launch new offerings, and deliver superior customer experiences with intelligent automation.",
  },
];

export default function WhyDigitalTransformationMattersSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[96px] text-[#050b18]">
      {/* Left circle background */}
      <div className="pointer-events-none absolute -left-[360px] top-[-40px] hidden h-[820px] w-[820px] rounded-full lg:block">
        {Array.from({ length: 48 }).map((_, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#74c4ec]/20"
            style={{
              width: `${820 - index * 17}px`,
              height: `${820 - index * 17}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1240px] grid-cols-1 gap-[70px] lg:grid-cols-[0.72fr_1.15fr]">
        {/* Left sticky title */}
        <aside className="lg:sticky lg:top-[120px] lg:h-fit">
          <h2 className="max-w-[420px] text-[42px] font-normal leading-[1.15] tracking-[-0.07em] text-[#050b18] md:text-[54px]">
            Why Digital <br />
            Transformation <br />
            Matters
          </h2>
        </aside>

        {/* Right content */}
        <div className="space-y-[86px]">
          {benefits.map((item, index) => (
            <article key={item.title} className="max-w-[720px]">
              <h3 className="text-[38px] font-normal leading-[1.12] tracking-[-0.065em] text-[#050b18] md:text-[48px]">
                {index + 1}. {item.title}
              </h3>

              <p className="mt-5 max-w-[720px] text-[21px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a] md:text-[24px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}