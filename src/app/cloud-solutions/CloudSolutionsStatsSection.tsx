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
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#ececec] bg-white px-5 py-7 text-center md:px-6 md:py-8"
            >
              <p className="text-[30px] font-bold leading-none tracking-[-0.02em] text-[#c91f28] md:text-[40px]">
                {t(stat.value)}
              </p>
              <p className="mt-3 text-[13.5px] font-medium leading-[1.4] text-[#55585e] md:text-[14.5px]">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
