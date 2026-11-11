import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import BlogExplorer, { type BlogPost } from "./BlogExplorer";

export const metadata: Metadata = {
  title: "Blog & Insights | Magnetic Solution Limited",
  description:
    "Practical thinking on software engineering, cloud, AI, security and building teams that ship — written by the people who do the work at Magnetic Solution Limited.",
};

const featured: BlogPost = {
  slug: "legacy-modernisation",
  category: "Digital Transformation",
  title:
    "The hidden cost of legacy systems — and how to modernise without disruption",
  excerpt:
    "Legacy platforms quietly drain budgets and slow every release. Here's a pragmatic, low-risk approach to modernisation that keeps the business running while you rebuild for the future.",
  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
  date: "October 2025",
  readTime: "8 min read",
};

const posts: BlogPost[] = [
  {
    slug: "ai-pilots-to-production",
    category: "AI & Data",
    title: "From pilots to production: making AI deliver real business value",
    excerpt:
      "Most AI initiatives stall after the pilot. We break down what separates the programmes that scale from those that fade away.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    date: "October 2025",
    readTime: "6 min read",
  },
  {
    slug: "cloud-cost-optimisation",
    category: "Cloud",
    title: "A practical guide to cloud cost optimisation",
    excerpt:
      "Right-sizing, reserved capacity and architectural discipline can cut cloud spend dramatically without hurting performance.",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop",
    date: "September 2025",
    readTime: "7 min read",
  },
  {
    slug: "api-design",
    category: "Engineering",
    title: "Designing APIs that developers actually love",
    excerpt:
      "Consistency, clear errors and thoughtful versioning turn an API from a chore into a product people adopt.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
    date: "September 2025",
    readTime: "5 min read",
  },
  {
    slug: "distributed-teams",
    category: "Talent",
    title: "Building high-performing distributed engineering teams",
    excerpt:
      "Remote delivery works when you invest in communication, ownership and the right rituals. Here's how we do it.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    date: "August 2025",
    readTime: "6 min read",
  },
  {
    slug: "security-by-design",
    category: "Security",
    title: "Security by design: shifting left without slowing down",
    excerpt:
      "Threat modelling and automated scanning let teams ship fast and safely when security is baked into the pipeline.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    date: "August 2025",
    readTime: "5 min read",
  },
  {
    slug: "mvp-discovery",
    category: "Product",
    title: "Why MVPs fail — and the discovery habits that prevent it",
    excerpt:
      "A shipped MVP is not the goal. Understanding what to learn first is what keeps a product on the path to market fit.",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop",
    date: "July 2025",
    readTime: "7 min read",
  },
];

const categories = [
  "All",
  "Digital Transformation",
  "AI & Data",
  "Cloud",
  "Engineering",
  "Talent",
  "Security",
  "Product",
];

export default function BlogPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white px-6 pb-14 pt-14 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-[1240px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
            Blog
          </span>
          <h1 className="mt-6 max-w-[820px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px]">
            Insights &amp; ideas from the teams that ship
          </h1>
          <p className="mt-5 max-w-[640px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">
            Practical thinking on software engineering, cloud, AI, security and
            building teams that ship — written by the people doing the work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920]"
            >
              See how it applies in practice
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
            >
              Browse resources
            </Link>
          </div>
        </div>
      </section>

      <BlogExplorer featured={featured} posts={posts} categories={categories} />

      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
            <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[36px]">
                  Want insight like this for your roadmap?
                </h2>
                <p className="mt-3 max-w-[620px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">
                  Get practical engineering and technology perspective from our
                  team &mdash; applied to your product, your stack and your
                  constraints.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="/schedule-a-call"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920]"
                >
                  Book a discovery call
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
