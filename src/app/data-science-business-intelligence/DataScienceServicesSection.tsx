import {
  BrainCircuit,
  Database,
  FileBarChart,
  LayoutDashboard,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { getTranslator } from "@/i18n/server";

const services = [
  {
    title: "Data analytics",
    description: "Turn operational data into answers the business can act on.",
    icon: TrendingUp,
  },
  {
    title: "Business intelligence",
    description: "Dashboarding and self-serve reporting on a single trusted model.",
    icon: LayoutDashboard,
  },
  {
    title: "Predictive analytics",
    description: "Forecasts for demand, revenue and risk built on your own history.",
    icon: Sparkles,
  },
  {
    title: "Machine learning",
    description: "Models trained, evaluated and deployed into the workflow that needs them.",
    icon: BrainCircuit,
  },
  {
    title: "Data visualization",
    description: "Charts that make the trend obvious without a footnote.",
    icon: FileBarChart,
  },
  {
    title: "Data engineering",
    description: "Pipelines that move, clean and model data on a schedule.",
    icon: Database,
  },
];

export default async function DataScienceServicesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] md:pb-[104px]">
      <div className="brand-container">
        <div className="max-w-[680px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("What we do")}</p>
          <h2 className="mt-4 text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Data science & BI services")}</h2>
          <p className="mt-4 text-[15.5px] leading-[1.6] text-[#52525B]">{t("Six services that take a question to a system, a dashboard or a model that answers it repeatedly.")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50 sm:min-h-[180px] sm:p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={21} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-semibold leading-[1.3] text-black">
                {t(item.title)}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.65] text-[#52525B]">
                {t(item.description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
