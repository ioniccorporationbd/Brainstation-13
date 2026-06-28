import React from "react";

const capabilities = [
  "Seamless migration from legacy systems to modern platforms",
  "Data cleaning, validation, transformation, and deduplication",
  "Unique customer identification for accurate insights",
  "High-performance data transfer and optimization",
  "Secure, centralized data for analytics and decision-making.",
];

const IMAGE_URL =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=90";

export default function DataMigrationCapabilitiesSection() {
  return (
    <section className="w-full bg-[#f7f7f7] py-[86px] md:py-[105px] lg:py-[120px]">
      <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 items-center gap-[58px] px-5 sm:px-8 lg:grid-cols-[520px_1fr] lg:gap-[70px] xl:px-0">
        {/* Left Text */}
        <div className="lg:pt-[6px]">
          <h2 className="mb-[28px] text-center text-[30px] font-bold leading-[1.2] tracking-[-0.025em] text-black md:text-[34px] lg:text-[36px]">
            Our Data Migration Capabilities.
          </h2>

          <ul className="space-y-[19px]">
            {capabilities.map((item) => (
              <li
                key={item}
                className="grid grid-cols-[16px_1fr] gap-[18px] text-[22px] font-normal leading-[1.85] tracking-[-0.025em] text-black md:text-[25px]"
              >
                <span className="mt-[15px] h-[7px] w-[7px] rounded-full bg-black" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Online Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="h-[390px] w-full max-w-[590px] overflow-hidden bg-gray-200 sm:h-[500px] lg:h-[590px]">
            <img
              src={IMAGE_URL}
              alt="Data migration analytics dashboard"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}