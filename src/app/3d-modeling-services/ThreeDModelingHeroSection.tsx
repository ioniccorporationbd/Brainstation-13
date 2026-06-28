import Link from "next/link";

const MACHINE_BG =
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=90";

export default function ThreeDModelingHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#101d3a]">
      {/* Clear background machine image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${MACHINE_BG})`,
        }}
      />

      {/* Only dark overlay for readable text */}
      <div className="absolute inset-0 bg-[#101d3a]/68" />

      <div className="relative z-10 mx-auto flex min-h-[640px] w-full max-w-[1200px] items-center justify-center px-5 py-[90px] text-center sm:px-8 lg:min-h-[650px] xl:px-0">
        <div className="mx-auto max-w-[850px]">
          <h1 className="text-[46px] font-bold leading-[1.12] tracking-[-0.06em] text-white sm:text-[64px] lg:text-[78px]">
            3D Modeling &amp;
            <br />
            Rendering Services for
            <br />
            Tomorrow&apos;s Industries
          </h1>

          <p className="mx-auto mt-[30px] max-w-[680px] text-[18px] font-medium leading-[1.45] text-white/90 sm:text-[22px]">
            We create high-precision 3D animations, technical explainers,
            manufacturing walkthroughs, and AI-driven system visualizations for
            global industries.
          </p>

          <div className="mt-[54px] flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-flex h-[64px] min-w-[172px] items-center justify-center rounded-full bg-[#ffad2f] px-[30px] text-[16px] font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#f59b15]"
            >
              View Portfolio
            </Link>

            <Link
              href="/schedule-a-call"
              className="inline-flex h-[64px] min-w-[182px] items-center justify-center rounded-full bg-[#ffad2f] px-[30px] text-[16px] font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#f59b15]"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}