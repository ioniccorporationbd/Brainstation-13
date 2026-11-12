import {
  Bot,
  Clock3,
  Coins,
  Settings,
  ShieldCheck,
  Smile,
  Users,
} from "lucide-react";
import { getTranslator } from "@/i18n/server";

type ComparisonRow = {
  aspect: string;
  traditional: string;
  ai: string;
  icon: React.ElementType;
};

const comparisonRows: ComparisonRow[] = [
  {
    aspect: "Skilled Personnel",
    traditional: "Depends on specialized experts with long upskilling cycles.",
    ai: "AI-assisted analysis reduces the need for narrow specialists.",
    icon: Users,
  },
  {
    aspect: "Time Efficiency",
    traditional: "Manual updates and testing slow every release.",
    ai: "Automation accelerates delivery and shortens feedback cycles.",
    icon: Clock3,
  },
  {
    aspect: "Error Reduction",
    traditional: "Manual review leaves room for human error.",
    ai: "Automated validation catches issues earlier and more reliably.",
    icon: Settings,
  },
  {
    aspect: "Cost Savings",
    traditional: "Higher labor and longer timelines raise total cost.",
    ai: "Less manual work and shorter durations lower overall cost.",
    icon: Coins,
  },
  {
    aspect: "Testing & Validation",
    traditional: "Every change needs new tests and setup time.",
    ai: "Reuses existing tests for faster, safer validation.",
    icon: ShieldCheck,
  },
  {
    aspect: "Client Satisfaction",
    traditional: "Extended timelines can strain stakeholder confidence.",
    ai: "Faster, reliable delivery improves satisfaction.",
    icon: Smile,
  },
];

export default async function MvpTraditionalVsAiSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1180px]">
        {/* Centered Heading */}
        <div className="mx-auto max-w-[820px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("AI-Assisted MVP Delivery")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Traditional Approach vs AI-Assisted Approach")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("See how an AI-assisted workflow improves the way modern MVPs are delivered — across people, time, quality, cost, and satisfaction.")}</p>
        </div>

        {/* Comparison Card */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#ececec] bg-white">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-[0.9fr_1fr_1fr] gap-6 border-b border-[#ececec] bg-[#fafafa] px-8 py-5">
              <h3 className="text-[14px] font-bold uppercase tracking-[0.08em] text-[#565656]">{t("Aspect")}</h3>
              <h3 className="text-[14px] font-bold uppercase tracking-[0.08em] text-[#565656]">{t("Traditional Approach")}</h3>
              <h3 className="flex items-center gap-2 text-[14px] font-bold uppercase tracking-[0.08em] text-[#c91f28]">
                <Bot size={16} strokeWidth={2} />{t("AI-Assisted Approach")}</h3>
            </div>

            {comparisonRows.map((row) => {
              const Icon = row.icon;

              return (
                <div
                  key={row.aspect}
                  className="grid grid-cols-[0.9fr_1fr_1fr] gap-6 border-b border-[#f0f0f0] px-8 py-6 transition-colors duration-300 last:border-b-0 hover:bg-[#fafafa]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28]">
                      <Icon size={18} strokeWidth={1.9} />
                    </span>
                    <h4 className="text-[15px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                      {t(row.aspect)}
                    </h4>
                  </div>

                  <p className="text-[14px] font-medium leading-[1.5] tracking-[-0.01em] text-[#565656]">
                    {t(row.traditional)}
                  </p>

                  <p className="text-[14px] font-semibold leading-[1.5] tracking-[-0.01em] text-[#0a0a0a]">
                    {t(row.ai)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile / Tablet Cards */}
          <div className="grid grid-cols-1 divide-y divide-[#ececec] lg:hidden">
            {comparisonRows.map((row) => {
              const Icon = row.icon;

              return (
                <article key={row.aspect} className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28]">
                      <Icon size={18} strokeWidth={1.9} />
                    </span>
                    <h3 className="text-[17px] font-bold leading-[1.25] tracking-[-0.015em] text-[#0a0a0a]">
                      {t(row.aspect)}
                    </h3>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#565656]">{t("Traditional")}</p>
                      <p className="mt-1.5 text-[14px] font-medium leading-[1.5] text-[#565656]">
                        {t(row.traditional)}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#c91f28]">{t("AI-Assisted")}</p>
                      <p className="mt-1.5 text-[14px] font-semibold leading-[1.5] text-[#0a0a0a]">
                        {t(row.ai)}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
