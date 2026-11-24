import { getTranslator } from "@/i18n/server";

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

export default async function EnterpriseMsfaChallengesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-hidden bg-white pb-[56px] max-sm:pb-7 text-[#000000] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("The Global Challenge")}</p>

          <h2 className="max-sm:mx-auto max-sm:text-center text-[#000000] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Why Field Sales Breaks at Scale")}</h2>

          <p className="mt-4 text-[15px] font-medium leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Without a production-ready execution platform, enterprises face fragmented tools, data loss, and severe operational bottlenecks in last-mile markets.")}</p>
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

                <h3 className="mt-5 text-[#000000] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                  {t(card.title)}
                </h3>

                <p className="mt-3 text-[14.5px] font-medium leading-[1.6] text-[#5f5f5f] text-pretty">
                  {t(card.description)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
