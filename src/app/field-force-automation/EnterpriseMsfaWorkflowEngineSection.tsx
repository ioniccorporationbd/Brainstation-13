import { getTranslator } from "@/i18n/server";

import {
  BarChart3,
  CheckCircle2,
  Cpu,
  Layers3,
  Map,
  RefreshCcw,
} from "lucide-react";

type WorkflowItem = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
};

const workflowItems: WorkflowItem[] = [
  {
    title: "Plan",
    subtitle: "Set Daily Routes",
    icon: Map,
  },
  {
    title: "Execute",
    subtitle: "Visit Customers",
    icon: Layers3,
  },
  {
    title: "Capture",
    subtitle: "Log Orders & Data",
    icon: CheckCircle2,
  },
  {
    title: "Approve",
    subtitle: "Manager Review",
    icon: Cpu,
  },
  {
    title: "Sync",
    subtitle: "Push to ERP",
    icon: RefreshCcw,
  },
  {
    title: "Analyze",
    subtitle: "Track Performance",
    icon: BarChart3,
  },
];

export default async function EnterpriseMsfaWorkflowEngineSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-hidden bg-white pb-[56px] text-[#000000] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Workflow Engine")}</p>

          <h2 className="max-sm:mx-auto max-sm:text-center text-[#000000] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("End-to-End Governance")}</h2>

          <p className="mt-4 text-[15px] font-medium leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Digitally verified, traceable, and fully auditable from the first plan to final ERP sync.")}</p>
        </div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[30px] hidden h-px bg-[#ececec] lg:block" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {workflowItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative flex flex-col items-center border border-[#ececec] bg-white px-5 pb-7 pt-0 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#c91f28]"
                >
                  <div className="absolute -top-[30px] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#ececec] bg-white">
                    <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#c91f28] text-white transition-colors duration-300 group-hover:bg-[#a71920]">
                      <Icon size={20} strokeWidth={1.9} />
                    </div>
                  </div>

                  <span className="mt-[42px] text-[11px] font-bold uppercase tracking-normal text-[#b5b5b5]">{t("Step")}{String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 text-[#000000] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                    {t(item.title)}
                  </h3>

                  <p className="mt-2 text-[14.5px] font-medium leading-[1.5] text-[#666666]">
                    {t(item.subtitle)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
