import {
  BadgeCheck,
  Bot,
  Clock3,
  Coins,
  Settings,
  ShieldCheck,
  Smile,
} from "lucide-react";

type ComparisonRow = {
  aspect: string;
  traditional: string;
  ai: string;
  icon: React.ElementType;
};

const comparisonRows: ComparisonRow[] = [
  {
    aspect: "Skilled Personnel Requirement",
    traditional:
      "Relies on legacy tech experts; 60-70% of time spent on upskilling",
    ai: "Reduces need for specialized skills by 40% with AI-driven analysis",
    icon: BadgeCheck,
  },
  {
    aspect: "Time Efficiency",
    traditional:
      "Typically 2-3x longer due to manual updates and testing",
    ai: "AI speeds up projects by up to 75%, completing in days instead of months",
    icon: Clock3,
  },
  {
    aspect: "Error Reduction",
    traditional:
      "Higher risk of errors, 30% chance of initial bugs",
    ai: "AI reduces errors by 50% with automated validation",
    icon: Settings,
  },
  {
    aspect: "Cost Savings",
    traditional:
      "Increased costs due to labor and time requirements",
    ai: "Saves 30-40% in costs by reducing manual work and project duration",
    icon: Coins,
  },
  {
    aspect: "Testing & Validation",
    traditional:
      "New tests needed, adding 20-25% extra time",
    ai: "AI leverages existing tests for rapid validation and implementation",
    icon: ShieldCheck,
  },
  {
    aspect: "Client Satisfaction",
    traditional:
      "65% satisfaction due to extended timelines",
    ai: "85-90% satisfaction with faster, reliable project completion",
    icon: Smile,
  },
];

export default function MvpTraditionalVsAiSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[104px] text-white">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
            AI-Assisted MVP Delivery
          </p>

          <h2 className="text-[42px] font-bold leading-[1.1] tracking-[-0.075em] text-white md:text-[56px]">
            Traditional Approach vs AI-Assisted Approach
          </h2>

          <p className="mx-auto mt-7 max-w-[820px] text-[18px] font-semibold leading-[1.6] tracking-[-0.035em] text-white/90 md:text-[21px]">
            Discover how AI-powered solutions are revolutionizing traditional
            business processes across multiple aspects and transforming the way
            we work.
          </p>
        </div>

        <div className="mt-[78px] overflow-hidden rounded-[10px] bg-[#223f5c] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:px-10 md:py-12">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-[1fr_1.08fr_1.08fr] gap-10 border-b border-white/14 pb-8">
              <h3 className="text-[20px] font-bold leading-none tracking-[-0.035em] text-white">
                Aspect
              </h3>

              <h3 className="text-[20px] font-bold leading-none tracking-[-0.035em] text-white">
                Traditional Approach
              </h3>

              <h3 className="flex items-center gap-3 text-[20px] font-bold leading-none tracking-[-0.035em] text-white">
                <Bot size={22} className="text-[#8bd3ff]" />
                AI-Assisted Approach
              </h3>
            </div>

            {comparisonRows.map((row) => {
              const Icon = row.icon;

              return (
                <div
                  key={row.aspect}
                  className="group grid grid-cols-[1fr_1.08fr_1.08fr] gap-10 border-b border-white/14 py-8 transition duration-300 hover:bg-white/[0.035]"
                >
                  <div className="flex items-start gap-4">
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                      className="mt-1 shrink-0 text-white"
                    />
                    <h4 className="text-[18px] font-bold leading-[1.45] tracking-[-0.035em] text-white">
                      {row.aspect}
                    </h4>
                  </div>

                  <p className="text-[17px] font-bold leading-[1.55] tracking-[-0.035em] text-white/92">
                    {row.traditional}
                  </p>

                  <p className="text-[17px] font-bold leading-[1.55] tracking-[-0.035em] text-white/92">
                    {row.ai}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile Cards */}
          <div className="grid grid-cols-1 gap-5 lg:hidden">
            {comparisonRows.map((row) => {
              const Icon = row.icon;

              return (
                <article
                  key={row.aspect}
                  className="rounded-[8px] border border-white/10 bg-[#1b3856] p-6"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={24} className="text-[#8bd3ff]" />
                    <h3 className="text-[21px] font-bold leading-[1.25] tracking-[-0.045em] text-white">
                      {row.aspect}
                    </h3>
                  </div>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#8bd3ff]">
                        Traditional Approach
                      </p>
                      <p className="mt-2 text-[16px] font-semibold leading-[1.55] text-white/90">
                        {row.traditional}
                      </p>
                    </div>

                    <div>
                      <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#ffb22c]">
                        AI-Assisted Approach
                      </p>
                      <p className="mt-2 text-[16px] font-semibold leading-[1.55] text-white/90">
                        {row.ai}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-white/45">
        Powered by NeuralFlow
      </span>
    </section>
  );
}