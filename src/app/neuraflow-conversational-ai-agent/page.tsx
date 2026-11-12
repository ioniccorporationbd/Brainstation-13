import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  CircleDot,
  MessagesSquare,
  Plug,
  ShieldCheck,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("NeuraFlow | Magnetic Solution Limited"),
    description: t("NeuraFlow deploys conversational AI agents grounded in your own knowledge that resolve real requests and escalate gracefully."),
  };
}

export default async function Page() {
  const { t } = await getTranslator();
  return (
    <main>
      <section className="bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Product · AI agents")}</span>
            <h1 className="mt-6 max-w-[640px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">{t("Conversational AI agents that actually resolve requests")}</h1>
            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">{t("NeuraFlow agents are grounded in your knowledge base and tools, so they answer accurately, act on real tasks and hand off to a person when the situation calls for it.")}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Schedule a call")}<ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Send a brief")}</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop"
              alt={t("Abstract visualisation of an AI system processing conversation data")}
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-10">
        <dl className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Grounded")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Answers drawn from your own sources")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Channels")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Web, app, chat and messaging")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Actions")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Tickets, bookings, record updates")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Handoff")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Escalation to a human when needed")}</dd>
          </div>
        </dl>
      </section>

      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Why NeuraFlow")}</p>
            <h2 className="mt-3 max-w-[620px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Deflection without resolution is not a saving")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("A bot that closes the chat has not solved anything if the customer comes back tomorrow. NeuraFlow is built around resolution: retrieval over your documents and systems, actions against your tools, and a clean escalation path when confidence is low.")}</p>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("Guardrails, analytics and human handoff keep every conversation safe, auditable and measurable.")}</p>
          </div>
          <div className="rounded-xl border border-[#ececec] bg-white p-7 md:p-8">
            <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("What the agent runs on")}</h3>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#55585e]">{t("Your documentation, policies and product data as the knowledge source")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#55585e]">{t("Connectors to ticketing, booking and record systems for real actions")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#55585e]">{t("Policy controls that limit what an agent may say or do")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#55585e]">{t("Conversation logs and quality signals for review")}</span>
              </li>
            </ul>
            <p className="mt-6 rounded-lg bg-[#fafafa] px-4 py-3.5 text-[13px] leading-[1.6] text-[#55585e]">{t("Deployments start with a scoped pilot on one channel and a defined escalation rule, then widen once quality is proven.")}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Capabilities")}</p>
          <h2 className="mt-3 max-w-[760px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Built for real conversations")}</h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.7] text-[#55585e]">{t("The pieces that make an agent useful in production, not just in a demo.")}</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Bot size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Conversational AI")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Natural, context-aware dialogue across text and voice.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Brain size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Knowledge grounding")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Retrieval over your documents and systems for accurate answers.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <MessagesSquare size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Multi-channel")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Web, app, chat and messaging — one agent brain everywhere.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Plug size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Actions & integrations")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Agents that create tickets, book slots and update records.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <ShieldCheck size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Guardrails")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Policy controls, escalation rules and human-in-the-loop review.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <BarChart3 size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Analytics")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Conversation quality, resolution and cost metrics.")}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Rollout")}</p>
          <h2 className="mt-3 max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("How a NeuraFlow pilot runs")}</h2>
          <ol className="mt-10 space-y-4">
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                01
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">{t("Knowledge audit")}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">{t("We inventory the sources that answer real questions and remove what would mislead an agent.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                02
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">{t("Scope one channel")}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">{t("A single channel and a defined request set keep the pilot measurable.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                03
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">{t("Ground and test")}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">{t("Retrieval is tuned against real transcripts before customers see it.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                04
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">{t("Escalation rules")}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">{t("Clear conditions decide when a human takes over, with full context passed along.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                05
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">{t("Review and widen")}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">{t("Quality signals decide whether to add channels, actions or languages.")}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-white px-6 pb-[72px] pt-[8px] md:pb-[96px]">
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">{t("See NeuraFlow handle your real workflows")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">{t("A live demo uses your own questions, not a scripted happy path.")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Book a demo")}<ArrowRight size={17} />
              </Link>
              <Link
                href="/ml-ai-development"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Explore AI services")}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
