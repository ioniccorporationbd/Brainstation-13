import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop";

const keywords = ["Headless", "Checkout", "Payments", "Integrations", "Performance"];

export default async function EcommerceHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[48px] pt-[56px] text-[#0a0a0a] md:pb-[88px] md:pt-[72px]">
      <div className="grid brand-container items-center max-sm:gap-8 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:flex max-sm:w-fit max-sm:mx-auto">{t("E-commerce Development")}</p>

          <h1 className="max-sm:mx-auto max-sm:text-center max-w-[620px] font-bold text-[#0a0a0a] text-[clamp(28px,8.387vw,36px)] leading-[1.08] tracking-[-0.035em] sm:text-[40px] md:text-[50px] lg:text-[54px]">{t("Headless Commerce")}</h1>

          <p className="max-sm:mx-auto max-sm:text-center mt-6 max-w-[560px] text-[15px] font-medium leading-[1.65] tracking-[-0.01em] text-[#52525B] md:text-[18px]">{t("We build storefronts and commerce back ends that load fast, integrate cleanly and scale without re-platforming pain.")}</p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c91f28] px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >{t("Book a Commerce Audit")}<ArrowRight size={16} strokeWidth={2.2} />
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border border-[#c91f28] px-8 py-4 text-[15px] font-bold text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
            >{t("Browse Case Studies")}</Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2">
            {keywords.map((word, index) => (
              <span key={word} className="flex items-center gap-3">
                {index > 0 ? (
                  <span className="h-1 w-1 rounded-full bg-[#d4d4d4]" />
                ) : null}
                <span className="text-[13px] font-bold uppercase tracking-normal text-[#52525B]">
                  {t(word)}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-2xl border border-[#ececec] bg-[#f7f7f7]">
            <Image
              src={HERO_IMG}
              alt={t("Customer completing an in-store card payment")}
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
