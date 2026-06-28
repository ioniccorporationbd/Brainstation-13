import React from "react";

const industries = [
  "Banking & Financial Services",
  "Real Estate & Property Management",
  "Biomolecular & Scientific Research",
  "Pharmaceuticals & Life Sciences",
  "E-commerce & Retail",
  "Healthcare & Diagnostics",
  "Telecommunications",
  "Education & eLearning",
  "Manufacturing & Industrial Operations",
];

const IMAGE_URL =
  "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=900&q=90";

export default function MLAIIndustriesSection() {
  return (
    <section className="w-full bg-[#f7f7f7]">
      <div className="mx-auto grid min-h-[650px] w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-5 py-[80px] sm:px-8 lg:grid-cols-[420px_1fr_520px] lg:gap-[70px] lg:px-12 xl:px-0">
        {/* Left Title */}
        <div className="lg:pl-[8px]">
          <p className="text-[13px] font-normal uppercase tracking-[0.04em] text-[#111111]">
            Clients We Have Served In
          </p>

          <h2 className="mt-[24px] text-[54px] font-normal leading-[1.05] tracking-[-0.045em] text-black sm:text-[66px]">
            Industries
          </h2>

          <div className="mt-[24px] h-[2px] w-[72px] bg-[#159bd7]" />
        </div>

        {/* Center List */}
        <div className="lg:pt-[10px]">
          <ul className="space-y-[24px]">
            {industries.map((item) => (
              <li
                key={item}
                className="flex items-start gap-[18px] text-[22px] font-normal leading-[1.25] tracking-[-0.025em] text-black sm:text-[25px]"
              >
                <span className="mt-[1px] text-[28px] font-bold leading-none text-black">
                  ✓
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="h-[360px] w-full max-w-[520px] overflow-hidden bg-gray-200 sm:h-[450px] lg:h-[520px]">
            <img
              src={IMAGE_URL}
              alt="AI technology industry specialist working with laptop"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}