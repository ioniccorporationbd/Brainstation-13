"use client";

import { useTranslation } from "@/i18n/LanguageProvider";

type TechLogo = {
  name: string;
  image: string;
  height: string;
};

const technologies: TechLogo[] = [
  {
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    height: "h-12",
  },
  {
    name: "TensorFlow",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    height: "h-11",
  },
  {
    name: "PyTorch",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    height: "h-11",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    height: "h-11",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    height: "h-11",
  },
  {
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    height: "h-11",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    height: "h-10",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    height: "h-10",
  },
  {
    name: "Swift",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    height: "h-11",
  },
  {
    name: "Kotlin",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    height: "h-11",
  },
  {
    name: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    height: "h-12",
  },
  {
    name: "PostgreSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    height: "h-11",
  },
];

function LogoTrack() {
  return (
    <div className="flex shrink-0">
      {technologies.map((tech) => (
        <div key={tech.name} className="shrink-0 px-3">
          <div className="flex h-[92px] w-[150px] items-center justify-center rounded-2xl border border-[#ececec] bg-white transition-colors duration-300 hover:border-[#c91f28]">
            {/* Real technology logos */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tech.image}
              alt={tech.name}
              className={`${tech.height} w-auto max-w-[92px] object-contain`}
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MLAITechnologiesSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full overflow-hidden bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Our Stack")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("Technologies We Use")}</h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[15px]">{t("Modern, production-grade frameworks and tools trusted for reliable machine learning and AI development.")}</p>
        </div>
      </div>

      {/* Continuous marquee slider */}
      <div className="relative mt-12 w-full">
        <div className="mlai-marquee overflow-hidden">
          <div className="mlai-marquee-track flex w-max">
            <LogoTrack />
            <LogoTrack />
          </div>
        </div>

        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-28" />
      </div>

      <style jsx global>{`
        @keyframes mlai-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .mlai-marquee-track {
          animation: mlai-scroll 38s linear infinite;
        }

        .mlai-marquee:hover .mlai-marquee-track,
        .mlai-marquee:focus-within .mlai-marquee-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .mlai-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
