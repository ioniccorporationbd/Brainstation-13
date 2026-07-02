const growthData = [
  { year: "2015", value: 120 },
  { year: "2016", value: 145 },
  { year: "2017", value: 160 },
  { year: "2018", value: 215 },
  { year: "2019", value: 290 },
  { year: "2020", value: 430 },
  { year: "2021", value: 590 },
  { year: "2022", value: 675 },
  { year: "2023", value: 685 },
  { year: "2024", value: 800 },
  { year: "2025", value: 950 },
];

export default function AboutCompanyGrowthSection() {
  const maxValue = 1000;

  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[115px] text-[#07112b]">
      <div className="pointer-events-none absolute -left-[220px] top-[120px] h-[520px] w-[520px] rounded-full bg-[#08a7df]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-[240px] bottom-[80px] h-[560px] w-[560px] rounded-full bg-[#111E40]/8 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        {/* Left Content */}
        <div>
          <span className="inline-flex rounded-full bg-white px-5 py-2 text-[14px] font-bold tracking-[-0.02em] text-[#079ed8] shadow-[0_12px_30px_rgba(17,30,64,0.06)]">
            Since 2006
          </span>

          <h2 className="mt-7 text-[42px] font-medium leading-[1.08] tracking-[-0.075em] text-[#07112b] md:text-[58px] lg:text-[64px]">
            Company Growth
          </h2>

          <p className="mt-8 max-w-[640px] text-[18px] font-medium leading-[1.55] tracking-[-0.035em] text-[#6b7280] md:text-[22px]">
            From 2006 to 2025, the company has not only grown significantly but
            also has evolved to become the leading Software Development &amp; IT
            Service Provider company in Bangladesh. We have made it to next in
            terms of global reach and we have gained reputation in the course.
          </p>
        </div>

        {/* Right Chart Card */}
        <div className="relative">
          <div className="absolute -left-8 -top-8 h-[240px] w-[240px] rounded-full bg-[#08a7df]/10 blur-[80px]" />

          <div className="relative overflow-hidden rounded-[18px] border border-white/70 bg-white/70 p-7 shadow-[0_28px_90px_rgba(17,30,64,0.12)] backdrop-blur-xl md:p-9">
            {/* faint background pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
              <div className="absolute -right-20 -top-24 h-[360px] w-[360px] rounded-full border-[60px] border-[#07112b]" />
              <div className="absolute bottom-0 left-0 h-[220px] w-full bg-gradient-to-t from-[#07112b] to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[24px] font-black leading-tight tracking-[-0.05em] text-[#07112b] md:text-[30px]">
                    Employee Growth
                  </h3>

                  <p className="mt-2 text-[14px] font-semibold tracking-[-0.02em] text-[#42637a]">
                    Calendar Years 2015 - 2025
                  </p>
                </div>

                <div className="rounded-full bg-[#eaf6fc] px-4 py-2 text-[14px] font-black text-[#079ed8]">
                  950+
                </div>
              </div>

              {/* Chart */}
              <div className="relative h-[330px] rounded-[14px] bg-[#f7fbfe] px-4 pb-10 pt-8 md:h-[370px] md:px-6">
                {/* grid lines */}
                <div className="absolute inset-x-6 top-8 bottom-10 flex flex-col justify-between">
                  {[1000, 800, 600, 400, 200, 0].map((num) => (
                    <div key={num} className="relative border-t border-[#d8e8f2]">
                      <span className="absolute -left-1 top-[-11px] -translate-x-full text-[11px] font-bold text-[#31637c]">
                        {num}
                      </span>
                    </div>
                  ))}
                </div>

                {/* y axis label */}
                <div className="absolute left-1 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[12px] font-black tracking-[-0.02em] text-[#31637c] md:block">
                  Employee Numbers
                </div>

                {/* bars */}
                <div className="relative z-10 flex h-full items-end justify-between gap-2 pl-4 md:gap-3 md:pl-8">
                  {growthData.map((item) => {
                    const height = (item.value / maxValue) * 100;

                    return (
                      <div
                        key={item.year}
                        className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                      >
                        <div
                          className="w-full rounded-t-[6px] bg-gradient-to-t from-[#079ed8] to-[#28b8ea] shadow-[0_12px_22px_rgba(7,158,216,0.22)] transition duration-300 hover:from-[#ffab2e] hover:to-[#ffc15a]"
                          style={{ height: `${height}%` }}
                          title={`${item.year}: ${item.value}`}
                        />

                        <span className="text-[10px] font-black tracking-[-0.03em] text-[#31637c] md:text-[12px]">
                          {item.year}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[12px] font-black tracking-[-0.02em] text-[#31637c]">
                  Calendar Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}