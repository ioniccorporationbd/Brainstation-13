import Link from "next/link";

const HERO_BG =
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=90";

export default function DataMigrationHeroSection() {
  return (
    <section className="relative min-h-[640px] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_BG})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[640px] w-full max-w-[1400px] items-center px-5 py-[90px] sm:px-8 xl:px-0">
        <div className="w-full max-w-[730px] bg-white/88 px-[34px] py-[48px] backdrop-blur-[2px] sm:px-[54px] sm:py-[62px] lg:ml-[80px]">
          <h1 className="max-w-[560px] text-[46px] font-bold leading-[1.05] tracking-[-0.045em] text-black sm:text-[60px] lg:text-[66px]">
            Data Migration
            <br />
            Services
          </h1>

          <p className="mt-[34px] max-w-[650px] text-[16px] font-normal leading-[1.9] text-black sm:text-[18px]">
            Top Data Migration Services in Bangladesh, modernizing legacy
            systems to SQL Server with secure, clean, and fast data transfer.
          </p>

          <div className="mt-[38px] flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-[150px]">
            <Link
              href="/contact"
              className="inline-flex h-[52px] w-fit items-center justify-center rounded-full bg-[#ffad2f] px-[30px] text-[16px] font-semibold text-black transition hover:bg-[#f59b15]"
            >
              Instant Quote
            </Link>

            <Link
              href="/book-a-meeting"
              className="inline-flex h-[52px] w-fit items-center justify-center rounded-full bg-[#ffad2f] px-[30px] text-[16px] font-semibold text-black transition hover:bg-[#f59b15]"
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}