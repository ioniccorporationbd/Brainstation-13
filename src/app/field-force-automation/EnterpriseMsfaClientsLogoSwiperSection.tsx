"use client";


import { useTranslation } from "@/i18n/LanguageProvider";
const clients = [
  "Sharif Pharmaceuticals",
  "Bata",
  "Incepta Pharmaceuticals",
  "Berger Paints Bangladesh",
  "Beacon Pharmaceuticals",
  "Square Pharmaceuticals",
  "ACI Limited",
  "Beximco Pharmaceuticals",
  "Renata Limited",
  "Eskayef Pharmaceuticals",
];

export default function EnterpriseMsfaClientsLogoSwiperSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full overflow-hidden bg-white px-6 pb-[72px] text-[#000000]">
      <div className="mx-auto max-w-[1240px]">
        <p className="text-center text-[13px] font-bold uppercase tracking-[0.16em] text-[#8a8a8a]">{t("Trusted by field teams at leading enterprises")}</p>

        <div className="group relative mt-7 overflow-hidden border-y border-[#ececec] py-5">
          <div className="animate-msfa-clients flex w-max items-center motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
            {[...clients, ...clients, ...clients].map((name, index) => (
              <div
                key={`${name}-${index}`}
                className="mx-2.5 flex h-[52px] shrink-0 items-center border border-[#ececec] px-5 transition-colors duration-300 hover:border-[#c91f28] md:mx-3.5 md:h-[56px] md:px-6"
              >
                <span className="whitespace-nowrap text-[14px] font-bold tracking-[-0.01em] text-[#3a3a3a] md:text-[15px]">
                  {name}
                </span>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute left-0 top-0 h-full w-[40px] bg-gradient-to-r from-white to-transparent md:w-[110px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[40px] bg-gradient-to-l from-white to-transparent md:w-[110px]" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes msfa-clients {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.3333%);
          }
        }

        .animate-msfa-clients {
          animation: msfa-clients 46s linear infinite;
        }

        .group:hover .animate-msfa-clients {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-msfa-clients {
            animation: none;
          }

          .animate-msfa-clients > div:nth-child(n + 11) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
