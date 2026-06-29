"use client";

import {
  Database,
  Monitor,
  Smartphone,
  Layers3,
  BrainCircuit,
  Cloud,
} from "lucide-react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type TalentCard = {
  title: string;
  count: string;
  technologies: string;
  icon: React.ElementType;
};

const talentCards: TalentCard[] = [
  {
    title: "Backend",
    count: "420",
    technologies:
      ".Net | Blockchain | Codeless, Node.js | PHP | Python | Golang | Ruby on Rails",
    icon: Database,
  },
  {
    title: "Frontend",
    count: "270",
    technologies: "Angular | React | UI | Vue.js",
    icon: Monitor,
  },
  {
    title: "Mobile",
    count: "120",
    technologies: "Cross-Platform | iOS Native | Flutter | React Native | Ionic",
    icon: Smartphone,
  },
  {
    title: "CMS, LMS, ERP, CRM",
    count: "85",
    technologies:
      "AEM, Odoo | Moodle | WordPress | Salesforce | Shopify | ERPNext",
    icon: Layers3,
  },
  {
    title: "AI / ML",
    count: "95",
    technologies:
      "Machine Learning | Generative AI | LLM | NLP | Computer Vision",
    icon: BrainCircuit,
  },
  {
    title: "Cloud & DevOps",
    count: "140",
    technologies:
      "AWS | Azure | Docker | Kubernetes | CI/CD | NGINX | Monitoring",
    icon: Cloud,
  },
];

function TalentCardItem({ card }: { card: TalentCard }) {
  const Icon = card.icon;

  return (
    <div className="relative flex h-[410px] w-[520px] shrink-0 flex-col justify-between overflow-hidden rounded-[8px] bg-[#111E40] px-[52px] py-[54px] text-white">
      <Icon
        size={150}
        strokeWidth={1.2}
        className="absolute right-[34px] top-[28px] text-white/16"
      />

      <div className="relative z-10">
        <h3 className="text-[38px] font-bold leading-none tracking-[-0.06em] text-white">
          {card.title}
        </h3>
      </div>

      <div className="relative z-10">
        <h4 className="text-[72px] font-light leading-none tracking-[-0.06em] text-white">
          {card.count}
        </h4>

        <p className="mt-[28px] max-w-[410px] text-[20px] font-semibold leading-[1.42] tracking-[-0.035em] text-white/90">
          {card.technologies}
        </p>
      </div>
    </div>
  );
}

export default function FutureReadyTalentSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[82px] text-[#11182f]">
      <div className="mx-auto max-w-[1420px]">
        <div className="max-w-[720px]">
          <h2 className="text-[50px] font-normal leading-[1.12] tracking-[-0.07em] text-[#11182f] md:text-[62px]">
            Future-Ready Talent Across <br />
            100+ Technologies
          </h2>

          <p className="mt-[34px] text-[22px] font-semibold leading-[1.45] tracking-[-0.035em] text-[#42637a]">
            AI-Ready. Enterprise-Proven. Fast-Moving.
          </p>
        </div>
      </div>

      <div className="relative mt-[92px] overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[120px] bg-gradient-to-r from-[#f4f8fc] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[120px] bg-gradient-to-l from-[#f4f8fc] to-transparent" />

        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          freeMode
          slidesPerView="auto"
          spaceBetween={46}
          speed={6500}
          allowTouchMove={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="future-ready-talent-swiper"
        >
          {[...talentCards, ...talentCards].map((card, index) => (
            <SwiperSlide key={`${card.title}-${index}`} className="!w-auto">
              <TalentCardItem card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>

      <style jsx global>{`
        .future-ready-talent-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
          align-items: center;
        }
      `}</style>
    </section>
  );
}