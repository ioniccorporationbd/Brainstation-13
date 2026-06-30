"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BsDatabase,
  BsDatabaseCheck,
  BsDatabaseGear,
  BsRobot,
} from "react-icons/bs";

import "swiper/css";
import "swiper/css/free-mode";

type LogoItem = {
  name: string;
  image: string;
  widthClass?: string;
};

type ServiceItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const logos: LogoItem[] = [
  {
    name: "Nissan",
    image: "https://logo.clearbit.com/nissan-global.com",
    widthClass: "w-[120px]",
  },
  {
    name: "MetLife",
    image: "https://logo.clearbit.com/metlife.com",
    widthClass: "w-[145px]",
  },
  {
    name: "DataResultz",
    image:
      "https://logo.clearbit.com/datarobot.com",
    widthClass: "w-[150px]",
  },
  {
    name: "JTI",
    image: "https://logo.clearbit.com/jti.com",
    widthClass: "w-[150px]",
  },
  {
    name: "InformatiQ",
    image:
      "https://logo.clearbit.com/informatica.com",
    widthClass: "w-[160px]",
  },
  {
    name: "Galapagos",
    image:
      "https://logo.clearbit.com/glpg.com",
    widthClass: "w-[165px]",
  },
  {
    name: "IBSEZ",
    image: "https://logo.clearbit.com/bsez.com",
    widthClass: "w-[135px]",
  },
];

const services: ServiceItem[] = [
  {
    title: "Data Engineering & Cloud Platforms",
    description:
      "Scalable data pipelines and unified cloud architectures that bring data from multiple business systems into one reliable environment. Designed for enterprise performance while keeping infrastructure efficient and cost-controlled.",
    icon: <BsDatabase />,
  },
  {
    title: "AI/ML Foundations & Governance",
    description:
      "A governed data foundation that prepares organizations for AI adoption. Built with full visibility, data lineage, and security controls so that AI insights remain reliable, traceable, and compliant.",
    icon: <BsRobot />,
  },
  {
    title: "Analytics and BI",
    description:
      "Trusted data layers that ensure every dashboard and report uses consistent metrics. Business teams gain intuitive dashboards and self-service reporting to monitor performance and make faster decisions.",
    icon: <BsDatabaseCheck />,
  },
  {
    title: "Database Design & Managed Services",
    description:
      "Optimized relational and NoSQL databases designed for high performance and reliability. Continuous monitoring, tuning, and proactive management ensure systems stay available and responsive as workloads scale.",
    icon: <BsDatabaseGear />,
  },
];

const scrollingLogos = [...logos, ...logos, ...logos, ...logos];

export default function DataCoreServicesSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-[70px] md:py-[86px] lg:py-[96px]">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 xl:px-0">
        {/* Top trusted text */}
        <div className="text-center">
          <h2 className="text-[24px] font-semibold leading-[1.35] tracking-[-0.03em] text-[#081126] sm:text-[28px]">
            Trusted By Fast-Moving Tech Teams
          </h2>

          <p className="mt-[2px] text-[24px] font-semibold leading-[1.35] tracking-[-0.03em] text-[#081126] sm:text-[28px]">
            From Startups to Enterprises
          </p>
        </div>

        {/* Infinite logo scroll */}
        <div className="relative mx-auto mt-[42px] w-full max-w-[1080px] overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[110px] bg-gradient-to-r from-white to-transparent max-sm:w-[45px]" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[110px] bg-gradient-to-l from-white to-transparent max-sm:w-[45px]" />

          <Swiper
            modules={[Autoplay, FreeMode]}
            loop
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            slidesPerView="auto"
            spaceBetween={58}
            speed={4200}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            className="data-logo-swiper"
          >
            {scrollingLogos.map((logo, index) => (
              <SwiperSlide
                key={`${logo.name}-${index}`}
                className="!w-auto"
              >
                <div className="flex h-[92px] min-w-[140px] items-center justify-center">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className={`h-auto ${logo.widthClass ?? "w-[140px]"} object-contain`}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* What we do */}
        <div className="mt-[48px] text-center">
          <p className="text-[19px] font-medium text-[#169bd7]">
            What we do
          </p>

          <h3 className="mt-[28px] text-[42px] font-normal leading-[1.12] tracking-[-0.055em] text-[#061026] sm:text-[54px] lg:text-[60px]">
            Our Core Data Services
          </h3>
        </div>

        {/* Services grid */}
        <div className="mx-auto mt-[58px] grid w-full max-w-[1120px] grid-cols-1 gap-x-[70px] gap-y-[42px] lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .data-logo-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
          align-items: center;
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="grid grid-cols-[72px_1fr] gap-[22px]">
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#05a4df] text-[31px] text-white">
        {service.icon}
      </div>

      <div>
        <h4 className="text-[28px] font-normal leading-[1.2] tracking-[-0.045em] text-[#061026] sm:text-[34px]">
          {service.title}
        </h4>

        <p className="mt-[17px] text-[18px] font-normal leading-[1.5] text-[#335e79]">
          {service.description}
        </p>
      </div>
    </article>
  );
}