import Link from "next/link";

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
    href: "/products/proctoring-pro",
  },
  {
    title: "Wallet23 — Digital Wallet & Payment Systems",
    description:
      "Go live in 15 days with P2P transfers, merchant payments, QR transactions, and enterprise-grade security.",
    href: "/products/wallet23",
  },
  {
    title: "Remity — Cross-Border Payments",
    description:
      "Launch international money transfer services in 30 days with multi-currency wallets, real-time FX, and secure compliance.",
    href: "/products/remity",
  },
  {
    title: "PocketEdge — Digital Lending & Credit",
    description:
      "Offer branded loan services instantly with automated credit scoring, digital origination, and AI-driven fraud protection.",
    href: "/products/pocketedge",
  },
  {
    title: "Omnizia — Pharma HCP Activation Suite",
    description:
      "Enable smart, data-driven pharma campaigns with predictive analytics and repeatable cross-channel insights.",
    href: "/products/omnizia",
  },
  {
    title: "Insurance Tech Solutions",
    description:
      "Modernize underwriting, claims, and policy management with AI and data analytics for personalized, scalable insurance products.",
    href: "/products/insurance-tech-solutions",
  },
  {
    title: "Time2Publish — Omni-Channel Content Delivery",
    description:
      "Streamline approvals, reduce manual steps, and automate content delivery for faster, error-free marketing.",
    href: "/products/time2publish",
  },
  {
    title: "Field Force Management",
    description:
      "Mobilize dispersed sales teams with automation, real-time tracking, and secure, accurate reporting.",
    href: "/products/field-force-management",
  },
];

export default function ProductsSolutionsSection() {
  return (
    <section className="w-full bg-[#111d3a] py-[78px] text-white md:py-[96px] lg:py-[110px]">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8 xl:px-0">
        <div className="text-center">
          <h2 className="text-[42px] font-medium leading-[1.1] tracking-[-0.055em] text-white sm:text-[54px] lg:text-[60px]">
            Our Products &amp; Solutions
          </h2>

          <p className="mx-auto mt-[22px] max-w-[820px] text-[16px] font-normal leading-[1.5] text-white/85 sm:text-[18px]">
            Accelerating Digital Transformation Across Banking, FinTech,
            EdTech, Pharma, and Enterprise Operations
          </p>
        </div>

        <div className="mt-[70px] grid grid-cols-1 gap-x-[54px] gap-y-0 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: ProductItem }) {
  return (
    <article className="border-t border-[#3d5771] py-[34px] first:pt-[34px]">
      <h3 className="max-w-[520px] text-[27px] font-medium leading-[1.16] tracking-[-0.045em] text-white sm:text-[31px]">
        {product.title}
      </h3>

      <p className="mt-[20px] max-w-[540px] text-[15px] font-semibold leading-[1.5] text-white">
        {product.description}
      </p>

      <Link
        href={product.href}
        className="mt-[19px] inline-flex items-center gap-[9px] text-[14px] font-bold text-[#ffae2e] transition-colors hover:text-[#ffc46b]"
      >
        Learn More
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </article>
  );
}