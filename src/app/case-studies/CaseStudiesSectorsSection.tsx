import { Car, Cpu, HeartPulse, Landmark, ShoppingBag, Ship } from "lucide-react";

const sectors = [
  { title: "Fintech & payments", description: "Wallets, transfers and compliance-heavy platforms.", icon: Landmark },
  { title: "Retail & commerce", description: "Storefronts and order systems built for peak traffic.", icon: ShoppingBag },
  { title: "Health & care", description: "Secure patient access and clinical workflows.", icon: HeartPulse },
  { title: "Logistics & fleets", description: "Realtime tracking, routing and visibility.", icon: Car },
  { title: "SaaS & analytics", description: "Dashboards and product re-architecture.", icon: Cpu },
  { title: "Maritime & IoT", description: "Connected devices in low-coverage environments.", icon: Ship },
];

export default function CaseStudiesSectorsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] pt-[8px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-9 md:px-10 md:py-11">
          <div className="max-w-[720px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Where we work
            </p>
            <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
              Sectors we build for
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  <item.icon size={19} />
                </span>
                <div>
                  <h3 className="text-[15.5px] font-semibold text-black">{item.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-[1.6] text-[#55585e]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
