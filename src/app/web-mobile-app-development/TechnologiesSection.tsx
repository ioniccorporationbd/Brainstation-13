import { getTranslator } from "@/i18n/server";

const technologies = [
  {
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Objective-C",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Swift",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  },
  {
    name: "Android",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
  {
    name: "Flutter",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Kotlin",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Apple",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  },
];

export default async function TechnologiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-hidden bg-white pb-[56px] text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Toolchain")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Technologies We Use")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("The native and cross-platform stacks our teams ship with.")}</p>
        </div>

        <div className="group relative mt-10 overflow-hidden border-y border-[#ececec] py-6">
          <div className="animate-tech-marquee flex w-max items-center motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
            {[...technologies, ...technologies, ...technologies].map(
              (tech, index) => (
                <div
                  key={`${t(tech.name)}-${index}`}
                  className="mx-3 flex h-[56px] shrink-0 items-center gap-3 px-4 md:mx-5 md:h-[60px] md:px-5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="h-[26px] w-[26px] shrink-0 object-contain opacity-85 transition-opacity duration-300 hover:opacity-100"
                  />
                  <span className="whitespace-nowrap text-[14px] font-bold tracking-[-0.01em] text-[#3f3f3f]">
                    {t(tech.name)}
                  </span>
                </div>
              )
            )}
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
