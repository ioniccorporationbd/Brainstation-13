"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type BlogCategory = {
  name: string;
  count: number;
};

type BlogPost = {
  id: number;
  title: string;
  category: string;
  image: string;
  href: string;
};

const categories: BlogCategory[] = [
  { name: "All", count: 0 },
  { name: "AEM", count: 15 },
  { name: "AI", count: 1 },
  { name: "Analytics", count: 1 },
  { name: "AR VR", count: 10 },
  { name: "Business Intelligence", count: 2 },
  { name: "Cloud", count: 11 },
  { name: "CMS", count: 2 },
  { name: "Company News", count: 22 },
  { name: "Ecommerce", count: 18 },
  { name: "Education", count: 4 },
  { name: "ERP", count: 19 },
  { name: "Fintech", count: 11 },
  { name: "LMS", count: 21 },
  { name: "Machine Learning & AI", count: 18 },
  { name: "Mobile App", count: 24 },
  { name: "Outsourcing", count: 14 },
  { name: "Resource Augmentation", count: 2 },
  { name: "SAP", count: 1 },
  { name: "SharePoint", count: 2 },
  { name: "Software", count: 52 },
  { name: "Technologies", count: 76 },
  { name: "Uncategorized", count: 7 },
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "AI",
    title: "Top 10 AI Agent Workflow Automation Companies in 2026",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/top-ai-agent-workflow-automation-companies",
  },
  {
    id: 2,
    category: "LMS",
    title: "Top 15 LMS Development Company in the UK",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/top-lms-development-company-uk",
  },
  {
    id: 3,
    category: "Mobile App",
    title: "Top 15 Telehealth App Development Companies in USA",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/telehealth-app-development-companies",
  },
  {
    id: 4,
    category: "LMS",
    title: "Top 20 LMS Development Companies",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/top-20-lms-development-companies",
  },
  {
    id: 5,
    category: "Cloud",
    title: "Top 10 Cloud-native Application Development Companies in USA",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/cloud-native-application-development-companies",
  },
  {
    id: 6,
    category: "LMS",
    title: "Top 20 LMS Development Companies in USA",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/top-lms-development-companies-usa",
  },
  {
    id: 7,
    category: "AEM",
    title: "Best AEM Development Companies for Enterprise CMS",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/best-aem-development-companies",
  },
  {
    id: 8,
    category: "Analytics",
    title: "How Data Analytics Helps Modern Businesses Grow Faster",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/data-analytics-business-growth",
  },
  {
    id: 9,
    category: "AR VR",
    title: "AR VR Solutions for Training, Education and Customer Experience",
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/ar-vr-solutions",
  },
  {
    id: 10,
    category: "Business Intelligence",
    title: "Business Intelligence Tools for Smarter Decision Making",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/business-intelligence-tools",
  },
  {
    id: 11,
    category: "CMS",
    title: "Enterprise CMS Platforms for Scalable Digital Experiences",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/enterprise-cms-platforms",
  },
  {
    id: 12,
    category: "Company News",
    title: "Brain Station 23 Company Updates and Growth Stories",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/company-updates",
  },
  {
    id: 13,
    category: "Ecommerce",
    title: "Ecommerce Development Trends for Modern Retail Businesses",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/ecommerce-development-trends",
  },
  {
    id: 14,
    category: "Education",
    title: "Digital Education Platforms for Future-Ready Institutions",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/digital-education-platforms",
  },
  {
    id: 15,
    category: "ERP",
    title: "ERP Implementation Guide for Growing Enterprises",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/erp-implementation-guide",
  },
  {
    id: 16,
    category: "Fintech",
    title: "Fintech Software Development for Banks and Financial Institutions",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/fintech-software-development",
  },
  {
    id: 17,
    category: "Machine Learning & AI",
    title: "Machine Learning Solutions for Automation and Prediction",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/machine-learning-solutions",
  },
  {
    id: 18,
    category: "Outsourcing",
    title: "Software Outsourcing Benefits for Global Companies",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/software-outsourcing-benefits",
  },
  {
    id: 19,
    category: "Resource Augmentation",
    title: "Resource Augmentation for Fast Software Team Scaling",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/resource-augmentation",
  },
  {
    id: 20,
    category: "SAP",
    title: "SAP Integration and Enterprise Business Transformation",
    image:
      "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/sap-integration",
  },
  {
    id: 21,
    category: "SharePoint",
    title: "SharePoint Solutions for Better Enterprise Collaboration",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/sharepoint-solutions",
  },
  {
    id: 22,
    category: "Software",
    title: "Custom Software Development for Digital Transformation",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/custom-software-development",
  },
  {
    id: 23,
    category: "Technologies",
    title: "Latest Technology Trends for Enterprise Innovation",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/latest-technology-trends",
  },
  {
    id: 24,
    category: "Uncategorized",
    title: "Useful Technology Insights and Company Articles",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/technology-insights",
  },
];

export default function BlogListingSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return blogPosts.slice(0, 6);
    }

    const matchedPosts = blogPosts.filter(
      (post) => post.category === activeCategory,
    );

    return matchedPosts.length > 0 ? matchedPosts : blogPosts.slice(0, 6);
  }, [activeCategory]);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-[90px] text-[#07112b]">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-10">
        {/* Left Category Menu */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="mb-6 text-[22px] font-black leading-tight tracking-[-0.04em] text-[#079ed8]">
            Blog categories
          </h2>

          <div className="space-y-3">
            {categories.map((category) => {
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex w-full items-center justify-between rounded-[5px] px-5 py-3.5 text-left text-[15px] font-bold tracking-[-0.025em] transition duration-300 ${
                    isActive
                      ? "bg-[#ffab2e] text-[#07112b] shadow-[0_14px_35px_rgba(255,171,46,0.22)]"
                      : "bg-[#f5f5f5] text-[#07112b] hover:bg-[#eaf6fc] hover:text-[#079ed8]"
                  }`}
                >
                  <span>{category.name}</span>

                  {category.name !== "All" && (
                    <span
                      className={`text-[11px] font-black ${
                        isActive ? "text-[#07112b]" : "text-[#111827]"
                      }`}
                    >
                      {category.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Blog Grid */}
        <div>
          <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={post.href} className="block">
                  <div className="overflow-hidden rounded-[8px] bg-[#f4f8fc] shadow-[0_20px_60px_rgba(17,30,64,0.08)]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-[255px] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                    />
                  </div>

                  <p className="mt-6 text-[13px] font-black uppercase tracking-[-0.015em] text-[#079ed8]">
                    {post.category}
                  </p>

                  <h3 className="mt-3 text-[28px] font-black leading-[1.14] tracking-[-0.06em] text-[#07112b] transition duration-300 group-hover:text-[#079ed8]">
                    {post.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-[70px] flex items-center gap-3">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                type="button"
                className={`flex h-11 w-11 items-center justify-center rounded-[5px] text-[14px] font-black transition duration-300 ${
                  page === 1
                    ? "bg-[#079ed8] text-white"
                    : "bg-[#f5f5f5] text-[#07112b] hover:bg-[#eaf6fc] hover:text-[#079ed8]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-[5px] bg-[#f5f5f5] text-[14px] font-black text-[#07112b] transition duration-300 hover:bg-[#eaf6fc] hover:text-[#079ed8]"
            >
              ...
            </button>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-[5px] bg-[#f5f5f5] text-[14px] font-black text-[#07112b] transition duration-300 hover:bg-[#eaf6fc] hover:text-[#079ed8]"
            >
              34
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}