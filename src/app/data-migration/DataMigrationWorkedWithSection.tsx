"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";

type ClientLogo = {
  name: string;
  image: string;
  height: string;
};

const clientLogos: ClientLogo[] = [
  { name: "Grameenphone", image: "https://unavatar.io/grameenphone.com", height: "h-10" },
  { name: "ACI Limited", image: "https://unavatar.io/aci-bd.com", height: "h-10" },
  { name: "Pickaboo", image: "https://unavatar.io/pickaboo.com", height: "h-10" },
  { name: "Kiksha", image: "https://unavatar.io/kiksha.com", height: "h-10" },
  { name: "PriyoShop", image: "https://unavatar.io/priyoshop.com", height: "h-10" },
  { name: "City Bank", image: "https://unavatar.io/thecitybank.com", height: "h-12" },
  { name: "UCB", image: "https://unavatar.io/ucb.com.bd", height: "h-11" },
  { name: "AB Bank", image: "https://unavatar.io/abbl.com", height: "h-11" },
  { name: "Robi", image: "https://unavatar.io/robi.com.bd", height: "h-10" },
  { name: "bKash", image: "https://unavatar.io/bkash.com", height: "h-10" },
  { name: "MetLife", image: "https://unavatar.io/metlife.com", height: "h-10" },
  { name: "Nissan", image: "https://unavatar.io/nissan-global.com", height: "h-12" },
];

function ClientLogoImg({ logo }: { logo: ClientLogo }) {
  const { t } = useTranslation();
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="px-2 text-center text-[16px] font-bold leading-tight tracking-[-0.01em] text-[#0a0a0a]">
        {t(logo.name)}
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
  const { t } = useTranslation();
  return (
    <div className="flex shrink-0">
      {clientLogos.map((logo) => (
        <div key={`${prefix}-${t(logo.name)}`} className="shrink-0 px-3">
          <div className="flex h-[100px] w-[190px] items-center justify-center rounded-2xl border border-[#ececec] bg-white px-4 transition-colors duration-300 hover:border-[#c91f28]">
            <ClientLogoImg logo={logo} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DataMigrationWorkedWithSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full overflow-hidden bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px] text-center">
        <h2 className="text-[22px] font-bold leading-[1.3] tracking-[-0.02em] text-[#0a0a0a] md:text-[30px]">{t("Trusted by fast-moving teams, from startups to enterprises")}</h2>
      </div>

      {/* Continuous right-to-left marquee */}
      <div className="relative mt-10 w-full">
        <div className="dm-clients overflow-hidden">
          <div className="dm-clients-track flex w-max">
            <LogoTrack prefix="a" />
            <LogoTrack prefix="b" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-28" />
      </div>

      <style jsx global>{`
        @keyframes dm-clients-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .dm-clients-track {
          animation: dm-clients-scroll 44s linear infinite;
        }

        .dm-clients:hover .dm-clients-track,
        .dm-clients:focus-within .dm-clients-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .dm-clients-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
