import { Boxes, Gauge, Lock, Server } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const stackPoints = [
  {
    icon: Boxes,
    title: "Headless storefront",
    description: "Decoupled front end rendering from a single edge delivery layer.",
  },
  {
    icon: Server,
    title: "API-first back end",
    description: "Commerce logic exposed through versioned, documented APIs.",
  },
  {
    icon: Lock,
    title: "Secure checkout",
    description: "Tokenised payments, PCI-aware flows and fraud safeguards.",
  },
  {
    icon: Gauge,
    title: "Edge-cached delivery",
    description: "Static-first rendering with cache invalidation on catalogue change.",
  },
];

export default async function EcommerceStackSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="rounded-2xl border border-[#ececec] bg-white p-7 md:p-10">
          <div className="max-w-[640px]">
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Architecture")}</p>

            <h2 className="text-[27px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[36px]">{t("Built for the modern commerce stack")}</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stackPoints.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-300 hover:border-[#c91f28]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                    <Icon size={18} strokeWidth={2.1} />
                  </span>

                  <h3 className="mt-4 text-[15px] font-semibold leading-[1.35] tracking-[-0.01em] text-[#0a0a0a]">
                    {t(point.title)}
                  </h3>

                  <p className="mt-1.5 text-[13.5px] font-medium leading-[1.6] text-[#52525B]">
                    {t(point.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
