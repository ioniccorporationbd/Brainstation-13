import React from "react";

const industries = [
  "Banking & Financial Services",
  "E-commerce & Retail",
  "Telecommunications",
  "Pharmaceuticals & Life Sciences",
  "Manufacturing & Supply Chain",
  "Energy & Utilities",
  "Travel & Hospitality",
  "Healthcare & Diagnostics",
  "Education & eLearning",
];

const IMAGE_URL =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1100&q=90";

export default function DataMigrationIndustriesSection() {
  return (
    <section className="w-full bg-[#f7f7f7]">
      <div className="mx-auto grid min-h-[700px] w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-5 py-[90px] sm:px-8 lg:grid-cols-[390px_1fr_540px] lg:gap-[70px] lg:px-12 xl:px-0">
        {/* Left Title */}
        <div className="lg:pl-[6px]">
          <p className="text-[13px] font-normal uppercase tracking-[0.04em] text-black">
            Clients We Have Served In
          </p>

          <h2 className="mt-[24px] text-[56px] font-normal leading-[1.05] tracking-[-0.055em] text-black sm:text-[68px]">
            Industries
          </h2>

          <div className="mt-[24px] h-[2px] w-[72px] bg-[#159bd7]" />
        </div>

        {/* Center List */}
        <div className="lg:pt-[4px]">
          <ul className="space-y-[27px]">
            {industries.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="flex items-start gap-[20px] text-[23px] font-normal leading-[1.25] tracking-[-0.025em] text-black sm:text-[25px]"
              >
                <span className="mt-[1px] text-[29px] font-bold leading-none text-black">
                  ✓
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Online Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="h-[360px] w-full max-w-[540px] overflow-hidden bg-gray-200 sm:h-[450px] lg:h-[520px]">
            <img
              src={IMAGE_URL}
              alt="Cloud data migration and digital transformation"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}