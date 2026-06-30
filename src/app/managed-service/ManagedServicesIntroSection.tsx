export default function ManagedServicesIntroSection() {
  const points = [
    "Accelerate delivery while reducing internal burden",
    "Avoid the complexity of managing technical teams",
    "Scale development and operations efficiently",
    "Ensure quality and compliance from the ground up",
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-[86px] text-[#11182f]">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-[80px] lg:grid-cols-[0.95fr_1fr]">
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="h-[520px] w-full max-w-[520px] overflow-hidden rounded-[8px] bg-[#f4f8fc]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
              alt="Managed services software delivery team planning"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="max-w-[560px] text-[48px] font-normal leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[58px]">
            What Are Managed <br />
            Services?
          </h2>

          <p className="mt-[28px] max-w-[650px] text-[22px] font-medium leading-[1.42] tracking-[-0.04em] text-[#6b7280]">
            Managed Services offer a fully managed, outcome-driven software
            delivery model. We provide you with a dedicated team of project
            managers, developers, QA engineers, DevOps, business analysts, and
            more ready to own the full software lifecycle from day one.
          </p>

          <ul className="mt-[40px] space-y-[24px]">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 text-[20px] font-medium leading-[1.35] tracking-[-0.035em] text-[#050b18]"
              >
                <span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#050b18]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
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