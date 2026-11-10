import Image from "next/image";
import Link from "next/link";

export default function CaseStudyHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[72px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[880px] text-center">
          <p className="mb-5 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Case Study · Retail &amp; E-Commerce
          </p>

          <h1 className="mx-auto max-w-[900px] text-[36px] font-bold leading-[1.12] tracking-[-0.025em] text-[#0a0a0a] md:text-[54px]">
            Rebuilding Retail for a Digital-First Customer
          </h1>

          <p className="mx-auto mt-6 max-w-[680px] text-[17px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[19px]">
            How Magnetic Solution Limited rebuilt Shwapno&rsquo;s e-commerce
            platform into a scalable, hyperlocal digital experience.
          </p>

          <Link
            href="/schedule-a-call"
            className="mt-9 inline-flex rounded-full bg-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Hero Image */}
        <div className="group relative mt-14 h-[280px] w-full overflow-hidden rounded-2xl border border-[#ececec] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop"
            alt="Shwapno retail e-commerce transformation"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1180px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
