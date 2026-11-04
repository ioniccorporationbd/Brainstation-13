import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

import {
  ResourceHero,
  Section,
  SectionHeader,
} from "@/components/resource-kit/ui";
import ContactForm from "@/components/resource-kit/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Brain Station 23",
  description:
    "Get in touch with Brain Station 23. Reach our team for new projects, partnerships or general inquiries — we respond within one business day.",
};

const contactCards = [
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@brainstation-23.com", "careers@brainstation-23.com"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+880 96 1234 5678", "Sun–Thu · 9am–6pm"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Dhaka, Bangladesh", "Global offices in 4 countries"],
  },
  {
    icon: Clock,
    title: "Response Time",
    lines: ["Within 1 business day", "Priority support for clients"],
  },
];

export default function ContactPage() {
  return (
    <main>
      <ResourceHero
        eyebrow="Resources · Contact"
        title="Let's Talk"
        description="Whether you have a project in mind, a partnership to explore or a question to ask, our team is ready to help. Tell us what you need and we'll get back to you quickly."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Team available to help customers"
      />

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Send a Message"
              title="Tell us about your project"
              description="Fill out the form and a member of our team will reach out to discuss how we can help."
            />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex gap-5 rounded-[14px] border border-[#e6edf5] bg-white p-6"
                >
                  <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[12px] bg-[#eef6fc] text-[#3f93cf]">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#050b18]">
                      {card.title}
                    </h3>
                    {card.lines.map((line) => (
                      <p key={line} className="mt-1 text-[15px] leading-[1.5] text-[#5a6b7d]">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <SectionHeader
          eyebrow="Global Presence"
          title="We're close to where you are"
          align="center"
        />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { country: "Bangladesh", city: "Dhaka (HQ)" },
            { country: "United States", city: "New York" },
            { country: "United Kingdom", city: "London" },
            { country: "United Arab Emirates", city: "Dubai" },
          ].map((office) => (
            <div
              key={office.country}
              className="rounded-[14px] border border-[#e6edf5] bg-white p-6 text-center"
            >
              <p className="text-[16px] font-semibold text-[#050b18]">{office.country}</p>
              <p className="mt-1 text-[14px] text-[#5a6b7d]">{office.city}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
