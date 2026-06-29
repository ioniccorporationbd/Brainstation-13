import Link from "next/link";

const relatedPosts = [
  {
    category: "ECOMMERCE",
    title: "E-Invoicing in Malaysia: 4 Key Challenges & Solutions for E-Invoicing",
    description:
      "Malaysia is entering a new era of tax compliance with the mandatory adoption of e-invoicing, set to roll out in phases from August 2024. But...",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/e-invoicing-in-malaysia",
  },
  {
    category: "Machine Learning & AI",
    title: "Implement AI-First Software Engineering For Your Business",
    description:
      "The software industry faces a critical question: How can enterprises accelerate delivery without sacrificing quality or compliance? AI-first...",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/ai-first-software-engineering",
  },
  {
    category: "LMS",
    title: "How to Improve LMS Utilization for a Remote Workforce",
    description:
      "Due to the COVID-19 pandemic, businesses have adapted to the changing industry landscape, resulting in a shift towards...",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/improve-lms-utilization",
  },
];

export default function RelatedBlogsSection() {
  return (
    <section className="relative bg-white px-6 py-[92px] text-[#071F49]">
      <div className="mx-auto max-w-[1220px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-[58px] font-light leading-none tracking-[-0.065em] text-[#11182f] md:text-[66px]">
              You might also like
            </h2>
          </div>

          <div className="lg:pt-1">
            <p className="max-w-[520px] text-[22px] font-medium leading-[1.35] tracking-[-0.04em] text-[#42637a]">
              Look through to find the perfect Blockchain/Web3 solution for your
              needs.
            </p>

            <Link
              href="/blog"
              className="mt-8 inline-flex rounded-full bg-[#ffab2e] px-7 py-4 text-[16px] font-bold text-black transition hover:bg-[#ffc15a]"
            >
              Latest in Blockchain/Web3
            </Link>
          </div>
        </div>

        <div className="mt-[82px] grid grid-cols-1 gap-[32px] md:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((post) => (
            <article key={post.title} className="group">
              <Link href={post.href} className="block">
                <div className="h-[188px] w-full overflow-hidden rounded-[8px] bg-[#f2f6fa]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-[26px]">
                  <span className="inline-flex rounded-full bg-[#e5f1f7] px-4 py-1.5 text-[18px] font-bold leading-none tracking-[-0.04em] text-[#42637a]">
                    {post.category}
                  </span>

                  <h3 className="mt-5 min-h-[105px] text-[25px] font-bold leading-[1.35] tracking-[-0.055em] text-[#071F49]">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-[19px] font-medium leading-[1.35] tracking-[-0.04em] text-[#42637a]">
                    {post.description}
                  </p>

                  <span className="mt-9 inline-flex items-center gap-3 text-[17px] font-semibold text-[#ff9f1a]">
                    View Blog
                    <span className="text-[22px] leading-none">→</span>
                  </span>
                </div>
              </Link>
            </article>
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