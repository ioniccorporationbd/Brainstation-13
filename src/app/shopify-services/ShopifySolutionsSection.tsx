export default function ShopifySolutionsSection() {
  const clientLogos = [
    {
      name: "Choice Legacy",
      image:
        "https://logo.clearbit.com/choicelegacy.com",
    },
    {
      name: "Imagine Create AI",
      image:
        "https://logo.clearbit.com/openai.com",
    },
    {
      name: "Ventro",
      image:
        "https://logo.clearbit.com/ventro.com",
    },
    {
      name: "Suzuki",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/12/Suzuki_logo_2.svg",
    },
  ];

  const solutions = [
    {
      title: "Custom Shopify App Development",
      description:
        "We design and build world-class public and private Shopify apps that solve real merchant problems—engineered for performance, security, and long-term maintainability.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      imageFirst: true,
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
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1200&auto=format&fit=crop",
      imageFirst: false,
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
      imageFirst: true,
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
      imageFirst: false,
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

  return (
    <section className="relative bg-white px-6 py-[48px] text-[#071F49]">
      <div className="mx-auto max-w-[980px]">
        {/* Trusted Clients */}
        <div className="text-center">
          <h2 className="text-[32px] font-normal leading-none tracking-[-0.06em] text-[#071F49]">
            Trusted by Clients
          </h2>

          <div className="mx-auto mt-[28px] flex max-w-[520px] flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {clientLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.image}
                alt={logo.name}
                className="max-h-[42px] max-w-[150px] object-contain"
              />
            ))}
          </div>
        </div>

        {/* Heading */}
        <div className="mt-[28px] text-center">
          <h2 className="text-[34px] font-normal leading-none tracking-[-0.06em] text-[#071F49]">
            Shopify Solutions We Deliver
          </h2>

          <p className="mx-auto mt-[22px] max-w-[650px] text-[14px] font-medium leading-[1.55] tracking-[-0.02em] text-[#42637a]">
            From fast-growing startups to established enterprise brands, we
            serve merchants, product companies, and B2B clients that demand more
            than out-of-the-box Shopify.
          </p>
        </div>

        {/* Solutions */}
        <div className="mt-[48px]">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="grid grid-cols-1 items-stretch lg:grid-cols-2"
            >
              {solution.imageFirst && (
                <div className="min-h-[330px] bg-[#f3f3f3]">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full min-h-[330px] w-full object-cover"
                  />
                </div>
              )}

              <div className="flex min-h-[330px] flex-col justify-center bg-white px-[34px] py-[34px]">
                <h3 className="text-[28px] font-normal leading-[1.05] tracking-[-0.065em] text-[#071F49]">
                  {solution.title}
                </h3>

                <p className="mt-[18px] max-w-[430px] text-[14px] font-medium leading-[1.55] tracking-[-0.02em] text-[#42637a]">
                  {solution.description}
                </p>

                <ul className="mt-[20px] space-y-[8px]">
                  {solution.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-[8px] text-[13.5px] font-medium leading-[1.35] tracking-[-0.015em] text-[#42637a]"
                    >
                      <span className="mt-[2px] flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full border border-[#27a6df] text-[9px] font-bold leading-none text-[#27a6df]">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {!solution.imageFirst && (
                <div className="min-h-[330px] bg-[#f3f3f3]">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full min-h-[330px] w-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}