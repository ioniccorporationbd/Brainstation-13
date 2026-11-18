import { Archive, BarChart3, Database, FilePlus2, Share2 } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const stages = [
  { title: "Create", description: "Capture data where the work happens — forms, apps, imports.", icon: FilePlus2 },
  { title: "Store", description: "Warehouse and lake storage with clear ownership and retention.", icon: Database },
  { title: "Use", description: "Modelled tables and governed access for analysts and tools.", icon: Share2 },
  { title: "Analyze", description: "Dashboards, forecasts and models built on the same source.", icon: BarChart3 },
  { title: "Archive", description: "Retire old data on policy without losing lineage.", icon: Archive },
];

export default async function DataSciencePipelineSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] md:pb-[104px]">
      <div className="brand-container">
        <div className="max-w-[680px]">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("End to end")}</p>
          <h2 className="mt-4 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Data Science Pipeline")}</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Every stage is designed, instrumented and handed over — no step left to a spreadsheet.")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <ol className="space-y-3">
            {stages.map((stage, index) => (
              <li
                key={stage.title}
                className="group flex items-start gap-4 rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  <stage.icon size={19} />
                </span>
                <div>
                  <h3 className="flex items-baseline gap-2 text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                    <span className="text-[11px] font-bold tracking-normal text-[#c91f28]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {t(stage.title)}
                  </h3>
                  <p className="mt-1 text-[14.5px] leading-[1.6] text-[#52525B] text-pretty">
                    {t(stage.description)}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="overflow-hidden rounded-2xl border border-[#ececec] lg:sticky lg:top-24">
            <img
              src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1200&auto=format&fit=crop"
              alt={t("Line chart of a business trend plotted on screen")}
              className="h-[260px] w-full object-cover md:h-[380px] lg:h-[510px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
