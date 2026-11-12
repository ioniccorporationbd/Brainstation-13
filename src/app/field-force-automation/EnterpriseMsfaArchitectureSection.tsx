import { getTranslator } from "@/i18n/server";

import {
  CloudCog,
  Database,
  Layers3,
  MonitorSmartphone,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

type ArchitectureCard = {
  eyebrow: string;
  title: string;
  description: string;
  logos: string[];
  icon: React.ElementType;
  emphasis?: boolean;
};

const architectureCards: ArchitectureCard[] = [
  {
    eyebrow: "Edge Client Layer",
    title: "Native & Web Apps",
    description:
      "Flutter App & Next JS Web Portal equipped with encrypted local SQLite storage.",
    logos: ["Flutter", "Next.js"],
    icon: MonitorSmartphone,
  },
  {
    eyebrow: "MSFA Core Engine",
    title: "Backend",
    description:
      "Scalable microservices handling workflow logic, validation rules, and offline sync.",
    logos: [".NET Core"],
    icon: Layers3,
    emphasis: true,
  },
  {
    eyebrow: "Enterprise Systems",
    title: "Core ERP",
    description:
      "Bi-directional integration with SAP, Oracle, IFS and HR Systems.",
    logos: ["SAP", "Oracle", "IFS", "Odoo"],
    icon: CloudCog,
  },
];

const architectureFeatures = [
  {
    title: "Secure Sync",
    icon: RefreshCcw,
  },
  {
    title: "Encrypted Storage",
    icon: ShieldCheck,
  },
  {
    title: "Centralized Data",
    icon: Database,
  },
];

export default async function EnterpriseMsfaArchitectureSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-hidden bg-white px-6 pb-[88px] text-[#000000] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Enterprise Architecture")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#000000] md:text-[42px]">{t("Secure. Scalable. Connected.")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("A robust multi-tier architecture bridging offline field execution with your core enterprise systems.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {architectureCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className={`group flex h-full flex-col border bg-white px-7 pb-8 pt-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c91f28] ${
                  card.emphasis
                    ? "border-[#c91f28]"
                    : "border-[#ececec]"
                }`}
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
                  {t(card.eyebrow)}
                </span>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {card.logos.map((logo) => (
                    <span
                      key={logo}
                      className="border border-[#ececec] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[#3a3a3a]"
                    >
                      {logo}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-[6px] bg-[#c91f28] text-white transition-colors duration-300 group-hover:bg-[#a71920]">
                  <Icon size={20} strokeWidth={1.9} />
                </div>

                <h3 className="mt-5 text-[22px] font-bold leading-tight tracking-[-0.02em] text-[#000000]">
                  {t(card.title)}
                </h3>

                <p className="mt-3 text-[14px] font-medium leading-[1.65] text-[#5f5f5f]">
                  {t(card.description)}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 grid max-w-[860px] grid-cols-1 gap-3 sm:grid-cols-3">
          {architectureFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-center justify-center gap-2.5 border border-[#ececec] bg-white px-4 py-3.5 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <Icon size={17} strokeWidth={2} className="text-[#c91f28]" />
                <span className="text-[13px] font-bold tracking-[-0.01em] text-[#1f1f1f]">
                  {t(feature.title)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
