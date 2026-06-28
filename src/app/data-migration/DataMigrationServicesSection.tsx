import React from "react";

const services = [
  "End-to-End Data Migration",
  "Data Mapping and Transformation",
  "Unique Customer Identification",
  "Data Quality Management",
  "Performance Optimization",
  "Documentation and Stakeholder Communication",
  "Security and Disaster Recovery",
  "Integration and Analytical Enablement",
  "Cost and Time Efficiency",
];

export default function DataMigrationServicesSection() {
  return (
    <section className="w-full bg-white">
      {/* Top Text Area */}
      <div className="mx-auto grid w-full max-w-[1060px] grid-cols-1 gap-[52px] px-5 py-[90px] sm:px-8 md:grid-cols-2 lg:py-[108px] xl:px-0">
        <p className="max-w-[520px] text-[17px] font-normal leading-[1.65] tracking-[-0.01em] text-[#6d737b] sm:text-[18px]">
          Our data migration services empower businesses in Bangladesh to
          transform scattered legacy data into actionable insights. By applying
          proven migration techniques, we help clean, validate, and consolidate
          information, ensuring accuracy, security, and efficiency. From
          reducing manual processes to streamlining workflows, our solutions
          enable faster decision-making, better access to critical data, and
          more reliable operations, giving organizations a complete,
          future-ready view of their information.
        </p>

        <p className="max-w-[520px] text-[17px] font-normal leading-[1.65] tracking-[-0.01em] text-[#6d737b] sm:text-[18px]">
          Beyond simply moving data, we tailor every migration to the unique
          needs of each organization. Whether dealing with complex databases,
          multiple formats, or high-volume datasets, we design solutions that
          minimize downtime, maintain data integrity, and integrate seamlessly
          with existing systems. This approach not only saves time and reduces
          costs but also empowers businesses to leverage their data effectively,
          uncover hidden patterns, and drive smarter, data-driven decisions.
        </p>
      </div>

      {/* Offered Services Area */}
      <div className="w-full bg-[#f7f7f7]">
        <div className="mx-auto grid min-h-[660px] w-full max-w-[1060px] grid-cols-1 gap-[70px] px-5 py-[96px] sm:px-8 md:grid-cols-[360px_1fr] md:items-center lg:gap-[150px] lg:py-[118px] xl:px-0">
          {/* Left Heading */}
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#30343a]">
              What We Can Do
            </p>

            <h2 className="mt-[24px] text-[54px] font-normal leading-[1.02] tracking-[-0.055em] text-black sm:text-[66px] lg:text-[72px]">
              Offered
              <br />
              Services
            </h2>

            <div className="mt-[30px] h-[2px] w-[74px] bg-[#159bd7]" />
          </div>

          {/* Right List */}
          <div>
            <ul className="space-y-[18px]">
              {services.map((service) => (
                <li
                  key={service}
                  className="grid grid-cols-[26px_1fr] items-start gap-[20px]"
                >
                  <span className="mt-[1px] text-[38px] font-bold leading-[0.72] text-[#58b7e5]">
                    ›
                  </span>

                  <span className="text-[21px] font-normal leading-[1.45] tracking-[-0.02em] text-[#1c1f25] sm:text-[23px]">
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