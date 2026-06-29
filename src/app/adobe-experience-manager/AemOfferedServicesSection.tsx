export default function AemOfferedServicesSection() {
  const services = [
    "AEM Development",
    "AEM Solution Design",
    "AEM DevOps",
    "AEM Information Architecture",
    "AEM Managed Services",
    "AEM Migration & Update",
  ];

  return (
    <section className="bg-[#f7f7f7] py-[118px]">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-y-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-x-[135px]">
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

        <div className="space-y-[24px]">
          {services.map((service) => (
            <div key={service} className="flex items-center gap-[34px]">
              <span className="text-[40px] font-bold leading-none text-[#68BCEB]">
                ›
              </span>

              <p className="text-[25px] font-normal leading-none tracking-[-0.04em] text-black">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}