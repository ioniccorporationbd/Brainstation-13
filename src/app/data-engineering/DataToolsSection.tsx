"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";

type ToolLogo = {
  name: string;
  image: string;
  height: string;
};

const tools: ToolLogo[] = [
  {
    name: "Amazon S3",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    height: "h-11",
  },
  {
    name: "Tableau",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png",
    height: "h-9",
  },
  {
    name: "Microsoft SQL Server",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
    height: "h-10",
  },
  {
    name: "Power BI",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    height: "h-11",
  },
  {
    name: "PostgreSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
    height: "h-10",
  },
  {
    name: "Oracle",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    height: "h-10",
  },
  {
    name: "Informatica",
    image: "https://unavatar.io/informatica.com",
    height: "h-9",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    height: "h-9",
  },
  {
    name: "Apache Spark",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
    height: "h-9",
  },
];

function ToolLogoImg({ tool }: { tool: ToolLogo }) {
  const { t } = useTranslation();
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="px-2 text-center text-[15px] font-bold leading-tight text-[#0a0a0a]">
        {t(tool.name)}
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
  const { t } = useTranslation();
  return (
    <div className="flex shrink-0">
      {tools.map((tool) => (
        <div key={`${prefix}-${t(tool.name)}`} className="shrink-0 px-3">
          <div className="flex h-[104px] w-[180px] items-center justify-center rounded-2xl border border-[#ececec] bg-white px-4 transition-colors duration-300 hover:border-[#c91f28]">
            <ToolLogoImg tool={tool} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DataToolsSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full overflow-hidden bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Our Stack")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Tools That We Use")}</h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("Proven, production-grade platforms for building reliable data pipelines, warehouses, and analytics.")}</p>
        </div>
      </div>

      {/* Continuous marquee slider */}
      <div className="relative mt-12 w-full">
        <div className="data-tools overflow-hidden">
          <div className="data-tools-track flex w-max">
            <ToolTrack prefix="a" />
            <ToolTrack prefix="b" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-28" />
      </div>

      <style jsx global>{`
        @keyframes data-tools-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .data-tools-track {
          animation: data-tools-scroll 34s linear infinite;
        }

        .data-tools:hover .data-tools-track,
        .data-tools:focus-within .data-tools-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .data-tools-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
