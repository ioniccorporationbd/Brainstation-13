import Link from "next/link";

export default function ManagedServiceHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[72px] text-[#0a0a0a] md:py-[96px] lg:py-[104px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
        {/* Left Content */}
        <div>
          <span className="inline-flex rounded-[7px] bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase leading-none tracking-[0.12em] text-[#c91f28]">
            Managed Service
          </span>

          <h1 className="mt-7 max-w-[640px] text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0a0a0a] md:text-[52px] lg:text-[56px]">
            Fully Managed Software Delivery.
          </h1>

          <p className="mt-6 max-w-[540px] text-[17px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[19px]">
            From planning to release and post-launch support, we own the full
            software lifecycle for you.
          </p>

          <Link
            href="/schedule-a-call"
            className="mt-9 inline-flex rounded-full bg-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="h-[340px] w-full max-w-[560px] overflow-hidden rounded-2xl border border-[#ececec] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
              alt="Managed software delivery team"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
