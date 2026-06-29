"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <span className="max-w-[185px] text-[17px] font-medium leading-[1.35] tracking-[-0.035em] text-[#11182f]">
          {short}
        </span>

        <ChevronDown
          size={16}
          strokeWidth={1.8}
          className={`mt-1 shrink-0 text-[#42637a] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <p className="mt-4 max-w-[220px] text-[14px] font-medium leading-[1.5] tracking-[-0.025em] text-[#42637a]">
          {detail}
        </p>
      )}
    </div>
  );
}

export default function FlexibleEngagementModelsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-[42px] font-normal leading-[1.08] tracking-[-0.065em] text-[#11182f] md:text-[52px]">
            Flexible Engagement Models
          </h2>

          <p className="mx-auto mt-7 max-w-[920px] text-[21px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a]">
            Compare our flexible IT staff augmentation models to find the
            perfect fit for your project needs and business objectives.
          </p>
        </div>

        <div className="mt-[96px] grid grid-cols-1 gap-[32px] xl:grid-cols-[1fr_280px]">
          <div className="overflow-hidden rounded-[8px] bg-[#f4f8fc] px-[42px] py-[46px]">
            <div className="grid grid-cols-[250px_1fr_1fr_1fr] gap-x-[42px]">
              <div>
                <h3 className="text-[28px] font-bold leading-[1.35] tracking-[-0.055em] text-[#050b18]">
                  Comparison <br />
                  Aspects
                </h3>
              </div>

              {(["remote", "hybrid", "flexiRemote"] as ModelKey[]).map(
                (key) => (
                  <div key={key}>
                    <h3 className="text-[28px] font-bold leading-none tracking-[-0.055em] text-[#050b18]">
                      {modelTitles[key]}
                    </h3>

                    {key === "remote" && (
                      <span className="mt-3 inline-flex rounded-full bg-[#111E40] px-4 py-1.5 text-[13px] font-bold text-white">
                        Popular
                      </span>
                    )}
                  </div>
                )
              )}
            </div>

            <div className="mt-[44px]">
              {rows.map((row) => {
                const Icon = row.icon;

                return (
                  <div
                    key={row.aspect}
                    className="grid grid-cols-[250px_1fr_1fr_1fr] gap-x-[42px] border-b border-[#aeb9c6] py-[30px] last:border-b-0"
                  >
                    <div className="flex items-center gap-4">
                      <Icon
                        size={24}
                        strokeWidth={1.7}
                        className="shrink-0 text-[#11182f]"
                      />

                      <span className="text-[22px] font-bold leading-tight tracking-[-0.04em] text-[#050b18]">
                        {row.aspect}
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

          <div className="rounded-[8px] bg-[#f4f8fc] px-[42px] py-[46px]">
            <h3 className="text-[28px] font-bold leading-none tracking-[-0.055em] text-[#050b18]">
              Shared Talents
            </h3>

            <div className="mt-[69px]">
              {rows.map((row) => (
                <div
                  key={row.aspect}
                  className="border-b border-[#aeb9c6] py-[30px] first:pt-0 last:border-b-0"
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

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}