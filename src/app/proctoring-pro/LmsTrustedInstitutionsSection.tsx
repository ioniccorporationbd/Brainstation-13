"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type Institution = {
  name: string;
  logo: string;
};

const institutions: Institution[] = [
  {
    name: "Universidad Estatal de Milagro",
    logo: "https://dummyimage.com/260x100/ffffff/07112b.png&text=UNEMI",
  },
  {
    name: "Skill Cat",
    logo: "https://dummyimage.com/260x100/ffffff/f97316.png&text=SkillCat",
  },
  {
    name: "Japan Virtual Campus",
    logo: "https://dummyimage.com/260x100/ffffff/111827.png&text=JVCampus",
  },
  {
    name: "Universidad La Salle",
    logo: "https://dummyimage.com/260x100/ffffff/1d4ed8.png&text=ULSA",
  },
  {
    name: "University of Central Asia",
    logo: "https://dummyimage.com/260x100/ffffff/38bdf8.png&text=UCA",
  },
  {
    name: "Moodle Partner",
    logo: "https://dummyimage.com/260x100/ffffff/f58220.png&text=Moodle+Partner",
  },
  {
    name: "Online Learning Institute",
    logo: "https://dummyimage.com/260x100/ffffff/0ea5e9.png&text=eLearning",
  },
  {
    name: "Digital University",
    logo: "https://dummyimage.com/260x100/ffffff/7c3aed.png&text=Digital+Uni",
  },
];

export default function LmsTrustedInstitutionsSection() {
  return (
    <section className="relative overflow-hidden bg-[#111827] px-6 py-[105px] text-white">
      <div className="pointer-events-none absolute -left-[240px] top-[80px] h-[520px] w-[520px] rounded-full bg-[#08a7df]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-[260px] bottom-[80px] h-[560px] w-[560px] rounded-full bg-[#ffab2e]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <span className="inline-flex rounded-full bg-white/8 px-5 py-2 text-[14px] font-bold tracking-[-0.02em] text-[#54c8ee]">
            Trusted Institutions
          </span>

          <h2 className="mt-6 text-[38px] font-black leading-[1.08] tracking-[-0.065em] text-white md:text-[50px] lg:text-[56px]">
            Trusted by Leading Educational Institutions
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[18px] font-semibold leading-[1.45] tracking-[-0.035em] text-white/85 md:text-[22px]">
            Join hundreds of universities and colleges worldwide using our
            solutions
          </p>
        </div>

        {/* Swiper */}
        <div className="mx-auto mt-[78px] max-w-[1120px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            speed={850}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 1.4,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
            className="lms-institutions-swiper"
          >
            {institutions.map((institution) => (
              <SwiperSlide key={institution.name}>
                <article className="group flex h-[140px] flex-col items-center justify-center rounded-[12px] bg-white px-5 text-center shadow-[0_20px_55px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                  <div className="flex h-[64px] w-full items-center justify-center">
                    <img
                      src={institution.logo}
                      alt={institution.name}
                      className="max-h-[58px] max-w-[170px] object-contain"
                    />
                  </div>

                  <h3 className="mt-4 text-[15px] font-black leading-[1.25] tracking-[-0.03em] text-[#111827]">
                    {institution.name}
                  </h3>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .lms-institutions-swiper {
          padding: 8px 0 78px;
        }

        .lms-institutions-swiper .swiper-pagination {
          bottom: 0 !important;
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .lms-institutions-swiper .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background: rgba(255, 255, 255, 0.32);
          opacity: 1;
          transition: all 0.25s ease;
        }

        .lms-institutions-swiper .swiper-pagination-bullet-active {
          background: #ffffff;
          transform: scale(1.15);
        }
      `}</style>
    </section>
  );
}