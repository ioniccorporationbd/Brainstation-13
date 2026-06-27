import React from "react";

const services = [
  "Customer/Human Behavior Analysis",
  "Face Identification",
  "Process Automation",
  "Pattern Analysis",
  "Intelligent Chatbot",
  "Fraudulent Identification (Bank)",
  "Data Analysis for Biological Macromolecular Structures",
  "Predictive Analytics & Modeling",
  "Targeted Marketing",
  "Churn Analysis",
  "Trend Analysis",
  "Time Series Analysis",
];

export default function MLAIServicesSection() {
  return (
    <section className="w-full bg-white">
      {/* Top Text Area */}
      <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 gap-[42px] px-5 py-[90px] sm:px-8 md:grid-cols-2 lg:py-[104px] xl:px-0">
        <p className="max-w-[520px] text-[18px] font-normal leading-[1.65] text-[#6f747b]">
          ML and AI solutions empower your organization to turn raw data into
          actionable intelligence. By leveraging advanced algorithms, we help
          you uncover hidden patterns, improve operational accuracy, and
          accelerate decision-making. From automating repetitive tasks to
          enhancing customer interactions, our technologies make your workflows
          faster, more reliable, and more efficient.
        </p>

        <p className="max-w-[560px] text-[18px] font-normal leading-[1.65] text-[#6f747b]">
          Every industry operates differently—and so should its AI strategy.
          That’s why we design highly customized ML and AI models aligned with
          your business goals, growth stage, and technical environment. Whether
          you’re in finance, healthcare, research, or e-commerce, our solutions
          scale seamlessly and evolve with your needs, ensuring long-term impact
          and measurable results.
        </p>
      </div>

      {/* Offered Services Area */}
      <div className="w-full bg-[#f7f7f7]">
        <div className="mx-auto grid min-h-[690px] w-full max-w-[1160px] grid-cols-1 gap-[60px] px-5 py-[100px] sm:px-8 md:grid-cols-[360px_1fr] md:items-center lg:gap-[120px] lg:py-[120px] xl:px-0">
          {/* Left Heading */}
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#30343a]">
              What We Can Do
            </p>

            <h2 className="mt-[24px] text-[52px] font-normal leading-[1.02] tracking-[-0.05em] text-black sm:text-[64px] lg:text-[70px]">
              Offered
              <br />
              Services
            </h2>

            <div className="mt-[28px] h-[2px] w-[72px] bg-[#159bd7]" />
          </div>

          {/* Right List */}
          <div>
            <ul className="space-y-[18px]">
              {services.map((service) => (
                <li
                  key={service}
                  className="grid grid-cols-[26px_1fr] items-start gap-[18px]"
                >
                  <span className="mt-[2px] text-[34px] font-bold leading-[0.7] text-[#58b7e5]">
                    ›
                  </span>

                  <span className="text-[20px] font-normal leading-[1.45] text-[#1c1f25] sm:text-[22px]">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}