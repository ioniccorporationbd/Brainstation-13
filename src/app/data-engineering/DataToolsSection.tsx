"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

type ToolLogo = {
  name: string;
  image: string;
  widthClass: string;
};

const tools: ToolLogo[] = [
  {
    name: "Amazon S3",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    widthClass: "w-[145px]",
  },
  {
    name: "Tableau",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png",
    widthClass: "w-[170px]",
  },
  {
    name: "Microsoft SQL Server",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
    widthClass: "w-[155px]",
  },
  {
    name: "Power BI",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    widthClass: "w-[150px]",
  },
  {
    name: "PostgreSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
    widthClass: "w-[165px]",
  },
  {
    name: "Oracle",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    widthClass: "w-[170px]",
  },
  {
    name: "Informatica",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Informatica_logo.svg",
    widthClass: "w-[180px]",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    widthClass: "w-[175px]",
  },
  {
    name: "Apache Spark",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
    widthClass: "w-[160px]",
  },
];

const scrollingTools = [...tools, ...tools, ...tools, ...tools];

export default function DataToolsSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-[82px] md:py-[98px] lg:py-[110px]">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 xl:px-0">
        <h2 className="text-center text-[42px] font-normal leading-[1.12] tracking-[-0.055em] text-[#061026] sm:text-[52px] lg:text-[58px]">
          Tools that We Use
        </h2>

        <div className="relative mt-[58px] w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[120px] bg-gradient-to-r from-white to-transparent max-sm:w-[45px]" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[120px] bg-gradient-to-l from-white to-transparent max-sm:w-[45px]" />

          <Swiper
            modules={[Autoplay, FreeMode]}
            loop
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            slidesPerView="auto"
            spaceBetween={85}
            speed={4500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            className="tools-logo-swiper"
          >
            {scrollingTools.map((tool, index) => (
              <SwiperSlide key={`${tool.name}-${index}`} className="!w-auto">
                <div className="flex h-[150px] min-w-[170px] items-center justify-center">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    loading="lazy"
                    className={`${tool.widthClass} h-auto max-h-[105px] object-contain`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .tools-logo-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
          align-items: center;
        }

        @media (max-width: 767px) {
          .tools-logo-swiper .swiper-slide div {
            min-width: 135px;
            height: 120px;
          }
        }
      `}</style>
    </section>
  );
}