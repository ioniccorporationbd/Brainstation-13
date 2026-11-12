"use client";

import { useTranslation } from "@/i18n/LanguageProvider";

type TechnologyItem = {
  name: string;
  logo: string;
};

const technologies: TechnologyItem[] = [
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    name: "Microsoft Azure",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes" },
  { name: "Terraform", logo: "https://cdn.simpleicons.org/terraform" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
  { name: "Linux", logo: "https://cdn.simpleicons.org/linux" },
  { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions" },
  { name: "Grafana", logo: "https://cdn.simpleicons.org/grafana" },
  { name: "Prometheus", logo: "https://cdn.simpleicons.org/prometheus" },
];

export default function CloudSolutionsTechnologiesSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-white px-0 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Our stack")}</p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Platforms and tooling we build on")}</h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[15.5px] leading-[1.75] text-[#55585e]">{t("The platforms and open-source tools that appear most often in the cloud estates we design and operate.")}</p>
        </div>
      </div>

      <div className="cloud-tech-marquee mt-10 overflow-hidden">
        <div className="cloud-tech-track flex w-max items-center gap-4">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${t(tech.name)}-${index}`}
              className="flex h-[104px] w-[190px] shrink-0 items-center justify-center rounded-xl border border-[#ececec] bg-white px-6 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                loading="lazy"
                className="max-h-[48px] max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .cloud-tech-track {
          animation: cloud-tech-marquee 46s linear infinite;
        }

        .cloud-tech-marquee:hover .cloud-tech-track {
          animation-play-state: paused;
        }

        @keyframes cloud-tech-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 8px));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cloud-tech-track {
            animation: none;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
            padding-inline: 24px;
          }

          .cloud-tech-track > div:nth-child(n + 11) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
