import Link from "next/link";
import { ArrowRight, FlaskConical, Pill, Stethoscope } from "lucide-react";

const facts = [
  { label: "Pharma marketing", icon: Pill },
  { label: "Healthcare platforms", icon: Stethoscope },
  { label: "Compliance automation", icon: FlaskConical },
];

export default function PharmaHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
            Industry &middot; Pharma
          </span>

          <h1 className="mt-6 max-w-[620px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">
            Pharma technology for regulated markets
          </h1>

          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">
            We build healthcare and pharmaceutical software that meets the
            demands of patients, healthcare professionals and the teams that
            serve them.
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
              href="#solutions"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28] sm:flex-none"
            >
              Explore solutions
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
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1400&auto=format&fit=crop"
            alt="Laboratory pipette dispensing samples during pharmaceutical research"
            className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
          />
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-9 md:px-10 md:py-11">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Overview
            </p>
            <h2 className="mt-3 text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-black md:text-[30px]">
              Pharma solutions, integration and products on your comfort level
            </h2>
            <h3 className="mt-5 text-[14px] font-bold uppercase leading-[1.5] tracking-[0.06em] text-black">
              Big data power for your infield force activities, paired with the
              comfort of simplicity
            </h3>
          </div>

          <p className="text-[15px] leading-[1.8] text-[#55585e]">
            In addition to individual solutions for specialized requirements, we
            try to transfer our know-how into products that we offer as Software
            as a Service. In this way, many customers benefit from proven
            processes. Based on the best practices for customer data platforms
            we have developed products that address the critical challenges
            pharma companies face today.
          </p>
        </div>
      </div>
    </section>
  );
}
