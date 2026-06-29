import Link from "next/link";

export default function AemHeroSection() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#0b7cff]">
      {/* Background shapes */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2f9cf5] via-[#007bff] to-[#3033d9]" />

      <div className="absolute left-0 top-[120px] h-[360px] w-[48%] bg-white/95 [clip-path:polygon(0_0,100%_42%,100%_100%,0_100%)]" />

      <div className="absolute right-0 top-0 h-full w-[52%] bg-[#3437dd] [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)]" />

      <div className="absolute right-0 top-0 h-full w-[52%] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(0,0,0,0.05))] opacity-60" />

      {/* Device image */}
      <div className="absolute left-[10%] top-0 z-10 h-full w-[52%]">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
          alt="Adobe Experience Manager"
          className="h-full w-full object-contain object-left"
        />
      </div>

      {/* Content card */}
      <div className="relative z-20 mx-auto flex min-h-[620px] max-w-[1400px] items-center justify-end px-6">
        <div className="mr-[40px] w-full max-w-[720px] bg-white/90 px-[52px] py-[92px] backdrop-blur-sm">
          <h1 className="text-[62px] font-bold leading-[0.96] tracking-[-0.04em] text-black">
            Adobe Experience <br />
            Manager (AEM)
          </h1>

          <p className="mt-8 text-[17px] leading-[1.6] text-black">
            Offering services for the best enterprise CMS in the market.
          </p>

          <Link
            href="/adobe-experience-manager"
            className="mt-9 inline-flex rounded-full bg-[#ffab2e] px-8 py-4 text-[15px] font-bold text-black transition hover:bg-[#ffc15a]"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </section>
  );
}