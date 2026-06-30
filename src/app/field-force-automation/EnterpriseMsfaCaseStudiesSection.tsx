"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
    href: "/case-studies/aristopharma-field-force-management",
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
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    href: "/case-studies/berger-msfa",
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
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
    href: "/case-studies/bata-sales-platform",
    metricOne: "100%",
    metricOneLabel: "Transparency",
    metricTwo: "Offline",
    metricTwoLabel: "Order Capture",
  },
];

export default function EnterpriseMsfaCaseStudiesSection() {
  return (
    <section className="relative overflow-hidden border-t-[6px] border-[#111E40] bg-white px-6 py-[82px] text-[#11182f]">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
            Proven Results
          </p>

          <h2 className="text-[44px] font-bold leading-[1.08] tracking-[-0.07em] text-black md:text-[58px]">
            Case Studies
          </h2>
        </div>

        <div className="relative mx-auto mt-[58px] max-w-[1120px]">
          <button
            type="button"
            className="case-study-prev absolute left-5 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffab2e] text-white shadow-[0_12px_30px_rgba(255,171,46,0.30)] transition duration-300 hover:scale-110 hover:bg-[#ffc15a]"
            aria-label="Previous case study"
          >
            <ChevronLeft size={22} strokeWidth={2.4} />
          </button>

          <button
            type="button"
            className="case-study-next absolute right-5 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffab2e] text-white shadow-[0_12px_30px_rgba(255,171,46,0.30)] transition duration-300 hover:scale-110 hover:bg-[#ffc15a]"
            aria-label="Next case study"
          >
            <ChevronRight size={22} strokeWidth={2.4} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            speed={850}
            loop
            autoplay={{
              delay: 4200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
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
                <article className="grid overflow-hidden rounded-[10px] border border-[#dce8f2] bg-white shadow-[0_20px_70px_rgba(17,30,64,0.08)] lg:grid-cols-[0.92fr_1fr]">
                  <div className="group relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-tr from-[#111E40]/20 via-transparent to-[#4fa0d1]/10" />
                  </div>

                  <div className="flex flex-col justify-center px-8 py-10 md:px-12 lg:px-16">
                    <h3 className="max-w-[560px] text-[34px] font-bold leading-[1.08] tracking-[-0.065em] text-black md:text-[44px]">
                      {item.title}
                    </h3>

                    <p className="mt-8 max-w-[600px] text-[18px] font-medium leading-[1.65] tracking-[-0.035em] text-[#42637a] md:text-[20px]">
                      {item.description}
                    </p>

                    <Link
                      href={item.href}
                      className="mt-8 inline-flex w-fit items-center gap-3 text-[17px] font-bold tracking-[-0.025em] text-[#ffab2e] transition duration-300 hover:gap-5 hover:text-[#3f93cf]"
                    >
                      View Case Study
                      <ArrowRight size={19} strokeWidth={2} />
                    </Link>

                    <div className="mt-10 h-px w-full bg-[#dce8f2]" />

                    <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2">
                      <div>
                        <p className="text-[46px] font-light leading-none tracking-[-0.08em] text-[#4fa0d1] md:text-[64px]">
                          {item.metricOne}
                        </p>

                        <p className="mt-3 text-[18px] font-bold leading-[1.25] tracking-[-0.035em] text-[#42637a] md:text-[20px]">
                          {item.metricOneLabel}
                        </p>
                      </div>

                      <div>
                        <p className="text-[46px] font-light leading-none tracking-[-0.08em] text-[#4fa0d1] md:text-[64px]">
                          {item.metricTwo}
                        </p>

                        <p className="mt-3 text-[18px] font-bold leading-[1.25] tracking-[-0.035em] text-[#42637a] md:text-[20px]">
                          {item.metricTwoLabel}
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

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>

      <style jsx global>{`
        .enterprise-case-study-swiper {
          overflow: hidden;
        }

        .case-study-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          margin: 0 !important;
          border-radius: 999px;
          background: #b8dff3;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .case-study-pagination .swiper-pagination-bullet-active {
          width: 10px;
          height: 10px;
          background: #08a9df;
        }
      `}</style>
    </section>
  );
}