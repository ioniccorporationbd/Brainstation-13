import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  BarChart3,
  Boxes,
  LockKeyhole,
  MapPinned,
  PackageSearch,
  Sparkles,
} from "lucide-react";

type Challenge = {
  text: string;
  icon: React.ElementType;
};

const challenges: Challenge[] = [
  {
    text: "Existing SaaS-based e-commerce platform failed to meet Shwapno’s brand standards and scalability needs.",
    icon: AlertTriangle,
  },
  {
    text: "Inability to provide hyperlocal inventory visibility and real-time stock updates.",
    icon: MapPinned,
  },
  {
    text: "Limited personalization and customer engagement features hindering user experience.",
    icon: Sparkles,
  },
  {
    text: "Complex logistics and delivery management challenges including route optimization and geofencing.",
    icon: Boxes,
  },
  {
    text: "Lack of comprehensive analytics and actionable insights for inventory, sales, and customer behavior.",
    icon: BarChart3,
  },
  {
    text: "Difficulty managing large product catalogs with dynamic pricing and multi-unit measurements.",
    icon: PackageSearch,
  },
  {
    text: "Need for secure multi-level user access and seamless integration with SAP S/4HANA for inventory synchronization.",
    icon: LockKeyhole,
  },
];

export default function CaseStudyOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[88px] text-[#11182f]">
      <div className="mx-auto max-w-[1120px]">
        {/* Top Case Image */}
        <div className="mx-auto max-w-[860px]">
          <div className="group relative h-[260px] overflow-hidden rounded-[10px] bg-[#f4f8fc] shadow-[0_18px_55px_rgba(17,30,64,0.10)] md:h-[330px] lg:h-[380px]">
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop"
              alt="Shwapno ecommerce retail transformation"
              fill
              sizes="(max-width: 768px) 100vw, 860px"
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#111E40]/92 via-[#111E40]/62 to-transparent" />

            <div className="absolute left-6 top-6 max-w-[360px] text-white md:left-10 md:top-10">
              <p className="mb-4 inline-flex rounded-full bg-white/12 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-white">
                Brain Station 23 × Shwapno
              </p>

              <h3 className="text-[24px] font-bold leading-[1.15] tracking-[-0.055em] md:text-[34px]">
                A Journey Towards Digital Excellence in Retail
              </h3>

              <p className="mt-4 text-[14px] font-medium leading-[1.55] text-white/82 md:text-[15px]">
                A scalable customer-centric e-commerce solution built for
                hyperlocal retail growth.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-[10px] bg-white/12 px-4 py-3 backdrop-blur">
                  <p className="text-[22px] font-bold leading-none text-[#ffb22c]">
                    100K+
                  </p>
                  <p className="mt-1 text-[12px] font-bold text-white/85">
                    App downloads
                  </p>
                </div>

                <div className="rounded-[10px] bg-white/12 px-4 py-3 backdrop-blur">
                  <p className="text-[22px] font-bold leading-none text-[#ffb22c]">
                    39%
                  </p>
                  <p className="mt-1 text-[12px] font-bold text-white/85">
                    Rating growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-[82px]">
          <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
            Project Overview
          </p>

          <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[56px]">
            Overview
          </h2>

          <p className="mt-8 max-w-[920px] text-[19px] font-medium leading-[1.75] tracking-[-0.035em] text-[#42637a] md:text-[22px]">
            Shwapno, Bangladesh’s largest retail supermarket chain, partnered
            with Brain Station 23 to rebuild its e-commerce platform, enabling a
            seamless, scalable, and hyperlocal digital shopping experience. This
            transformation addressed the needs of over 1 million customers and
            drove significant growth, including 100K+ app downloads with a 39%
            rating increase within four months.
          </p>
        </div>

        {/* Business Challenges */}
        <div className="mt-[76px]">
          <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
            Problem Statement
          </p>

          <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[56px]">
            Business Challenges
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;

              return (
                <article
                  key={challenge.text}
                  className="group relative overflow-hidden rounded-[18px] border border-[#dce8f2] bg-[#f4f8fc] px-6 py-6 shadow-[0_12px_36px_rgba(17,30,64,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b7dff4] hover:bg-white hover:shadow-[0_22px_60px_rgba(17,30,64,0.12)]"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-[150px] w-[150px] rounded-full bg-[#4fa0d1]/0 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/18" />

                  <div className="relative z-10 flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#4fa0d1] ring-1 ring-[#dce8f2] transition duration-300 group-hover:bg-[#4fa0d1] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#4fa0d1]">
                        Challenge {String(index + 1).padStart(2, "0")}
                      </p>

                      <p className="text-[17px] font-semibold leading-[1.6] tracking-[-0.03em] text-[#42637a]">
                        {challenge.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-[64px] text-center">
            <Link
              href="/schedule-a-call"
              className="inline-flex rounded-full bg-[#ffab2e] px-8 py-4 text-[17px] font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffc15a] hover:shadow-[0_14px_34px_rgba(255,171,46,0.32)]"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}