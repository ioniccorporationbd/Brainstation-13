import { getTranslator } from "@/i18n/server";
import {
  CreditCard,
  Layers,
  Plug,
  ShoppingBag,
  Target,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Composable storefronts",
    description: "Next.js and headless storefronts optimised for speed and SEO.",
  },
  {
    icon: Layers,
    title: "Headless CMS & PIM",
    description: "Content and product data models your team can actually manage.",
  },
  {
    icon: CreditCard,
    title: "Payments & checkout",
    description: "Secure gateways, wallets, subscriptions and checkout optimisation.",
  },
  {
    icon: Target,
    title: "Search & merchandising",
    description: "Relevance-tuned search, facets and personalised recommendations.",
  },
  {
    icon: Zap,
    title: "Performance engineering",
    description: "Core Web Vitals, edge caching and conversion-focused tuning.",
  },
  {
    icon: Plug,
    title: "Integrations",
    description: "ERP, CRM, OMS and marketing tools connected end to end.",
  },
];

export default async function EcommerceFeaturesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Capabilities")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("What We Deliver")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("Six disciplines that cover a complete commerce build.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={20} strokeWidth={2.1} />
                </span>

                <h3 className="mt-5 text-[17.5px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                  {t(feature.title)}
                </h3>

                <p className="mt-2.5 text-[14.5px] font-medium leading-[1.6] text-[#565656]">
                  {t(feature.description)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
