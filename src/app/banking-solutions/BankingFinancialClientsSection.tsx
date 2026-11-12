"use client";

import { useTranslation } from "@/i18n/LanguageProvider";

const clients = [
  "Mercantile Bank",
  "AB Bank",
  "City Bank",
  "IFIC Bank",
  "UCB",
  "Mutual Trust Bank",
  "Eastern Bank",
  "Prime Bank",
  "BRAC Bank",
  "Dutch-Bangla Bank",
];

export default function BankingFinancialClientsSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[96px] md:pb-[112px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Trusted by banks")}</p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Who we've worked with")}</h2>
        </div>
      </div>

      <div className="bank-clients-marquee mt-10 overflow-hidden">
        <div className="bank-clients-track flex w-max items-center gap-3">
          {[...clients, ...clients].map((name, index) => (
            <span
              key={`${t(name)}-${index}`}
              className="inline-flex h-[56px] shrink-0 items-center rounded-xl border border-[#ececec] bg-white px-6 text-[14.5px] font-semibold text-black"
            >
              {t(name)}
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .bank-clients-track {
          animation: bank-clients-marquee 42s linear infinite;
        }

        .bank-clients-marquee:hover .bank-clients-track {
          animation-play-state: paused;
        }

        @keyframes bank-clients-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 6px));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bank-clients-track {
            animation: none;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
            padding-inline: 24px;
          }

          .bank-clients-track > span:nth-child(n + 11) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
