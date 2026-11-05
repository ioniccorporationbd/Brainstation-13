import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "Anupom Syam Testimonial | Brain Station 23",
  description: "Anupom Syam, Founder & CEO at Tackle, on how Brain Station 23 delivered their fintech platform 8X faster than expected.",
};

const data: PageData = {
  "eyebrow": "Testimonial · Fintech",
  "title": "“8X faster than we expected”",
  "description": "Anupom Syam, Founder & CEO at Tackle, on how Brain Station 23's resource augmentation transformed their development velocity.",
  "intro": [
    "“Brain Station 23's resource augmentation transformed our development velocity. Their AI-powered approach delivered our fintech platform 8X faster than expected.”",
    "The engagement blended senior fintech engineers with AI-assisted delivery, letting a lean founding team ship a production platform without building a large in-house department."
  ],
  "featuresTitle": "What made the difference",
  "features": [
    {
      "icon": "banknote",
      "title": "Senior fintech team",
      "description": "Engineers who understood regulated finance from day one."
    },
    {
      "icon": "sparkles",
      "title": "AI-assisted delivery",
      "description": "Accelerated build without compromising quality."
    },
    {
      "icon": "users",
      "title": "Elastic capacity",
      "description": "A team that scaled up around key milestones."
    },
    {
      "icon": "target",
      "title": "Ownership",
      "description": "A partner accountable for outcomes, not tickets."
    },
    {
      "icon": "lock",
      "title": "Security-first",
      "description": "Compliance built into every sprint."
    },
    {
      "icon": "zap",
      "title": "Speed",
      "description": "8X faster than the original plan."
    }
  ],
  "stats": [
    {
      "value": "8X",
      "label": "Faster delivery"
    },
    {
      "value": "5.0",
      "label": "Clutch rating"
    },
    {
      "value": "Fintech",
      "label": "Domain"
    },
    {
      "value": "Founder",
      "label": "Perspective"
    }
  ],
  "cta": {
    "title": "Get the same speed advantage",
    "description": "See how augmentation can accelerate your roadmap.",
    "primaryLabel": "Book a discovery call",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "Read more stories",
    "secondaryHref": "/testimonials"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
