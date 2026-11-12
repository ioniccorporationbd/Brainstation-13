import {
  Boxes,
  CircleDot,
  Gem,
  Layers3,
  Network,
  Orbit,
  ShieldCheck,
  Users,
} from "lucide-react";
import { getTranslator } from "@/i18n/server";

type BtpCard = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const cards: BtpCard[] = [
  {
    title: "Onboard Engineers in Days, Not Months",
    description:
      "Onboard top 1% pre-vetted tech talents in under 2 weeks so your project doesn\u2019t lose momentum.",
    icon: Layers3,
  },
  {
    title: "Scale on Your Terms",
    description:
      "Scale up or down fast, without penalty. Remote, Hybrid, or Flexi-Remote — whatever fits your workflow and budget.",
    icon: Boxes,
  },
  {
    title: "You Focus on Work, We Handle the Team",
    description:
      "Get local account management support in your time zone — no more chasing offshore vendors.",
    icon: CircleDot,
  },
  {
    title: "Engineers Who Already Know Tomorrow",
    description:
      "Our teams come GenAI-trained and upskilled — no waiting, no extra training budget.",
    icon: Gem,
  },
  {
    title: "Teams That Grow as Fast as You Do",
    description:
      "From Trainees to Leads — Engineers evolve fast with our in-house L&D team.",
    icon: Network,
  },
  {
    title: "All the Roles. One Partner.",
    description:
      "Dev, QA, DevOps, Data, AI/ML, UI/UX — get any tech expertise, exactly when you need it.",
    icon: Orbit,
  },
  {
    title: "Engineers Who Stay, Grow, and Deliver",
    description:
      "Top employer brand, structured career growth, continuous learning and challenging projects — team retention ensured.",
    icon: Users,
  },
  {
    title: "Seamless Knowledge, Zero Downtime",
    description:
      "Agile teams, Scrum and Kanban fit — no relearning, full continuity, documented from day one.",
    icon: ShieldCheck,
  },
];

export default async function BtpDifferentSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#c91f28]">{t("Borderless Talent Advantage")}</p>

            <h2 className="max-w-[620px] text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("What Makes Borderless Tech Professionals Different?")}</h2>
          </div>

          <p className="max-w-[640px] text-[16px] font-medium leading-[1.65] tracking-[-0.01em] text-[#565656] md:text-[17px] lg:pb-2">{t("The fastest, smartest, risk-free way to scale your engineering capacity without the hiring overhead. Build with pre-vetted talents, flexible models, local oversight, and continuity from day one.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[16px] font-bold leading-[1.32] tracking-[-0.01em] text-[#0a0a0a]">
                  {t(card.title)}
                </h3>

                <p className="mt-2 text-[14px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
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
