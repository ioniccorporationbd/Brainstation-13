"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/LanguageProvider";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type CaseStudy = {
  title: string;
  description: string;
  image: string;
  href: string;
  metricOne: string;
  metricOneLabel: string;
  metricTwo: string;
  metricTwoLabel: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Field Force Management for Aristopharma",
    description:
      "Android mobile app for Aristopharma replacing manual order placement and reporting. Built with Oracle, Medical Promotion Officers can log doctor visits, request samples, and check real-time stock. Integrated with GPS tracking for transparent field monitoring.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop",
    href: "/case-studies",
    metricOne: "Real-Time",
    metricOneLabel: "Stock & Order Visibility",
    metricTwo: "Automated",
    metricTwoLabel: "Field Reporting & Tracking",
  },
  {
    title: "Enterprise MSFA for Berger Paints",
    description:
      "A scalable field automation platform for territory sales, outlet visits, reporting, and order governance. The solution improved visibility across field teams and enabled faster management decisions.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
    href: "/case-studies",
    metricOne: "2,500+",
    metricOneLabel: "Field Users",
    metricTwo: "Unified",
    metricTwoLabel: "Sales Operations",
  },
  {
    title: "Offline-First Sales Platform for BATA",
    description:
      "A reliable offline-ready ordering and reporting system for remote field operations. The platform helped sales teams capture orders, sync data, and maintain full operational visibility.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop",
    href: "/case-studies",
    metricOne: "100%",
    metricOneLabel: "Transparency",
    metricTwo: "Offline",
    metricTwoLabel: "Order Capture",
  },
];

export default function EnterpriseMsfaCaseStudiesSection() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="w-full overflow-hidden bg-white pb-[56px] text-[#000000] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Proven Results")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#000000] md:text-[46px] lg:text-[50px]">{t("Case Studies")}</h2>
        </div>

        <div className="relative mx-auto mt-11 max-w-[1140px]">
          <button
            type="button"
            className="case-study-prev absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#ececec] bg-white text-[#000000] transition-colors duration-300 hover:border-[#c91f28] hover:bg-[#c91f28] hover:text-white md:left-5"
            aria-label={t("Previous case study")}
          >
            <ChevronLeft size={20} strokeWidth={2.2} />
          </button>

          <button
            type="button"
            className="case-study-next absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#ececec] bg-white text-[#000000] transition-colors duration-300 hover:border-[#c91f28] hover:bg-[#c91f28] hover:text-white md:right-5"
            aria-label={t("Next case study")}
          >
            <ChevronRight size={20} strokeWidth={2.2} />
          </button>

          <Swiper
            key={prefersReducedMotion ? "case-studies-static" : "case-studies-auto"}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            speed={800}
            loop
            autoplay={
              prefersReducedMotion
                ? false
                : {
                    delay: 4200,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            navigation={{
              prevEl: ".case-study-prev",
              nextEl: ".case-study-next",
            }}
            pagination={{
              clickable: true,
              el: ".case-study-pagination",
            }}
            className="enterprise-case-study-swiper"
          >
            {caseStudies.map((item) => (
              <SwiperSlide key={item.title}>
                <article className="grid overflow-hidden border border-[#ececec] bg-white lg:grid-cols-[0.92fr_1fr]">
                  <div className="relative min-h-[240px] overflow-hidden bg-[#f5f5f5] md:min-h-[340px] lg:min-h-[480px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-10 lg:px-12">
                    <h3 className="max-w-[520px] text-[22px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#000000] md:text-[30px]">
                      {t(item.title)}
                    </h3>

                    <p className="mt-5 max-w-[560px] text-[14px] font-medium leading-[1.7] text-[#52525B] md:text-[15px]">
                      {t(item.description)}
                    </p>

                    <Link
                      href={item.href}
                      className="mt-6 inline-flex w-fit items-center gap-2.5 border border-[#ececec] px-4 py-2.5 text-[14px] font-bold text-[#c91f28] transition-colors duration-300 hover:border-[#c91f28] hover:bg-[#c91f28] hover:text-white"
                    >{t("View Case Study")}<ArrowRight size={16} strokeWidth={2.2} />
                    </Link>

                    <div className="mt-8 h-px w-full bg-[#ececec]" />

                    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-[26px] font-bold leading-none tracking-[-0.02em] text-[#c91f28] md:text-[32px]">
                          {t(item.metricOne)}
                        </p>

                        <p className="mt-2 text-[13px] font-bold leading-[1.3] text-[#4a4a4a]">
                          {t(item.metricOneLabel)}
                        </p>
                      </div>

                      <div>
                        <p className="text-[26px] font-bold leading-none tracking-[-0.02em] text-[#c91f28] md:text-[32px]">
                          {t(item.metricTwo)}
                        </p>

                        <p className="mt-2 text-[13px] font-bold leading-[1.3] text-[#4a4a4a]">
                          {t(item.metricTwoLabel)}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="case-study-pagination mt-8 flex justify-center gap-2" />
        </div>
      </div>

      <style jsx global>{`
        .enterprise-case-study-swiper {
          overflow: hidden;
        }

        .case-study-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          margin: 0 !important;
          border-radius: 999px;
          background: #d9d9d9;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .case-study-pagination .swiper-pagination-bullet-active {
          width: 22px;
          background: #c91f28;
        }
      `}</style>
    </section>
  );
}
