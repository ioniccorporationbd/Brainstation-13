"use client";

import Image from "next/image";

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

export default function TrustedTeamsSection() {
  return (
    <section className="w-full overflow-hidden bg-white pb-[130px] pt-[22px]">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 xl:px-0">
        <div className="trusted-heading text-center">
          <h2 className="text-[24px] font-semibold leading-[1.35] tracking-[-0.03em] text-[#121a2f] sm:text-[28px]">
            Trusted By Fast-Moving Tech Teams
          </h2>

          <p className="mt-[2px] text-[24px] font-semibold leading-[1.35] tracking-[-0.03em] text-[#121a2f] sm:text-[28px]">
            From Startups to Enterprises
          </p>
        </div>

        <div className="relative mt-[92px] w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[120px] bg-gradient-to-r from-white to-transparent max-sm:w-[45px]" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[120px] bg-gradient-to-l from-white to-transparent max-sm:w-[45px]" />

          <div className="trusted-logo-track flex w-max items-center gap-[88px]">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
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
        .trusted-heading {
          animation: trustedHeadingFade 1.2s ease both;
        }

        .trusted-logo-track {
          animation: trustedLogoScroll 12s linear infinite;
          will-change: transform;
        }

        @keyframes trustedHeadingFade {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes trustedLogoScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-25%);
          }
        }

        @media (max-width: 767px) {
          .trusted-logo-track {
            gap: 48px;
            animation-duration: 9s;
          }
        }
      `}</style>
    </section>
  );
}