import Image from "next/image";
import Link from "next/link";

const MACHINE_IMG =
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85";

export default function ThreeDModelingHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-[72px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        {/* Left content */}
        <div>
          <p className="mb-5 inline-flex rounded-full bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">
            3D Modeling &amp; Rendering
          </p>

          <h1 className="text-[38px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a] md:text-[52px] lg:text-[56px]">
            3D Modeling &amp; Rendering for Modern Industries
          </h1>

          <p className="mt-6 max-w-[560px] text-[17px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656] md:text-[19px]">
            High-precision 3D animation, technical explainers and AI-driven
            system visualizations for global industries.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full bg-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >
              View Portfolio
            </Link>

            <Link
              href="/schedule-a-call"
              className="inline-flex items-center justify-center rounded-full border border-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
            >
              Schedule a Call
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] font-semibold text-[#565656]">
            <span>Automotive</span>
            <span className="h-1 w-1 rounded-full bg-[#c91f28]" />
            <span>Heavy Machinery</span>
            <span className="h-1 w-1 rounded-full bg-[#c91f28]" />
            <span>Semiconductor</span>
            <span className="h-1 w-1 rounded-full bg-[#c91f28]" />
            <span>Robotics</span>
          </div>
        </div>

        {/* Right image */}
        <div className="relative w-full">
          <div className="relative aspect-[4/3.3] w-full overflow-hidden rounded-2xl border border-[#ececec] bg-[#f7f7f7]">
            <Image
              src={MACHINE_IMG}
              alt="Industrial machinery visualized with high-precision 3D modeling"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 580px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
