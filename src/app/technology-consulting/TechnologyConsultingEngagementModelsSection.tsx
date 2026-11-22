import {
  BriefcaseBusiness,
  Clock3,
  GraduationCap,
  Handshake,
} from "lucide-react";
import { getTranslator } from "@/i18n/server";

type EngagementModel = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const engagementModels: EngagementModel[] = [
  {
    title: "Advisory Consulting",
    description: "One-time or short-term strategy and design support.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Dedicated Consulting",
    description: "Long-term collaboration with embedded consultants.",
    icon: Handshake,
  },
  {
    title: "On-Demand Expert Hours",
    description: "Book expert sessions on a flexible hourly basis.",
    icon: Clock3,
  },
  {
    title: "Workshops & Training",
    description: "Customized upskilling sessions such as agile and scrum training.",
    icon: GraduationCap,
  },
];

export default async function TechnologyConsultingEngagementModelsSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        {/* Heading */}
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Flexible Engagement")}</p>

          <h2 className="max-sm:mx-auto max-sm:text-center text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Engagement Models")}</h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[16px] text-pretty">{t("Choose the collaboration model that fits your goals, timeline, and budget.")}</p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {engagementModels.map((model) => {
            const Icon = model.icon;

            return (
              <article
                key={model.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
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
