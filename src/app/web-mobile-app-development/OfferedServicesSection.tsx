export default function OfferedServicesSection() {
  const services = [
    "High-quality applications for a wide array of niche",
    "Attracting a larger user base & increasing business impact",
    "High standard functionality & features",
    "Enhancing visual appeal & rich user interface",
    "Cross-platform development for mobile apps",
    "Variety of app choices from native, web & hybrid",
    "Complete operating system support",
  ];

  return (
    <section className="bg-[#f7f7f7] py-[120px]">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-y-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-x-[120px]">
        <div>
          <p className="mb-7 text-[13px] font-normal uppercase tracking-[0.04em] text-[#111827]">
            WHAT WE CAN DO
          </p>

          <h2 className="text-[64px] font-normal leading-[1.02] tracking-[-0.06em] text-black">
            Offered <br />
            Services
          </h2>

          <div className="mt-8 h-[2px] w-[88px] bg-[#00A5E5]" />
        </div>

        <div className="space-y-[23px]">
          {services.map((service) => (
            <div key={service} className="flex items-start gap-[34px]">
              <span className="mt-[4px] text-[38px] font-bold leading-none text-[#68BCEB]">
                ›
              </span>

              <p className="text-[24px] font-normal leading-[1.42] tracking-[-0.04em] text-black">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}