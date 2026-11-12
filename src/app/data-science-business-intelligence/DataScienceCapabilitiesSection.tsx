import { Boxes, BrainCircuit, GitBranch, Layers, LineChart, ShieldCheck } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const capabilities = [
  { title: "Data engineering", description: "Ingestion, transformation and orchestration that runs on schedule.", icon: GitBranch },
  { title: "Dashboard development", description: "KPI screens designed around the decisions they support.", icon: LineChart },
  { title: "Forecasting", description: "Time-series models with the assumptions written down.", icon: Boxes },
  { title: "AI & machine learning", description: "Classification, scoring and recommendation models in production.", icon: BrainCircuit },
  { title: "Data modelling", description: "Star schemas and semantic layers that stay understandable.", icon: Layers },
  { title: "Data governance", description: "Roles, lineage and quality checks so numbers stay trustworthy.", icon: ShieldCheck },
];

export default async function DataScienceCapabilitiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[700px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Depth")}</p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Analytics capabilities")}</h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("The engineering behind the dashboards, from the warehouse up.")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50 sm:min-h-[170px] sm:p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={21} />
              </span>
              <h3 className="mt-5 text-[16px] font-semibold leading-[1.3] text-black">
                {t(item.title)}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-[#55585e]">
                {t(item.description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
