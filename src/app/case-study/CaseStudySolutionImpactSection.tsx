import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Bell,
  Boxes,
  BrainCircuit,
  Languages,
  LockKeyhole,
  MapPinned,
  PackageCheck,
  Route,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

type SolutionItem = {
  text: string;
  icon: React.ElementType;
};

type ImpactItem = {
  text: string;
  icon: React.ElementType;
};

const solutionItems: SolutionItem[] = [
  {
    text: "Developed a fully customized, scalable e-commerce platform with hyperlocal inventory display tailored to user locations.",
    icon: MapPinned,
  },
  {
    text: "Integrated Algolia-powered enhanced search with dynamic filters, auto-suggestions, and voice search capabilities.",
    icon: Search,
  },
  {
    text: "Implemented AI-driven personalized product recommendations and promotions displayed site-wide.",
    icon: BrainCircuit,
  },
  {
    text: "Enabled advanced catalog management with multi-unit stock, batch pricing, and rich filtering options.",
    icon: Boxes,
  },
  {
    text: "Delivered real-time order tracking, push notifications, and an intuitive in-app customer journey walkthrough.",
    icon: Bell,
  },
  {
    text: "Built multi-language support and map-based address input with drag-and-drop functionality.",
    icon: Languages,
  },
  {
    text: "Developed a secure multi-level user access control system for admin, regional, and store users.",
    icon: LockKeyhole,
  },
  {
    text: "Incorporated operational tools for geofencing, campaign management, and dynamic customer segmentation.",
    icon: Users,
  },
  {
    text: "Integrated SAP S/4HANA for real-time inventory synchronization and Power BI, Google Analytics, and Algolia analytics for actionable insights.",
    icon: BarChart3,
  },
  {
    text: "Created advanced fulfillment dashboards monitoring picker and packer activities, route optimization, and instant notifications.",
    icon: Route,
  },
];

const impactItems: ImpactItem[] = [
  {
    text: "Surpassed 100,000 app downloads with a 39% increase in user rating within four months.",
    icon: TrendingUp,
  },
  {
    text: "Improved customer satisfaction through personalized shopping and hyperlocal stock availability.",
    icon: Users,
  },
  {
    text: "Optimized logistics and delivery accuracy with geofencing and real-time route updates.",
    icon: Route,
  },
  {
    text: "Increased operational efficiency via advanced fulfillment monitoring and task prioritization.",
    icon: Zap,
  },
  {
    text: "Enabled data-driven decision-making with integrated analytics tools for sales trends and customer behavior.",
    icon: BarChart3,
  },
  {
    text: "Strengthened security and management with multi-level access control and seamless ERP integration.",
    icon: ShieldCheck,
  },
  {
    text: "Enhanced brand reputation by aligning digital experience with Shwapno’s in-store excellence.",
    icon: PackageCheck,
  },
];

function InfoCard({
  text,
  icon: Icon,
  index,
}: {
  text: string;
  icon: React.ElementType;
  index: number;
}) {
  return (
    <article className="group relative overflow-hidden rounded-[18px] border border-[#dce8f2] bg-[#f4f8fc] px-6 py-6 shadow-[0_12px_36px_rgba(17,30,64,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b7dff4] hover:bg-white hover:shadow-[0_22px_60px_rgba(17,30,64,0.12)]">
      <div className="pointer-events-none absolute -right-16 -top-16 h-[150px] w-[150px] rounded-full bg-[#4fa0d1]/0 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/18" />

      <div className="relative z-10 flex gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#4fa0d1] ring-1 ring-[#dce8f2] transition duration-300 group-hover:bg-[#4fa0d1] group-hover:text-white">
          <Icon size={22} strokeWidth={1.8} />
        </div>

        <div>
          <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#4fa0d1]">
            Item {String(index + 1).padStart(2, "0")}
          </p>

          <p className="text-[17px] font-semibold leading-[1.6] tracking-[-0.03em] text-[#42637a]">
            {text}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function CaseStudySolutionImpactSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto max-w-[1120px]">
        {/* Solution Provided */}
        <div>
          <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
            Delivery Scope
          </p>

          <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[56px]">
            Solution Provided
          </h2>

          <p className="mt-7 max-w-[900px] text-[19px] font-medium leading-[1.7] tracking-[-0.035em] text-[#42637a] md:text-[21px]">
            Brain Station 23 engineered a scalable, hyperlocal, and
            customer-focused e-commerce ecosystem for Shwapno with advanced
            search, personalization, inventory synchronization, fulfillment
            visibility, and analytics.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {solutionItems.map((item, index) => (
              <InfoCard
                key={item.text}
                text={item.text}
                icon={item.icon}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="mt-[92px]">
          <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
            Business Results
          </p>

          <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[56px]">
            Impact
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {impactItems.map((item, index) => (
              <InfoCard
                key={item.text}
                text={item.text}
                icon={item.icon}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Impact Visual */}
        <div className="mt-[76px]">
          <div className="group relative mx-auto h-[280px] max-w-[760px] overflow-hidden rounded-[10px] bg-[#f4f8fc] shadow-[0_18px_55px_rgba(17,30,64,0.08)] md:h-[340px]">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
              alt="E-commerce impact analytics dashboard"
              fill
              sizes="(max-width: 768px) 100vw, 760px"
              className="object-cover opacity-80 transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/72 to-white/40" />

            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="grid w-full max-w-[660px] grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-[16px] bg-white/90 px-5 py-5 text-center shadow-[0_12px_34px_rgba(17,30,64,0.10)]">
                  <p className="text-[30px] font-bold leading-none text-[#4fa0d1]">
                    39%
                  </p>
                  <p className="mt-2 text-[13px] font-bold leading-[1.35] text-[#42637a]">
                    Growth in app rating
                  </p>
                </div>

                <div className="rounded-[16px] bg-white/90 px-5 py-5 text-center shadow-[0_12px_34px_rgba(17,30,64,0.10)]">
                  <p className="text-[30px] font-bold leading-none text-[#ffab2e]">
                    75%
                  </p>
                  <p className="mt-2 text-[13px] font-bold leading-[1.35] text-[#42637a]">
                    Organic search traffic
                  </p>
                </div>

                <div className="rounded-[16px] bg-white/90 px-5 py-5 text-center shadow-[0_12px_34px_rgba(17,30,64,0.10)]">
                  <p className="text-[30px] font-bold leading-none text-[#4fa0d1]">
                    100K+
                  </p>
                  <p className="mt-2 text-[13px] font-bold leading-[1.35] text-[#42637a]">
                    App downloads
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-[#ff3c65] px-6 py-2 text-[13px] font-bold text-white">
              Impact Delivered in 4 Months
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-[76px] text-center">
          <h2 className="mx-auto max-w-[900px] text-[34px] font-bold leading-[1.18] tracking-[-0.065em] text-[#050b18] md:text-[44px]">
            Get the Perfect E-commerce System for your Business
          </h2>

          <p className="mx-auto mt-7 max-w-[850px] text-[18px] font-medium leading-[1.65] tracking-[-0.035em] text-[#42637a] md:text-[20px]">
            Transform your retail business with Brain Station 23’s expertise in
            scalable e-commerce development and hyperlocal digital retail
            solutions. Let us help you deliver personalized, efficient, and
            data-driven shopping experiences that drive growth and customer
            loyalty.
          </p>

          <Link
            href="/schedule-a-call"
            className="mt-10 inline-flex rounded-full bg-[#ffab2e] px-8 py-4 text-[17px] font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffc15a] hover:shadow-[0_14px_34px_rgba(255,171,46,0.32)]"
          >
            Schedule a Call
          </Link>
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