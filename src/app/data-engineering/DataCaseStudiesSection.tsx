"use client";

import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type CaseStudy = {
  tag: string;
  title: string;
  description: string;
  href: string;
  image: string;
  statOne: string;
  statOneText: string;
  statTwo: string;
  statTwoText: string;
};

const caseStudies: CaseStudy[] = [
  {
    tag: "Enterprise Data Platform Modernization",
    title: "High-Performance Analytics Platform",
    description:
      "The team modernized a legacy data ecosystem by migrating over 1TB of insurance data to Azure. They consolidated fragmented systems into a centralized platform, enabling faster analytics, improved data quality, and secure access to portfolio insights.",
    href: "/case-studies/high-performance-analytics-platform",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1100&q=90",
    statOne: "100%",
    statOneText: "Data Integrity Maintained During Migration",
    statTwo: "60+",
    statTwoText: "Optimized Tables Powering Faster Analytics",
  },
  {
    tag: "AI-Ready Data Engineering",
    title: "Unified Cloud Data Warehouse",
    description:
      "A growing enterprise needed reliable reporting from multiple disconnected systems. We built a unified data warehouse with automated pipelines, clean governance, and scalable cloud architecture for faster business decisions.",
    href: "/case-studies/unified-cloud-data-warehouse",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=90",
    statOne: "45%",
    statOneText: "Reduction in Manual Reporting Work",
    statTwo: "12x",
    statTwoText: "Faster Data Processing Performance",
  },
  {
    tag: "Business Intelligence Transformation",
    title: "Executive BI Dashboard System",
    description:
      "We transformed scattered spreadsheets and manual reporting into real-time executive dashboards. The new system gave business leaders instant visibility into revenue, operations, customer behavior, and performance trends.",
    href: "/case-studies/executive-bi-dashboard-system",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=90",
    statOne: "80%",
    statOneText: "Faster Access to Business Insights",
    statTwo: "30+",
    statTwoText: "Dashboards for Leadership Teams",
  },
  {
    tag: "Data Governance & Compliance",
    title: "Secure Enterprise Data Foundation",
    description:
      "A regulated organization needed a trusted data foundation with lineage, access control, and compliance-ready reporting. We implemented secure data layers and monitoring workflows to improve trust and operational accuracy.",
    href: "/case-studies/secure-enterprise-data-foundation",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1100&q=90",
    statOne: "99.9%",
    statOneText: "Reliable Data Availability",
    statTwo: "40%",
    statTwoText: "Improved Governance Efficiency",
  },
];

export default function DataCaseStudiesSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-[72px] md:py-[88px] lg:py-[96px]">
      <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8 xl:px-0">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-[42px] font-normal leading-[1.08] tracking-[-0.055em] text-[#071126] sm:text-[52px] lg:text-[58px]">
              Case Studies
            </h2>

            <p className="mt-[30px] max-w-[920px] text-[19px] font-normal leading-[1.5] text-[#335e79] sm:text-[22px]">
              Check out our case studies that show how our innovative solutions
              transformed businesses.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex h-[54px] w-fit items-center justify-center rounded-full bg-[#ffad2f] px-[28px] text-[16px] font-semibold text-black transition hover:bg-[#f59b15] md:mt-[30px]"
          >
            See all Case Studies
          </Link>
        </div>

        {/* Slider */}
        <div className="case-study-wrapper relative mt-[24px]">
          <button
            type="button"
            aria-label="Previous case study"
            className="case-prev absolute left-[10px] top-1/2 z-30 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-[#ffad2f] text-[32px] font-light leading-none text-white shadow-md transition hover:bg-[#f59b15] max-md:left-[8px]"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next case study"
            className="case-next absolute right-[10px] top-1/2 z-30 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-[#ffad2f] text-[32px] font-light leading-none text-white shadow-md transition hover:bg-[#f59b15] max-md:right-[8px]"
          >
            ›
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            speed={850}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".case-prev",
              nextEl: ".case-next",
            }}
            pagination={{
              clickable: true,
              bulletClass: "case-bullet",
              bulletActiveClass: "case-bullet-active",
            }}
            className="case-study-swiper pb-[58px]"
          >
            {caseStudies.map((item) => (
              <SwiperSlide key={item.title}>
                <CaseStudyCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .case-study-swiper {
          position: relative;
        }

        .case-study-swiper .swiper-pagination {
          position: absolute;
          bottom: 0;
          left: 50%;
          z-index: 20;
          display: flex;
          width: auto;
          transform: translateX(-50%);
          align-items: center;
          gap: 12px;
        }

        .case-bullet {
          display: block;
          height: 8px;
          width: 8px;
          cursor: pointer;
          border-radius: 999px;
          background: #c8edf8;
          transition: all 0.25s ease;
        }

        .case-bullet-active {
          background: #05a4df;
        }

        @media (max-width: 767px) {
          .case-study-swiper {
            padding-bottom: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}

function CaseStudyCard({ item }: { item: CaseStudy }) {
  return (
    <article className="grid overflow-hidden rounded-[8px] border border-[#dcdfe3] bg-white lg:grid-cols-[550px_1fr]">
      {/* Image */}
      <div className="relative min-h-[360px] overflow-hidden bg-[#dbe8f0] md:min-h-[470px] lg:min-h-[550px]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />

        <div className="pointer-events-none absolute bottom-[18px] right-[18px] text-[34px] text-white/80">
          ✦
        </div>
      </div>

      {/* Content */}
      <div className="px-[30px] py-[42px] sm:px-[42px] lg:px-[46px] lg:py-[48px]">
        <p className="text-[15px] font-normal leading-[1.4] text-[#3998d3] sm:text-[16px]">
          {item.tag}
        </p>

        <h3 className="mt-[18px] max-w-[560px] text-[34px] font-normal leading-[1.12] tracking-[-0.055em] text-[#071126] sm:text-[42px]">
          {item.title}
        </h3>

        <p className="mt-[28px] max-w-[600px] text-[18px] font-normal leading-[1.55] text-[#42687d] sm:text-[20px]">
          {item.description}
        </p>

        <Link
          href={item.href}
          className="mt-[34px] inline-flex items-center gap-[10px] text-[16px] font-semibold text-[#05a4df] transition hover:text-[#007fb2]"
        >
          View Case Study
          <span className="text-[20px] leading-none">→</span>
        </Link>

        <div className="mt-[34px] grid grid-cols-1 gap-[30px] sm:grid-cols-2">
          <div>
            <h4 className="text-[58px] font-light leading-none tracking-[-0.055em] text-[#4b9bd0] sm:text-[66px]">
              {item.statOne}
            </h4>

            <p className="mt-[16px] max-w-[260px] text-[20px] font-normal leading-[1.35] text-[#42687d] sm:text-[22px]">
              {item.statOneText}
            </p>
          </div>

          <div>
            <h4 className="text-[58px] font-light leading-none tracking-[-0.055em] text-[#4b9bd0] sm:text-[66px]">
              {item.statTwo}
            </h4>

            <p className="mt-[16px] max-w-[260px] text-[20px] font-normal leading-[1.35] text-[#42687d] sm:text-[22px]">
              {item.statTwoText}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}