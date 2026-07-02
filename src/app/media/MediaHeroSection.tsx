import Link from "next/link";
import { Camera, Newspaper, PlayCircle, Radio } from "lucide-react";

export default function MediaHeroSection() {
  return (
    <section
      className="relative min-h-[560px] overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-[110px] text-white md:px-8 lg:min-h-[640px]"
      style={{
        backgroundImage: "url('/images/media/media-hero.jpg')",
      }}
    >
      {/* Dark + cyan overlay */}
      <div className="absolute inset-0 bg-[#071225]/68" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/95 via-[#0b5870]/72 to-[#1284a0]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/70 via-transparent to-[#071225]/25" />

      {/* Circle pattern */}
      <div className="pointer-events-none absolute right-[-180px] top-[-170px] h-[720px] w-[720px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute right-[-100px] top-[-90px] h-[560px] w-[560px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute right-[-20px] top-[-10px] h-[400px] w-[400px] rounded-full border border-white/10" />

      {/* Soft glow */}
      <div className="pointer-events-none absolute left-[12%] top-[20%] h-[260px] w-[260px] rounded-full bg-[#08a7df]/25 blur-[110px]" />
      <div className="pointer-events-none absolute right-[10%] bottom-[18%] h-[320px] w-[320px] rounded-full bg-[#54c8ee]/20 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Content */}
        <div className="max-w-[680px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[15px] font-bold tracking-[-0.02em] text-[#7bdcff] backdrop-blur-md">
            <Radio size={17} strokeWidth={2} />
            Media & Press
          </span>

          <h1 className="mt-7 text-[48px] font-black leading-[1.02] tracking-[-0.08em] text-white md:text-[72px] lg:text-[86px]">
            Stories That
            <br />
            Shape Our Impact
          </h1>

          <p className="mt-8 max-w-[620px] text-[18px] font-semibold leading-[1.55] tracking-[-0.035em] text-white/88 md:text-[22px]">
            Explore our media coverage, company moments, press updates, and
            stories from Brain Station 23’s journey in digital transformation.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/media"
              className="inline-flex rounded-full bg-[#ffab2e] px-8 py-4 text-[15px] font-black tracking-[-0.02em] text-black transition duration-300 hover:bg-[#ffc15a] hover:shadow-[0_18px_45px_rgba(255,171,46,0.25)]"
            >
              Explore Media
            </Link>

            <Link
              href="/contact"
              className="inline-flex rounded-full border border-white/20 bg-white/10 px-8 py-4 text-[15px] font-black tracking-[-0.02em] text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#071225]"
            >
              Press Contact
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Press Releases", "Events", "Interviews", "Company News"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[13px] font-bold tracking-[-0.02em] text-white/85 backdrop-blur-md"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Right Floating Cards */}
        <div className="relative hidden min-h-[390px] lg:block">
          <div className="absolute right-4 top-4 w-[380px] rounded-[24px] border border-white/14 bg-white/12 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-[#08a7df] text-white">
              <Camera size={30} strokeWidth={1.8} />
            </div>

            <h3 className="mt-7 text-[30px] font-black leading-[1.1] tracking-[-0.055em] text-white">
              Media Coverage
            </h3>

            <p className="mt-4 text-[16px] font-medium leading-[1.5] tracking-[-0.025em] text-white/78">
              Discover highlights from events, conferences, award programs, and
              technology showcases.
            </p>
          </div>

          <div className="absolute bottom-2 left-6 w-[310px] rounded-[22px] border border-white/14 bg-white/10 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[16px] bg-[#ffab2e] text-black">
                <Newspaper size={27} strokeWidth={1.8} />
              </div>

              <div>
                <h4 className="text-[20px] font-black leading-tight tracking-[-0.04em] text-white">
                  Latest Updates
                </h4>
                <p className="mt-1 text-[14px] font-medium text-white/70">
                  News, press, and announcements
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[96px] right-[70px] flex h-[86px] w-[86px] items-center justify-center rounded-full border border-white/18 bg-white/12 text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <PlayCircle size={44} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}