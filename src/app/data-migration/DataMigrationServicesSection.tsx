import {
  ArrowRightLeft,
  BadgeCheck,
  Blocks,
  Database,
  FileCheck2,
  Gauge,
  MessagesSquare,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { getTranslator } from "@/i18n/server";

type Service = {
  title: string;
  icon: React.ElementType;
};

const services: Service[] = [
  { title: "End-to-End Data Migration", icon: ArrowRightLeft },
  { title: "Data Mapping", icon: Blocks },
  { title: "Unique Customer ID", icon: BadgeCheck },
  { title: "Data Quality Management", icon: FileCheck2 },
  { title: "Performance Optimization", icon: Gauge },
  {
    title: "Stakeholder Updates",
    icon: MessagesSquare,
  },
  { title: "Security & Recovery", icon: ShieldCheck },
  { title: "Integration & Analytics", icon: Database },
  { title: "Cost and Time Efficiency", icon: Timer },
];

export default async function DataMigrationServicesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("What We Do")}</p>

          <h2 className="text-[clamp(27px,8vw,32px)] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px] text-balance">{t("Our Core Data Services")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[16px] text-pretty">{t("Proven migration techniques that clean, validate, and consolidate scattered legacy data into secure, future-ready systems.")}</p>
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

                <h3 className="text-[18px] md:text-[20px] leading-[1.3] mt-5 font-semibold tracking-[-0.01em] text-[#0a0a0a] text-balance">
                  {t(service.title)}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
