import Link from "next/link";

export default function DataScienceBusinessIntelligenceHeroSection() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-white">
      {/* Light Background Image */}
      <img
        src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1800&auto=format&fit=crop"
        alt="Data Science and Business Intelligence financial analytics"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Light soft overlay for same screenshot look */}
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1320px] items-center px-6">
        {/* Glass content box */}
        <div className="w-full max-w-[760px] bg-white/78 px-10 py-12 shadow-[0_20px_70px_rgba(0,0,0,0.10)] backdrop-blur-[3px] md:ml-[45px] md:px-14 md:py-16 lg:ml-[65px]">
          <h1 className="max-w-[680px] text-[46px] font-bold leading-[1.04] tracking-[-0.055em] text-black md:text-[64px] lg:text-[72px]">
            Data Science & <br />
            Business Intelligence
          </h1>

          <p className="mt-8 max-w-[700px] text-[16px] font-medium leading-[1.9] tracking-[-0.025em] text-black md:text-[18px]">
            Data is the new currency for your business. Get the best possible
            outcome with proper data utilization.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-[#ffab2e] px-8 py-4 text-[16px] font-bold lowercase tracking-[-0.02em] text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffc15a] hover:shadow-[0_16px_38px_rgba(255,171,46,0.35)]"
          >
            contact us
          </Link>
        </div>
      </div>
    </section>
  );
}