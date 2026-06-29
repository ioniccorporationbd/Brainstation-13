import Link from "next/link";

export default function BlockchainHeroSection() {
  return (
    <section className="relative min-h-[740px] overflow-hidden bg-[#111E40] text-white">
      {/* Circle Background */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 46 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full border border-[#1b72a8]/25"
            style={{
              width: `${1180 - index * 24}px`,
              height: `${1180 - index * 24}px`,
              left: "50%",
              top: "50%",
              transform: "translate(-38%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid min-h-[740px] max-w-[1320px] grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-[0.92fr_1fr]">
        {/* Left Content */}
        <div>
          <span className="mb-10 inline-flex rounded-md bg-white/10 px-4 py-2 text-[18px] font-bold text-[#3ca7ee]">
            Blockchain/Web3 Solutions
          </span>

          <h1 className="max-w-[690px] text-[52px] font-light leading-[1.1] tracking-[-0.065em] text-white md:text-[66px] lg:text-[70px]">
            Enterprise Blockchain <br />
            Development Services
          </h1>

          <p className="mt-8 max-w-[660px] text-[22px] font-medium leading-[1.4] tracking-[-0.035em] text-white">
            We help businesses scale into Web3 through decentralized, plug-and-play
            enterprise blockchain systems for reconciliation and settlement. The
            platform is secure and privacy-preserving while providing transparent
            enterprise-grade collaboration.
          </p>

          <Link
            href="/contact-us"
            className="mt-8 inline-flex rounded-full bg-[#ffab2e] px-7 py-4 text-[16px] font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffc15a] hover:shadow-[0_12px_28px_rgba(255,171,46,0.35)]"
          >
            Start a Blockchain Pilot
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="h-[495px] w-full max-w-[630px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1400&auto=format&fit=crop"
              alt="Enterprise blockchain network"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>
    </section>
  );
}