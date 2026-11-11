import {
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
    <section className="w-full overflow-hidden bg-white px-6 pb-[88px] text-[#000000] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            The Global Challenge
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#000000] md:text-[42px]">
            Why Field Sales Breaks at Scale
          </h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">
            Without a production-ready execution platform, enterprises face
            fragmented tools, data loss, and severe operational bottlenecks in
            last-mile markets.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group flex h-full flex-col border border-[#ececec] bg-white px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c91f28]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[6px] bg-[#c91f28] text-white transition-colors duration-300 group-hover:bg-[#a71920]">
                  <Icon size={20} strokeWidth={1.9} />
                </div>

                <h3 className="mt-5 text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-[#000000]">
                  {card.title}
                </h3>

                <p className="mt-3 text-[14px] font-medium leading-[1.65] text-[#5f5f5f]">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
