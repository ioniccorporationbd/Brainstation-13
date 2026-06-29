"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type GalleryImage = {
  src: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern office workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    alt: "Office lounge area",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    alt: "Team working together",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    alt: "Open office interior",
  },
  {
    src: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop",
    alt: "Office meeting space",
  },
  {
    src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1200&auto=format&fit=crop",
    alt: "Conference room",
  },
  {
    src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200&auto=format&fit=crop",
    alt: "Office reception",
  },
  {
    src: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?q=80&w=1200&auto=format&fit=crop",
    alt: "Creative office area",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    alt: "Office team collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern interior workspace",
  },
];

function GalleryCard({ image }: { image: GalleryImage }) {
  return (
    <div className="h-[220px] w-[320px] shrink-0 overflow-hidden bg-[#e5edf5] md:h-[250px] md:w-[360px]">
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>
  );
}

export default function DeliveryCentersGallerySection() {
  const topImages = [...galleryImages, ...galleryImages, ...galleryImages];
  const bottomImages = [
    ...galleryImages.slice().reverse(),
    ...galleryImages.slice().reverse(),
    ...galleryImages.slice().reverse(),
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] py-[92px] text-[#11182f]">
      <div className="mx-auto max-w-[1120px] px-6 text-center">
        <h2 className="text-[42px] font-normal leading-[1.08] tracking-[-0.065em] text-[#11182f] md:text-[54px]">
          60,000+ SQFT Delivery Centers
        </h2>

        <p className="mx-auto mt-7 max-w-[760px] text-[21px] font-medium leading-[1.42] tracking-[-0.035em] text-[#42637a]">
          State-of-the-art facilities equipped with modern infrastructure to
          deliver exceptional results for our clients
        </p>
      </div>

      <div className="relative mt-[92px] space-y-[28px]">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[120px] bg-gradient-to-r from-[#f4f8fc] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[120px] bg-gradient-to-l from-[#f4f8fc] to-transparent" />

        {/* Top gallery: right to left */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          freeMode
          slidesPerView="auto"
          spaceBetween={28}
          speed={7500}
          allowTouchMove={true}
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

        {/* Bottom gallery: left to right */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          freeMode
          slidesPerView="auto"
          spaceBetween={28}
          speed={7500}
          allowTouchMove={true}
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

      <button className="fixed bottom-10 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-30 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>

      <style jsx global>{`
        .delivery-gallery-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
          align-items: center;
        }
      `}</style>
    </section>
  );
}