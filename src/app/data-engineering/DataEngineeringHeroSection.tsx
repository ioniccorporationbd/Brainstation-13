import Image from "next/image";
import Link from "next/link";

export default function DataEngineeringHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[72px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
        {/* Left - Text */}
        <div>
          <p className="mb-5 inline-flex rounded-full bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">
            Data Engineering
          </p>

          <h1 className="text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0a0a0a] md:text-[52px] lg:text-[56px]">
            AI-Ready Data Platforms for the Enterprise
          </h1>

          <p className="mt-6 max-w-[560px] text-[17px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656] md:text-[19px]">
            We design cloud-native, governance-first data platforms built for
            reliability and AI readiness — delivered by certified teams for
            faster, lower-risk rollout.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center justify-center rounded-full bg-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >
              Schedule a Call
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
            >
              Instant Quote
            </Link>
          </div>
        </div>

        {/* Right - Image */}
        <div className="group relative h-[320px] w-full overflow-hidden rounded-2xl border border-[#ececec] md:h-[440px] lg:h-[480px]">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop"
            alt="Data engineering and cloud data platforms"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
