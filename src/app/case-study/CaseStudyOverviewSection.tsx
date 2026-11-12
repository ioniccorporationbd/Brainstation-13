import {
  AlertTriangle,
  BarChart3,
  Boxes,
  LockKeyhole,
  MapPinned,
  PackageSearch,
  Sparkles,
} from "lucide-react";
import { getTranslator } from "@/i18n/server";

type Challenge = {
  text: string;
  icon: React.ElementType;
};

const challenges: Challenge[] = [
  {
    text: "Existing SaaS-based e-commerce platform failed to meet Shwapno’s brand standards and scalability needs.",
    icon: AlertTriangle,
  },
  {
    text: "Inability to provide hyperlocal inventory visibility and real-time stock updates.",
    icon: MapPinned,
  },
  {
    text: "Limited personalization and customer engagement features hindering user experience.",
    icon: Sparkles,
  },
  {
    text: "Complex logistics and delivery management challenges including route optimization and geofencing.",
    icon: Boxes,
  },
  {
    text: "Lack of comprehensive analytics and actionable insights for inventory, sales, and customer behavior.",
    icon: BarChart3,
  },
  {
    text: "Difficulty managing large product catalogs with dynamic pricing and multi-unit measurements.",
    icon: PackageSearch,
  },
  {
    text: "Need for secure multi-level user access and seamless integration with SAP S/4HANA for inventory synchronization.",
    icon: LockKeyhole,
  },
];

export default async function CaseStudyOverviewSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        {/* Centered Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Problem Statement")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Business Challenges")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("The legacy platform could not support the scale, brand standards, and hyperlocal experience the business required — creating seven core challenges to solve.")}</p>
        </div>

        {/* Cards - 4 per row desktop */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;

            return (
              <article
                key={challenge.text}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#c91f28]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 text-[14px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
                  {t(challenge.text)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
