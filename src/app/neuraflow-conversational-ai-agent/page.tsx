import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "NeuraFlow | Brain Station 23",
  description: "NeuraFlow deploys AI agents grounded in your knowledge that resolve real requests and escalate gracefully.",
};

const data: PageData = {
  "eyebrow": "Product · AI Solution",
  "title": "NeuraFlow — conversational AI agents that actually help",
  "description": "Deploy AI agents that understand your business, resolve real requests and escalate gracefully — grounded in your own knowledge.",
  "intro": [
    "Chatbots that deflect but never resolve frustrate customers and teams alike. NeuraFlow agents are grounded in your knowledge base and tools, so they answer accurately and act on real tasks.",
    "Guardrails, analytics and human handoff keep every conversation safe and measurable."
  ],
  "featuresTitle": "Built for real conversations",
  "features": [
    {
      "icon": "bot",
      "title": "Conversational AI",
      "description": "Natural, context-aware dialogue across text and voice."
    },
    {
      "icon": "brain",
      "title": "Knowledge grounding",
      "description": "Retrieval over your docs and systems for accurate answers."
    },
    {
      "icon": "chat",
      "title": "Multi-channel",
      "description": "Web, app, chat and messaging — one brain everywhere."
    },
    {
      "icon": "plug",
      "title": "Actions & integrations",
      "description": "Agents that create tickets, book slots and update records."
    },
    {
      "icon": "shield",
      "title": "Guardrails",
      "description": "Policy controls, escalation and human-in-the-loop."
    },
    {
      "icon": "chart",
      "title": "Analytics",
      "description": "Conversation quality, resolution and cost metrics."
    }
  ],
  "stats": [
    {
      "value": "70%",
      "label": "Requests auto-resolved"
    },
    {
      "value": "24/7",
      "label": "Always available"
    },
    {
      "value": "40%",
      "label": "Lower support cost"
    },
    {
      "value": "100%",
      "label": "Grounded answers"
    }
  ],
  "cta": {
    "title": "Put AI agents to work",
    "description": "See NeuraFlow handle your real workflows in a live demo.",
    "primaryLabel": "Book a demo",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "Explore AI services",
    "secondaryHref": "/ml-ai-development"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
