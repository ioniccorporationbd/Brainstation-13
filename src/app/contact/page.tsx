import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Clock,
  Globe2,
  Handshake,
  MapPin,
  MessagesSquare,
} from "lucide-react";

import ContactForm from "./ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Contact | Magnetic Solution Limited"),
    description: t("Talk to Magnetic Solution Limited about a new project, partnership or role. Send a message through the form and our team will respond within one business day."),
  };
}

const channels = [
  {
    icon: MessagesSquare,
    title: "Start a project",
    text: "Tell us what you are building and we will map the fastest credible path.",
    cta: "Book a discovery call",
    href: "/schedule-a-call",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    text: "Referrals, reselling or co-delivery — apply to the partner programme.",
    cta: "Join as partner",
    href: "/join-as-partner",
  },
  {
    icon: Briefcase,
    title: "Careers",
    text: "See the roles we are hiring for and apply directly through the form.",
    cta: "View open roles",
    href: "/career",
  },
  {
    icon: Clock,
    title: "Response time",
    text: "Every message reaches a person. We reply within one business day.",
    cta: "How we work",
    href: "/case-studies",
  },
];

export default async function ContactPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <section className="bg-white px-6 pb-12 pt-14 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-[1240px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Contact")}</span>
          <h1 className="mt-6 max-w-[820px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px]">{t("Let’s talk")}</h1>
          <p className="mt-5 max-w-[640px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">{t("Whether you have a project in mind, a partnership to explore or a question to ask — tell us what you need and we’ll get back to you quickly.")}</p>
        </div>
      </section>

      <section className="bg-white px-6 pb-16 md:pb-20">
        <div className="mx-auto grid max-w-[1240px] items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <h2 className="text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-black md:text-[26px]">{t("Tell us about your project")}</h2>
            <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Fill out the form and a member of our team will reach out to discuss how we can help.")}</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-4">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.title}
                  className="rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/40 md:p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                      <Icon size={19} strokeWidth={1.9} />
                    </span>
                    <h3 className="text-[16px] font-bold text-black">
                      {t(channel.title)}
                    </h3>
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.65] text-[#55585e]">
                    {t(channel.text)}
                  </p>
                  <Link
                    href={channel.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28] hover:text-[#a71920]"
                  >
                    {t(channel.cta)}
                    <ArrowRight size={14} strokeWidth={2.2} />
                  </Link>
                </div>
              );
            })}

            <div className="rounded-xl border border-[#ececec] bg-[#fafafa] p-5 md:p-6">
              <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#6b6f76]">{t("About direct channels")}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-[#55585e]">{t("A public email address, phone line and street address have not been verified for this site, so they are intentionally not published here rather than invented. Every message sent through the form is recorded and routed to the right team.")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Where we are")}</p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Based in Bangladesh, delivering worldwide")}</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-[#ececec] bg-white p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <MapPin size={19} strokeWidth={1.9} />
                </span>
                <h3 className="text-[16px] font-bold text-black">{t("Bangladesh — home base")}</h3>
              </div>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Our engineering and delivery team is based in Bangladesh, working with clients across multiple time zones.")}</p>
            </div>
            <div className="rounded-xl border border-[#ececec] bg-white p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <Globe2 size={19} strokeWidth={1.9} />
                </span>
                <h3 className="text-[16px] font-bold text-black">{t("Remote-first delivery")}</h3>
              </div>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-[#55585e]">{t("We collaborate remotely with clients wherever they are, with overlapping working hours agreed per engagement.")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
