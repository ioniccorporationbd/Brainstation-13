import Link from "next/link";
import { Cpu, RefreshCcw, WifiOff } from "lucide-react";

const heroFeatures = [
  {
    label: "AI INTEGRATED",
    icon: Cpu,
  },
  {
    label: "ERP INTEGRATED",
    icon: RefreshCcw,
  },
  {
    label: "OFFLINE READY",
    icon: WifiOff,
  },
];

export default function EnterpriseMsfaHeroSection() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#111E40] px-6 text-white">
      {/* Circle Background */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 52 }).map((_, index) => (
          <span
            key={index}
            className="absolute rounded-full border border-[#236aa0]/20"
            style={{
              width: `${1480 - index * 30}px`,
              height: `${1480 - index * 30}px`,
              left: "68%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid min-h-[680px] max-w-[1320px] grid-cols-1 items-center gap-14 py-20 lg:grid-cols-[0.82fr_1.18fr]">
        {/* Left Content */}
        <div>
          <span className="inline-flex rounded-[7px] bg-[#1d315c] px-5 py-3 text-[18px] font-bold leading-none tracking-[-0.03em] text-[#3ba3e4]">
            Enterprise MSFA Platform
          </span>

          <h1 className="mt-8 max-w-[650px] text-[48px] font-bold leading-[1.18] tracking-[-0.065em] text-white md:text-[64px]">
            Govern field sales at <br />
            true scale
          </h1>

          <p className="mt-8 max-w-[650px] text-[20px] font-semibold leading-[1.5] tracking-[-0.035em] text-white md:text-[22px]">
            Digitize, govern, and optimize last-mile execution with an
            offline-first, ERP-integrated platform trusted by leading
            enterprises.
          </p>

          {/* Feature Icons */}
          <div className="mt-8 flex flex-wrap gap-8">
            {heroFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="text-center">
                  <div className="mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white/18 text-white ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-[#4fa0d1] hover:shadow-[0_16px_40px_rgba(79,160,209,0.28)]">
                    <Icon size={23} strokeWidth={1.9} />
                  </div>

                  <p className="mt-4 text-[13px] font-bold uppercase leading-none tracking-[-0.02em] text-white">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          <Link
            href="/schedule-a-call"
            className="mt-10 inline-flex rounded-full bg-[#ffab2e] px-8 py-4 text-[17px] font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffc15a] hover:shadow-[0_14px_34px_rgba(255,171,46,0.32)]"
          >
            Explore Platform
          </Link>
        </div>

        {/* Right Online Image */}
        <div className="relative flex min-h-[390px] items-center justify-center lg:justify-end">
          <div className="group relative w-full max-w-[720px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4fa0d1]/16 blur-3xl" />

            <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-3 shadow-[0_34px_90px_rgba(0,0,0,0.38)] backdrop-blur-sm transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_44px_110px_rgba(79,160,209,0.22)]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1500&auto=format&fit=crop"
                alt="Enterprise analytics dashboard platform"
                className="h-[350px] w-full rounded-[18px] object-cover opacity-95 transition duration-700 group-hover:scale-[1.04] md:h-[430px]"
              />

              <div className="absolute inset-3 rounded-[18px] bg-gradient-to-tr from-[#111E40]/60 via-transparent to-[#4fa0d1]/20" />

              {/* Floating Mobile Preview */}
              <div className="absolute bottom-8 left-8 hidden h-[190px] w-[92px] rounded-[24px] border-[6px] border-[#1b1b1b] bg-white shadow-[0_22px_55px_rgba(0,0,0,0.35)] md:block">
                <div className="h-full overflow-hidden rounded-[16px] bg-[#f7fbff]">
                  <div className="h-[46px] bg-[#eef5fb] p-3">
                    <div className="h-2 w-12 rounded bg-[#c9ddeb]" />
                    <div className="mt-2 h-2 w-8 rounded bg-[#dce8f2]" />
                  </div>

                  <div className="p-2">
                    <div className="rounded-[8px] bg-[#e8f1f6] p-2">
                      <p className="text-[8px] font-bold text-[#42637a]">
                        Order
                      </p>
                      <p className="mt-1 text-[10px] font-bold text-[#11182f]">
                        BDT 68K
                      </p>
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-1.5">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <div
                          key={index}
                          className="h-7 rounded-[6px] bg-[#eef5fb]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Status Card */}
              <div className="absolute right-7 top-7 hidden rounded-[18px] bg-white/90 px-5 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur md:block">
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#42637a]">
                  Live Coverage
                </p>
                <p className="mt-2 text-[26px] font-bold leading-none text-[#11182f]">
                  98%
                </p>
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