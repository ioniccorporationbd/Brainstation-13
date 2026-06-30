import {
  BadgeCheck,
  BarChart3,
  Globe2,
  RefreshCcw,
  ShieldCheck,
  Users,
  WifiOff,
} from "lucide-react";

type ChallengeCard = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const challenges: ChallengeCard[] = [
  {
    title: "Limited visibility into field activity",
    description:
      "Managers struggle to track rep movement and store-level execution in real-time.",
    icon: Globe2,
  },
  {
    title: "Manual or delayed order capture",
    description:
      "Paper-based processes lead to errors, missing stock-out data, and slow fulfillment cycles.",
    icon: RefreshCcw,
  },
  {
    title: "Pricing errors and revenue leakage",
    description:
      "Inconsistent discount application and lack of credit control drain corporate margins.",
    icon: ShieldCheck,
  },
  {
    title: "Weak governance and compliance",
    description:
      "No verifiable proof of visit or adherence to planned journey routes across territories.",
    icon: Users,
  },
  {
    title: "Poor connectivity in last-mile",
    description:
      "Traditional cloud apps fail in rural zones, causing data synchronization nightmares.",
    icon: WifiOff,
  },
  {
    title: "Fragmented tools and reporting",
    description:
      "Teams juggle spreadsheets and chat apps, resulting in siloed and unreliable data.",
    icon: BarChart3,
  },
];

export default function EnterpriseMsfaChallengesSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[110px] text-white">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mx-auto max-w-[850px] text-center">
          <p className="text-[18px] font-bold leading-none tracking-[-0.035em] text-[#2f8dcc]">
            The Global Challenge
          </p>

          <h2 className="mt-7 text-[42px] font-bold leading-[1.08] tracking-[-0.065em] text-white md:text-[58px]">
            Why Field Sales Breaks at Scale
          </h2>

          <p className="mx-auto mt-7 max-w-[780px] text-[18px] font-bold leading-[1.55] tracking-[-0.035em] text-white/92 md:text-[21px]">
            Without a production-ready execution platform, enterprises face
            fragmented tools, data loss, and severe operational bottlenecks in
            last-mile markets.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[72px] grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative min-h-[255px] overflow-hidden rounded-[10px] border border-white/0 bg-white px-7 py-7 text-[#11182f] shadow-[0_18px_55px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-2 hover:border-[#4fa0d1]/70 hover:shadow-[0_30px_90px_rgba(79,160,209,0.22)]"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#4fa0d1]/0 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/20" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-[180px] w-[180px] rounded-full bg-[#ffb22c]/0 blur-2xl transition-all duration-300 group-hover:bg-[#ffb22c]/10" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#08a9df] text-white shadow-[0_14px_32px_rgba(8,169,223,0.28)] transition duration-300 group-hover:scale-110 group-hover:bg-[#ffab2e] group-hover:text-black">
                      <Icon size={25} strokeWidth={1.9} />
                    </div>

                    <span className="text-[18px] font-bold leading-none text-[#111E40]/10 transition duration-300 group-hover:text-[#4fa0d1]/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-7 max-w-[300px] text-[25px] font-bold leading-[1.12] tracking-[-0.055em] text-[#050b18] md:text-[28px]">
                    {card.title}
                  </h3>

                  <p className="mt-6 max-w-[330px] text-[18px] font-medium leading-[1.5] tracking-[-0.035em] text-[#42637a] md:text-[20px]">
                    {card.description}
                  </p>
                </div>

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