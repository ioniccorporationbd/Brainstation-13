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

type InfoItem = {
  text: string;
  icon: React.ElementType;
};

const solutionItems: InfoItem[] = [
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

const impactItems: InfoItem[] = [
  {
    text: "Drove stronger app adoption and improved store ratings with a smoother, faster shopping experience.",
    icon: TrendingUp,
  },
  {
    text: "Raised customer satisfaction through personalized recommendations and hyperlocal stock availability.",
    icon: Users,
  },
  {
    text: "Improved delivery accuracy and logistics efficiency with geofencing and real-time route updates.",
    icon: Route,
  },
  {
    text: "Increased operational efficiency via advanced fulfillment monitoring and task prioritization.",
    icon: Zap,
  },
  {
    text: "Enabled data-driven decision-making with integrated analytics for sales trends and customer behavior.",
    icon: BarChart3,
  },
  {
    text: "Strengthened security and governance with multi-level access control and seamless ERP integration.",
    icon: ShieldCheck,
  },
  {
    text: "Elevated brand reputation by aligning the digital experience with Shwapno’s in-store excellence.",
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
    <article className="group flex h-full items-start gap-4 rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <div>
        <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.1em] text-[#c91f28]">
          {String(index + 1).padStart(2, "0")}
        </p>

        <p className="text-[14.5px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
          {text}
        </p>
      </div>
    </article>
  );
}

export default function CaseStudySolutionImpactSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        {/* Solution Provided */}
        <div>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Delivery Scope
            </p>

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
              Solution Provided
            </h2>

            <p className="mx-auto mt-5 max-w-[680px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">
              We engineered a scalable, hyperlocal, customer-focused e-commerce
              ecosystem — from intelligent search and personalization to
              inventory sync, fulfillment visibility, and analytics.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
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
        <div className="mt-[88px]">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Business Results
            </p>

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
              Impact
            </h2>

            <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">
              A look at how the rebuilt platform improved the customer
              experience, day-to-day operations, and decision-making across the
              business.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
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
      </div>
    </section>
  );
}
