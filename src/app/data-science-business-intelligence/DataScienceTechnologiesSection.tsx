import { getTranslator } from "@/i18n/server";

const tech = [
  { name: "Databricks", icon: "https://cdn.simpleicons.org/databricks/c91f28" },
  { name: "Snowflake", icon: "https://cdn.simpleicons.org/snowflake/c91f28" },
  { name: "Tableau", icon: null },
  { name: "Power BI", icon: null },
  { name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "IBM", icon: null },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/c91f28" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/c91f28" },
  { name: "Apache Spark", icon: "https://cdn.simpleicons.org/apachespark/c91f28" },
  { name: "Alteryx", icon: null },
];

export default async function DataScienceTechnologiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Stack")}</p>
            <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Technologies & tools")}</h2>
          </div>
          <p className="max-w-[430px] text-[14.5px] leading-[1.7] text-[#55585e]">{t("A sample of the platforms our data work runs on. Logo use does not imply partnership or certification.")}</p>
        </div>

        <div
          className="ds-tech-marquee group relative mt-9 overflow-hidden rounded-xl border border-[#ececec] py-6"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="ds-tech-track flex w-max items-center gap-4 [animation:dsTechScroll_34s_linear_infinite]">
            {[...tech, ...tech].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex h-[74px] w-[200px] shrink-0 items-center justify-center gap-2.5 rounded-lg border border-[#ececec] bg-white px-4"
              >
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt={`${item.name} logo`}
                    loading="lazy"
                    className="h-6 w-6 shrink-0 object-contain"
                  />
                ) : null}
                <span className="truncate text-[13px] font-semibold text-black">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dsTechScroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 8px)); }
        }
        .ds-tech-marquee:hover .ds-tech-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .ds-tech-track {
            animation: none !important;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
            padding: 0 24px;
          }
          .ds-tech-track > div:nth-child(n+13) { display: none; }
        }
      `}</style>
    </section>
  );
}
