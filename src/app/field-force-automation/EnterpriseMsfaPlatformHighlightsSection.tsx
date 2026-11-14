import { CheckCircle2 } from "lucide-react";
import { getTranslator } from "@/i18n/server";

type HighlightItem = {
  title: string;
  description: string;
  points: string[];
  image: string;
  reverse?: boolean;
};

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
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1400&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1400&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
  },
];

async function ImagePanel({ title, image }: { title: string; image: string }) {
  const { t } = await getTranslator();
  return (
    <div className="relative overflow-hidden border border-[#ececec] bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-[240px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] md:h-[330px]"
      />

      <span className="absolute left-3 top-3 rounded-[4px] bg-[#c91f28] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">{t("MSFA Platform")}</span>
    </div>
  );
}

async function HighlightContent({ item }: { item: HighlightItem }) {
  const { t } = await getTranslator();
  return (
    <div>
      <h3 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#000000] md:text-[32px]">
        {t(item.title)}
      </h3>

      <p className="mt-4 max-w-[520px] text-[15px] font-medium leading-[1.7] text-[#565656] md:text-[17px]">
        {t(item.description)}
      </p>

      <ul className="mt-6 space-y-2.5">
        {item.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2.5 text-[14px] font-semibold leading-[1.55] text-[#1f1f1f] md:text-[15px]"
          >
            <CheckCircle2
              size={17}
              strokeWidth={2.1}
              className="mt-[3px] shrink-0 text-[#c91f28]"
            />
            <span>{t(point)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function EnterpriseMsfaPlatformHighlightsSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-hidden bg-white px-6 pb-[88px] text-[#000000] md:pb-[104px]">
      <div className="mx-auto max-w-[1140px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Platform Highlights")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#000000] md:text-[42px]">{t("Built for Real Field Conditions")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("Enterprise-grade field execution, reporting, and governance built for scalable last-mile operations.")}</p>
        </div>

        <div className="mt-12 space-y-10 md:space-y-14">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 items-center gap-7 lg:grid-cols-2 lg:gap-12"
            >
              {item.reverse ? (
                <>
                  <HighlightContent item={item} />
                  <ImagePanel title={t(item.title)} image={item.image} />
                </>
              ) : (
                <>
                  <ImagePanel title={t(item.title)} image={item.image} />
                  <HighlightContent item={item} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
