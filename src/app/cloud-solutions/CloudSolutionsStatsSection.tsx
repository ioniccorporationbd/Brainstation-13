import { getTranslator } from "@/i18n/server";

const stats = [
  { value: "40%", label: "Avg. cost reduction" },
  { value: "99.99%", label: "Achieved uptime" },
  { value: "60%", label: "Faster deployments" },
  { value: "200+", label: "Cloud migrations" },
];

export default async function CloudSolutionsStatsSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] max-sm:pb-7 md:pb-[104px]">
      <div className="brand-container">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#ececec] bg-white px-4 py-7 text-center sm:px-5 md:px-6 md:py-8"
            >
              <div className="text-[clamp(22px,6.8vw,28px)] font-bold leading-none tracking-[-0.02em] text-[#c91f28] md:text-[clamp(30px,4vw,40px)]">
                {t(stat.value)}
              </div>
              <p className="mt-3 text-[13px] font-medium leading-[1.4] text-[#52525B] md:text-[14.5px] text-pretty">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
