import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "Industries | Brain Station 23",
  description: "Deep domain expertise across 130+ industries — fintech, retail, education, healthcare, telecom and more.",
};

const data: PageData = {
  "eyebrow": "Industries",
  "title": "Deep domain experience across 130+ sectors",
  "description": "We combine industry context with engineering depth to ship software that fits regulation, workflows and customers from day one.",
  "intro": [
    "Every sector has its own constraints — compliance, integrations, seasonality, data sensitivity. We've delivered 2500+ projects across 130+ industries, so we start from patterns that already work.",
    "Explore the industries where we go deepest."
  ],
  "featuresTitle": "Where we're strongest",
  "features": [
    {
      "icon": "banknote",
      "title": "Fintech",
      "description": "Banking, lending, wallets and payment infrastructure.",
      "href": "/fintech"
    },
    {
      "icon": "cart",
      "title": "Retail & E-commerce",
      "description": "Commerce platforms, omnichannel and storefront innovation.",
      "href": "/retail"
    },
    {
      "icon": "graduation",
      "title": "Education",
      "description": "Learning platforms, assessment and content delivery.",
      "href": "/education"
    },
    {
      "icon": "car",
      "title": "Automotive",
      "description": "Connected vehicles, dealer systems and after-sales platforms.",
      "href": "/automotive"
    },
    {
      "icon": "heart",
      "title": "Pharma & Healthcare",
      "description": "Regulated data, clinical workflows and patient platforms.",
      "href": "/pharma"
    },
    {
      "icon": "network",
      "title": "Telecom",
      "description": "BSS/OSS, self-service and network-driven products.",
      "href": "/telecom"
    },
    {
      "icon": "rocket",
      "title": "Startups",
      "description": "MVPs and scalable foundations for fast-moving founders.",
      "href": "/startup"
    },
    {
      "icon": "laptop",
      "title": "Software & ITES",
      "description": "Product engineering for software companies and enablement teams.",
      "href": "/software-ites"
    }
  ],
  "stats": [
    {
      "value": "130+",
      "label": "Industries served"
    },
    {
      "value": "2500+",
      "label": "Projects delivered"
    },
    {
      "value": "20+",
      "label": "Countries"
    },
    {
      "value": "98%",
      "label": "Client retention"
    }
  ],
  "cta": {
    "title": "Don't see your industry?",
    "description": "Chances are we've built in it. Ask us for a relevant reference.",
    "primaryLabel": "Talk to an expert",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "Browse case studies",
    "secondaryHref": "/case-studies"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
