// components/OfferedServices.tsx

import React from "react";

const services = [
  "Functional Testing",
  "Compatibility Testing",
  "Technical Testing",
  "Automation Testing",
  "Security Testing",
];

export default function OfferedServices() {
  return (
    <section className="w-full bg-[#f7f7f7] py-24">
      <div className="mx-auto grid max-w-[1210px] grid-cols-1 items-start gap-16 px-6 md:grid-cols-2 lg:px-0">
        {/* Left Side */}
        <div className="md:pl-10">
          <p className="mb-6 text-[14px] font-light uppercase tracking-[0.5px] text-black">
            WHAT WE CAN DO
          </p>

          <h2 className="text-[56px] font-normal leading-[1.15] tracking-[-2px] text-black md:text-[66px]">
            Offered
            <br />
            Services
          </h2>

          <div className="mt-7 h-[2px] w-[86px] bg-[#009fe3]" />
        </div>

        {/* Right Side */}
        <div className="space-y-6 pt-0 md:pt-0">
          {services.map((service) => (
            <div
              key={service}
              className="group flex items-center gap-8 text-black"
            >
              <span className="text-[42px] font-light leading-none text-[#62b9df] transition-transform duration-300 group-hover:translate-x-1">
                ›
              </span>

              <span className="text-[23px] font-light leading-none tracking-[-0.4px] text-black">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}