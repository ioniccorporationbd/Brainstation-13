import Link from "next/link";

type RiskStep = {
  number: string;
  title: string;
  description: string;
};

const riskSteps: RiskStep[] = [
  {
    number: "01",
    title: "Start Immediately",
    description: "Begin working with pre-vetted engineers right away.",
  },
  {
    number: "02",
    title: "Full Assessment Period",
    description:
      "Collaborate, evaluate skills, and check workflow alignment during the first 2 weeks.",
  },
  {
    number: "03",
    title: "Walk Away Option",
    description:
      "If the team doesn’t meet your expectations, exit with no payment and no disruption.",
  },
  {
    number: "04",
    title: "Seamless Continuation",
    description: "If satisfied, continue engagement confidently.",
  },
];

export default function RiskFreeTimelineSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[96px] text-white">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <h2 className="mx-auto max-w-[720px] text-[42px] font-normal leading-[1.18] tracking-[-0.065em] text-white md:text-[54px]">
            Guaranteed Alignment <br />
            First 2 Weeks Risk-Free*
          </h2>
        </div>

        <div className="mt-[92px] grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-[76px]">
          {riskSteps.map((step) => (
            <article key={step.number} className="relative">
              <p className="text-[22px] font-bold leading-none tracking-[-0.035em] text-white">
                {step.number}
              </p>

              <h3 className="mt-[74px] max-w-[280px] text-[34px] font-bold leading-[1.14] tracking-[-0.055em] text-[#ffb22c] md:text-[40px]">
                {step.title}
              </h3>

              <p className="mt-[34px] max-w-[310px] text-[18px] font-bold leading-[1.45] tracking-[-0.035em] text-white">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-[86px] text-center">
          <Link
            href="/schedule-a-call"
            className="inline-flex rounded-full bg-[#ffab2e] px-8 py-4 text-[17px] font-bold tracking-[-0.03em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffc15a] hover:shadow-[0_14px_34px_rgba(255,171,46,0.32)]"
          >
            Book my Risk-Free Timeline
          </Link>

          <p className="mt-[32px] text-[16px] font-bold tracking-[-0.035em] text-white">
            *T&amp;C Apply
          </p>
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-white/45">
        Powered by NeuralFlow
      </span>
    </section>
  );
}