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
    <section className="bg-white py-[52px] text-[#0a0a0a] md:py-[96px]">
      <div className="brand-container">
        {/* Heading */}
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Flexible Engagement")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Engagement Models Tailored to You")}</h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("Choose the collaboration model that fits your goals, timeline, and budget.")}</p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {engagementModels.map((model) => {
            const Icon = model.icon;

            return (
              <article
                key={model.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[18px] font-semibold leading-[1.25] tracking-[-0.015em] text-[#0a0a0a]">
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
