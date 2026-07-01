import Link from "next/link";

const circles = Array.from({ length: 34 }, (_, index) => 260 + index * 52);

export default function Insurance360HeroVideoSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[96px] text-white md:px-8 lg:min-h-[650px]">
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

      <div className="relative z-10 mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Content */}
        <div className="max-w-[600px]">
          <span className="inline-flex rounded-[8px] bg-white/8 px-4 py-2 text-[15px] font-bold leading-none tracking-[-0.02em] text-[#4fa0d1]">
            Insurance 360
          </span>

          <h1 className="mt-8 text-[42px] font-black leading-[1.12] tracking-[-0.065em] text-white md:text-[56px] lg:text-[64px]">
            Transform Your
            <br />
            Insurance Operations
            <br />
            with Insurance 360
          </h1>

          <p className="mt-8 max-w-[560px] text-[17px] font-semibold leading-[1.5] tracking-[-0.03em] text-white/85 md:text-[20px]">
            A unified digital platform that streamlines policy administration,
            claims processing, and customer engagement — all in one secure,
            scalable solution.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-[#ffab2e] px-8 py-4 text-[16px] font-black tracking-[-0.025em] text-black transition duration-300 hover:bg-[#ffc15a]"
          >
            Book a Demo
          </Link>
        </div>

        {/* Right Real YouTube Video */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative z-10 w-full max-w-[640px] overflow-hidden rounded-[10px] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Insurance 360 Video"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1f69a6]/15 blur-[90px]" />
        </div>
      </div>
    </section>
  );
}