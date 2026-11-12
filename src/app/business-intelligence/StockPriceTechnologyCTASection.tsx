"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";

type ToolLogo = {
  name: string;
  image: string;
  height: string;
};

const technologies: ToolLogo[] = [
  {
    name: "scikit-learn",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    height: "h-12",
  },
  {
    name: "NumPy",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg",
    height: "h-9",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    height: "h-9",
  },
  {
    name: "Flask",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg",
    height: "h-10",
  },
];

function ToolLogoImg({ tool }: { tool: ToolLogo }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="px-2 text-center text-[15px] font-bold leading-tight text-[#0a0a0a]">
        {tool.name}
      </span>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={tool.image}
      alt={tool.name}
      loading="lazy"
      className={`${tool.height} w-auto max-w-[120px] object-contain`}
      onError={() => setFailed(true)}
    />
  );
}

function ToolTrack({ prefix }: { prefix: string }) {
  return (
    <div className="flex shrink-0">
      {technologies.map((tool) => (
        <div key={`${prefix}-${tool.name}`} className="shrink-0 px-3">
          <div className="flex h-[104px] w-[180px] items-center justify-center rounded-2xl border border-[#ececec] bg-white px-4 transition-colors duration-300 hover:border-[#c91f28]">
            <ToolLogoImg tool={tool} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function StockPriceTechnologyCTASection() {
  const { t } = useTranslation();
  return (
    <section className="w-full overflow-hidden bg-white px-6 pt-[8px] pb-[80px] text-[#0a0a0a] md:pb-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Our Stack")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Technology Used")}</h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("The real, open-source tools that power this prediction model.")}</p>
        </div>
      </div>

      {/* Continuous marquee slider */}
      <div className="relative mt-12 w-full">
        <div className="bi-tools overflow-hidden">
          <div className="bi-tools-track flex w-max">
            <ToolTrack prefix="a" />
            <ToolTrack prefix="b" />
            <ToolTrack prefix="c" />
            <ToolTrack prefix="d" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-28" />
      </div>

      <style jsx global>{`
        @keyframes bi-tools-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .bi-tools-track {
          animation: bi-tools-scroll 26s linear infinite;
        }

        .bi-tools:hover .bi-tools-track,
        .bi-tools:focus-within .bi-tools-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .bi-tools-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
