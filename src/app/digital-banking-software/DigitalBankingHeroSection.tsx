import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Digital onboarding and eKYC",
  "Real-time payments and transfers",
  "Merchant and QR payments",
  "Built to scale for millions of users",
];

const circles = Array.from({ length: 30 }, (_, index) => {
  const size = 220 + index * 58;
  return size;
});

export default function DigitalBankingHeroSection() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#111E40] px-6 py-[90px] text-white">
      {/* 30 Circle Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {circles.map((size, index) => (
          <div
            key={index}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#1f69a6]/35"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Content */}
        <div>
          <h1 className="max-w-[620px] text-[38px] font-black leading-[1.05] tracking-[-0.065em] text-white md:text-[54px] lg:text-[62px]">
            Launch Digital Banking
            <br />
            in Months — Not Years
          </h1>

          <p className="mt-8 max-w-[610px] text-[18px] font-medium leading-[1.45] tracking-[-0.035em] text-white md:text-[21px]">
            iBank23 is a modern digital banking platform designed for banks and
            fintechs to deliver seamless financial services through mobile and
            web channels.
          </p>

          <ul className="mt-8 space-y-3">
            {features.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[16px] font-bold leading-tight tracking-[-0.03em] text-white md:text-[18px]"
              >
                <CheckCircle2
                  size={18}
                  strokeWidth={2.2}
                  className="shrink-0 text-white"
                />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-[620px] text-[16px] font-medium leading-[1.5] tracking-[-0.03em] text-white md:text-[18px]">
            One platform. Complete control over your digital banking ecosystem.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#ffab2e] px-7 py-3.5 text-[15px] font-bold tracking-[-0.03em] text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffc15a] hover:shadow-[0_18px_45px_rgba(255,171,46,0.35)]"
            >
              Schedule a Call
            </Link>

            <Link
              href="/download-onepager"
              className="inline-flex rounded-full bg-[#ffab2e] px-7 py-3.5 text-[15px] font-bold tracking-[-0.03em] text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffc15a] hover:shadow-[0_18px_45px_rgba(255,171,46,0.35)]"
            >
              Download Onepager
            </Link>
          </div>
        </div>

        {/* Right Side Online Image */}
        <div className="relative flex min-h-[520px] items-center justify-center lg:justify-end">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop"
            alt="Digital banking mobile application screens"
            className="relative z-10 w-full max-w-[420px] rounded-[28px] object-cover shadow-[0_35px_90px_rgba(0,0,0,0.45)] transition duration-700 hover:scale-[1.03] md:max-w-[500px] lg:max-w-[540px]"
          />

          <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1f69a6]/10 blur-[90px]" />
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-white/35">
        Powered by NeuralFlow
      </span>
    </section>
  );
}