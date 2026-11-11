import Link from "next/link";
import { ArrowRight, ChartNoAxesCombined, Cpu, LayoutDashboard } from "lucide-react";

const chips = [
  { label: "BI dashboards", icon: LayoutDashboard },
  { label: "Predictive models", icon: Cpu },
  { label: "Data pipelines", icon: ChartNoAxesCombined },
];

export default function DataScienceBusinessIntelligenceHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
            Service &middot; Data Science &amp; BI
          </span>

          <h1 className="mt-6 max-w-[620px] text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-black md:text-[48px] lg:text-[54px]">
            Data Science &amp; Business Intelligence
          </h1>

          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">
            Data is the new currency for your business. Get the best possible
            outcome with proper data utilization.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920] sm:flex-none"
            >
              Contact us
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/schedule-a-call"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28] sm:flex-none"
            >
              Schedule a call
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {chips.map((chip) => (
              <li key={chip.label} className="flex items-center gap-2 text-[13.5px] font-medium text-[#55585e]">
                <chip.icon size={17} className="text-[#c91f28]" />
                {chip.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1400&auto=format&fit=crop"
              alt="Business intelligence dashboard with KPI tiles and trend charts"
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
            />
          </div>

          <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-lg border border-[#ececec] bg-white px-4 py-2.5">
            <LayoutDashboard size={16} className="text-[#c91f28]" />
            <span className="text-[13px] font-semibold text-black">
              From raw data to decisions leaders can defend
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
