import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ShikkhaCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[96px] pt-[8px] md:pb-[112px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[36px]">
                Bring Shikkha Chat to your institution
              </h2>
              <p className="mt-3 max-w-[620px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">
                Talk to our team about an education management platform tailored
                to your school, network or government programme.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >
                Request a Demo
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 flex max-w-[900px] items-center justify-center gap-2 text-center text-[12px] leading-[1.6] text-[#8a8f97]">
          Screenshots captured from the running Shikkha Chat application by
          Ionic (ioniccorporationbd) — its public institution website and role
          dashboards — and reused here with attribution.
        </p>
      </div>
    </section>
  );
}
