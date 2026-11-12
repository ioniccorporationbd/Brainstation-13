"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";

type ClientLogo = {
  name: string;
  image: string;
  height: string;
};

const clientLogos: ClientLogo[] = [
  { name: "Kiksha", image: "https://unavatar.io/kiksha.com", height: "h-10" },
  { name: "PriyoShop", image: "https://unavatar.io/priyoshop.com", height: "h-10" },
  { name: "City Bank", image: "https://unavatar.io/thecitybank.com", height: "h-12" },
  { name: "UCB", image: "https://unavatar.io/ucb.com.bd", height: "h-11" },
  { name: "AB Bank", image: "https://unavatar.io/abbl.com", height: "h-11" },
  { name: "British American Tobacco", image: "https://unavatar.io/bat.com", height: "h-12" },
  { name: "Bank Asia", image: "https://unavatar.io/bankasia-bd.com", height: "h-10" },
  { name: "Robi", image: "https://unavatar.io/robi.com.bd", height: "h-10" },
  { name: "bKash", image: "https://unavatar.io/bkash.com", height: "h-10" },
  { name: "Grameenphone", image: "https://unavatar.io/grameenphone.com", height: "h-10" },
  { name: "Aarong", image: "https://unavatar.io/aarong.com", height: "h-10" },
  { name: "LankaBangla", image: "https://unavatar.io/lankabangla.com", height: "h-10" },
];

function ClientLogoImg({ client }: { client: ClientLogo }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="px-2 text-center text-[16px] font-bold leading-tight tracking-[-0.01em] text-[#0a0a0a]">
        {client.name}
      </span>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={client.image}
      alt={client.name}
      className={`${client.height} w-auto max-w-[140px] object-contain`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function ClientTrack({ prefix }: { prefix: string }) {
  return (
    <div className="flex shrink-0">
      {clientLogos.map((client) => (
        <div key={`${prefix}-${client.name}`} className="shrink-0 px-3">
          <div className="flex h-[100px] w-[190px] items-center justify-center rounded-2xl border border-[#ececec] bg-white px-4 transition-colors duration-300 hover:border-[#c91f28]">
            <ClientLogoImg client={client} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MLAIWorkedWithSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full overflow-hidden bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Our Clients")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Who We've Worked With")}</h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("Trusted by leading banks, telcos, retailers, and enterprises across Bangladesh and beyond.")}</p>
        </div>
      </div>

      {/* Continuous marquee slider */}
      <div className="relative mt-12 w-full">
        <div className="mlai-clients overflow-hidden">
          <div className="mlai-clients-track flex w-max">
            <ClientTrack prefix="a" />
            <ClientTrack prefix="b" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-28" />
      </div>

      <style jsx global>{`
        @keyframes mlai-clients-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .mlai-clients-track {
          animation: mlai-clients-scroll 42s linear infinite;
        }

        .mlai-clients:hover .mlai-clients-track,
        .mlai-clients:focus-within .mlai-clients-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .mlai-clients-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
