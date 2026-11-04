import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import {
  ResourceHero,
  Section,
  SectionHeader,
  CtaBanner,
} from "@/components/resource-kit/ui";

export const metadata: Metadata = {
  title: "Blog | Brain Station 23",
  description:
    "Insights on software engineering, cloud, AI, digital transformation and building world-class technology teams from Brain Station 23.",
};

const featured = {
  category: "Digital Transformation",
  title: "The hidden cost of legacy systems — and how to modernise without disruption",
  excerpt:
    "Legacy platforms quietly drain budgets and slow every release. Here's a pragmatic, low-risk approach to modernisation that keeps the business running while you rebuild for the future.",
  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
  date: "October 2025",
  readTime: "8 min read",
};

const posts = [
  {
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
      <ResourceHero
        eyebrow="Resources · Blog"
        title="Insights & Ideas"
        description="Practical thinking on software engineering, cloud, AI, security and building teams that ship. Written by the people who do the work."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Writer at a desk with laptop and notebook"
      />

      <Section>
        <SectionHeader eyebrow="Featured" title="Latest from our team" />

        <article className="mt-12 grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[16px] border border-[#e6edf5] bg-white lg:grid-cols-2">
          <div className="group h-full overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.05] lg:h-full"
            />
          </div>
          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-3 text-[13px] font-semibold">
              <span className="rounded-full bg-[#eef6fc] px-3 py-1 text-[#3f93cf]">
                {featured.category}
              </span>
              <span className="text-[#8a96a5]">{featured.date}</span>
            </div>
            <h2 className="mt-5 text-[26px] font-semibold leading-[1.25] tracking-[-0.04em] text-[#050b18] md:text-[34px]">
              {featured.title}
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#5a6b7d] md:text-[17px]">
              {featured.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-4 text-[14px] text-[#8a96a5]">
              <span className="inline-flex items-center gap-1.5">
                <Clock size={15} /> {featured.readTime}
              </span>
            </div>
            <Link
              href="/blog"
              className="mt-7 inline-flex items-center gap-2 text-[16px] font-bold text-[#3f93cf] transition hover:gap-4 hover:text-[#2d8fca]"
            >
              Read article
              <ArrowRight size={17} strokeWidth={2.2} />
            </Link>
          </div>
        </article>

        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <span
              key={category}
              className={`rounded-full px-4 py-2 text-[14px] font-semibold ${
                index === 0
                  ? "bg-[#111E40] text-white"
                  : "border border-[#dbe5ef] bg-white text-[#42637a]"
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden rounded-[14px] border border-[#e6edf5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(17,30,64,0.10)]"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[200px] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3 text-[12px] font-semibold">
                  <span className="rounded-full bg-[#eef6fc] px-3 py-1 text-[#3f93cf]">
                    {post.category}
                  </span>
                  <span className="text-[#8a96a5]">{post.date}</span>
                </div>
                <h3 className="mt-4 text-[19px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#050b18]">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-[1.55] text-[#5a6b7d]">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[13px] text-[#8a96a5]">
                    <Clock size={14} /> {post.readTime}
                  </span>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#3f93cf] transition hover:gap-3 hover:text-[#2d8fca]"
                  >
                    Read
                    <ArrowRight size={15} strokeWidth={2.2} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Want insight like this in your inbox?"
        description="Get practical engineering and technology perspectives from our team — no fluff, just experience."
        primary={{ label: "Talk to Us", href: "/contact" }}
        secondary={{ label: "Explore Resources", href: "/resources" }}
      />
    </main>
  );
}
