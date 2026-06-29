export default function AemIndustriesSection() {
  const industries = [
    "HEALTH CARE",
    "FINANCIAL SERVICES",
    "TELECOMMUNICATIONS",
    "MEDIA AND ENTERTAINMENT",
    "GOVERNMENT",
    "EDUCATION",
    "HIGH-TECH",
    "MANUFACTURING",
    "RETAIL",
    "TRAVEL AND HOSPITALITY",
  ];

  return (
    <section className="bg-white py-[92px]">
      <div className="mx-auto grid max-w-[1050px] grid-cols-1 items-center gap-y-14 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-x-[120px]">
        <div>
          <p className="mb-7 text-[13px] font-normal uppercase tracking-[0.04em] text-black">
            CLIENTS WE HAVE SERVED IN
          </p>

          <h2 className="text-[62px] font-normal leading-none tracking-[-0.06em] text-black">
            Industries
          </h2>

          <div className="mt-8 h-[2px] w-[76px] bg-[#00A5E5]" />
        </div>

        <div className="space-y-[26px]">
          {industries.map((industry) => (
            <div key={industry} className="flex items-center gap-[18px]">
              <span className="text-[28px] font-bold leading-none text-black">
                ✓
              </span>

              <p className="text-[25px] font-normal uppercase leading-none tracking-[0.16em] text-black">
                {industry}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}