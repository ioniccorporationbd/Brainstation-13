export default function HowWeWorkSection() {
  const steps = [
    {
      step: "STEP 1",
      title: "Assessment & Planning",
      description: "Architecture, risk, and compliance review",
      side: "left",
    },
    {
      step: "STEP 2",
      title: "Deployment & Configuration",
      description: "LMS, proctoring, integrations",
      side: "right",
    },
    {
      step: "STEP 3",
      title: "Go-Live & Exam Support",
      description: "Monitoring, incident readiness",
      side: "left",
    },
    {
      step: "STEP 4",
      title: "Ongoing Ownership",
      description: "Support, optimization, upgrades",
      side: "right",
    },
  ];

  return (
    <section className="relative bg-white py-[88px] text-[#071F49]">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="mb-[72px] text-[44px] font-normal leading-none tracking-[-0.055em] text-[#071F49]">
          How We Work
        </h2>

        <div className="relative mx-auto max-w-[860px]">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#d9eaf7]" />

          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative grid min-h-[185px] grid-cols-[1fr_80px_1fr] items-start"
            >
              <div
                className={`pt-[24px] ${
                  item.side === "left"
                    ? "text-right pr-[35px]"
                    : "col-start-3 pl-[35px]"
                }`}
              >
                {item.side === "left" && (
                  <>
                    <p className="mb-[20px] text-[14px] font-medium text-[#4ba4df]">
                      {item.step}
                    </p>
                    <h3 className="mb-[24px] text-[32px] font-normal leading-none tracking-[-0.055em] text-black">
                      {item.title}
                    </h3>
                    <p className="text-[18px] font-normal leading-none tracking-[-0.02em] text-[#4f7890]">
                      {item.description}
                    </p>
                  </>
                )}
              </div>

              <div className="relative col-start-2 flex justify-center pt-[28px]">
                <span className="relative z-10 h-[14px] w-[14px] rounded-full border-2 border-[#55a8df] bg-white" />
              </div>

              <div
                className={`pt-[24px] ${
                  item.side === "right"
                    ? "col-start-3 pl-[35px]"
                    : ""
                }`}
              >
                {item.side === "right" && (
                  <>
                    <p className="mb-[20px] text-[14px] font-medium text-[#4ba4df]">
                      {item.step}
                    </p>
                    <h3 className="mb-[24px] text-[32px] font-normal leading-none tracking-[-0.055em] text-black">
                      {item.title}
                    </h3>
                    <p className="text-[18px] font-normal leading-none tracking-[-0.02em] text-[#4f7890]">
                      {item.description}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}