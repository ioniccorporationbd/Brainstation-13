"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Super happy with their work. Delivered exactly what we asked for.",
    logoText: "VENTRO",
    logoStyle: "tracking-[0.35em] text-[#6b7280]",
    rating: 5,
  },
  {
    quote:
      "They approached our customer journey challenges with a level of sophistication that was unmatched. Excellent communication throughout.",
    logoText: "ChoiceLEGACY",
    logoStyle: "font-serif text-[#6b7280]",
    rating: 5,
  },
  {
    quote:
      "Their Shopify expertise helped us improve performance, automate operations, and build a smoother commerce experience.",
    logoText: "SUZUKI",
    logoStyle: "font-bold text-[#1d4ed8]",
    rating: 5,
  },
  {
    quote:
      "A reliable team with strong communication, technical execution, and deep understanding of enterprise eCommerce.",
    logoText: "IMAGINECREATE AI",
    logoStyle: "tracking-[0.08em] text-[#111827]",
    rating: 5,
  },
];

export default function ShopifyTestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[88px] text-[#071F49]">
      <div className="mx-auto max-w-[1220px]">
        <div className="text-center">
          <h2 className="text-[42px] font-normal leading-none tracking-[-0.065em] text-[#071F49] md:text-[50px]">
            Trusted for eCommerce Excellence
          </h2>

          <p className="mx-auto mt-7 max-w-[650px] text-[19px] font-medium leading-[1.45] tracking-[-0.03em] text-[#42637a]">
            Real feedback from clients who&apos;ve experienced our eCommerce
            expertise and enterprise-scale support.
          </p>
        </div>

        <div className="relative mx-auto mt-[28px] max-w-[980px]">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="shopify-testimonial-prev absolute left-[-18px] top-1/2 z-10 hidden -translate-y-1/2 text-[#d7dce2] transition hover:text-[#071F49] md:block"
          >
            <ChevronLeft size={34} strokeWidth={2.5} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            loop
            speed={700}
            autoplay={{
              delay: 30000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
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
              <SwiperSlide key={`${item.logoText}-${index}`}>
                <div className="min-h-[200px] rounded-[9px] border border-[#d6dce3] bg-[#f7fbff] px-[32px] py-[32px]">
                  <p className="text-[20px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a]">
                    &quot;{item.quote}&quot;
                  </p>

                  <div className="mt-[28px] flex flex-wrap items-center gap-4">
                    <span
                      className={`text-[22px] font-normal leading-none ${item.logoStyle}`}
                    >
                      {item.logoText}
                    </span>

                    <div className="flex items-center gap-[3px]">
                      {Array.from({ length: item.rating }).map((_, star) => (
                        <Star
                          key={star}
                          size={18}
                          className="fill-[#ffab2e] text-[#ffab2e]"
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
            aria-label="Next testimonial"
            className="shopify-testimonial-next absolute right-[-18px] top-1/2 z-10 hidden -translate-y-1/2 text-[#d7dce2] transition hover:text-[#071F49] md:block"
          >
            <ChevronRight size={34} strokeWidth={2.5} />
          </button>

          <div className="shopify-testimonial-pagination mt-[16px] flex justify-center gap-[8px]" />
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>

      <style jsx global>{`
        .shopify-testimonial-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #c9ced5;
          opacity: 1;
          margin: 0 4px !important;
        }

        .shopify-testimonial-pagination .swiper-pagination-bullet-active {
          background: #000000;
        }
      `}</style>
    </section>
  );
}