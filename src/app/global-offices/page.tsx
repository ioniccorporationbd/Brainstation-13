import type { Metadata } from "next";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

import {
  ResourceHero,
  Section,
  SectionHeader,
  StatBand,
  CtaBanner,
} from "@/components/resource-kit/ui";

export const metadata: Metadata = {
  title: "Global Offices | Brain Station 23",
  description:
    "Brain Station 23 delivers from offices across Bangladesh, the United States, the United Arab Emirates, Germany, Japan and Malaysia — teams close to you.",
};

type Office = {
  country: string;
  city: string;
  flag: string;
  role: string;
  hours: string;
};

const offices: Office[] = [
  { country: "Bangladesh", city: "Dhaka", flag: "/images/offices/bangladesh.svg", role: "Global Headquarters", hours: "Sun–Thu · 9am–6pm" },
  { country: "United States", city: "New York", flag: "/images/offices/usa.svg", role: "North America", hours: "Mon–Fri · 9am–6pm" },
  { country: "United Arab Emirates", city: "Dubai", flag: "/images/offices/uae.svg", role: "Middle East & Africa", hours: "Sun–Thu · 9am–6pm" },
  { country: "Germany", city: "Frankfurt", flag: "/images/offices/germany.svg", role: "Europe", hours: "Mon–Fri · 9am–6pm" },
  { country: "Japan", city: "Tokyo", flag: "/images/offices/japan.svg", role: "APAC", hours: "Mon–Fri · 9am–6pm" },
  { country: "Malaysia", city: "Kuala Lumpur", flag: "/images/offices/malaysia.svg", role: "Southeast Asia", hours: "Mon–Fri · 9am–6pm" },
];

const stats = [
  { value: "6", label: "Countries" },
  { value: "800+", label: "Specialists" },
  { value: "24/7", label: "Delivery coverage" },
  { value: "1", label: "Accountable partner" },
];

export default function GlobalOfficesPage() {
  return (
    <main>
      <ResourceHero
        eyebrow="Global Offices"
        title="Close to where you are"
        description="One connected team, six time zones. From our headquarters in Dhaka to delivery hubs across four continents, we bring senior engineering to clients wherever they work."
        image="/images/brands/team-photo.webp"
        imageAlt="Brain Station 23 global team"
      />

      <Section>
        <SectionHeader
          eyebrow="Our Locations"
          title="Where we deliver from"
          description="Each office blends local account leadership with shared engineering, so every client gets proximity and depth."
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <div
              key={office.country}
              className="group rounded-[16px] border border-[#e6edf5] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#cfe0ef] hover:shadow-[0_22px_50px_rgba(17,30,64,0.10)]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={office.flag}
                  alt={`${office.country} flag`}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border border-[#e6edf5] object-cover"
                />
                <div>
                  <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-[#050b18]">
                    {office.city}
                  </h3>
                  <p className="text-[14px] text-[#5a6b7d]">{office.country}</p>
                </div>
              </div>
              <div className="mt-6 space-y-3 border-t border-[#eef4f9] pt-5">
                <p className="flex items-center gap-2 text-[14px] font-medium text-[#050b18]">
                  <MapPin size={15} strokeWidth={1.9} className="text-[#3f93cf]" />
                  {office.role}
                </p>
                <p className="flex items-center gap-2 text-[14px] text-[#5a6b7d]">
                  <Clock size={15} strokeWidth={1.9} className="text-[#3f93cf]" />
                  {office.hours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <StatBand stats={stats} tone="dark" />

      <Section>
        <div className="mx-auto max-w-[820px] rounded-[18px] border border-[#e6edf5] bg-[#f9fbfd] p-10 text-center">
          <h2 className="text-[26px] font-medium tracking-[-0.03em] text-[#050b18] md:text-[32px]">
            Not near an office? That&apos;s fine.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[#5a6b7d]">
            Most of our work is delivered remotely with overlapping hours in your timezone.
            Distance has never been a barrier to shipping great software.
          </p>
          <Link
            href="/schedule-a-call"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#111E40] px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1c2b52]"
          >
            Book a call in your timezone
            <ArrowRight size={18} strokeWidth={2.1} />
          </Link>
        </div>
      </Section>

      <CtaBanner
        title="Want to meet the team?"
        description="Schedule a call and we'll connect you with the office closest to you."
        primary={{ label: "Schedule a call", href: "/schedule-a-call" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </main>
  );
}
