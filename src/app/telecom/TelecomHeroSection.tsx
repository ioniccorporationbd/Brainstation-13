import Link from "next/link";
import { ArrowRight, Network, Radio, Server } from "lucide-react";

const facts = [
  { label: "Network platforms", icon: Network },
  { label: "Enterprise systems", icon: Server },
  { label: "Digital connectivity", icon: Radio },
];

export default function TelecomHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
            Industry &middot; Telecom
          </span>

          <h1 className="mt-6 max-w-[620px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">
            Telecom software for connected networks
          </h1>

          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">
            In an era of inter-connectivity, we help telecom enterprises stay
            up to date with the latest technological solutions &mdash; catering
            to millions of users while adopting modern enterprise platforms.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920] sm:flex-none"
            >
              Start a project
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#services"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28] sm:flex-none"
            >
              Explore services
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {facts.map((fact) => (
              <li key={fact.label} className="flex items-center gap-2 text-[13.5px] font-medium text-[#55585e]">
                <fact.icon size={17} className="text-[#c91f28]" />
                {fact.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#ececec]">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop"
            alt="Network and server infrastructure cabling in a data centre"
            className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
