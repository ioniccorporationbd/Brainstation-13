import Link from "next/link";

type StepItem = {
  title: string;
  description: string;
  side: "left" | "right";
};

const steps: StepItem[] = [
  {
    title: "Tell Us What You Need",
    description: "Roles, skills, experience — we listen, not sell.",
    side: "left",
  },
  {
    title: "Get Curated CVs in 3 Days",
    description: "Vetted engineers matched to your exact requirements.",
    side: "right",
  },
  {
    title: "Interview & Evaluate",
    description: "Trial tasks, tech interviews, and fit checks — you choose.",
    side: "left",
  },
  {
    title: "Start Risk-Free",
    description:
      "Work with our engineers for 2 weeks — don’t pay unless you’re fully satisfied.",
    side: "right",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[92px] text-[#11182f]">
      <div className="mx-auto max-w-[980px]">
        <div>
          <h2 className="text-[40px] font-normal leading-[1.12] tracking-[-0.07em] text-[#11182f] md:text-[48px]">
            How It Works — <br />
            Your Engineers in Just 4 Steps
          </h2>

          <p className="mt-8 text-[19px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a]">
            From First Call to Onboarded Engineers in Under 2 Weeks
          </p>
        </div>

        <div className="relative mx-auto mt-[82px] max-w-[760px]">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#8fc5eb] md:block" />

          <div className="space-y-[18px] md:space-y-0">
            {steps.map((step, index) => {
              const isLeft = step.side === "left";

              return (
                <div
                  key={step.title}
                  className={`relative grid min-h-[165px] grid-cols-1 md:grid-cols-2 ${
                    isLeft ? "" : ""
                  }`}
                >
                  <div className="absolute left-1/2 top-0 hidden h-[14px] w-[14px] -translate-x-1/2 rounded-full border-2 border-[#63aee0] bg-white md:block" />

                  <div
                    className={`rounded-[6px] p-4 md:p-0 ${
                      isLeft
                        ? "text-left md:pr-[72px] md:text-right"
                        : "md:col-start-2 md:pl-[72px] md:text-left"
                    }`}
                  >
                    {isLeft && (
                      <div>
                        <h3 className="text-[28px] font-normal leading-[1.1] tracking-[-0.06em] text-black md:text-[34px]">
                          {step.title}
                        </h3>

                        <p className="mt-8 text-[17px] font-semibold leading-[1.45] tracking-[-0.035em] text-[#42637a] md:text-[19px]">
                          {step.description}
                        </p>
                      </div>
                    )}

                    {!isLeft && (
                      <div>
                        <h3 className="text-[28px] font-normal leading-[1.1] tracking-[-0.06em] text-black md:text-[34px]">
                          {step.title}
                        </h3>

                        <p className="mt-8 max-w-[360px] text-[17px] font-semibold leading-[1.45] tracking-[-0.035em] text-[#42637a] md:text-[19px]">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {index === steps.length - 1 && (
                    <div className="absolute bottom-0 left-1/2 hidden h-[14px] w-[14px] -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[#63aee0] bg-white md:block" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-[34px] flex justify-center">
            <Link
              href="/contact-us"
              className="inline-flex rounded-full bg-[#ffab2e] px-7 py-3.5 text-[14px] font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffc15a] hover:shadow-[0_12px_28px_rgba(255,171,46,0.30)]"
            >
              Send Me Profiles
            </Link>
          </div>
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}