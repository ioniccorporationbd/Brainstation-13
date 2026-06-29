"use client";

import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type CaseStudy = {
  category: string;
  title: string;
  description: string;
  months: string;
  engineers: string;
  tags: string[];
};

const caseStudies: CaseStudy[] = [
  {
    category: "SAAS",
    title: "Accelerated GTM with 10 Engineers for a Productivity SaaS Startup",
    description:
      "Deployed a 10-engineer team to rapidly build a productivity SaaS platform, enabling 600+ global teams to automate reporting and boost efficiency.",
    months: "36",
    engineers: "10",
    tags: ["React Native", "Node.js", "Java", "MySQL", "Google Cloud"],
  },
  {
    category: "HEALTHCARE",
    title: "40+ Engineers Powering Fortune 100 Pharma Digitalization",
    description:
      "Scaled Fortune 100 pharma operations with a 40+ engineer team, automating reporting for 600+ teams and driving remote efficiency.",
    months: "72",
    engineers: "40",
    tags: [
      "React Native",
      "Node.js",
      "Moodle",
      "Adobe Experience Manager",
      "Veeva",
    ],
  },
  {
    category: "TELECOM",
    title: "150+ Engineers Power South Asian Telco Transformation",
    description:
      "Transformed legacy systems with 150+ engineers, enabling 5M+ daily users and real-time ops through cloud-native AI architecture.",
    months: "72+",
    engineers: "150",
    tags: [
      "Laravel",
      "AWS",
      "Docker",
      "Kubernetes",
      "Appium",
      "Redis",
      "Springboot",
      "Jenkins",
    ],
  },
  {
    category: "FINTECH",
    title: "Secure Payment Platform Delivered with Dedicated Engineers",
    description:
      "Built secure transaction workflows, reporting dashboards, and operational tools for a fast-growing fintech team.",
    months: "24",
    engineers: "18",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    category: "ECOMMERCE",
    title: "Commerce Platform Scaling for High-Growth Retail Brand",
    description:
      "Delivered scalable storefront, inventory, analytics, and integration workflows for a multi-channel commerce business.",
    months: "30",
    engineers: "22",
    tags: ["Shopify", "React", "ERP", "Redis", "MySQL"],
  },
];

function CaseStudyCard({ item }: { item: CaseStudy }) {
  return (
    <article className="min-h-[540px] bg-[#111E40] px-[42px] py-[70px] text-white md:px-[64px]">
      <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#4fa0d1]">
        {item.category}
      </p>

      <h3 className="mt-5 max-w-[560px] text-[34px] font-bold leading-[1.12] tracking-[-0.06em] text-white md:text-[42px]">
        {item.title}
      </h3>

      <p className="mt-8 max-w-[520px] text-[16px] font-bold leading-[1.55] tracking-[-0.03em] text-white/90 md:text-[18px]">
        {item.description}
      </p>

      <div className="mt-[70px] grid max-w-[420px] grid-cols-2 gap-12">
        <div>
          <h4 className="text-[34px] font-normal leading-none tracking-[-0.055em] text-white">
            {item.months}
          </h4>
          <p className="mt-3 text-[12px] font-medium text-white/75">
            Months long &amp; Deployed
          </p>
        </div>

        <div>
          <h4 className="text-[34px] font-normal leading-none tracking-[-0.055em] text-white">
            {item.engineers}
          </h4>
          <p className="mt-3 text-[12px] font-medium text-white/75">
            Engineers Deployed
          </p>
        </div>
      </div>

      <div className="mt-[56px] flex max-w-[560px] flex-wrap gap-3">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#1f426d] px-4 py-2 text-[13px] font-bold leading-none text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function RealClientsResultsSection() {
  return (
    <section className="relative overflow-hidden bg-white text-[#11182f]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Sticky Side */}
        <div className="relative bg-white">
          <div className="sticky top-0 min-h-screen">
            <div className="h-[390px] w-full overflow-hidden md:h-[460px] lg:h-[50vh]">
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=1400&auto=format&fit=crop"
                alt="Client meeting"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex min-h-[50vh] items-center justify-center px-6 py-16 text-center">
              <div>
                <h2 className="text-[38px] font-normal leading-[1.08] tracking-[-0.065em] text-[#11182f] md:text-[46px]">
                  Real Clients. Real Results.
                </h2>

                <p className="mx-auto mt-6 max-w-[420px] text-[15px] font-semibold leading-[1.55] tracking-[-0.03em] text-[#42637a]">
                  Over{" "}
                  <span className="font-extrabold text-[#11182f]">
                    12 million hours
                  </span>{" "}
                  delivered by our augmented tech teams — powering results for{" "}
                  <span className="font-extrabold text-[#11182f]">
                    100+ clients
                  </span>{" "}
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Swiper Side */}
        <div className="relative min-h-screen bg-[#111E40]">
          <Swiper
            modules={[Autoplay, Mousewheel, Pagination]}
            direction="vertical"
            slidesPerView={1}
            speed={850}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".real-results-pagination",
            }}
            className="real-results-swiper h-screen"
          >
            {caseStudies.map((item) => (
              <SwiperSlide key={item.title}>
                <CaseStudyCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="real-results-pagination absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2 lg:flex" />
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-30 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>

      <style jsx global>{`
        .real-results-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.35);
          opacity: 1;
          margin: 0 !important;
          transition: all 0.3s ease;
        }

        .real-results-pagination .swiper-pagination-bullet-active {
          height: 24px;
          border-radius: 999px;
          background: #4fa0d1;
        }
      `}</style>
    </section>
  );
}