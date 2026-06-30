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

export default function EnterpriseMsfaWorkflowEngineSection() {
  return (
    <section className="relative overflow-hidden border-t-[6px] border-[#111E40] bg-white px-6 py-[92px] text-[#11182f]">
      <div className="mx-auto max-w-[1320px]">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[22px] font-medium leading-none tracking-[-0.04em] text-[#3f93cf]">
            Workflow Engine
          </p>

          <h2 className="mt-7 text-[44px] font-bold leading-[1.08] tracking-[-0.065em] text-[#050b18] md:text-[60px]">
            End-to-End Governance
          </h2>

          <p className="mx-auto mt-7 max-w-[940px] text-[19px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[22px]">
            Digitally verified, traceable, and fully auditable from the first
            plan to final ERP sync.
          </p>
        </div>

        {/* Workflow */}
        <div className="relative mt-[72px]">
          {/* Desktop connector line */}
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[31px] hidden h-px bg-gradient-to-r from-transparent via-[#d8e7ef] to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {workflowItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#08a9df] text-white shadow-[0_16px_36px_rgba(8,169,223,0.26)] transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#ffab2e] group-hover:text-black group-hover:shadow-[0_22px_55px_rgba(255,171,46,0.28)]">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-[20px] font-bold leading-none tracking-[-0.045em] text-[#050b18] md:text-[22px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[19px] font-medium leading-[1.25] tracking-[-0.04em] text-[#42637a] md:text-[21px]">
                      {item.subtitle}
                    </p>
                  </div>

                  <span className="pointer-events-none absolute -top-3 right-[28%] hidden text-[52px] font-bold leading-none text-[#111E40]/[0.035] transition duration-300 group-hover:text-[#08a9df]/10 lg:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}