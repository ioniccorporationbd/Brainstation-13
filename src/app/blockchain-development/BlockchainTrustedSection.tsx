import { getTranslator } from "@/i18n/server";

const platforms = [
  { name: "Ethereum", slug: "ethereum", hex: "3C3C3D" },
  { name: "Bitcoin", slug: "bitcoin", hex: "F7931A" },
  { name: "Solana", slug: "solana", hex: "9945FF" },
  { name: "Polygon", slug: "polygon", hex: "7B3FE4" },
  { name: "Chainlink", slug: "chainlink", hex: "375BD2" },
  { name: "IPFS", slug: "ipfs", hex: "65C2CB" },
  { name: "Stellar", slug: "stellar", hex: "7D00FF" },
  { name: "BNB Chain", slug: "bnbchain", hex: "F3BA2F" },
];

const logoUrl = (slug: string, hex: string) =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

export default async function BlockchainTrustedSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-hidden bg-white px-6 pb-[88px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Platforms & Protocols")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Blockchain Technologies We Work With")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("The networks, protocols and tooling our engineering teams build on.")}</p>
        </div>

        <div className="group relative mt-10 overflow-hidden border-y border-[#ececec] py-6">
          <div className="animate-chain-marquee flex w-max items-center motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
            {[...platforms, ...platforms, ...platforms].map((item, index) => (
              <div
                key={`${t(item.name)}-${index}`}
                className="mx-3 flex h-[56px] shrink-0 items-center gap-3 px-4 md:mx-5 md:h-[60px] md:px-5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoUrl(item.slug, item.hex)}
                  alt={item.name}
                  className="h-[26px] w-[26px] shrink-0 object-contain"
                />
                <span className="whitespace-nowrap text-[14px] font-bold tracking-[-0.01em] text-[#3f3f3f]">
                  {t(item.name)}
                </span>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute left-0 top-0 h-full w-[48px] bg-gradient-to-r from-white to-transparent md:w-[120px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[48px] bg-gradient-to-l from-white to-transparent md:w-[120px]" />
        </div>
      </div>

      <style>{`
        @keyframes chain-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        .animate-chain-marquee {
          animation: chain-marquee 32s linear infinite;
        }

        .group:hover .animate-chain-marquee {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-chain-marquee {
            animation: none;
            transform: none;
          }

          .animate-chain-marquee > div:nth-child(n + 9) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
