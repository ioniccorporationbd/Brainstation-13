import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop";

const keywords = [
  "Shopify Plus",
  "Liquid",
  "Hydrogen",
  "Checkout Extensibility",
  "App Store",
];

export default async function ShopifyHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white px-6 pb-[72px] pt-[56px] text-[#0a0a0a] md:pb-[88px] md:pt-[72px]">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Shopify Commerce")}</p>

          <h1 className="max-w-[620px] text-[38px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a] md:text-[54px]">{t("Shopify Commerce, Engineered for Scale")}</h1>

          <p className="mt-6 max-w-[560px] text-[16.5px] font-medium leading-[1.65] tracking-[-0.01em] text-[#565656] md:text-[18px]">{t("Storefronts, custom apps and integrations for merchants and B2B brands that have outgrown out-of-the-box Shopify.")}</p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href="https://apps.shopify.com/partners/brainstation-23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c91f28] px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >{t("Explore Our Shopify Apps")}<ArrowRight size={16} strokeWidth={2.2} />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#c91f28] px-8 py-4 text-[15px] font-bold text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
            >{t("Talk to Our Team")}</Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-2">
            {keywords.map((word) => (
              <span
                key={word}
                className="rounded-full border border-[#ececec] bg-white px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#565656]"
              >
                {t(word)}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-2xl border border-[#ececec] bg-[#f7f7f7]">
            <Image
              src={HERO_IMG}
              alt={t("Online store shopping experience")}
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
