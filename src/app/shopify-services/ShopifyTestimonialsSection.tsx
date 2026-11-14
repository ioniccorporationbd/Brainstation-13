"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import usePrefersReducedMotion from "./usePrefersReducedMotion";

const testimonials = [
  {
    quote:
      "Super happy with their work. Delivered exactly what we asked for.",
    logoText: "VENTRO",
    rating: 5,
  },
  {
    quote:
      "They approached our customer journey challenges with a level of sophistication that was unmatched. Excellent communication throughout.",
    logoText: "ChoiceLEGACY",
    rating: 5,
  },
  {
    quote:
      "Their Shopify expertise helped us improve performance, automate operations, and build a smoother commerce experience.",
    logoText: "SUZUKI",
    rating: 5,
  },
  {
    quote:
      "A reliable team with strong communication, technical execution, and deep understanding of enterprise eCommerce.",
    logoText: "IMAGINECREATE AI",
    rating: 5,
  },
];

export default function ShopifyTestimonialsSection() {
  const { t } = useTranslation();
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section className="w-full overflow-hidden bg-white pb-[56px] text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Testimonials")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Trusted for eCommerce Excellence")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("Real feedback from clients who've experienced our eCommerce expertise and enterprise-scale support.")}</p>
        </div>

        <div className="relative mx-auto mt-11 max-w-[1080px]">
          <button
            type="button"
            aria-label={t("Previous testimonial")}
            className="shopify-testimonial-prev absolute left-[-18px] top-1/2 z-10 hidden -translate-y-1/2 text-[#d0d0d0] transition hover:text-[#c91f28] md:block"
          >
            <ChevronLeft size={34} strokeWidth={2.5} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            loop
            speed={700}
            autoplay={
              reduceMotion
                ? false
                : {
                    delay: 30000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            navigation={{
              prevEl: ".shopify-testimonial-prev",
              nextEl: ".shopify-testimonial-next",
            }}
            pagination={{
              clickable: true,
              el: ".shopify-testimonial-pagination",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 22,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={`${t(item.logoText)}-${index}`}>
                <div className="flex min-h-[210px] flex-col rounded-2xl border border-[#ececec] bg-white px-7 py-8">
                  <p className="flex-1 text-[17px] font-medium leading-[1.6] tracking-[-0.01em] text-[#3f3f3f]">
                    &quot;{t(item.quote)}&quot;
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <span className="text-[15px] font-bold tracking-[0.08em] text-[#0a0a0a]">
                      {t(item.logoText)}
                    </span>

                    <div className="flex items-center gap-[3px]">
                      {Array.from({ length: item.rating }).map((_, star) => (
                        <Star
                          key={star}
                          size={15}
                          className="fill-[#c91f28] text-[#c91f28]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label={t("Next testimonial")}
            className="shopify-testimonial-next absolute right-[-18px] top-1/2 z-10 hidden -translate-y-1/2 text-[#d0d0d0] transition hover:text-[#c91f28] md:block"
          >
            <ChevronRight size={34} strokeWidth={2.5} />
          </button>

          <div className="shopify-testimonial-pagination mt-7 flex justify-center gap-[8px]" />
        </div>
      </div>

      <style jsx global>{`
        .shopify-testimonial-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #e2e2e2;
          opacity: 1;
          margin: 0 4px !important;
        }

        .shopify-testimonial-pagination .swiper-pagination-bullet-active {
          background: #c91f28;
        }
      `}</style>
    </section>
  );
}
