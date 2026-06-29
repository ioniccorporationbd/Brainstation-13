export default function IndustriesSection() {
  const industries = [
    "E COMMERCE",
    "FIN-TECH",
    "TELECOMMUNICATION",
    "PHARMACEUTICALS",
    "HEALTH SECTOR",
    "LOCAL ENTERPRISES",
    "AGRICULTURAL",
    "MNC'S",
    "START UPS",
  ];

  return (
    <section className="bg-[#f7f7f7] py-[105px]">
      <div className="mx-auto grid max-w-[1640px] grid-cols-1 items-center gap-y-16 px-6 lg:grid-cols-[0.8fr_1fr_0.9fr] lg:gap-x-[80px]">
        <div>
          <p className="mb-7 text-[13px] font-normal uppercase tracking-[0.04em] text-black">
            CLIENTS WE HAVE SERVED IN
          </p>

          <h2 className="text-[62px] font-normal leading-none tracking-[-0.06em] text-black">
            Industries
          </h2>

          <div className="mt-8 h-[2px] w-[72px] bg-[#00A5E5]" />
        </div>

        <div className="space-y-[24px]">
          {industries.map((industry) => (
            <div key={industry} className="flex items-center gap-[20px]">
              <span className="text-[30px] font-bold leading-none text-black">
                ✓
              </span>

              <p className="text-[25px] font-normal uppercase leading-none tracking-[0.12em] text-black">
                {industry}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop"
            alt="Mobile application industry"
            className="h-[340px] w-full max-w-[520px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}