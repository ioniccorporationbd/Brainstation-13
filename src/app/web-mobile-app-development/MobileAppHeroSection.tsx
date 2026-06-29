import Link from "next/link";

export default function MobileAppHeroSection() {
  return (
    <section
      className="relative min-h-[620px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-white/15" />

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1340px] items-center px-6">
        <div className="ml-0 max-w-[720px] bg-white/80 px-[52px] py-[70px] backdrop-blur-[1px] lg:ml-[70px]">
          <h1 className="mb-7 text-[54px] font-bold leading-[1.1] tracking-[-0.04em] text-black md:text-[62px]">
            Mobile App <br />
            Development
          </h1>

          <p className="max-w-[590px] text-[16px] leading-[2] text-black">
            Developing innovative and native mobile Apps for Android, iOS,
            BlackBerry and Windows platforms.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-[150px]">
            <Link
              href="/instant-quote"
              className="rounded-full bg-[#ffab2e] px-7 py-3.5 text-[16px] font-bold text-black transition hover:bg-[#ffc15a]"
            >
              Instant Quote
            </Link>

            <Link
              href="/book-a-meeting"
              className="rounded-full bg-[#ffab2e] px-7 py-3.5 text-[16px] font-bold text-black transition hover:bg-[#ffc15a]"
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}