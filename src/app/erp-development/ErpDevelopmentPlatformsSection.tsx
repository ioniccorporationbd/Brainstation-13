import { getTranslator } from "@/i18n/server";

const platforms = [
  { name: "ERPNext", slug: "erpnext" },
  { name: "Frappe", slug: "frappe" },
  { name: "Odoo", slug: "odoo" },
  { name: "SAP", slug: "sap" },
  { name: "Oracle", slug: null },
  { name: "Microsoft Dynamics", slug: null },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MariaDB", slug: "mariadb" },
];

export default async function ErpDevelopmentPlatformsSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] md:pb-[104px]">
      <div className="brand-container">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Stack")}</p>
            <h2 className="mt-4 text-[27px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[34px]">{t("ERP platforms & technologies")}</h2>
          </div>
          <p className="max-w-[430px] text-[14.5px] leading-[1.7] text-[#52525B]">{t("A sample of the platforms we build on and integrate with. Logo use does not imply partnership or certification.")}</p>
        </div>

        <div
          className="erp-platforms-marquee group relative mt-9 overflow-hidden rounded-xl border border-[#ececec] py-6"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="erp-platforms-track flex w-max items-center gap-4 [animation:erpPlatformsScroll_30s_linear_infinite]">
            {[...platforms, ...platforms].map((platform, index) => (
              <div
                key={`${t(platform.name)}-${index}`}
                className="flex h-[74px] w-[224px] shrink-0 items-center justify-center gap-2.5 rounded-lg border border-[#ececec] bg-white px-4"
              >
                {platform.slug ? (
                  <img
                    src={`https://cdn.simpleicons.org/${platform.slug}/c91f28`}
                    alt={`${t(platform.name)} logo`}
                    loading="lazy"
                    className="h-6 w-6 shrink-0 object-contain"
                  />
                ) : null}
                <span className="truncate text-[13px] font-semibold text-black">
                  {t(platform.name)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes erpPlatformsScroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 8px)); }
        }
        .erp-platforms-marquee:hover .erp-platforms-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .erp-platforms-track {
            animation: none !important;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
            padding: 0 24px;
          }
          .erp-platforms-track > div:nth-child(n+9) { display: none; }
        }
      `}</style>
    </section>
  );
}
