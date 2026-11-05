import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "E-commerce | Brain Station 23",
  description: "Commerce experiences built to convert and scale — storefronts, checkout, fulfilment and growth analytics.",
};

const data: PageData = {
  "eyebrow": "Industry · E-commerce",
  "title": "Commerce experiences built to convert and scale",
  "description": "From storefronts and checkout to fulfilment and analytics — we build e-commerce that performs under real traffic and real growth.",
  "intro": [
    "Online buyers expect speed, clarity and trust at every step. We design commerce journeys that reduce friction and lift conversion, backed by architecture that scales through peak season.",
    "Whether you're launching a new brand or replatforming an established catalogue, we own the full stack."
  ],
  "featuresTitle": "What we build in commerce",
  "features": [
    {
      "icon": "bag",
      "title": "Storefront experiences",
      "description": "Fast, accessible, mobile-first storefronts that reflect your brand."
    },
    {
      "icon": "card",
      "title": "Payments & checkout",
      "description": "Local and global gateways, wallets, BNPL and abandoned-cart recovery."
    },
    {
      "icon": "truck",
      "title": "Logistics & fulfilment",
      "description": "Inventory sync, shipping and order orchestration across channels."
    },
    {
      "icon": "chart",
      "title": "Growth analytics",
      "description": "Attribution, funnel and cohort analytics to guide merchandising."
    },
    {
      "icon": "repeat",
      "title": "Omnichannel",
      "description": "Connected web, app, market and store experiences with one source of truth."
    },
    {
      "icon": "target",
      "title": "Conversion optimisation",
      "description": "Experimentation and Core Web Vitals tuning to raise revenue per visit."
    }
  ],
  "stats": [
    {
      "value": "3x",
      "label": "Faster checkout flows"
    },
    {
      "value": "99.9%",
      "label": "Peak-season uptime"
    },
    {
      "value": "45%",
      "label": "Avg. conversion lift"
    },
    {
      "value": "120+",
      "label": "Commerce builds"
    }
  ],
  "cta": {
    "title": "Ready to grow your commerce revenue?",
    "description": "Let's audit your storefront and find the fastest wins first.",
    "primaryLabel": "Book a commerce audit",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "View case studies",
    "secondaryHref": "/case-studies"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
