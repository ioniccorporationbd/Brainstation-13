import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "Swapno Partnership | Brain Station 23",
  description: "Combining Swapno's platform with Brain Station 23's engineering to deliver faster, safer outcomes for joint clients.",
};

const data: PageData = {
  "eyebrow": "Solution Partner · Swapno",
  "title": "Better together with Swapno",
  "description": "A partnership that combines Swapno's platform with Brain Station 23's engineering to deliver faster, safer outcomes for joint clients.",
  "intro": [
    "Brain Station 23 and Swapno work as one extended team. Swapno brings its platform and domain expertise; we bring senior engineering, delivery discipline and scale.",
    "Together we shorten time-to-value for clients and keep quality high from pilot to production."
  ],
  "featuresTitle": "What the partnership gives you",
  "features": [
    {
      "icon": "handshake",
      "title": "Joint solution design",
      "description": "Architecture and scope shaped by both teams together."
    },
    {
      "icon": "rocket",
      "title": "Faster delivery",
      "description": "Proven accelerators and reusable components shorten timelines."
    },
    {
      "icon": "layers",
      "title": "Engineering depth",
      "description": "Senior specialists across AI, cloud and enterprise stacks."
    },
    {
      "icon": "shield",
      "title": "Quality assurance",
      "description": "Shared QA and security standards on every engagement."
    },
    {
      "icon": "headphones",
      "title": "Ongoing support",
      "description": "Combined support and SLAs long after launch."
    },
    {
      "icon": "target",
      "title": "Shared accountability",
      "description": "One roadmap and one point of contact for the client."
    }
  ],
  "stats": [
    {
      "value": "2x",
      "label": "Faster time-to-value"
    },
    {
      "value": "100%",
      "label": "Jointly delivered"
    },
    {
      "value": "24/7",
      "label": "Combined support"
    },
    {
      "value": "1",
      "label": "Point of contact"
    }
  ],
  "cta": {
    "title": "Explore a joint engagement",
    "description": "Tell us your goal and we'll bring the right combined team.",
    "primaryLabel": "Talk to us",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "See our work",
    "secondaryHref": "/case-studies"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
