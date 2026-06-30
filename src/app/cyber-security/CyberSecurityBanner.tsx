"use client";

import Image from "next/image";

export default function CyberSecurityBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f1d3b]">
      {/* Background circle lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[32%] top-1/2 h-[980px] w-[980px] -translate-y-1/2 rounded-full border border-[#2d4774]/50" />
        <div className="absolute left-[32.8%] top-1/2 h-[940px] w-[940px] -translate-y-1/2 rounded-full border border-[#2d4774]/45" />
        <div className="absolute left-[33.6%] top-1/2 h-[900px] w-[900px] -translate-y-1/2 rounded-full border border-[#2d4774]/45" />
        <div className="absolute left-[34.4%] top-1/2 h-[860px] w-[860px] -translate-y-1/2 rounded-full border border-[#2d4774]/40" />
        <div className="absolute left-[35.2%] top-1/2 h-[820px] w-[820px] -translate-y-1/2 rounded-full border border-[#2d4774]/40" />
        <div className="absolute left-[36%] top-1/2 h-[780px] w-[780px] -translate-y-1/2 rounded-full border border-[#2d4774]/40" />
        <div className="absolute left-[36.8%] top-1/2 h-[740px] w-[740px] -translate-y-1/2 rounded-full border border-[#2d4774]/35" />
        <div className="absolute left-[37.6%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full border border-[#2d4774]/35" />
        <div className="absolute left-[38.4%] top-1/2 h-[660px] w-[660px] -translate-y-1/2 rounded-full border border-[#2d4774]/35" />
        <div className="absolute left-[39.2%] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full border border-[#2d4774]/30" />
        <div className="absolute left-[40%] top-1/2 h-[580px] w-[580px] -translate-y-1/2 rounded-full border border-[#2d4774]/30" />
        <div className="absolute left-[40.8%] top-1/2 h-[540px] w-[540px] -translate-y-1/2 rounded-full border border-[#2d4774]/30" />
        <div className="absolute left-[41.6%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#2d4774]/25" />
        <div className="absolute left-[42.4%] top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full border border-[#2d4774]/25" />
        <div className="absolute left-[43.2%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[#2d4774]/25" />
      </div>

      <div className="relative mx-auto flex min-h-[512px] max-w-[1320px] items-center px-6 py-16 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_630px]">
          {/* Left content */}
          <div className="max-w-[610px] lg:pl-[52px]">
            <div className="mb-8 inline-flex rounded-[7px] bg-[#203157] px-4 py-2">
              <span className="text-[18px] font-semibold leading-none text-[#3ea2ee]">
                Cyber Security Services
              </span>
            </div>

            <h1 className="mb-7 text-[42px] font-semibold leading-[1.12] tracking-[-1.7px] text-white md:text-[48px]">
              Cyber Security Services
            </h1>

            <p className="max-w-[610px] text-[21px] font-normal leading-[1.42] tracking-[-0.4px] text-[#f3f3f3]">
              Proactively Defend Against Evolving Threats with Expert
              Assessments, Penetration Testing, and Mitigation Strategies Using
              Digital Forensics, Threat Intelligence, and OWASP Frameworks
            </p>

            <button className="mt-7 rounded-full bg-[#ffae2b] px-[21px] py-[13px] text-[16px] font-bold leading-none text-black transition hover:bg-[#ffc15b]">
              Schedule a Call
            </button>
          </div>

          {/* Right image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-[354px] w-full max-w-[630px] overflow-hidden rounded-[7px] bg-black">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1400&auto=format&fit=crop"
                alt="Cyber security operations center"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 630px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#00142d]/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}