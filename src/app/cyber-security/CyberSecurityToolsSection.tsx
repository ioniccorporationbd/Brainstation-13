import { getTranslator } from "@/i18n/server";

const tools = [
  { name: "Burp Suite", slug: "burpsuite" },
  { name: "Metasploit", slug: "metasploit" },
  { name: "OWASP", slug: "owasp" },
  { name: "Wireshark", slug: "wireshark" },
  { name: "Kali Linux", slug: "kalilinux" },
  { name: "Snort", slug: "snort" },
];

export default async function CyberSecurityToolsSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Tooling")}</p>
            <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Tools we work in")}</h2>
          </div>
          <p className="max-w-[420px] text-[14.5px] leading-[1.7] text-[#55585e]">{t("The open standards and platforms named in our approach.")}</p>
        </div>

        <div className="cloud-tools-marquee group relative mt-9 overflow-hidden rounded-xl border border-[#ececec] py-6"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}>
          <div className="cloud-tools-track flex w-max items-center gap-4 [animation:cloudToolsScroll_26s_linear_infinite]">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={`${tool.slug}-${index}`}
                className="flex h-[74px] w-[150px] shrink-0 items-center justify-center gap-2.5 rounded-lg border border-[#ececec] bg-white px-4"
              >
                <img
                  src={`https://cdn.simpleicons.org/${tool.slug}/c91f28`}
                  alt={`${t(tool.name)} logo`}
                  loading="lazy"
                  className="h-6 w-6 shrink-0 object-contain"
                />
                <span className="truncate text-[13px] font-semibold text-black">
                  {t(tool.name)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cloudToolsScroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 8px)); }
        }
        .cloud-tools-marquee:hover .cloud-tools-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .cloud-tools-track {
            animation: none !important;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
            padding: 0 24px;
          }
          .cloud-tools-track > div:nth-child(n+7) { display: none; }
        }
      `}</style>
    </section>
  );
}
