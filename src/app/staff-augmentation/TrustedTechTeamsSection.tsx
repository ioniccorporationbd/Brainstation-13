"use client";

import Image from "next/image";
import { useTranslation } from "@/i18n/LanguageProvider";

type LogoItem = {
  name: string;
  image: string;
  width: number;
  height: number;
};

const logos: LogoItem[] = [
  {
    name: "Elenor",
    image: "/images/trusted/elenor.svg",
    width: 90,
    height: 32,
  },
  {
    name: "ShareBike",
    image: "/images/trusted/sharebike.svg",
    width: 140,
    height: 36,
  },
  {
    name: "Syngenta",
    image: "/images/trusted/syngenta.svg",
    width: 135,
    height: 38,
  },
  {
    name: "Virtual Affairs",
    image: "/images/trusted/virtual-affairs.svg",
    width: 145,
    height: 34,
  },
  {
    name: "Vallie",
    image: "/images/trusted/vallie.svg",
    width: 125,
    height: 36,
  },
  {
    name: "Robi",
    image: "/images/trusted/robi.svg",
    width: 115,
    height: 38,
  },
  {
    name: "Tennant",
    image: "/images/trusted/tennant.svg",
    width: 105,
    height: 38,
  },
];

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

export default function TrustedTechTeamsSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full overflow-hidden bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="w-full brand-container">
        <div className="staff-trusted-heading text-center">
          <h2 className="text-[27px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#0a0a0a] sm:text-[30px] lg:text-[32px]">{t("Trusted By Fast-Moving Tech Teams")}</h2>

          <p className="mt-[6px] text-[24px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#52525B] sm:text-[28px] lg:text-[30px]">{t("From Startups to Enterprises")}</p>
        </div>

        <div className="staff-trusted-slider relative mt-14 w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[120px] bg-gradient-to-r from-white to-transparent max-sm:w-[45px]" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[120px] bg-gradient-to-l from-white to-transparent max-sm:w-[45px]" />

          <div className="staff-trusted-track flex w-max items-center gap-[88px]">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${t(logo.name)}-${index}`}
                className="flex h-[44px] min-w-[130px] items-center justify-center"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto max-h-[42px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .staff-trusted-heading {
          animation: staffTrustedFade 1.2s ease both;
        }

        .staff-trusted-track {
          padding-right: 88px;
          animation: staffTrustedScroll 18s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        /* Hover pauses the marquee in place; leaving resumes from the same spot */
        .staff-trusted-slider:hover .staff-trusted-track {
          animation-play-state: paused;
        }

        @keyframes staffTrustedFade {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes staffTrustedScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-25%);
          }
        }

        @media (max-width: 767px) {
          .staff-trusted-track {
            gap: 48px;
            padding-right: 48px;
            animation-duration: 14s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .staff-trusted-track,
          .staff-trusted-heading {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
