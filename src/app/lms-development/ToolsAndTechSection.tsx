import { getTranslator } from "@/i18n/server";

const tools = [
  { name: "Moodle", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Moodle-logo.svg" },
  { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
  { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Nginx", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" },
  { name: "Redis", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Redis_logo.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
];

export default async function ToolsAndTechSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-hidden bg-white px-6 pb-[88px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Toolchain")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Tools & Technologies")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("The stack we deploy, tune and support for every Moodle platform.")}</p>
        </div>

        <div className="group relative mt-10 overflow-hidden border-y border-[#ececec] py-6">
          <div className="animate-tech-marquee flex w-max items-center motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
            {[...tools, ...tools, ...tools].map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="mx-4 flex h-[64px] w-[120px] shrink-0 items-center justify-center md:mx-8 md:h-[72px] md:w-[152px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="max-h-[46px] max-w-[140px] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute left-0 top-0 h-full w-[48px] bg-gradient-to-r from-white to-transparent md:w-[120px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[48px] bg-gradient-to-l from-white to-transparent md:w-[120px]" />
        </div>
      </div>

      <style>{`
        @keyframes tech-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        .animate-tech-marquee {
          animation: tech-marquee 34s linear infinite;
        }

        .group:hover .animate-tech-marquee {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-tech-marquee {
            animation: none;
            transform: none;
          }

          .animate-tech-marquee > div:nth-child(n + 9) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
