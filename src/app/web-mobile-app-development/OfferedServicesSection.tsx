import { getTranslator } from "@/i18n/server";

import {
  Blocks,
  Layers,
  MonitorSmartphone,
  Palette,
  Settings2,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    title: "High-quality applications for a wide array of niches",
    icon: Layers,
  },
  {
    title: "Attracting a larger user base & increasing business impact",
    icon: TrendingUp,
  },
  {
    title: "High standard functionality & features",
    icon: Settings2,
  },
  {
    title: "Enhancing visual appeal & rich user interface",
    icon: Palette,
  },
  {
    title: "Cross-platform development for mobile apps",
    icon: Smartphone,
  },
  {
    title: "Variety of app choices from native, web & hybrid",
    icon: Blocks,
  },
  {
    title: "Complete operating system support",
    icon: MonitorSmartphone,
  },
];

export default async function OfferedServicesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white px-6 pb-[88px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("What We Can Do")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Offered Services")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("Seven capabilities that cover the full application lifecycle.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={20} strokeWidth={2.1} />
                </span>

                <p className="mt-5 text-[15px] font-bold leading-[1.45] tracking-[-0.01em] text-[#0a0a0a]">
                  {t(service.title)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
