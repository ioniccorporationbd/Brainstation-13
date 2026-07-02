import Link from "next/link";
import { BadgeCheck, Send } from "lucide-react";

const circles = Array.from({ length: 34 }, (_, index) => 260 + index * 52);

export default function LmsProctoringHeroVideoSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[92px] text-white md:px-8 lg:min-h-[760px]">
      {/* Circle Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {circles.map((size, index) => (
          <div
            key={index}
            className="absolute left-[68%] top-1/2 rounded-full border border-[#1f69a6]/35"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        {/* Left Content */}
        <div className="max-w-[680px]">
          <span className="inline-flex rounded-[8px] bg-white/8 px-4 py-2 text-[15px] font-bold leading-none tracking-[-0.02em] text-[#4fa0d1]">
            LMS
          </span>

          <h1 className="mt-8 text-[44px] font-medium leading-[1.08] tracking-[-0.08em] text-white md:text-[64px] lg:text-[76px]">
            AI-Enabled Moodle
            <br />
            Proctoring for High-
            <br />
            Stakes Exams
          </h1>

          <p className="mt-8 max-w-[690px] text-[18px] font-semibold leading-[1.48] tracking-[-0.04em] text-white/90 md:text-[22px]">
            Secure, scalable exam proctoring trusted by universities and
            enterprises—without replacing your existing Moodle LMS.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[16px] font-bold tracking-[-0.03em] text-white transition duration-300 hover:text-[#ffab2e]"
            >
              <BadgeCheck size={18} strokeWidth={1.8} />
              Talk to Experts
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[16px] font-bold tracking-[-0.03em] text-white transition duration-300 hover:text-[#ffab2e]"
            >
              <Send size={18} strokeWidth={1.8} />
              Buy License
            </Link>
          </div>

          {/* Moodle Partner Badge */}
          <div className="mt-9 inline-flex overflow-hidden rounded-[3px] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
            <div className="bg-[#f58220] px-3 py-2 text-[22px] font-black tracking-[-0.04em] text-white">
              moodle
            </div>

            <div className="px-3 py-2">
              <div className="text-[22px] font-black leading-none tracking-[-0.04em] text-[#555]">
                Partner
              </div>
              <div className="mt-1 text-[9px] font-black uppercase tracking-[0.12em] text-[#555]">
                Certified Services Provider
              </div>
            </div>
          </div>
        </div>

        {/* Right Real YouTube Video */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative z-10 w-full max-w-[690px] overflow-hidden rounded-[10px] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="AI Enabled Moodle Proctoring Video"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1f69a6]/15 blur-[90px]" />
        </div>
      </div>
    </section>
  );
}