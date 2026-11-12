import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  ListChecks,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";

import CallForm from "./CallForm";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Schedule a Call | Magnetic Solution Limited"),
    description: t("Request a call with Magnetic Solution Limited — share your agenda and preferred date, and the team confirms the exact time by email."),
  };
}

const expectations = [
  {
    icon: Clock3,
    title: "30-minute technical call",
    body: "A focused conversation with the people who would actually do the work — engineering leads and a delivery owner.",
  },
  {
    icon: ListChecks,
    title: "Come with the constraint",
    body: "The timeline, the legacy system, the compliance boundary. The useful calls are the specific ones.",
  },
  {
    icon: Users,
    title: "No sales hand-off",
    body: "The same team that scopes the work stays on the account. Nothing is passed to a separate sales organisation.",
  },
];

const process = [
  {
    step: "1",
    title: "Send the request",
    body: "Use the form with your agenda and a preferred date. The request is recorded on our server immediately.",
  },
  {
    step: "2",
    title: "We confirm by email",
    body: "A person replies to the email you provide to agree the exact time and share the meeting details.",
  },
  {
    step: "3",
    title: "The call",
    body: "Thirty minutes, technical, with a short written summary of what was discussed and agreed afterwards.",
  },
];

export default async function ScheduleACallPage() {
  const { t } = await getTranslator();
  return (
    <main>
      {/* Hero + form */}
      <section className="bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Contact · Schedule a call")}</span>

            <h1 className="mt-6 max-w-[560px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px]">{t("Request a call with the delivery team")}</h1>

            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17px]">{t("Tell us what the call needs to cover and when suits you. This page submits a booking request — a person confirms the exact time by email, so nothing is booked automatically.")}</p>

            <div className="mt-9 space-y-5">
              {expectations.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                    <item.icon size={19} strokeWidth={1.9} />
                  </span>
                  <div>
                    <p className="text-[15.5px] font-bold text-black">
                      {t(item.title)}
                    </p>
                    <p className="mt-1 text-[14.5px] leading-[1.65] text-[#55585e]">
                      {t(item.body)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 rounded-xl border border-[#ececec] bg-[#fafafa] p-6">
              <h2 className="flex items-center gap-2 text-[15.5px] font-bold text-black">
                <ShieldCheck size={18} className="text-[#c91f28]" />{t("What this page does and does not do")}</h2>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-[#55585e]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c91f28]" />{t("Your request is stored server-side with a reference you can quote.")}</li>
                <li className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-[#55585e]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c91f28]" />{t("No calendar is connected, so a slot is never reserved automatically.")}</li>
                <li className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-[#55585e]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c91f28]" />{t("Confirmation always comes from a person replying to your email.")}</li>
              </ul>
            </div>
          </div>

          <div>
            <CallForm />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("What happens next")}</p>
          <h2 className="mt-3 max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Three steps, no auto-booking")}</h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {process.map((item) => (
              <article
                key={item.step}
                className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                  {item.step}
                </span>
                <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                  {t(item.title)}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                  {t(item.body)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative contact */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
                <CalendarDays size={15} />{t("Prefer to write?")}</p>
              <h2 className="mt-3 text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">{t("Send the details instead of booking time")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">{t("A written brief is often faster than a call. Use the contact page and the team replies with questions or a proposed plan.")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >
                <Mail size={17} />{t("Contact page")}</Link>
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("About us")}<ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
