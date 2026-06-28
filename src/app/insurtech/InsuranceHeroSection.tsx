import Link from "next/link";

const LAPTOP_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=90";

const PHONE_IMAGE =
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=90";

export default function InsuranceHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#111f43]">
      {/* One center circle set */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {Array.from({ length: 22 }).map((_, index) => {
          const size = 360 + index * 48;

          return (
            <div
              key={index}
              className="absolute rounded-full border border-[#1d4e7c]/45"
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 mx-auto grid min-h-[650px] w-full max-w-[1200px] grid-cols-1 items-center gap-12 px-5 py-[82px] sm:px-8 lg:grid-cols-[570px_1fr] lg:gap-[70px] lg:py-[90px] xl:px-0">
        {/* Left Content */}
        <div>
          <h1 className="max-w-[610px] text-[42px] font-bold leading-[1.1] tracking-[-0.055em] text-white sm:text-[56px] lg:text-[62px]">
            AI-Driven Insurance Technology Solutions — Modular, Proven,
            Enterprise Ready
          </h1>

          <p className="mt-[28px] max-w-[620px] text-[20px] font-normal leading-[1.45] text-white sm:text-[22px]">
            Purpose-built solutions for every layer of insurance operations.
            Adopt each module independently, integrate each module into your
            existing systems, and deliver measurable results from day one.
          </p>

          <Link
            href="/schedule-a-call"
            className="mt-[34px] inline-flex h-[48px] items-center justify-center rounded-full bg-[#ffad2f] px-[26px] text-[16px] font-semibold text-black transition hover:bg-[#f59b15]"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Right Laptop + Phone Images */}
        <div className="relative flex min-h-[360px] items-center justify-center lg:justify-end">
          {/* Laptop Image Card */}
          <div className="relative z-10 w-full max-w-[520px] overflow-hidden rounded-[10px] border border-white/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <div className="h-[26px] w-full bg-[#d9dde4]" />

            <div className="relative h-[285px] w-full overflow-hidden bg-black sm:h-[330px]">
              <img
                src={LAPTOP_IMAGE}
                alt="Insurance analytics dashboard on laptop"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#003b61]/15" />
            </div>

            <div className="h-[34px] w-full bg-[#c2c8d2]" />
          </div>

          {/* Phone Image */}
          <div className="absolute right-[-8px] top-[116px] z-20 hidden w-[112px] overflow-hidden rounded-[24px] border-[6px] border-[#111827] bg-black shadow-[0_18px_45px_rgba(0,0,0,0.4)] sm:block lg:right-[-28px]">
            <div className="h-[220px] w-full overflow-hidden">
              <img
                src={PHONE_IMAGE}
                alt="Insurance mobile app screen"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}