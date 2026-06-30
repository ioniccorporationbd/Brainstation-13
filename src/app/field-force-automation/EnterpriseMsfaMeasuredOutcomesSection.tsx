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

export default function EnterpriseMsfaMeasuredOutcomesSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[104px] text-white">
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#4fa0d1]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-[360px] w-[360px] rounded-full bg-[#ffab2e]/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="max-w-[760px]">
          <p className="text-[20px] font-medium leading-none tracking-[-0.035em] text-[#3f93cf]">
            Business Impact
          </p>

          <h2 className="mt-7 text-[44px] font-bold leading-[1.08] tracking-[-0.065em] text-white md:text-[64px]">
            Measured Outcomes
          </h2>

          <p className="mt-7 max-w-[680px] text-[18px] font-semibold leading-[1.6] tracking-[-0.035em] text-white/78 md:text-[20px]">
            Real operational improvements across productivity, processing,
            compliance, cost control, leakage prevention, and reporting speed.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[64px] grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {outcomes.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative min-h-[230px] overflow-hidden rounded-[10px] bg-white px-8 py-8 text-[#11182f] shadow-[0_18px_55px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(79,160,209,0.22)]"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#4fa0d1]/0 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/18" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-[180px] w-[180px] rounded-full bg-[#ffab2e]/0 blur-2xl transition-all duration-300 group-hover:bg-[#ffab2e]/12" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[28px] font-bold leading-none tracking-[-0.055em] text-[#3f93cf] md:text-[32px]">
                        {item.value}
                      </p>

                      <h3 className="mt-4 text-[27px] font-bold leading-[1.12] tracking-[-0.06em] text-[#050b18] md:text-[30px]">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#e8f1f6] text-[#3f93cf] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#08a9df] group-hover:text-white">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>
                  </div>

                  <p className="mt-6 max-w-[330px] text-[18px] font-medium leading-[1.5] tracking-[-0.035em] text-[#42637a]">
                    {item.description}
                  </p>
                </div>

                <span className="absolute bottom-5 right-6 text-[48px] font-bold leading-none text-[#111E40]/[0.035] transition duration-300 group-hover:text-[#4fa0d1]/10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#08a9df] transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-white/45">
        Powered by NeuralFlow
      </span>
    </section>
  );
}