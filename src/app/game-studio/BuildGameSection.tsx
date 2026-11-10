import Image from "next/image";

const BUILD_IMG =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop";

const steps = [
  {
    index: "01",
    title: "Plan",
    desc: "Grow your concept with us to lay a solid foundation for your product in game design and concept design.",
  },
  {
    index: "02",
    title: "Build",
    desc: "Support your project with 3D art, level design, UI/UX design, animation and engineering.",
  },
  {
    index: "03",
    title: "Expand",
    desc: "Connect your game with other platforms and secure monetization.",
  },
];

export default function BuildGameSection() {
  return (
    <section className="w-full bg-white px-6 pb-[88px] pt-[8px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Our Approach
          </p>

          <h2 className="max-w-[560px] text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            Build a Game With Us
          </h2>

          <p className="mt-5 max-w-[560px] text-[16px] font-medium leading-[1.65] tracking-[-0.01em] text-[#565656] md:text-[17px]">
            Get your game created from the ground up, or cover any production
            need with specialized knowledge and a team that ships.
          </p>

          <div className="mt-9 space-y-5">
            {steps.map((step) => (
              <article
                key={step.title}
                className="group flex items-start gap-5 rounded-2xl border border-[#ececec] bg-white p-5 transition-colors duration-300 hover:border-[#c91f28] sm:p-6"
              >
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[14px] font-bold text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  {step.index}
                </span>

                <div>
                  <h3 className="text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 text-[14.5px] font-medium leading-[1.6] text-[#565656]">
                    {step.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <div className="relative aspect-[4/4.4] w-full overflow-hidden rounded-2xl border border-[#ececec] bg-[#f7f7f7]">
            <Image
              src={BUILD_IMG}
              alt="Game production team planning a project"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
