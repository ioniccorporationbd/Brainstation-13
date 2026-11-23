import { Car, Cpu, HeartPulse, Landmark, ShoppingBag, Ship } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const sectors = [
  { title: "Fintech & payments", description: "Wallets, transfers and compliance-heavy platforms.", icon: Landmark },
  { title: "Retail & commerce", description: "Storefronts and order systems built for peak traffic.", icon: ShoppingBag },
  { title: "Health & care", description: "Secure patient access and clinical workflows.", icon: HeartPulse },
  { title: "Logistics & fleets", description: "Realtime tracking, routing and visibility.", icon: Car },
  { title: "SaaS & analytics", description: "Dashboards and product re-architecture.", icon: Cpu },
  { title: "Maritime & IoT", description: "Connected devices in low-coverage environments.", icon: Ship },
];

export default async function CaseStudiesSectorsSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] pt-[8px] md:pb-[104px]">
      <div className="mx-auto brand-container">
        <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-9 md:px-10 md:py-11">
          <div className="max-w-[720px]">
            <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Where we work")}</p>
            <h2 className="max-sm:mx-auto max-sm:text-center mt-3 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Sectors we build for")}</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50 max-sm:flex-col max-sm:items-center max-sm:text-center"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  <item.icon size={19} />
                </span>
                <div>
                  <h3 className="text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">{t(item.title)}</h3>
                  <p className="mt-1 text-[14.5px] leading-[1.6] text-[#52525B] text-pretty">{t(item.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
