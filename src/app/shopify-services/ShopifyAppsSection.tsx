import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";

type ShopifyAppItem = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const shopifyApps: ShopifyAppItem[] = [
  {
    title: "PickSlide: Collection Carousel",
    description: "Elevate Your Store with Stunning Collection Showcases",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
    href: "https://apps.shopify.com/pickslide-collection-carousel",
  },
  {
    title: "QuickTrack | Order Tracking",
    description:
      "Enable customers to easily monitor the progress of their order",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    href: "https://apps.shopify.com/order-tracking-status",
  },
  {
    title: "Diary – Calendar & Notebook",
    description: "Organize your business and stay on top of your tasks.",
    image: "https://cdn-icons-png.flaticon.com/512/2693/2693507.png",
    href: "https://apps.shopify.com/bs23-calendar-notebook",
  },
  {
    title: "PrintMax – Receipts & Invoice",
    description:
      "Customize order receipts, Discount QR & multi-order printing",
    image: "https://cdn-icons-png.flaticon.com/512/3022/3022251.png",
    href: "https://apps.shopify.com/printmax-order-receipt",
  },
  {
    title: "Bannerify – Animated Popup",
    description:
      "Showcase your store with 5 dynamic templates popup banners.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    href: "https://apps.shopify.com/bannerify-animated-popup",
  },
  {
    title: "Mystery Box – More Sales",
    description: "Curated surprises unleashed: Effortless automated mystery box",
    image: "https://cdn-icons-png.flaticon.com/512/679/679720.png",
    href: "https://apps.shopify.com/mystery-box-1",
  },
  {
    title: "TicTacSales | Discount Clock",
    description:
      "Showing the remaining time until the end of a discount period",
    image: "https://cdn-icons-png.flaticon.com/512/2784/2784459.png",
    href: "https://apps.shopify.com/tictacsales-discount-clock",
  },
  {
    title: "Visualizer | Locations & More",
    description: "Visualize store locations and notifications to the customers",
    image: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
    href: "https://apps.shopify.com/visualizer-user-more",
  },
  {
    title: "ImageToonify – Watermark & BG",
    description: "Protect & Customize: Watermark & Images Background with Ease",
    image: "https://cdn-icons-png.flaticon.com/512/1040/1040241.png",
    href: "https://apps.shopify.com/watermarkme-image-enhancer-1",
  },
  {
    title: "MailService – Email Marketing",
    description: "Merchants to promote new and discounted products via email.",
    image: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
    href: "https://apps.shopify.com/email-marketing-7",
  },
  {
    title: "Formify – Dynamic Forms",
    description:
      "Create Customizable Forms with Real-Time Previews and Popups!",
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    href: "https://apps.shopify.com/formify-dynamic-forms-1",
  },
  {
    title: "StockCheck: Inventory Monitor",
    description: "Display low-stock products based on the threshold",
    image: "https://cdn-icons-png.flaticon.com/512/564/564619.png",
    href: "https://apps.shopify.com/stock-alert-5",
  },
];

export default async function ShopifyAppsSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Shopify Apps")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("Shopify Apps Built by Magnetic Solution Limited")}</h2>

          <p className="mt-4 text-[15px] font-medium leading-[1.65] text-[#52525B] md:text-[15px]">{t("We design, build, and operate high-performance Shopify apps that bring real value to merchants.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shopifyApps.map((app) => (
            <article
              key={app.title}
              className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-5 transition-colors duration-300 hover:border-[#c91f28]"
            >
              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#ececec] bg-[#fafafa]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-[34px] w-[34px] object-contain"
                />
              </div>

              <h3 className="mt-4 text-[15px] font-semibold leading-[1.35] tracking-[-0.01em] text-[#0a0a0a]">
                {t(app.title)}
              </h3>

              <p className="mt-2.5 flex-1 text-[13.5px] font-medium leading-[1.6] text-[#52525B]">
                {t(app.description)}
              </p>

              <a
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.06em] text-[#c91f28] transition hover:text-[#a71920]"
              >{t("Learn More")}<ArrowRight size={13} strokeWidth={2.4} />
              </a>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-[1000px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-9 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h3 className="max-w-[640px] text-[20px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#0a0a0a] md:text-[24px]">{t("Let's discuss how our proven Shopify expertise can drive similar results for your eCommerce business.")}</h3>

            <Link
              href="/schedule-a-call"
              className="shrink-0 rounded-full bg-[#c91f28] px-7 py-3.5 text-[14px] font-bold text-white transition duration-300 hover:bg-[#a71920]"
            >{t("Schedule a Call")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
