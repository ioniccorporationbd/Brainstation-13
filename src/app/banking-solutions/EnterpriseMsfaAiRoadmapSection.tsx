import Link from "next/link";

export default function BankingFinancialHeroSection() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1800&auto=format&fit=crop"
        alt="Banking and financial solution"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1320px] items-center px-6">
        <div className="ml-0 w-full max-w-[740px] bg-white/88 px-10 py-12 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-[2px] md:ml-[60px] md:px-14 md:py-16 lg:ml-[80px]">
          <h1 className="max-w-[620px] text-[48px] font-bold leading-[1.02] tracking-[-0.055em] text-black md:text-[64px] lg:text-[72px]">
            Banking & Financial Solution
          </h1>

          <p className="mt-8 max-w-[650px] text-[17px] font-medium leading-[1.9] tracking-[-0.025em] text-black md:text-[19px]">
            Customized software solutions tailored for your unique banking &
            financial business needs.
          </p>

          <Link
            href="/banking-financial-solution"
            className="mt-10 inline-flex rounded-full bg-[#ffab2e] px-8 py-4 text-[16px] font-bold uppercase tracking-[-0.02em] text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffc15a] hover:shadow-[0_16px_38px_rgba(255,171,46,0.35)]"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}