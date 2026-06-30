"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const industries = [
  "BANK & FIN-TECH INDUSTRIES",
  "TELECOMMUNICATION INDUSTRIES",
  "SERVICE INDUSTRIES",
  "RETAIL INDUSTRIES",
  "PHARMACEUTICAL INDUSTRIES",
];

const clientLogos = [
  {
    name: "Berger",
    image:
      "https://logo.clearbit.com/bergerbd.com",
  },
  {
    name: "Robi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/Robi_Axiata_Limited_Logo.svg",
  },
  {
    name: "UCB",
    image:
      "https://www.ucb.com.bd/themes/custom/ucb_subtheme/images/ucb-logo.svg",
  },
  {
    name: "Beximco Pharma",
    image:
      "https://logo.clearbit.com/beximcopharma.com",
  },
  {
    name: "IFIC Bank",
    image:
      "https://www.ificbank.com.bd/public/images/logo.png",
  },
  {
    name: "City Bank",
    image:
      "https://www.thecitybank.com/themes/custom/citybank/logo.svg",
  },
  {
    name: "HSBC",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg",
  },
  {
    name: "bKash",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1d/BKash_logo.svg",
  },
];

export function SharePointIndustriesSection() {
  return (
    <section className="bg-white py-[100px]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-y-16 px-6 lg:grid-cols-[0.7fr_1fr_0.9fr] lg:gap-x-[80px]">
        <div>
          <p className="mb-6 text-[13px] font-normal uppercase tracking-[0.04em] text-black">
            CLIENTS WE HAVE SERVED IN
          </p>

          <h2 className="text-[62px] font-normal leading-none tracking-[-0.06em] text-black">
            Industries
          </h2>

          <div className="mt-7 h-[2px] w-[74px] bg-[#00A5E5]" />
        </div>

        <div className="space-y-[24px]">
          {industries.map((industry) => (
            <div key={industry} className="flex items-center gap-[18px]">
              <span className="text-[25px] font-bold leading-none text-black">
                ✓
              </span>

              <p className="text-[21px] font-normal uppercase leading-none tracking-[0.14em] text-black">
                {industry}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            alt="SharePoint industries"
            className="h-[292px] w-full max-w-[470px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function SharePointWorkedWithSection() {
  return (
    <section className="bg-white pb-[155px] pt-[60px]">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="text-center">
          <h2 className="text-[42px] font-bold leading-none tracking-[-0.04em] text-black">
            Who we&apos;ve worked with
          </h2>

          <div className="mx-auto mt-6 h-[1px] w-[92px] bg-[#00A5E5]" />
        </div>

        <div className="relative mt-[88px]">
          <button
            type="button"
            aria-label="Previous"
            className="sharepoint-client-prev absolute left-[20px] top-1/2 z-10 hidden -translate-y-1/2 text-[#8d8d8d] transition hover:text-[#00A5E5] md:block"
          >
            <ChevronLeft size={32} strokeWidth={3} />
          </button>

          <div className="mx-auto max-w-[940px]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={5}
              spaceBetween={55}
              loop
              speed={700}
              autoplay={{
                delay: 2400,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".sharepoint-client-prev",
                nextEl: ".sharepoint-client-next",
              }}
              pagination={{
                clickable: true,
                el: ".sharepoint-client-pagination",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 55,
                },
              }}
            >
              {clientLogos.map((client) => (
                <SwiperSlide key={client.name}>
                  <div className="flex h-[85px] w-full items-center justify-center">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="max-h-[70px] max-w-[150px] object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            type="button"
            aria-label="Next"
            className="sharepoint-client-next absolute right-[20px] top-1/2 z-10 hidden -translate-y-1/2 text-[#8d8d8d] transition hover:text-[#00A5E5] md:block"
          >
            <ChevronRight size={32} strokeWidth={3} />
          </button>
        </div>

        <div className="sharepoint-client-pagination mt-[50px] flex justify-center gap-[10px]" />
      </div>

      <style jsx global>{`
        .sharepoint-client-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #d7e1fb;
          opacity: 1;
          margin: 0 5px !important;
        }

        .sharepoint-client-pagination .swiper-pagination-bullet-active {
          background: #2f67df;
        }
      `}</style>
    </section>
  );
}

export function SharePointPurchaseCTASection() {
  return (
    <section className="bg-[#0786a9] py-[30px]">
      <div className="mx-auto flex max-w-[1220px] flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div>
          <h2 className="text-[24px] font-bold text-white">
            Would like to start a project with us?
          </h2>

          <p className="mt-3 text-[12px] text-white">
            Feel free to drop an email (sales@brainstation-23.com) and share
            your idea.
          </p>
        </div>

        <Link
          href="tel:+8801404055226"
          className="rounded-full bg-[#ffab2e] px-7 py-3 text-[13px] font-bold text-black transition hover:bg-[#ffc15a]"
        >
          +8801404055226
        </Link>
      </div>
    </section>
  );
}

export default function SharePointBottomSections() {
  return (
    <>
      <SharePointIndustriesSection />
      <SharePointWorkedWithSection />
      <SharePointPurchaseCTASection />
    </>
  );
}