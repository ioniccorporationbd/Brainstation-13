import Link from "next/link";
import { getTranslator } from "@/i18n/server";

const relatedPosts = [
  {
    category: "ECOMMERCE",
    title: "Malaysia E-Invoicing: 4 Challenges & Fixes",
    description:
      "Malaysia is entering a new era of tax compliance with the mandatory adoption of e-invoicing, set to roll out in phases from August 2024. But...",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    href: "/blog",
  },
  {
    category: "Machine Learning & AI",
    title: "Implement AI-First Software Engineering",
    description:
      "The software industry faces a critical question: How can enterprises accelerate delivery without sacrificing quality or compliance? AI-first...",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    href: "/blog",
  },
  {
    category: "LMS",
    title: "How to Improve LMS Use for Remote Teams",
    description:
      "Due to the COVID-19 pandemic, businesses have adapted to the changing industry landscape, resulting in a shift towards...",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    href: "/blog",
  },
];

export default async function RelatedBlogsSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] text-[#0a0a0a] md:pb-[112px]">
      <div className="brand-container">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Insights")}</p>

            <h2 className="max-sm:mx-auto max-sm:text-center text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("You might also like")}</h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[520px] text-[15px] font-medium leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Look through to find the perfect Blockchain/Web3 solution for your needs.")}</p>

            <Link
              href="/blog"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-[#c91f28] px-7 py-3.5 text-[14px] font-bold text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
            >{t("Latest in Blockchain/Web3")}</Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((post) => (
            <article key={post.title} className="group h-full">
              <Link
                href={post.href}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#ececec] bg-white transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="h-[190px] w-full overflow-hidden bg-[#f7f7f7]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit rounded-full bg-[#fdecec] px-3 py-1.5 text-[11px] font-bold uppercase leading-none tracking-normal text-[#c91f28]">
                    {t(post.category)}
                  </span>

                  <h3 className="mt-4 text-[#0a0a0a] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                    {t(post.title)}
                  </h3>

                  <p className="mt-3 flex-1 text-[14.5px] font-medium leading-[1.6] text-[#52525B] text-pretty">
                    {t(post.description)}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-bold uppercase tracking-normal text-[#c91f28]">{t("View Blog")}<span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
