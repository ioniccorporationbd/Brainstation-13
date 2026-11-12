import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import {
  BarChart3,
  Building2,
  Layers3,
  PackageCheck,
  Users,
} from "lucide-react";

type EnterpriseCard = {
  company: string;
  metric: string;
  description: string;
};

type StatCard = {
  value: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
};

const enterprises: EnterpriseCard[] = [
  {
    company: "General Pharmaceuticals Ltd.",
    metric: "2,500+ Users",
    description:
      "Optimized last-mile journey planning across a complex multi-tier hierarchy, significantly reducing travel expenditures.",
  },
  {
    company: "Popular Pharmaceuticals",
    metric: "30% Yearly Growth",
    description:
      "Supported massive 30% annual growth with zero-downtime scalability for 3,000+ users during high-volume peak ordering windows.",
  },
  {
    company: "Berger Paints",
    metric: "2,500+ Users",
    description:
      "Empowered field force with MSFA, bespoke e-Learning, and communication modules.",
  },
  {
    company: "BATA",
    metric: "100% Transparency",
    description:
      "Deployed offline-first order system, ensuring complete visibility across remote rural dealer networks.",
  },
  {
    company: "Beacon Pharmaceuticals",
    metric: "30% Yearly Growth",
    description:
      "Consolidated multiple disconnected business units and 3,000+ users into a single, unified MSFA ecosystem.",
  },
  {
    company: "Sharif Pharmaceuticals",
    metric: "Agile Entry",
    description:
      "Enabled a greenfield market entry with a fully paperless sales cycle seamlessly integrated with SAP.",
  },
];

const stats: StatCard[] = [
  {
    value: "12k-15k",
    title: "Active Users",
    subtitle: "Field Personnel",
    icon: Users,
  },
  {
    value: "Multi-Tier",
    title: "Sales Hierarchy",
    subtitle: "Complex Structures",
    icon: Layers3,
  },
  {
    value: "5,000+",
    title: "Peak Orders",
    subtitle: "Processed per Hour",
    icon: PackageCheck,
  },
  {
    value: "Unified",
    title: "Business Units",
    subtitle: "Single Ecosystem",
    icon: Building2,
  },
];

export default async function EnterpriseMsfaTrustedEnterprisesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-hidden bg-white px-6 pb-[88px] text-[#000000] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[760px]">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Proven in Production")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#000000] md:text-[42px]">{t("Trusted By Leading Enterprises")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("Enterprise-grade field execution trusted by large sales teams, pharmaceutical brands, retail networks, and multi-layer distribution organizations.")}</p>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {enterprises.map((item) => (
            <article
              key={item.company}
              className="group flex h-full flex-col border border-[#ececec] bg-white px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c91f28]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="border border-[#ececec] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#c91f28]">
                  {item.metric}
                </span>
              </div>

              <h3 className="mt-5 text-[19px] font-bold leading-[1.25] tracking-[-0.01em] text-[#000000]">
                {item.company}
              </h3>

              <p className="mt-3 text-[14px] font-medium leading-[1.65] text-[#5f5f5f]">
                {t(item.description)}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex flex-col items-center border border-[#ececec] bg-white px-6 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#c91f28]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#c91f28] text-white transition-colors duration-300 group-hover:bg-[#a71920]">
                  <Icon size={19} strokeWidth={1.9} />
                </div>

                <p className="mt-4 text-[24px] font-bold leading-none tracking-[-0.02em] text-[#c91f28] md:text-[28px]">
                  {item.value}
                </p>

                <h3 className="mt-3 text-[15px] font-bold leading-tight text-[#000000]">
                  {t(item.title)}
                </h3>

                <p className="mt-1.5 text-[13px] font-medium leading-none text-[#7a7a7a]">
                  {t(item.subtitle)}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 border border-[#ececec] bg-[#fafafa] px-7 py-7 md:px-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Enterprise Ready")}</p>

              <h3 className="mt-2.5 max-w-[560px] text-[22px] font-bold leading-[1.25] tracking-[-0.02em] text-[#000000] md:text-[26px]">{t("Built for high-volume, multi-territory field operations.")}</h3>

              <div className="mt-3 inline-flex items-center gap-2">
                <BarChart3 size={16} strokeWidth={2} className="text-[#c91f28]" />
                <span className="text-[13px] font-semibold text-[#4a4a4a]">{t("Live Performance Visibility")}</span>
              </div>
            </div>

            <Link
              href="/schedule-a-call"
              className="inline-flex shrink-0 items-center justify-center rounded-[6px] bg-[#c91f28] px-6 py-3.5 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-[#a71920]"
            >{t("Schedule a Call")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
