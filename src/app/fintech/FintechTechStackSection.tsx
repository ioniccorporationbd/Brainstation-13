import { getTranslator } from "@/i18n/server";
const stack = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Python", slug: "python" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Kafka", slug: "apachekafka" },
  { name: "Flutter", slug: "flutter" },
  { name: "GraphQL", slug: "graphql" },
];

const tiles = [...stack, ...stack];

export default async function FintechTechStackSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-9 md:px-10 md:py-11">
          <div className="max-w-[720px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Technology")}</p>
            <h2 className="mt-3 max-w-[560px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("The stack we build on")}</h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#55585e]">{t("Proven, well-supported technologies chosen for security, performance and long-term maintainability.")}</p>
          </div>
        </div>

        <div className="ft-marquee mt-6 overflow-hidden" aria-label={t("Technology stack")}>
          <div className="ft-track flex w-max items-center gap-4">
            {tiles.map((tech, index) => (
              <div
                key={`${tech.slug}-${index}`}
                className="flex h-[96px] w-[132px] shrink-0 items-center justify-center rounded-xl border border-[#ececec] bg-white"
              >
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/C91F28`}
                  alt={tech.name}
                  width={32}
                  height={32}
                  loading="lazy"
                  className="h-8 w-8"
                />
              </div>
            ))}
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {stack.slice(0, 6).map((tech) => (
            <li
              key={`chip-${tech.slug}`}
              className="rounded-lg border border-[#ececec] bg-white px-3.5 py-1.5 text-[13px] font-semibold text-black"
            >
              {tech.name}
            </li>
          ))}
        </ul>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .ft-marquee:hover .ft-track { animation-play-state: paused; }
        .ft-track { animation: ft-scroll 34s linear infinite; }
        @keyframes ft-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .ft-track { animation: none; } }
      `,
        }}
      />
    </section>
  );
}
