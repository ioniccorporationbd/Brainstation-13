import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const features = [
  "White-label wallet platform",
  "Fast digital onboarding",
  "Secure payment flows",
  "Scalable wallet engine",
];

const circles = Array.from({ length: 36 }, (_, index) => 240 + index * 48);

const badges = ["ISO 9001", "ISO 27001", "GDPR"];

export default function Wallet23HeroBannerSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-5 py-[74px] text-white md:px-8 lg:min-h-[760px] lg:py-[92px]">
      {/* Circle Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {circles.map((size, index) => (
          <div
            key={index}
            className="absolute left-[66%] top-1/2 rounded-full border border-[#1f69a6]/35"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Left Content */}
        <div className="max-w-[600px]">
          <span className="inline-flex rounded-[8px] bg-white/8 px-4 py-2 text-[14px] font-bold leading-none tracking-[-0.025em] text-[#4fa0d1] md:text-[15px]">
            Wallet23
          </span>

          <h1 className="mt-7 text-[38px] font-black leading-[1.08] tracking-[-0.07em] text-white md:text-[52px] lg:text-[58px]">
            Launch a Secure, White Label e-Wallet to Diversify Revenue Streams
          </h1>

          <p className="mt-7 max-w-[560px] text-[17px] font-semibold leading-[1.55] tracking-[-0.035em] text-white/78 md:text-[19px]">
            Trusted by banks, NBFCs, telcos, fintechs, e-commerce and retail
            chains to ship faster, cut risk, and scale without re-platforming.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[14px] font-semibold tracking-[-0.025em] text-white/85 md:text-[15px]"
              >
                <CheckCircle2
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 text-[#ffab2e]"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#ffab2e] px-7 py-3.5 text-[15px] font-bold tracking-[-0.025em] text-black transition duration-300 hover:bg-[#ffb84a]"
            >
              Schedule a Call
            </Link>

            <Link
              href="/download-onepager"
              className="inline-flex rounded-full bg-[#ffab2e] px-7 py-3.5 text-[15px] font-bold tracking-[-0.025em] text-black transition duration-300 hover:bg-[#ffb84a]"
            >
              Download Onepager
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-white bg-white text-center text-[9px] font-black leading-[1.1] tracking-[-0.03em] text-[#111E40] shadow-[0_10px_24px_rgba(0,0,0,0.16)]"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Right Static Image */}
        <div className="relative flex min-h-[430px] items-center justify-center lg:min-h-[530px] lg:justify-end">
          <div className="relative z-10 w-full max-w-[500px] overflow-hidden rounded-[34px] bg-white/10 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.34)] transition duration-300 hover:bg-white/[0.12]">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop"
              alt="Mobile wallet app screen"
              className="h-[360px] w-full rounded-[26px] object-cover object-center md:h-[440px] lg:h-[500px]"
            />

            <div className="absolute inset-3 rounded-[26px] bg-gradient-to-t from-[#111E40]/42 via-transparent to-transparent" />
          </div>

          <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1f69a6]/15 blur-[90px]" />
        </div>
      </div>
    </section>
  );
}