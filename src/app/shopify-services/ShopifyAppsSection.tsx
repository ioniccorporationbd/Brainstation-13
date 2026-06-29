import Link from "next/link";

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
    image:
      "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
    href: "/shopify-apps/pickslide",
  },
  {
    title: "QuickTrack | Order Tracking",
    description:
      "Enable customers to easily monitor the progress of their order",
    image:
      "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    href: "/shopify-apps/quicktrack",
  },
  {
    title: "Diary – Calendar & Notebook",
    description: "Organize your business and stay on top of your tasks.",
    image:
      "https://cdn-icons-png.flaticon.com/512/2693/2693507.png",
    href: "/shopify-apps/diary",
  },
  {
    title: "PrintMax – Receipts & Invoice",
    description:
      "Customize order receipts, Discount QR & multi-order printing",
    image:
      "https://cdn-icons-png.flaticon.com/512/3022/3022251.png",
    href: "/shopify-apps/printmax",
  },
  {
    title: "Bannerify – Animated Popup",
    description:
      "Showcase your store with 5 dynamic templates popup banners.",
    image:
      "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    href: "/shopify-apps/bannerify",
  },
  {
    title: "Mystery Box – More Sales",
    description:
      "Curated surprises unleashed: Effortless automated mystery box",
    image:
      "https://cdn-icons-png.flaticon.com/512/679/679720.png",
    href: "/shopify-apps/mystery-box",
  },
  {
    title: "TicTacSales | Discount Clock",
    description:
      "Showing the remaining time until the end of a discount period",
    image:
      "https://cdn-icons-png.flaticon.com/512/2784/2784459.png",
    href: "/shopify-apps/tictacsales",
  },
  {
    title: "Visualizer | Locations & More",
    description:
      "Visualize store locations and notifications to the customers",
    image:
      "https://cdn-icons-png.flaticon.com/512/854/854878.png",
    href: "/shopify-apps/visualizer",
  },
  {
    title: "ImageToonify – Watermark & BG",
    description:
      "Protect & Customize: Watermark & Images Background with Ease",
    image:
      "https://cdn-icons-png.flaticon.com/512/1040/1040241.png",
    href: "/shopify-apps/imagetoonify",
  },
  {
    title: "MailService – Email Marketing",
    description:
      "Merchants to promote new and discounted products via email.",
    image:
      "https://cdn-icons-png.flaticon.com/512/732/732200.png",
    href: "/shopify-apps/mailservice",
  },
  {
    title: "Formify – Dynamic Forms",
    description:
      "Create Customizable Forms with Real-Time Previews and Popups!",
    image:
      "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    href: "/shopify-apps/formify",
  },
  {
    title: "StockCheck: Inventory Monitor",
    description: "Display low-stock products based on the threshold",
    image:
      "https://cdn-icons-png.flaticon.com/512/564/564619.png",
    href: "/shopify-apps/stockcheck",
  },
];

export default function ShopifyAppsSection() {
  return (
    <section className="relative bg-white px-6 py-[76px] text-[#071F49]">
      <div className="mx-auto max-w-[980px]">
        <div className="text-center">
          <h2 className="text-[40px] font-normal leading-none tracking-[-0.065em] text-[#071F49] md:text-[46px]">
            Shopify Apps Built by Brain Station 23
          </h2>

          <p className="mx-auto mt-6 max-w-[520px] text-[16px] font-medium leading-[1.55] tracking-[-0.025em] text-[#42637a]">
            We design, build, and operate high-performance Shopify apps that
            brings real value to merchants.
          </p>
        </div>

        <div className="mx-auto mt-[54px] grid max-w-[880px] grid-cols-1 gap-x-[86px] gap-y-[22px] lg:grid-cols-2">
          {shopifyApps.map((app) => (
            <article key={app.title} className="flex items-start gap-[18px]">
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-[5px] bg-[#f2f6fa]">
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-[58px] w-[58px] object-contain"
                />
              </div>

              <div>
                <h3 className="text-[17px] font-bold leading-[1.28] tracking-[-0.035em] text-black">
                  {app.title}
                </h3>

                <p className="mt-[7px] max-w-[360px] text-[15.5px] font-medium leading-[1.35] tracking-[-0.025em] text-[#42637a]">
                  {app.description}
                </p>

                <Link
                  href={app.href}
                  className="mt-[10px] inline-flex items-center gap-2 text-[14px] font-semibold text-[#2d8fca] transition hover:text-[#ff9f1a]"
                >
                  Learn More
                  <span className="text-[17px] leading-none">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-[82px] max-w-[930px] rounded-[7px] bg-[#4c98c3] px-[42px] py-[40px]">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h3 className="max-w-[660px] text-[25px] font-bold leading-[1.35] tracking-[-0.04em] text-white md:text-[28px]">
              Let’s discuss how our proven Shopify expertise can drive similar
              results for your eCommerce business.
            </h3>

            <Link
              href="/schedule-a-call"
              className="shrink-0 rounded-full bg-[#ffab2e] px-7 py-3.5 text-[14px] font-bold text-black transition hover:bg-[#ffc15a]"
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