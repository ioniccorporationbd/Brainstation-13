"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Testimonial = {
  company: string;
  logo: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    company: "bKash Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/BKash_logo.svg/512px-BKash_logo.svg.png",
    quote:
      "bKash Limited is working with Brain Station 23 from 2021. Their resources are excellent and have very strong technical and business understanding. Augmented engagement model with BS23 saved $100K cost in last 3 years. I hope bKash and Brain Station 23 will continue their partnership and make a great impact in countries economy.",
  },
  {
    company: "UCB Bank",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/United_Commercial_Bank_Logo.svg/512px-United_Commercial_Bank_Logo.svg.png",
    quote:
      "Brain Station 23 helped us deliver digital financial solutions with strong technical expertise, reliable delivery, and excellent business understanding. Their team works with ownership and speed.",
  },
  {
    company: "City Bank",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/City_Bank_logo.svg/512px-City_Bank_logo.svg.png",
    quote:
      "The team brings a strong combination of fintech knowledge, engineering capability, and delivery discipline. Their support helped us move faster with confidence.",
  },
];

export default function Wallet23TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-[#111827] px-6 py-[105px] text-white">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-center text-[24px] font-black leading-tight tracking-[-0.04em] text-white md:text-[30px]">
          Trusted By Fast-Moving Tech Teams - From Startups to Enterprises
        </h2>

        <div className="relative mx-auto mt-[80px] max-w-[1120px]">
          <button
            type="button"
            className="wallet23-testimonial-prev absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition duration-300 hover:bg-white/10 hover:text-[#ffab2e] md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={30} strokeWidth={2.4} />
          </button>

          <button
            type="button"
            className="wallet23-testimonial-next absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-[#1ea7df] transition duration-300 hover:bg-white/10 hover:text-[#ffab2e] md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight size={30} strokeWidth={2.4} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            speed={850}
            autoplay={{
              delay: 3800,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            navigation={{
              prevEl: ".wallet23-testimonial-prev",
              nextEl: ".wallet23-testimonial-next",
            }}
            pagination={{
              clickable: true,
            }}
            className="wallet23-testimonial-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.company}>
                <div className="mx-auto flex min-h-[320px] max-w-[920px] flex-col items-center justify-center text-center">
                  <p className="max-w-[900px] text-[22px] font-semibold italic leading-[1.38] tracking-[-0.045em] text-white/95 md:text-[30px]">
                    {item.quote}
                  </p>

                  <div className="mt-12 flex h-[76px] w-[120px] items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="max-h-[70px] max-w-[120px] object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .wallet23-testimonial-swiper {
          padding-bottom: 70px;
        }

        .wallet23-testimonial-swiper .swiper-pagination {
          bottom: 0 !important;
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .wallet23-testimonial-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.35);
          opacity: 1;
          transition: all 0.25s ease;
        }

        .wallet23-testimonial-swiper .swiper-pagination-bullet-active {
          background: #ffffff;
        }
      `}</style>
    </section>
  );
}