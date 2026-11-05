import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85";

export default function DataEngineeringHeroSection() {
  return (
    <section className="w-full bg-[#052642] text-white">
      <div className="mx-auto grid min-h-[690px] w-full max-w-[1200px] grid-cols-1 items-center gap-14 px-5 py-[90px] sm:px-8 xl:grid-cols-[minmax(0,1fr)_520px] xl:gap-[80px] xl:px-0">
        {/* Left Content */}
        <div>
          <span className="inline-flex rounded-[8px] bg-[#113a5c] px-[16px] py-[9px] text-[18px] font-semibold text-[#369bd5]">
            Data Engineering
          </span>

          <h1 className="mt-[30px] max-w-[650px] text-[44px] font-semibold leading-[1.18] tracking-[-0.055em] text-white sm:text-[56px] xl:text-[62px]">
            AI-Ready Data Platforms for Complex Enterprise Environments
          </h1>

          <p className="mt-[28px] max-w-[640px] text-[20px] font-medium leading-[1.45] text-white sm:text-[22px]">
            We design and deliver cloud-native, governance-first data platforms
            built on deep data engineering and AI readiness, implemented by
            certified teams for faster, lower-risk enterprise rollout.
          </p>

          <Link
            href="/schedule-a-call"
            className="mt-[58px] inline-flex h-[58px] items-center justify-center rounded-full bg-[#ffad2f] px-[32px] text-[17px] font-semibold text-black transition hover:bg-[#f59b15]"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Right Visual */}
        <div className="w-full">
          <div className="relative aspect-video w-full overflow-hidden rounded-[2px] bg-[#0b2f4d] shadow-[0_24px_70px_rgba(0,0,0,0.25)]">
            <img
              src={HERO_IMAGE}
              alt="Data engineering and analytics dashboards"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}