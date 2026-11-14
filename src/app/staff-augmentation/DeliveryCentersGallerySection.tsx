"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { useTranslation } from "@/i18n/LanguageProvider";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type GalleryImage = {
  src: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern collaborative workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    alt: "Open workspace lounge",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    alt: "Team collaborating together",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    alt: "Open modern office interior",
  },
  {
    src: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop",
    alt: "Meeting and collaboration space",
  },
  {
    src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1200&auto=format&fit=crop",
    alt: "Conference room",
  },
  {
    src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200&auto=format&fit=crop",
    alt: "Workspace reception area",
  },
  {
    src: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?q=80&w=1200&auto=format&fit=crop",
    alt: "Creative workspace area",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    alt: "Team collaboration space",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern interior workspace",
  },
];

function GalleryCard({ image }: { image: GalleryImage }) {
  return (
    <div className="h-[220px] w-[320px] shrink-0 overflow-hidden rounded-2xl border border-[#ececec] bg-[#ececec] md:h-[250px] md:w-[360px]">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>
  );
}

export default function DeliveryCentersGallerySection() {
  const { t } = useTranslation();
  const topImages = [...galleryImages, ...galleryImages, ...galleryImages];
  const bottomImages = [
    ...galleryImages.slice().reverse(),
    ...galleryImages.slice().reverse(),
    ...galleryImages.slice().reverse(),
  ];

  return (
    <section className="overflow-hidden bg-white py-[80px] text-[#0a0a0a] md:py-[104px]">
      <div className="mx-auto max-w-[1120px] px-6 text-center">
        <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("Built for Collaborative Delivery")}</h2>

        <p className="mx-auto mt-5 max-w-[720px] text-[15px] font-medium leading-[1.5] tracking-[-0.01em] text-[#52525B] md:text-[15px]">{t("Modern, collaborative workspaces designed to keep distributed teams aligned, focused, and shipping with confidence.")}</p>
      </div>

      <div className="relative mt-12 space-y-6">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[120px] bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[120px] bg-gradient-to-l from-white to-transparent" />

        {/* Top gallery: right to left (pauses on hover) */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          freeMode
          slidesPerView="auto"
          spaceBetween={24}
          speed={7500}
          allowTouchMove
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="delivery-gallery-swiper"
        >
          {topImages.map((image, index) => (
            <SwiperSlide key={`top-${image.alt}-${index}`} className="!w-auto">
              <GalleryCard image={image} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom gallery: left to right (pauses on hover) */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          freeMode
          slidesPerView="auto"
          spaceBetween={24}
          speed={7500}
          allowTouchMove
          autoplay={{
            delay: 0,
            reverseDirection: true,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="delivery-gallery-swiper"
        >
          {bottomImages.map((image, index) => (
            <SwiperSlide
              key={`bottom-${image.alt}-${index}`}
              className="!w-auto"
            >
              <GalleryCard image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .delivery-gallery-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
          align-items: center;
        }
      `}</style>
    </section>
  );
}
