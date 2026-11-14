import { getTranslator } from "@/i18n/server";

const rowOne = [
  { name: "Solidity", slug: "solidity", hex: "363636" },
  { name: "Rust", slug: "rust", hex: "000000" },
  { name: "Node.js", slug: "nodedotjs", hex: "5FA04E" },
  { name: "TypeScript", slug: "typescript", hex: "3178C6" },
  { name: "Docker", slug: "docker", hex: "2496ED" },
  { name: "PostgreSQL", slug: "postgresql", hex: "4169E1" },
];

const rowTwo = [
  { name: "MongoDB", slug: "mongodb", hex: "47A248" },
  { name: "Redis", slug: "redis", hex: "FF4438" },
  { name: "GraphQL", slug: "graphql", hex: "E10098" },
  { name: "Next.js", slug: "nextdotjs", hex: "000000" },
  { name: "Laravel", slug: "laravel", hex: "FF2D20" },
  { name: "Python", slug: "python", hex: "3776AB" },
];

const logoUrl = (slug: string, hex: string) =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

function LogoItem({
  name,
  slug,
  hex,
}: {
  name: string;
  slug: string;
  hex: string;
}) {
  return (
    <div className="mx-3 flex h-[52px] shrink-0 items-center gap-3 px-4 md:mx-5 md:h-[56px] md:px-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoUrl(slug, hex)}
        alt={name}
        className="h-[24px] w-[24px] shrink-0 object-contain"
      />
      <span className="whitespace-nowrap text-[14px] font-bold tracking-[-0.01em] text-[#3f3f3f]">
        {name}
      </span>
    </div>
  );
}

export default async function TechStackSwiperSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-hidden bg-white pb-[56px] text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Tech Stack")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("Yes! We Cover Your Tech Stack")}</h2>

          <p className="mt-4 text-[15px] font-medium leading-[1.65] text-[#52525B] md:text-[15px]">{t("Contracts, services, data and infrastructure — the stack our blockchain teams ship with.")}</p>
        </div>
      </div>

      <div className="group mt-10 overflow-hidden border-y border-[#ececec] py-5">
        <div className="animate-stack-forward flex w-max items-center motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
          {[...rowOne, ...rowOne, ...rowOne].map((item, index) => (
            <LogoItem key={`${t(item.name)}-a-${index}`} {...item} />
          ))}
        </div>
      </div>

      <div className="group mt-4 overflow-hidden border-b border-[#ececec] py-5">
        <div className="animate-stack-reverse flex w-max items-center motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
          {[...rowTwo, ...rowTwo, ...rowTwo].map((item, index) => (
            <LogoItem key={`${t(item.name)}-b-${index}`} {...item} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes stack-forward {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        @keyframes stack-reverse {
          0% {
            transform: translateX(-33.3333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-stack-forward {
          animation: stack-forward 42s linear infinite;
        }

        .animate-stack-reverse {
          animation: stack-reverse 42s linear infinite;
        }

        .group:hover .animate-stack-forward,
        .group:hover .animate-stack-reverse {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-stack-forward,
          .animate-stack-reverse {
            animation: none;
            transform: none;
          }

          .animate-stack-forward > div:nth-child(n + 7),
          .animate-stack-reverse > div:nth-child(n + 7) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
