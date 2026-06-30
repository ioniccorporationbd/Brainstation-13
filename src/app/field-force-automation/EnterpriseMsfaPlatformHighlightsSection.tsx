import { CheckCircle2 } from "lucide-react";

type HighlightItem = {
  title: string;
  description: string;
  points: string[];
  reverse?: boolean;
};

const bannerImage =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop";

const highlights: HighlightItem[] = [
  {
    title: "Smart Journey Planning",
    description:
      "Optimize field routes with AI-driven suggestions to maximize daily coverage and reduce travel time.",
    points: [
      "Monthly, Weekly & Daily Visit Plans",
      "Strict GPS & Timestamp Validation",
      "Ad-hoc routing with Manager Approval",
    ],
  },
  {
    title: "True Offline-First",
    description:
      "Continue operations seamlessly without internet. Auto-syncs seamlessly when connection is restored.",
    points: [
      "100% Core Functionality Without Internet",
      "Encrypted SQLite Local Data Caching",
      "Automatic Background Sync Queues",
    ],
    reverse: true,
  },
  {
    title: "Dynamic Pricing & Credit",
    description:
      "Real-time credit limit enforcement and complex trade promo calculations on the fly.",
    points: [
      "Customer-Specific Tiered Catalogs",
      "Automated VAT & Scheme Calculations",
      "Real-Time Credit Limit Blocking & Routing",
    ],
  },
  {
    title: "Promotional Products Tracking",
    description:
      "Control what drives demand with strict inventory tracking of promotional resources.",
    points: [
      "Track Sample & Gift Distributions",
      "Monitor Outlet-Level Campaign Execution",
      "Measure True ROI of Promotional Activities",
    ],
    reverse: true,
  },
  {
    title: "Executive Dashboards",
    description:
      "Real-time field intelligence covering sales, attendance, and productivity metrics.",
    points: [
      "Hierarchy-Aware Data Visibility",
      "Live Sales, Attendance & Productivity",
      "Exportable 100+ Report Combinations",
    ],
  },
];

function BannerPreview({ title }: { title: string }) {
  return (
    <div className="group relative overflow-hidden rounded-[12px] bg-[#111E40] shadow-[0_18px_55px_rgba(17,30,64,0.16)]">
      <div className="relative h-[250px] overflow-hidden md:h-[300px]">
        <img
          src={bannerImage}
          alt={title}
          className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-[1.08]"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-[#111E40]/85 via-[#111E40]/35 to-[#4fa0d1]/25" />

        <div className="absolute -left-20 -top-20 h-[260px] w-[260px] rounded-full bg-[#4fa0d1]/20 blur-3xl transition duration-500 group-hover:bg-[#4fa0d1]/35" />

        <div className="absolute -bottom-20 right-0 h-[240px] w-[280px] rounded-full bg-[#ffab2e]/10 blur-3xl transition duration-500 group-hover:bg-[#ffab2e]/20" />

        <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-[#111E40] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
          MSFA Platform
        </div>

        <div className="absolute bottom-7 left-6 right-6">
          <h3 className="max-w-[420px] text-[30px] font-bold leading-[1.1] tracking-[-0.06em] text-white md:text-[38px]">
            {title}
          </h3>

          <p className="mt-3 max-w-[420px] text-[15px] font-semibold leading-[1.5] text-white/78">
            Enterprise-grade field execution, reporting, and governance built
            for scalable last-mile operations.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-[5px] w-0 bg-[#ffab2e] transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  );
}

function HighlightContent({ item }: { item: HighlightItem }) {
  return (
    <div>
      <h3 className="text-[30px] font-bold leading-[1.12] tracking-[-0.065em] text-[#050b18] md:text-[36px]">
        {item.title}
      </h3>

      <p className="mt-5 max-w-[520px] text-[17px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[18px]">
        {item.description}
      </p>

      <ul className="mt-7 space-y-3">
        {item.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 text-[15px] font-bold leading-[1.4] tracking-[-0.025em] text-[#050b18] md:text-[16px]"
          >
            <CheckCircle2
              size={18}
              strokeWidth={1.9}
              className="mt-[2px] shrink-0 text-[#08a9df]"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EnterpriseMsfaPlatformHighlightsSection() {
  return (
    <section className="relative overflow-hidden border-y-[6px] border-[#111E40] bg-white px-6 py-[92px] text-[#11182f]">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-center">
          <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
            Platform Highlights
          </p>

          <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[54px]">
            Platform Highlights
          </h2>
        </div>

        <div className="mt-[56px] space-y-[52px]">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              {item.reverse ? (
                <>
                  <HighlightContent item={item} />
                  <BannerPreview title={item.title} />
                </>
              ) : (
                <>
                  <BannerPreview title={item.title} />
                  <HighlightContent item={item} />
                </>
              )}
            </div>
          ))}
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