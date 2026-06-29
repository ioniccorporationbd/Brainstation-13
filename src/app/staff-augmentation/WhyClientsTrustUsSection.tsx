"use client";

import {
  Boxes,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Handshake,
  Layers3,
  LockKeyhole,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type TrustCard = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const trustCards: TrustCard[] = [
  {
    title: "Continuous Engagement",
    description:
      "Biweekly check-ins with account managers ensure your priorities are heard and delivered.",
    icon: Boxes,
  },
  {
    title: "Top Industry Tools",
    description:
      "We use Jira, Azure DevOps, GitHub, Slack, and modern collaboration tools for smooth workflows.",
    icon: Layers3,
  },
  {
    title: "Agile Delivery, Transparent Process",
    description:
      "Scrum and Kanban keep work clear and flexible. You join sprint planning and reviews.",
    icon: RefreshCcw,
  },
  {
    title: "Pre-Vetted Engineering Talent",
    description:
      "Every engineer is screened for technical strength, communication, reliability, and ownership.",
    icon: CheckCircle2,
  },
  {
    title: "Secure Delivery Practice",
    description:
      "We follow secure development practices, access control, NDA, and IP protection standards.",
    icon: ShieldCheck,
  },
  {
    title: "AI-Ready Teams",
    description:
      "Our engineers are trained to use AI tools responsibly for faster development and better quality.",
    icon: BrainCircuit,
  },
  {
    title: "Full Stack Capability",
    description:
      "Backend, frontend, mobile, DevOps, QA, UI/UX, data, and AI talent available under one team.",
    icon: Code2,
  },
  {
    title: "Cloud & DevOps Support",
    description:
      "AWS, Azure, Docker, Kubernetes, CI/CD, monitoring, and deployment support when you need it.",
    icon: CloudCog,
  },
  {
    title: "Knowledge Continuity",
    description:
      "Documentation, handover, sprint notes, and stable team structure reduce delivery risk.",
    icon: Database,
  },
  {
    title: "Flexible Scaling Model",
    description:
      "Scale up or down based on your roadmap, sprint pressure, and business priorities.",
    icon: GitBranch,
  },
  {
    title: "Local Account Management",
    description:
      "You get direct communication, delivery follow-up, and account support from a dedicated team.",
    icon: Handshake,
  },
  {
    title: "Compliance Friendly Workflow",
    description:
      "We support enterprise-grade workflows with security, reporting, and audit-ready delivery habits.",
    icon: LockKeyhole,
  },
];

function TrustCardItem({ card }: { card: TrustCard }) {
  const Icon = card.icon;

  return (
    <div className="flex h-[240px] w-[430px] shrink-0 flex-col justify-between rounded-[8px] bg-white px-[34px] py-[32px] shadow-[0_12px_34px_rgba(17,30,64,0.08)]">
      <div className="text-[#4fa0d1]">
        <Icon size={38} strokeWidth={1.5} />
      </div>

      <div>
        <h3 className="text-[26px] font-bold leading-[1.12] tracking-[-0.055em] text-[#050b18]">
          {card.title}
        </h3>

        <p className="mt-5 max-w-[360px] text-[15.5px] font-semibold leading-[1.55] tracking-[-0.03em] text-[#42637a]">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function WhyClientsTrustUsSection() {
  const repeatedCards = [...trustCards, ...trustCards, ...trustCards];

  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[90px] text-[#11182f]">
      {/* Circle background */}
      <div className="pointer-events-none absolute left-1/2 top-[95px] h-[760px] w-[760px] -translate-x-1/2 rounded-full">
        {Array.from({ length: 34 }).map((_, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#74c4ec]/15"
            style={{
              width: `${760 - index * 18}px`,
              height: `${760 - index * 18}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1220px] text-center">
        <h2 className="text-[38px] font-normal leading-none tracking-[-0.065em] text-[#11182f] md:text-[46px]">
          Why Clients Trust Us
        </h2>

        <p className="mx-auto mt-6 max-w-[470px] text-[17px] font-semibold leading-[1.45] tracking-[-0.035em] text-[#42637a]">
          Complete solution components working together for your success
        </p>
      </div>

      <div className="relative z-10 mt-[92px] overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[150px] bg-gradient-to-r from-[#f4f8fc] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[150px] bg-gradient-to-l from-[#f4f8fc] to-transparent" />

        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          freeMode
          slidesPerView="auto"
          spaceBetween={30}
          speed={7000}
          allowTouchMove={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="why-clients-trust-swiper"
        >
          {repeatedCards.map((card, index) => (
            <SwiperSlide key={`${card.title}-${index}`} className="!w-auto">
              <TrustCardItem card={card} />
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
        .why-clients-trust-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
          align-items: center;
        }
      `}</style>
    </section>
  );
}