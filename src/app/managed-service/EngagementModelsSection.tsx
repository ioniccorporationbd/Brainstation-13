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
    title: "Managed Services (CP Model)",
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
    <section className="bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Engagement Models Tailored to You")}</h2>

          <p className="mx-auto mt-5 max-w-[560px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("Choose the engagement model that fits your scope, timeline, and budget.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {engagementModels.map((model) => {
            const Icon = model.icon;

            return (
              <article
                key={model.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28]">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[18px] font-bold leading-[1.25] tracking-[-0.015em] text-[#0a0a0a]">
                  {t(model.title)}
                </h3>

                <p className="mt-2 text-[14px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
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
