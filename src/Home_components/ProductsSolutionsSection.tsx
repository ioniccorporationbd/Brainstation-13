import Link from "next/link";
import { getTranslator } from "@/i18n/server";

type ProductItem = {
  title: string;
  description: string;
  href: string;
};

const products: ProductItem[] = [
  {
    title: "Proctoring Pro — Online Exam Monitoring & Integrity",
    description:
      "Conduct secure, scalable online exams with real-time monitoring, identity verification, and easy integration with Moodle.",
    href: "/proctoring-pro",
  },
  {
    title: "Wallet23 — Digital Wallet & Payment Systems",
    description:
      "Go live in 15 days with P2P transfers, merchant payments, QR transactions, and enterprise-grade security.",
    href: "/e-wallet-software",
  },
  {
    title: "Remity — Cross-Border Payments",
    description:
      "Launch international money transfer services in 30 days with multi-currency wallets, real-time FX, and secure compliance.",
    href: "/cross-border-payments-solution",
  },
  {
    title: "PocketEdge — Digital Lending & Credit",
    description:
      "Offer branded loan services instantly with automated credit scoring, digital origination, and AI-driven fraud protection.",
    href: "/digital-lending-credit",
  },
  {
    title: "Omnizia — Pharma HCP Activation Suite",
    description:
      "Enable smart, data-driven pharma campaigns with predictive analytics and repeatable cross-channel insights.",
    href: "/omnizia",
  },
  {
    title: "Insurance Tech Solutions",
    description:
      "Modernize underwriting, claims, and policy management with AI and data analytics for personalized, scalable insurance products.",
    href: "/insurance-360",
  },
  {
    title: "Time2Publish — Omni-Channel Content Delivery",
    description:
      "Streamline approvals, reduce manual steps, and automate content delivery for faster, error-free marketing.",
    href: "/time2publish",
  },
  {
    title: "Field Force Management",
    description:
      "Mobilize dispersed sales teams with automation, real-time tracking, and secure, accurate reporting.",
    href: "/field-force-automation",
  },
];

export default async function ProductsSolutionsSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white py-[72px] md:py-[92px] lg:py-[110px]">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[36px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#0A0A0A] sm:text-[44px] lg:text-[50px]">{t("Our Products & Solutions")}</h2>

          <p className="mx-auto mt-5 max-w-[720px] text-[16px] font-normal leading-[1.6] text-[#52525B] sm:text-[17px]">{t("Accelerating Digital Transformation Across Banking, FinTech, EdTech, Pharma, and Enterprise Operations")}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={t(product.title)} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

async function ProductCard({ product }: { product: ProductItem }) {
  const { t } = await getTranslator();
  return (
    <article className="group flex h-full flex-col rounded-[16px] border border-black/[0.08] bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-primary hover:shadow-[0_12px_30px_-12px_rgba(201,31,40,0.20)]">
      <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0A0A0A] sm:text-[21px]">
        {t(product.title)}
      </h3>

      <p className="mt-3 text-[15px] font-normal leading-[1.55] text-[#52525B]">
        {t(product.description)}
      </p>

      <Link
        href={product.href}
        className="mt-auto inline-flex items-center gap-[9px] pt-5 text-[14px] font-semibold text-primary transition-colors hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >{t("Learn More")}<span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </article>
  );
}
