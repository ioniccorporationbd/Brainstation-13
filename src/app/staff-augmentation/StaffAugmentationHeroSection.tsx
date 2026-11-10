"use client";

import { Star } from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    company: "Clutch",
    rating: "5.0 RATING",
    quote:
      "Magnetic Solution Limited has been consistent in ensuring tasks are completed within agreed timeframes.",
    author: "VP R&D, Library Collection Management Software Company",
  },
  {
    company: "Clutch",
    rating: "5.0 RATING",
    quote:
      "They communicate clearly, deliver fast, and provide strong engineering support across every stage of the project.",
    author: "Technology Director, Enterprise Software Company",
  },
  {
    company: "Clutch",
    rating: "5.0 RATING",
    quote:
      "Their offshore talent model helped us scale quickly without sacrificing quality, ownership, or delivery confidence.",
    author: "Product Lead, Digital Platform Company",
  },
];

export default function StaffAugmentationHeroSection() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#0a0a0a] px-6 text-white">
      {/* Team collaboration watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
          alt="Team collaboration background"
          className="absolute left-[47%] top-[52%] h-[520px] w-[390px] -translate-x-1/2 -translate-y-1/2 object-cover object-top opacity-[0.12] grayscale contrast-75 brightness-125 mix-blend-screen"
        />

        {/* Dark overlay to blend image smoothly */}
        <div className="absolute left-[37%] top-[18%] h-[560px] w-[520px] bg-gradient-to-b from-[#0a0a0a]/10 via-transparent to-[#0a0a0a]" />
        <div className="absolute left-[37%] top-[18%] h-[560px] w-[520px] bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[760px] max-w-[1320px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Content */}
        <div>
          <h1 className="max-w-[880px] text-[58px] font-light leading-[1.22] tracking-[-0.02em] text-white md:text-[72px]">
            IT Staff Augmentation. <br />
            Scale with Speed. <br />
            Managed from{" "}
            <span className="font-light text-[#c91f28]">the UAE</span>
          </h1>

          <p className="mt-[64px] max-w-[760px] text-[27px] font-semibold leading-[1.45] tracking-[-0.018em] text-white/90">
            Hiring is Slow. Projects Can’t Wait. Onboard Offshore <br />
            Talents with Onshore Account Management Support.
          </p>
        </div>

        {/* Right Review Card */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-[375px] rounded-[8px] bg-[#333333] px-[26px] py-[25px] shadow-[0_18px_55px_rgba(0,0,0,0.18)]">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              loop
              speed={700}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                el: ".staff-hero-pagination",
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={`${review.company}-${index}`}>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[28px] font-bold leading-none tracking-[-0.018em] text-white">
                        {review.company}
                      </h3>

                      <div>
                        <div className="flex items-center gap-[2px]">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              size={14}
                              className="fill-[#c91f28] text-[#c91f28]"
                            />
                          ))}
                        </div>

                        <p className="mt-[2px] text-[10px] font-semibold uppercase leading-none text-white">
                          {review.rating}
                        </p>
                      </div>
                    </div>

                    <p className="mt-[34px] max-w-[300px] text-[16px] font-bold leading-[1.45] tracking-[-0.01em] text-white">
                      “{review.quote}”
                    </p>

                    <p className="mt-[28px] max-w-[280px] text-[14px] font-bold leading-[1.4] tracking-[-0.01em] text-white/65">
                      {review.author}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="staff-hero-pagination mt-[26px] flex gap-[12px]" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .staff-hero-pagination .swiper-pagination-bullet {
          width: 20px;
          height: 4px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.22);
          opacity: 1;
          margin: 0 !important;
        }

        .staff-hero-pagination .swiper-pagination-bullet-active {
          background: rgba(255, 255, 255, 0.9);
        }
      `}</style>
    </section>
  );
}