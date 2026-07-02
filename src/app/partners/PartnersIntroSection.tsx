import { BriefcaseBusiness, MonitorCog, ShieldCheck } from "lucide-react";

const circles = Array.from({ length: 38 }, (_, index) => 180 + index * 46);

const partnerValues = [
  {
    title: "Right technology, verified at every level",
    description:
      "From cloud infrastructure to AI-powered delivery, we bring the right technology to the right problem, every time.",
    icon: ShieldCheck,
  },
  {
    title: "Platforms the world already trusts",
    description:
      "Our partnerships are built on globally recognized platforms, so the solutions we deliver come with a proven track record before day one.",
    icon: MonitorCog,
  },
  {
    title: "Solutions that hold up at any scale",
    description:
      "The solutions we build with our technology partners are designed to handle enterprise complexity, high transaction volumes, and global operations without breaking down.",
    icon: BriefcaseBusiness,
  },
];

export default function PartnersIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-[#07112b]">
      {/* Dark top hero */}
      <div className="relative overflow-hidden bg-[#071225] px-6 pb-[150px] pt-[105px] text-white md:pb-[170px] md:pt-[120px]">
        {/* circle background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {circles.map((size, index) => (
            <div
              key={index}
              className="absolute left-1/2 top-[42%] rounded-full border border-[#1f69a6]/28"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-[980px] text-center">
          <h2 className="text-[42px] font-medium leading-[1.05] tracking-[-0.08em] text-white md:text-[64px] lg:text-[76px]">
            Meet the partners behind ours
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-[18px] font-bold leading-[1.45] tracking-[-0.035em] text-white md:text-[23px]">
            Every transformation we drive is backed by Brain Station 23 and the
            most recognized names in technology.
          </p>
        </div>

        {/* white curved bottom */}
        <div className="absolute bottom-[-1px] left-1/2 h-[120px] w-[130%] -translate-x-1/2 rounded-t-[100%] bg-white md:h-[150px]" />
      </div>

      {/* Cards area */}
      <div className="relative z-10 px-6 pb-[105px] pt-[50px] md:pt-[35px]">
        <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-12 md:grid-cols-3 md:gap-14">
          {partnerValues.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative rounded-[24px] bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(17,30,64,0.10)] md:p-8"
              >
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[6px] border border-[#079ed8] bg-[#f5fbff] text-[#079ed8] transition duration-300 group-hover:bg-[#079ed8] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-8 text-[22px] font-black leading-[1.25] tracking-[-0.045em] text-[#07112b] md:text-[25px]">
                  {item.title}
                </h3>

                <p className="mt-6 text-[17px] font-medium leading-[1.6] tracking-[-0.03em] text-[#777777] md:text-[21px]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}