import { Archive, BarChart3, Database, FilePlus2, Share2 } from "lucide-react";

const stages = [
  { title: "Create", description: "Capture data where the work happens — forms, apps, imports.", icon: FilePlus2 },
  { title: "Store", description: "Warehouse and lake storage with clear ownership and retention.", icon: Database },
  { title: "Use", description: "Modelled tables and governed access for analysts and tools.", icon: Share2 },
  { title: "Analyze", description: "Dashboards, forecasts and models built on the same source.", icon: BarChart3 },
  { title: "Archive", description: "Retire old data on policy without losing lineage.", icon: Archive },
];

export default function DataSciencePipelineSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[680px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            End to end
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
            Data Science Pipeline
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
            Every stage is designed, instrumented and handed over — no step left
            to a spreadsheet.
          </p>
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
                  <h3 className="flex items-baseline gap-2 text-[15.5px] font-semibold text-black">
                    <span className="text-[11px] font-bold tracking-[0.12em] text-[#c91f28]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-[1.6] text-[#55585e]">
                    {stage.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="overflow-hidden rounded-2xl border border-[#ececec] lg:sticky lg:top-24">
            <img
              src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1200&auto=format&fit=crop"
              alt="Line chart of a business trend plotted on screen"
              className="h-[260px] w-full object-cover md:h-[380px] lg:h-[510px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
