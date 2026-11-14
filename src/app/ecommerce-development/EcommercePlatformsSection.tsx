import { getTranslator } from "@/i18n/server";
const platforms = [
  { name: "Shopify", image: "https://cdn.simpleicons.org/shopify/7AB55C" },
  { name: "Next.js", image: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "React", image: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Node.js", image: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Stripe", image: "https://cdn.simpleicons.org/stripe/635BFF" },
  { name: "WooCommerce", image: "https://cdn.simpleicons.org/woocommerce/96588A" },
  { name: "BigCommerce", image: "https://cdn.simpleicons.org/bigcommerce/121118" },
];

export default async function EcommercePlatformsSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-hidden bg-white pb-[56px] text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Platforms")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Platforms We Build On")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("Commerce platforms, frameworks and payment infrastructure we work with.")}</p>
        </div>

        <div className="group relative mt-10 overflow-hidden border-y border-[#ececec] py-6">
          <div className="animate-platform-marquee flex w-max items-center motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
            {[...platforms, ...platforms, ...platforms].map((platform, index) => (
              <div
                key={`${t(platform.name)}-${index}`}
                className="mx-3 flex h-[56px] shrink-0 items-center gap-3 px-4 md:mx-5 md:h-[60px] md:px-5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={platform.image}
                  alt={platform.name}
                  className="h-[24px] w-[24px] shrink-0 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                />
                <span className="whitespace-nowrap text-[14px] font-bold tracking-[-0.01em] text-[#3f3f3f]">
                  {t(platform.name)}
                </span>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute left-0 top-0 h-full w-[48px] bg-gradient-to-r from-white to-transparent md:w-[120px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[48px] bg-gradient-to-l from-white to-transparent md:w-[120px]" />
        </div>
      </div>

      <style>{`
        @keyframes platform-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        .animate-platform-marquee {
          animation: platform-marquee 30s linear infinite;
        }

        .group:hover .animate-platform-marquee {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-platform-marquee {
            animation: none;
            transform: none;
          }

          .animate-platform-marquee > div:nth-child(n + 8) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
