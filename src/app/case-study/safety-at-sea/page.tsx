import type { Metadata } from "next";
import StandardPage, { type PageData } from "@/components/resource-kit/StandardPage";

export const metadata: Metadata = {
  title: "Safety at Sea Case Study | Brain Station 23",
  description: "An IoT boat-safety platform giving crews and authorities real-time visibility to prevent and respond to incidents at sea.",
};

const data: PageData = {
  "eyebrow": "Case Study · IoT",
  "title": "Safety at Sea — IoT for stronger maritime security",
  "description": "An IoT-based boat safety system that gives crews and authorities real-time visibility to prevent and respond to incidents at sea.",
  "intro": [
    "Small fishing fleets and coastal vessels operate with limited connectivity and visibility, putting crews at risk when weather or engine trouble hits.",
    "We designed and built an IoT safety platform that streams vessel location, conditions and alarms to owners and rescue services — even on constrained networks."
  ],
  "featuresTitle": "What we built",
  "features": [
    {
      "icon": "network",
      "title": "Vessel telemetry",
      "description": "Location, engine and environmental sensors streamed in real time."
    },
    {
      "icon": "shield",
      "title": "Emergency alarms",
      "description": "Instant SOS and boundary alerts to owners and responders."
    },
    {
      "icon": "cloud",
      "title": "Offline resilience",
      "description": "Store-and-forward sync for low-coverage coastal networks."
    },
    {
      "icon": "chart",
      "title": "Command dashboard",
      "description": "A live fleet map and incident timeline for authorities."
    },
    {
      "icon": "phone",
      "title": "Mobile alerts",
      "description": "Push and SMS notifications the moment something's wrong."
    },
    {
      "icon": "line",
      "title": "Analytics",
      "description": "Incident trends that inform prevention, not just response."
    }
  ],
  "stats": [
    {
      "value": "40%",
      "label": "Fewer incidents"
    },
    {
      "value": "<5s",
      "label": "Alert latency"
    },
    {
      "value": "1000+",
      "label": "Vessels tracked"
    },
    {
      "value": "24/7",
      "label": "Monitoring"
    }
  ],
  "bullets": {
    "title": "The results that mattered",
    "items": [
      "Faster rescue coordination when incidents occur",
      "Owners gained real-time visibility across their fleet",
      "Authorities reduced response time with live dashboards",
      "A platform that works where connectivity is thin"
    ]
  },
  "cta": {
    "title": "Have a complex IoT problem?",
    "description": "Let's design a system that works in the real world.",
    "primaryLabel": "Talk to an expert",
    "primaryHref": "/schedule-a-call",
    "secondaryLabel": "More case studies",
    "secondaryHref": "/case-studies"
  }
};

export default function Page() {
  return <StandardPage data={data} />;
}
