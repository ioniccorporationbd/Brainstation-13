"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";

type ClientLogo = {
  name: string;
  image: string;
  height: string;
};

/**
 * Only genuine brand-name -> real-logo pairs. Mismatched/fabricated
 * mappings from the legacy section were removed to avoid fake client
 * relationships.
 */
const clientLogos: ClientLogo[] = [
  { name: "Nissan", image: "https://unavatar.io/nissan-global.com", height: "h-12" },
  { name: "MetLife", image: "https://unavatar.io/metlife.com", height: "h-10" },
  { name: "JTI", image: "https://unavatar.io/jti.com", height: "h-10" },
  { name: "Galapagos", image: "https://unavatar.io/glpg.com", height: "h-10" },
  { name: "Bank Asia", image: "https://unavatar.io/bankasia-bd.com", height: "h-10" },
  { name: "UCB", image: "https://unavatar.io/ucb.com.bd", height: "h-11" },
];

function ClientLogoImg({ logo }: { logo: ClientLogo }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="px-2 text-center text-[16px] font-bold leading-tight tracking-[-0.01em] text-[#0a0a0a]">
        {logo.name}
      </span>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={logo.image}
      alt={logo.name}
      className={`${logo.height} w-auto max-w-[150px] object-contain`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function LogoTrack({ prefix }: { prefix: string }) {
  return (
    <div className="flex shrink-0">
      {clientLogos.map((logo) => (
        <div key={`${prefix}-${logo.name}`} className="shrink-0 px-3">
          <div className="flex h-[100px] w-[190px] items-center justify-center rounded-2xl border border-[#ececec] bg-white px-4 transition-colors duration-300 hover:border-[#c91f28]">
            <ClientLogoImg logo={logo} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DataTrustedBySection() {
  const { t } = useTranslation();
  return (
    <section className="w-full overflow-hidden bg-white pb-[64px] pt-[8px] text-[#0a0a0a] md:pb-[80px]">
      <div className="brand-container text-center">
        <h2 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#0a0a0a] md:text-[30px]">{t("Trusted by fast-moving teams, from startups to enterprises")}</h2>
      </div>

      {/* Continuous right-to-left marquee */}
      <div className="relative mt-10 w-full">
        <div className="data-clients overflow-hidden">
          <div className="data-clients-track flex w-max">
            <LogoTrack prefix="a" />
            <LogoTrack prefix="b" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-28" />
      </div>

      <style jsx global>{`
        @keyframes data-clients-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .data-clients-track {
          animation: data-clients-scroll 32s linear infinite;
        }

        .data-clients:hover .data-clients-track,
        .data-clients:focus-within .data-clients-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .data-clients-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
