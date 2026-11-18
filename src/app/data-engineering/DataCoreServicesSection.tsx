import { BarChart3, Cloud, Database, DatabaseZap } from "lucide-react";
import { getTranslator } from "@/i18n/server";

type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const services: Service[] = [
  {
    title: "Data & Cloud Platforms",
    description:
      "Scalable data pipelines and unified cloud architectures that bring data from multiple business systems into one reliable environment — built for enterprise performance and cost control.",
    icon: Cloud,
  },
  {
    title: "AI/ML Governance",
    description:
      "A governed data foundation that prepares organizations for AI adoption, with full visibility, data lineage, and security controls so insights stay reliable and compliant.",
    icon: DatabaseZap,
  },
  {
    title: "Analytics and BI",
    description:
      "Trusted data layers that keep every dashboard and report on consistent metrics, with intuitive self-service reporting so business teams decide faster.",
    icon: BarChart3,
  },
  {
    title: "Database Design & Ops",
    description:
      "Optimized relational and NoSQL databases built for high performance and reliability, with continuous monitoring, tuning, and proactive management as workloads scale.",
    icon: Database,
  },
];

export default async function DataCoreServicesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("What We Do")}</p>

          <h2 className="text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Our Core Data Services")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[16px] text-pretty">{t("End-to-end data engineering — from ingestion and pipelines to governance, analytics, and managed databases.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-[12px] font-bold uppercase tracking-normal text-[#c91f28]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-[#0a0a0a] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                  {t(service.title)}
                </h3>

                <p className="mt-3 text-[14.5px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] text-pretty">
                  {t(service.description)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
