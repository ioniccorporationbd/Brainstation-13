import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "E-commerce Development | Brain Station 23",
  description: "Headless, composable commerce engineering — storefronts and back ends that load fast, integrate cleanly and scale.",
};

const data: PageData = {
  "eyebrow": "Service · E-commerce Development",
  "title": "Headless, composable commerce engineering",
  "description": "We build storefronts and commerce back ends that load fast, integrate cleanly and scale without re-platforming pain.",
  "intro": [
    "Modern commerce is composable: a headless storefront, an API-first back end and best-of-breed services wired together. We design and build that stack so marketing can move fast without breaking engineering.",
    "From Shopify and headless frameworks to custom basket and checkout logic, we deliver measurable revenue impact."
  ],
  "featuresTitle": "What we deliver",
  "features": [
    {
      "icon": "bag",
      "title": "Composable storefronts",
      "description": "Next.js and headless storefronts optimised for speed and SEO."
    },
    {
      "icon": "layers",
      "title": "Headless CMS & PIM",
      "description": "Content and product data models your team can actually manage."
    },
    {
      "icon": "card",
      "title": "Payments & checkout",
      "description": "Secure gateways, wallets, subscriptions and checkout optimisation."
    },
    {
      "icon": "target",
      "title": "Search & merchandising",
      "description": "Relevance-tuned search, facets and personalised recommendations."
    },
    {
      "icon": "zap",
      "title": "Performance engineering",
      "description": "Core Web Vitals, edge caching and conversion-focused tuning."
    },
    {
      "icon": "plug",
      "title": "Integrations",
      "description": "ERP, CRM, OMS and marketing tools connected end to end."
    }
  ],
  "stats": [
    {
      "value": "120+",
      "label": "Commerce builds"
    },
    {
      "value": "45%",
      "label": "Avg. conversion lift"
    },
    {
      "value": "<1s",
      "label": "Median LCP"
    },
    {
      "value": "99.9%",
      "label": "Uptime"
    }
  ],
  "cta": {
    "title": "Replatforming or launching?",
    "description": "We'll scope the fastest safe path to a high-performing storefront.",
    "primaryLabel": "Book a commerce audit",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "Browse case studies",
    "secondaryHref": "/case-studies"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
