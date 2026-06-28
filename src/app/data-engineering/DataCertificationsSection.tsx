import React from "react";

const certifications = [
  "Microsoft Certified Azure Data Engineer Associate",
  "Microsoft Certified Power BI Data Analyst Associate",
  "Microsoft Certified Azure Data Fundamentals",
  "Salesforce Certified AI Associate",
  "Microsoft Fabric Data Engineer Associate",
  "Databricks Certified Data Engineer Associate",
  "MySQL 8.0 Database Administrator",
  "Oracle Certified Professional",
];

export default function DataCertificationsSection() {
  return (
    <section className="w-full bg-[#f4f8fc] py-[78px] md:py-[92px] lg:py-[104px]">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 xl:px-0">
        <h2 className="text-center text-[42px] font-normal leading-[1.12] tracking-[-0.055em] text-[#061026] sm:text-[52px] lg:text-[58px]">
          Certifications
        </h2>

        <div className="mx-auto mt-[46px] flex max-w-[1180px] flex-wrap items-center justify-center gap-x-[8px] gap-y-[12px]">
          {certifications.map((item) => (
            <span
              key={item}
              className="inline-flex min-h-[36px] items-center justify-center rounded-full border border-[#009fe3] bg-transparent px-[18px] text-center text-[15px] font-normal leading-[1.25] text-black transition-colors duration-300 hover:bg-[#009fe3] hover:text-white sm:text-[16px]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}