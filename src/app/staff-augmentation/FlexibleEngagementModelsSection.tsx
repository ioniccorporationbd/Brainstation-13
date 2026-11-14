"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import {
  ChevronDown,
  Coins,
  Crown,
  Handshake,
  UsersRound,
} from "lucide-react";

type ModelKey = "remote" | "hybrid" | "flexiRemote" | "sharedTalents";

type ComparisonRow = {
  aspect: string;
  icon: React.ElementType;
  values: Record<ModelKey, {
    short: string;
    detail: string;
  }>;
};

const rows: ComparisonRow[] = [
  {
    aspect: "Team Setup",
    icon: UsersRound,
    values: {
      remote: {
        short: "Offshore-only...",
        detail:
          "Dedicated offshore engineers work remotely with clear sprint goals, communication routines, and delivery tracking.",
      },
      hybrid: {
        short: "Remote + On-site...",
        detail:
          "A blended setup where remote delivery is combined with selected on-site collaboration when needed.",
      },
      flexiRemote: {
        short: "Remote + On-site (on-demand)...",
        detail:
          "Primarily remote, with on-demand physical presence or closer coordination during critical phases.",
      },
      sharedTalents: {
        short: "Shared CTOs, QA & DevOps...",
        detail:
          "Access senior specialists such as CTO, QA, DevOps, architects, and consultants without hiring full-time.",
      },
    },
  },
  {
    aspect: "Cost Efficiency",
    icon: Coins,
    values: {
      remote: {
        short: "Most cost-effective...",
        detail:
          "Best for maximizing delivery capacity while keeping operational and hiring costs low.",
      },
      hybrid: {
        short: "Balanced savings...",
        detail:
          "A balanced model that gives cost benefits while maintaining stronger collaboration when required.",
      },
      flexiRemote: {
        short: "Optimized value on demand...",
        detail:
          "Pay for additional support only when required, keeping the engagement flexible and controlled.",
      },
      sharedTalents: {
        short: "High savings...",
        detail:
          "Get expert-level support without full-time senior hiring costs.",
      },
    },
  },
  {
    aspect: "Collaboration",
    icon: Handshake,
    values: {
      remote: {
        short: "Async, time-zone based...",
        detail:
          "Works best with async updates, daily standups, task boards, documentation, and structured communication.",
      },
      hybrid: {
        short: "Real-time with in-house...",
        detail:
          "Supports real-time collaboration with your internal teams and selected face-to-face alignment.",
      },
      flexiRemote: {
        short: "Flexible with periodic alignment...",
        detail:
          "Remote-first collaboration with scheduled alignment sessions for planning, review, and delivery control.",
      },
      sharedTalents: {
        short: "On-demand, cross-client...",
        detail:
          "Specialist support is available when needed across multiple functional areas.",
      },
    },
  },
  {
    aspect: "Best For",
    icon: Crown,
    values: {
      remote: {
        short: "Large, long-term projects...",
        detail:
          "Ideal for long-term software development, product teams, maintenance, and continuous delivery.",
      },
      hybrid: {
        short: "High-touch collaboration...",
        detail:
          "Best for projects that require closer stakeholder involvement and occasional in-person alignment.",
      },
      flexiRemote: {
        short: "Delivery-critical phases...",
        detail:
          "Perfect for product launches, urgent scaling, migration, deployment, and support-heavy phases.",
      },
      sharedTalents: {
        short: "Expert input without full-time...",
        detail:
          "Best when you need senior expertise, review, audit, architecture, or DevOps guidance without a full-time role.",
      },
    },
  },
];

const modelTitles: Record<ModelKey, string> = {
  remote: "Remote",
  hybrid: "Hybrid",
  flexiRemote: "Flexi-Remote",
  sharedTalents: "Shared Talents",
};

function ExpandableCell({
  short,
  detail,
}: {
  short: string;
  detail: string;
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <span className="max-w-[185px] text-[16px] font-medium leading-[1.35] tracking-[-0.01em] text-[#0a0a0a] transition-colors duration-300 hover:text-[#c91f28]">
          {t(short)}
        </span>

        <ChevronDown
          size={16}
          strokeWidth={1.8}
          className={`mt-1 shrink-0 text-[#52525B] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <p className="mt-4 max-w-[220px] text-[13.5px] font-medium leading-[1.5] tracking-[-0.01em] text-[#52525B]">
          {t(detail)}
        </p>
      )}
    </div>
  );
}

export default function FlexibleEngagementModelsSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("Flexible Engagement Models")}</h2>

          <p className="mx-auto mt-5 max-w-[820px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[15px]">{t("Compare our flexible IT staff augmentation models to find the perfect fit for your project needs and business objectives.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_300px]">
          {/* Comparison table card */}
          <div className="overflow-x-auto rounded-2xl border border-[#ececec] bg-white px-5 py-7 transition-colors duration-300 hover:border-[#c91f28]/60 md:px-8 md:py-9">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-[220px_1fr_1fr_1fr] gap-x-[36px]">
                <div>
                  <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0a0a0a]">{t("Comparison")}<br />{t("Aspects")}</h3>
                </div>

                {(["remote", "hybrid", "flexiRemote"] as ModelKey[]).map(
                  (key) => (
                    <div key={key}>
                      <h3 className="text-[22px] font-semibold leading-none tracking-[-0.015em] text-[#0a0a0a]">
                        {t(modelTitles[key])}
                      </h3>

                      {key === "remote" && (
                        <span className="mt-3 inline-flex rounded-full bg-[#0a0a0a] px-4 py-1.5 text-[12px] font-bold text-white">{t("Popular")}</span>
                      )}
                    </div>
                  )
                )}
              </div>

              <div className="mt-8">
                {rows.map((row) => {
                  const Icon = row.icon;

                  return (
                    <div
                      key={row.aspect}
                      className="grid grid-cols-[220px_1fr_1fr_1fr] gap-x-[36px] border-b border-[#ececec] py-7 last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          size={20}
                          strokeWidth={1.7}
                          className="shrink-0 text-[#c91f28]"
                        />

                        <span className="text-[17px] font-bold leading-tight tracking-[-0.015em] text-[#0a0a0a]">
                          {t(row.aspect)}
                        </span>
                      </div>

                      <ExpandableCell
                        short={row.values.remote.short}
                        detail={row.values.remote.detail}
                      />

                      <ExpandableCell
                        short={row.values.hybrid.short}
                        detail={row.values.hybrid.detail}
                      />

                      <ExpandableCell
                        short={row.values.flexiRemote.short}
                        detail={row.values.flexiRemote.detail}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Shared talents card */}
          <div className="rounded-2xl border border-[#ececec] bg-white px-5 py-7 transition-colors duration-300 hover:border-[#c91f28]/60 md:px-8 md:py-9">
            <h3 className="text-[22px] font-semibold leading-none tracking-[-0.015em] text-[#0a0a0a]">{t("Shared Talents")}</h3>

            <div className="mt-8">
              {rows.map((row) => (
                <div
                  key={row.aspect}
                  className="border-b border-[#ececec] py-6 first:pt-0 last:border-b-0"
                >
                  <ExpandableCell
                    short={row.values.sharedTalents.short}
                    detail={row.values.sharedTalents.detail}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
