"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import {
  FaShoppingCart,
  FaGraduationCap,
  FaGamepad,
  FaHeartbeat,
  FaPlaneDeparture,
  FaIndustry,
  FaUniversity,
  FaTruckMoving,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import "swiper/css";

const industries = [
  {
    title: "E-Commerce",
    desc: "Scalable online store, payment, order and customer experience solutions.",
    icon: FaShoppingCart,
    color: "from-pink-500 to-rose-500",
    glow: "shadow-pink-200",
  },
  {
    title: "E-Learning",
    desc: "Modern LMS, digital classroom, course delivery and student portals.",
    icon: FaGraduationCap,
    color: "from-sky-500 to-blue-600",
    glow: "shadow-sky-200",
  },
  {
    title: "Gaming",
    desc: "Interactive gaming platforms, real-time features and user engagement.",
    icon: FaGamepad,
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-200",
  },
  {
    title: "Healthcare",
    desc: "Secure healthcare systems, patient management and digital workflows.",
    icon: FaHeartbeat,
    color: "from-emerald-500 to-green-600",
    glow: "shadow-emerald-200",
  },
  {
    title: "Travel & Recreation",
    desc: "Booking systems, travel platforms and customer journey optimization.",
    icon: FaPlaneDeparture,
    color: "from-orange-400 to-amber-500",
    glow: "shadow-orange-200",
  },
  {
    title: "Manufacturing",
    desc: "Production tracking, ERP integration and operational automation.",
    icon: FaIndustry,
    color: "from-slate-600 to-zinc-800",
    glow: "shadow-slate-300",
  },
  {
    title: "Financial Institutes",
    desc: "Secure financial platforms, reporting, analytics and compliance tools.",
    icon: FaUniversity,
    color: "from-cyan-500 to-teal-600",
    glow: "shadow-cyan-200",
  },
  {
    title: "Transport & Logistics",
    desc: "Fleet, delivery, tracking and logistics management solutions.",
    icon: FaTruckMoving,
    color: "from-red-500 to-orange-600",
    glow: "shadow-red-200",
  },
];

const clients = [
  {
    name: "Virtual Affairs",
    logo: "https://dummyimage.com/220x90/ffffff/111111&text=Virtual+Affairs",
  },
  {
    name: "Grameenphone",
    logo: "https://dummyimage.com/220x90/ffffff/111111&text=Grameenphone",
  },
  {
    name: "ACI Limited",
    logo: "https://dummyimage.com/220x90/ffffff/111111&text=ACI+Limited",
  },
  {
    name: "City Bank",
    logo: "https://dummyimage.com/220x90/ffffff/111111&text=City+Bank",
  },
  {
    name: "Unipet",
    logo: "https://dummyimage.com/220x90/ffffff/111111&text=Unipet",
  },
  {
    name: "MetLife",
    logo: "https://dummyimage.com/220x90/ffffff/111111&text=MetLife",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f7fbff] to-white py-24">
      <div className="absolute left-[-140px] top-10 h-[360px] w-[360px] rounded-full bg-sky-200/40 blur-[100px]" />
      <div className="absolute right-[-160px] bottom-20 h-[420px] w-[420px] rounded-full bg-purple-200/40 blur-[120px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 lg:px-10">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-2 text-[12px] font-semibold uppercase tracking-[2px] text-sky-600 shadow-sm">
            <FaCheckCircle />
            Clients we have served in
          </span>

          <h2 className="mt-5 text-[42px] font-bold tracking-[-1.5px] text-[#07111f] md:text-[58px]">
            Industries We Serve
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-7 text-slate-600">
            We build reliable, scalable and modern digital solutions for
            multiple industries with strong user experience and business impact.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-[96px] rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[30px] border border-white bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-2xl"
              >
                <div className="absolute right-[-45px] top-[-45px] h-[140px] w-[140px] rounded-full bg-slate-100 transition-all duration-500 group-hover:scale-[1.8]" />

                <div className="relative z-10">
                  <div
                    className={`flex h-17 w-17 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color} text-white shadow-xl ${item.glow} transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <Icon className="text-[34px]" />
                  </div>

                  <h3 className="mt-7 text-[22px] font-bold text-[#07111f]">
                    {item.title}
                  </h3>

                  <p className="mt-4 min-h-[84px] text-[15px] leading-7 text-slate-600">
                    {item.desc}
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-[13px] font-semibold uppercase tracking-[1.5px] text-sky-600">
                      Explore
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
                      <FaArrowRight className="text-[15px]" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-28 text-center">
          <h2 className="text-[34px] font-bold tracking-[-1px] text-[#07111f] md:text-[44px]">
            Who we've worked with
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-[90px] rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />

          <div className="mt-14 rounded-[32px] border border-white bg-white/80 px-6 py-10 shadow-xl backdrop-blur">
            <Swiper
              modules={[Autoplay]}
              loop
              speed={3500}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              slidesPerView={2}
              spaceBetween={24}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="client-logo-swiper"
            >
              {[...clients, ...clients].map((client, index) => (
                <SwiperSlide key={`${client.name}-${index}`}>
                  <div className="group flex h-[110px] items-center justify-center rounded-2xl border border-slate-100 bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={190}
                      height={80}
                      unoptimized
                      className="max-h-[70px] w-auto object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .client-logo-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}