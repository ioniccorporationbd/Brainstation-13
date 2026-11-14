import { Check } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const clientNames = ["VENTRO", "ChoiceLEGACY", "SUZUKI", "IMAGINECREATE AI"];

const solutions = [
  {
    title: "Custom Shopify App Development",
    description:
      "We design and build world-class public and private Shopify apps that solve real merchant problems—engineered for performance, security, and long-term maintainability.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    points: [
      "Shopify public apps (App Store-ready & partner-compliant)",
      "Custom & private apps for internal workflows.",
      "Embedded apps using Shopify Admin, Storefront & Functions APIs",
      "Subscription, Flow automation & merchant utility apps",
      "Agentic commerce",
      "App troubleshooting, optimization & ongoing maintenance",
    ],
  },
  {
    title: "Shopify Storefront Design & Development",
    description:
      "Conversion-focused storefronts engineered for speed, scale, and seamless commerce—across D2C, B2B, traditional retail, and high-SKU catalogs.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    points: [
      "Custom Shopify theme development & UI/UX design",
      "Headless storefronts for maximum performance & flexibility",
      "Mobile-first UX for high conversion.",
      "Multi-channel commerce (online, social, POS & in-store retail)",
      "SEO & AEO-ready architecture with clean, maintainable frontend code",
    ],
  },
  {
    title: "Shopify Integrations & Automation",
    description:
      "We connect Shopify seamlessly with your business’s tool stack, eliminating manual effort and ensuring data accuracy at scale.",
    image:
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1200&auto=format&fit=crop",
    points: [
      "ERP, inventory & warehouse management systems",
      "Payment gateways, logistics & fulfillment providers",
      "CRM, marketing automation & analytics platforms",
      "Custom API development & middleware architecture",
      "Flow automation & event-driven processes",
    ],
  },
  {
    title: "Performance & Conversion Optimization",
    description:
      "Optimization that directly impacts revenue, retention, and customer lifetime value.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    points: [
      "Checkout flow & post-purchase experience optimization",
      "Page speed & Core Web Vitals improvements",
      "Search, filtering & navigation enhancements for faster discovery",
      "Conversion-focused UX refinements backed by behavior analysis data",
      "App, theme & third-party performance audits",
      "AI-powered product discovery & design personalized shopping experiences",
      "Agentic checkout & reorder automation",
      "Answer Engine Optimization (AEO) for AI search visibility",
    ],
  },
];

export default async function ShopifySolutionsSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Solutions")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Shopify Solutions We Deliver")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("From fast-growing startups to established enterprise brands, we serve merchants, product companies, and B2B clients that demand more than out-of-the-box Shopify.")}</p>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
          <span className="mr-1 text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8a8a]">{t("Trusted by")}</span>

          {clientNames.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[#ececec] bg-white px-4 py-2 text-[12.5px] font-bold tracking-[0.04em] text-[#3f3f3f]"
            >
              {t(name)}
            </span>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#ececec] bg-white transition-colors duration-300 hover:border-[#c91f28]"
            >
              <div className="h-[220px] w-full overflow-hidden bg-[#f7f7f7]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="text-[20px] font-semibold leading-[1.28] tracking-[-0.02em] text-[#0a0a0a]">
                  {t(solution.title)}
                </h3>

                <p className="mt-3 text-[14.5px] font-medium leading-[1.6] text-[#565656]">
                  {t(solution.description)}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {solution.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[13.5px] font-medium leading-[1.5] text-[#565656]"
                    >
                      <span className="mt-0.5 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28]">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span>{t(point)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
