import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight, ShoppingBag, Store, Truck } from "lucide-react";

const facts = [
  { label: "Storefronts", icon: ShoppingBag },
  { label: "Omnichannel", icon: Store },
  { label: "Fulfilment", icon: Truck },
];

export default async function EcommerceHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[64px] pt-[56px] text-black md:pb-[104px] md:pt-[80px]">
      <div className="mx-auto grid brand-container grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Industry · E-commerce")}</span>

          <h1 className="mt-6 max-w-[620px] text-[clamp(30px,8.9vw,38px)] font-semibold leading-[1.08] tracking-[-0.03em] text-black md:text-[52px] lg:text-[56px] text-balance">{t("Commerce experiences built to convert and scale")}</h1>

          <p className="mt-6 max-w-[560px] text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("From storefronts and checkout to fulfilment and analytics — we build e-commerce that performs under real traffic and real growth.")}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact"
              className="inline-flex flex-1 items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920] sm:flex-none"
            >{t("Start a project")}<ArrowRight size={18} />
            </Link>
            <Link
              href="#services"
              className="inline-flex flex-1 items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28] sm:flex-none"
            >{t("Explore services")}</Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {facts.map((fact) => (
              <li key={fact.label} className="flex items-center gap-2 text-[13.5px] font-medium text-[#52525B]">
                <fact.icon size={17} className="text-[#c91f28]" />
                {t(fact.label)}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#ececec]">
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop"
            alt={t("Person shopping and paying on a laptop and phone")}
            className="h-[280px] w-full object-cover md:h-[420px] lg:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
