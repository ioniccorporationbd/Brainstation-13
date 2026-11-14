import {
  BadgeCheck,
  Box,
  Boxes,
  BriefcaseBusiness,
  Clock3,
  Globe2,
  Handshake,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import { getTranslator } from "@/i18n/server";

type FeatureCard = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const cards: FeatureCard[] = [
  {
    title: "2 Weeks Deployment",
    description: "Onboard pre-vetted tech talents, fast.",
    icon: Box,
  },
  {
    title: "Local Oversight",
    description: "Managed from The USA.",
    icon: Network,
  },
  {
    title: "Flexible Models",
    description: "Remote, Hybrid, or Flexi-Remote — Flexible Monthly Contract.",
    icon: Boxes,
  },
  {
    title: "2-Week Moneyback Guarantee",
    description: "Only pay if you\u2019re satisfied.",
    icon: ShieldCheck,
  },
  {
    title: "Pre-vetted Engineers",
    description: "Access skilled developers already screened for quality.",
    icon: BadgeCheck,
  },
  {
    title: "Dedicated Teams",
    description: "Scale with dedicated offshore teams for long-term delivery.",
    icon: Users,
  },
  {
    title: "Fast Hiring",
    description: "Reduce hiring delays and start projects faster.",
    icon: Clock3,
  },
  {
    title: "Global Talent Pool",
    description: "Hire experienced professionals across multiple technologies.",
    icon: Globe2,
  },
  {
    title: "Account Management",
    description: "Get reliable delivery support with local management.",
    icon: Handshake,
  },
  {
    title: "Enterprise Ready",
    description: "Built for startups, SMEs, and enterprise delivery needs.",
    icon: BriefcaseBusiness,
  },
];

export default async function BorderlessTechProfessionalsSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white py-[52px] text-[#0a0a0a] md:py-[96px]">
      <div className="brand-container">
        <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#c91f28]">{t("Borderless Talent Advantage")}</p>

        <h2 className="max-w-[820px] text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Borderless Tech Professionals (BTP)")}</h2>

        <p className="mt-5 max-w-[660px] text-[16px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("Scale faster with pre-vetted engineers, flexible engagement models, local oversight, and risk-free onboarding support.")}</p>

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

                <h3 className="mt-5 text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
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
