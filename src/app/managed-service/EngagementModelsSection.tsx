import { BadgeCheck, Clock3, Layers3, Shuffle } from "lucide-react";
import { getTranslator } from "@/i18n/server";

type EngagementModel = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const engagementModels: EngagementModel[] = [
  {
    title: "Fixed-Cost Engagement",
    description: "Predictable scope, timeline, and cost",
    icon: BadgeCheck,
  },
  {
    title: "Time & Material (T&M)",
    description: "Great for dynamic, evolving workstreams",
    icon: Clock3,
  },
  {
    title: "Managed Services (CP)",
    description: "Measurable outcomes, agility, and budget control",
    icon: Layers3,
  },
  {
    title: "Hybrid Models",
    description: "Combine build, test, and ops tracks flexibly",
    icon: Shuffle,
  },
];

export default async function EngagementModelsSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white py-[52px] max-sm:py-8 text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="max-sm:mx-auto max-sm:text-center text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Engagement Models")}</h2>

          <p className="mx-auto mt-5 max-w-[560px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[16px] text-pretty">{t("Choose the engagement model that fits your scope, timeline, and budget.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {engagementModels.map((model) => {
            const Icon = model.icon;

            return (
              <article
                key={model.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 max-sm:p-4 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28]">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[#0a0a0a] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                  {t(model.title)}
                </h3>

                <p className="mt-2 text-[14.5px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] text-pretty">
                  {t(model.description)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
