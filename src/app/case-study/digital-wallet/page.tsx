import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "Digital Wallet Case Study | Brain Station 23",
  description: "A compliant digital wallet platform that brought secure everyday financial services to underbanked communities at scale.",
};

const data: PageData = {
  "eyebrow": "Case Study · Fintech",
  "title": "Fueling financial inclusion with digital wallets",
  "description": "A digital wallet platform that brought secure, everyday financial services to underbanked communities at national scale.",
  "intro": [
    "Access to simple financial services — payments, transfers, savings — remains out of reach for millions. Traditional banking infrastructure was too costly and slow to extend.",
    "We built a compliant, mobile-first wallet platform that onboards users in minutes and handles high transaction volumes reliably."
  ],
  "featuresTitle": "What we built",
  "features": [
    {
      "icon": "fingerprint",
      "title": "Onboarding & KYC",
      "description": "Fast, compliant identity verification in minutes."
    },
    {
      "icon": "wallet",
      "title": "Wallet & transfers",
      "description": "Peer-to-peer, merchant and bill payments with instant settlement."
    },
    {
      "icon": "lock",
      "title": "Security",
      "description": "Fraud detection, encryption and regulatory-grade controls."
    },
    {
      "icon": "server",
      "title": "Scale",
      "description": "Architecture built for millions of transactions."
    },
    {
      "icon": "users",
      "title": "Agent network",
      "description": "Cash-in / cash-out through local agent points."
    },
    {
      "icon": "chart",
      "title": "Analytics",
      "description": "Real-time monitoring of transactions and risk."
    }
  ],
  "stats": [
    {
      "value": "5M+",
      "label": "Registered users"
    },
    {
      "value": "99.99%",
      "label": "Transaction uptime"
    },
    {
      "value": "2 min",
      "label": "Avg. onboarding"
    },
    {
      "value": "National",
      "label": "Rollout"
    }
  ],
  "bullets": {
    "title": "Why it worked",
    "items": [
      "Financial services reached users with no prior bank account",
      "Onboarding dropped from days to minutes",
      "Transaction reliability held through peak load",
      "A foundation for lending, insurance and more"
    ]
  },
  "cta": {
    "title": "Building inclusive finance?",
    "description": "Talk to a team that has shipped fintech at national scale.",
    "primaryLabel": "Talk to an expert",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "More case studies",
    "secondaryHref": "/case-studies"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
