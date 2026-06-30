import Link from "next/link";

export default function DigitalTransformationHeroSection() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#111E40] px-6 text-white">
      {/* Circle Background */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 48 }).map((_, index) => (
          <span
            key={index}
            className="absolute rounded-full border border-[#236aa0]/20"
            style={{
              width: `${1360 - index * 30}px`,
              height: `${1360 - index * 30}px`,
              left: "68%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid min-h-[680px] max-w-[1320px] grid-cols-1 items-center gap-14 py-20 lg:grid-cols-[0.95fr_1fr]">
        {/* Left Content */}
        <div>
          <span className="inline-flex rounded-[7px] bg-[#1d315c] px-5 py-3 text-[18px] font-bold leading-none tracking-[-0.03em] text-[#3ba3e4]">
            Digital Transformation Services
          </span>

          <h1 className="mt-10 max-w-[760px] text-[44px] font-normal leading-[1.2] tracking-[-0.075em] text-white md:text-[58px]">
            Modernize Legacy Systems <br />
            with AI Driven- Automation
          </h1>

          <p className="mt-9 max-w-[760px] text-[20px] font-medium leading-[1.5] tracking-[-0.035em] text-white/90 md:text-[23px]">
            Embrace the future by transforming outdated applications and manual
            processes into intelligent, automated workflows. Brain Station
            23&apos;s Digital Transformation Services leverage cutting edge-AI,
            RPA, and cloud technologies to deliver measurable efficiency gains
            and unlock new revenue streams.
          </p>

          <Link
            href="/schedule-a-call"
            className="mt-10 inline-flex rounded-full bg-[#ffab2e] px-8 py-4 text-[17px] font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffc15a] hover:shadow-[0_14px_34px_rgba(255,171,46,0.32)]"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Right Image Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[350px] w-full max-w-[680px] overflow-hidden rounded-[8px] bg-[#172950] shadow-[0_24px_70px_rgba(0,0,0,0.24)] md:h-[390px]">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop"
              alt="Digital transformation business discussion"
              className="h-full w-full object-cover opacity-45 grayscale"
            />

            <div className="absolute inset-0 bg-[#111E40]/45" />

            <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
              <div>
                <p className="text-[20px] font-bold leading-[1.15] tracking-[-0.045em] text-white md:text-[26px]">
                  We Work With <br />
                  Latest Technologies To Accelerate Your
                </p>

                <h2 className="mt-3 text-[28px] font-bold leading-none tracking-[-0.055em] text-white md:text-[38px]">
                  Digital Transformation
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-white/45">
        Powered by NeuralFlow
      </span>
    </section>
  );
}