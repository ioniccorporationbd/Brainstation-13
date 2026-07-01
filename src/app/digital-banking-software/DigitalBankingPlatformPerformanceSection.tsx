type PerformanceItem = {
  value: string;
  label: string;
};

const performanceItems: PerformanceItem[] = [
  {
    value: "5M+",
    label: "registered users",
  },
  {
    value: "2M+",
    label: "monthly transactions",
  },
  {
    value: "< 1.5s",
    label: "average transaction",
  },
  {
    value: "99.9%",
    label: "platform uptime",
  },
];

export default function DigitalBankingPlatformPerformanceSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[86px] text-[#050b18]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[42px] font-medium leading-[1.05] tracking-[-0.075em] text-[#050b18] md:text-[58px] lg:text-[64px]">
            Platform Performance
          </h2>

          <p className="mt-7 text-[18px] font-medium leading-[1.45] tracking-[-0.04em] text-black md:text-[21px]">
            Enterprise-grade reliability and scalability.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-[56px] grid max-w-[1210px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {performanceItems.map((item) => (
            <article
              key={item.label}
              className="flex min-h-[145px] flex-col items-center justify-center border border-[#d8e1ea] bg-white px-6 py-8 text-center transition duration-300 hover:-translate-y-2 hover:border-[#3f93cf] hover:shadow-[0_24px_70px_rgba(17,30,64,0.10)]"
            >
              <h3 className="text-[42px] font-black leading-none tracking-[-0.06em] text-[#007bb7] md:text-[48px]">
                {item.value}
              </h3>

              <p className="mt-4 text-[18px] font-medium leading-[1.3] tracking-[-0.04em] text-black md:text-[21px]">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}