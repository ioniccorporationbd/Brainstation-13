import { getTranslator } from "@/i18n/server";

import {
  BarChart3,
  Clock3,
  Coins,
  Gauge,
  LineChart,
  Route,
} from "lucide-react";

type OutcomeCard = {
  value: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const outcomes: OutcomeCard[] = [
  {
    value: "+25–30%",
    title: "Sales Productivity",
    description: "Increase per field representative",
    icon: LineChart,
  },
  {
    value: "-30–40%",
    title: "Processing Time",
    description: "Reduction in order processing",
    icon: Clock3,
  },
  {
    value: "+20–25%",
    title: "Visit Compliance",
    description: "Using journey planning & geo-verification",
    icon: Route,
  },
  {
    value: "-15–20%",
    title: "Revenue Leakage",
    description: "Via automated pricing schemes & credit checks",
    icon: Coins,
  },
  {
    value: "-10–15%",
    title: "Operational Costs",
    description: "Reduction in manual work levels & faster approvals",
    icon: Gauge,
  },
  {
    value: "100+",
    title: "Live Reporting Combination",
    description: "Insights in minutes instead of days",
    icon: BarChart3,
  },
];

export default async function EnterpriseMsfaMeasuredOutcomesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-hidden bg-white px-6 pb-[88px] text-[#000000] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Business Impact")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#000000] md:text-[42px]">{t("Measured Outcomes")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("Real operational improvements across productivity, processing, compliance, cost control, leakage prevention, and reporting speed.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {outcomes.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex h-full flex-col border border-[#ececec] bg-white px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c91f28]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[26px] font-bold leading-none tracking-[-0.02em] text-[#c91f28] md:text-[30px]">
                      {t(item.value)}
                    </p>

                    <h3 className="mt-3 text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-[#000000]">
                      {t(item.title)}
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-[#c91f28] text-white transition-colors duration-300 group-hover:bg-[#a71920]">
                    <Icon size={19} strokeWidth={1.9} />
                  </div>
                </div>

                <p className="mt-4 text-[14px] font-medium leading-[1.6] text-[#5f5f5f]">
                  {t(item.description)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
