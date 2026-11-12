import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop";

const keywords = ["AEM Sites", "AEM Assets", "AEM Forms", "Migration", "Managed Services"];

export default function AemHeroSection() {
  return (
    <section className="w-full bg-white px-6 pb-[72px] pt-[56px] text-[#0a0a0a] md:pb-[88px] md:pt-[72px]">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">
            Adobe Experience Manager
          </p>

          <h1 className="max-w-[640px] text-[38px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a] md:text-[54px]">
            Adobe Experience Manager (AEM), Delivered Right
          </h1>

          <p className="mt-6 max-w-[560px] text-[16.5px] font-medium leading-[1.65] tracking-[-0.01em] text-[#565656] md:text-[18px]">
            Implementation, integration, managed service, migration and upgrade
            — the full AEM lifecycle handled by engineers who work in it daily.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c91f28] px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >
              Book a Consultation
              <ArrowRight size={16} strokeWidth={2.2} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#c91f28] px-8 py-4 text-[15px] font-bold text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
            >
              Talk to an AEM Team
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-2">
            {keywords.map((word) => (
              <span
                key={word}
                className="rounded-full border border-[#ececec] bg-white px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#565656]"
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-2xl border border-[#ececec] bg-[#f7f7f7]">
            <Image
              src={HERO_IMG}
              alt="Digital experience dashboard on a laptop"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
