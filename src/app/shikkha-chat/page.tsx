import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { ElementType } from "react";
import {
  School,
  Sparkles,
  Presentation,
  Users,
  ShieldCheck,
  BarChart3,
  ClipboardCheck,
  HeartHandshake,
  Landmark,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  ShieldAlert,
  Building2,
  KeyRound,
  Layers,
  CalendarCheck,
  FileCheck2,
  Lock,
} from "lucide-react";
import { Section, SectionHeader, StatBand, CtaBanner } from "@/components/resource-kit/ui";

export const metadata: Metadata = {
  title: "Shikkha Chat — Education Management ERP | Magnetic Solution Limited",
  description:
    "Shikkha Chat is one connected education platform that unites school administration, AI-powered learning, teachers, students, parents and government oversight in a single secure system.",
};

/* ------------------------------------------------------------------ */
/*  Data (verified from the Shikkha Chat frontend: shikkha_chat_apps) */
/* ------------------------------------------------------------------ */

const coreModules: {
  icon: ElementType;
  title: string;
  summary: string;
  features: string[];
}[] = [
  {
    icon: School,
    title: "School & Institution Management",
    summary:
      "Run admissions, people, classes, attendance and analytics from a single admin dashboard.",
    features: [
      "Admin Dashboard",
      "Student Management",
      "Teacher Management",
      "Teacher Class Assignments",
      "Classes & Sections",
      "Attendance Management",
      "Academic Calendar",
      "Curriculum & Subjects",
      "School Analytics",
    ],
  },
  {
    icon: Sparkles,
    title: "AI-Powered Learning (AI Pathshala)",
    summary:
      "An adaptive learning layer with an AI tutor, smart lessons and a personalised study plan.",
    features: [
      "AI Tutor",
      "Smart Lessons",
      "Lesson Planner",
      "Online Quizzes",
      "Assessments",
      "Learning Progress",
      "Personalised Study Plan",
    ],
  },
  {
    icon: Presentation,
    title: "Teacher Tools",
    summary:
      "Everything a teacher needs to run their class, publish content and spot who needs help.",
    features: [
      "Teacher Dashboard",
      "Assigned Students",
      "Class Attendance",
      "Teaching Analytics",
      "Teaching Assignments",
      "Lesson Content Management",
      "AI Tutor Dataset Management",
      "Student Learning Interventions",
    ],
  },
  {
    icon: Users,
    title: "Parent & Guardian Portal",
    summary:
      "Parents follow attendance, results and study activity, and stay in touch with teachers.",
    features: [
      "Parent Dashboard",
      "Children",
      "Child Linking",
      "Student Attendance Tracking",
      "Assessment Results",
      "Weekly Learning Insights",
      "Teacher Messages",
      "Study Activity Monitoring",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Content Quality & AI Safety",
    summary:
      "Structured review of learning content plus responsible-AI monitoring, events and policy.",
    features: [
      "Content Review Queue",
      "Approved Learning Content",
      "Review History",
      "AI Safety Dashboard",
      "Flagged AI Content",
      "AI Safety Events",
      "AI Safety Policies",
    ],
  },
  {
    icon: BarChart3,
    title: "NGO & Government Oversight",
    summary:
      "Programme management and district-level monitoring of outcomes, enrolment and equity.",
    features: [
      "NGO Program Management",
      "Institution Monitoring",
      "Learning Outcomes",
      "Impact Analytics",
      "District-Level Oversight",
      "Enrolment Analytics",
      "Equity Indicators",
      "Aggregated Reports",
    ],
  },
];

const roles: {
  icon: ElementType;
  label: string;
  screen: string;
  who: string;
  caps: string[];
}[] = [
  {
    icon: School,
    label: "Administrator / School Admin",
    screen: "/images/shikkha/shikkha-admin.webp",
    who: "The person in charge of the institution: students, teachers, classes, routine, attendance, users and permissions.",
    caps: [
      "Set up classes, sections, subjects and curriculum",
      "Add students and teachers, then fix class assignments",
      "Manage users, roles and attendance; read school analytics",
    ],
  },
  {
    icon: GraduationCap,
    label: "Student",
    screen: "/images/shikkha/shikkha-student.webp",
    who: "You study, practise, take quizzes and follow your own progress.",
    caps: [
      "Read the AI Pathshala lessons published for your class",
      "Ask the AI Tutor, then take quizzes and assessments",
      "Track progress and build a personalised study plan",
    ],
  },
  {
    icon: Presentation,
    label: "Teacher",
    screen: "/images/shikkha/shikkha-teacher.webp",
    who: "You own your class's students, attendance, lessons and progress.",
    caps: [
      "See your class list and mark daily attendance",
      "Publish lessons, quizzes and assessments in AI Pathshala",
      "Spot learners who are behind and message parents",
    ],
  },
  {
    icon: Users,
    label: "Parent / Guardian",
    screen: "/images/shikkha/shikkha-parent.webp",
    who: "You follow your child's attendance, results, study activity and teacher messages.",
    caps: [
      "Link each child and view day-by-day attendance",
      "See assessment results and weekly learning insights",
      "Message teachers and monitor study activity",
    ],
  },
  {
    icon: ClipboardCheck,
    label: "Content Reviewer",
    screen: "/images/shikkha/shikkha-content-reviewer.webp",
    who: "You check lessons, questions and material for AI Pathshala and either approve them or send them back.",
    caps: [
      "Work the review queue, oldest items first",
      "Approve, reject with a reason, or request a revision",
      "Keep an audit trail through the review history",
    ],
  },
  {
    icon: ShieldAlert,
    label: "AI Safety Reviewer",
    screen: "/images/shikkha/shikkha-ai-safety.webp",
    who: "You watch risky AI usage, safety events, investigations and policy.",
    caps: [
      "Monitor the AI review queue and flagged messages",
      "Handle safety events and escalations first",
      "Run investigations and enforce AI safety policies",
    ],
  },
  {
    icon: HeartHandshake,
    label: "NGO Administrator",
    screen: "/images/shikkha/shikkha-ngo-admin.webp",
    who: "You oversee an education programme that runs across several institutions.",
    caps: [
      "Create programmes and add participating institutions",
      "Record interventions and measure learning outcomes",
      "Read impact analytics and export data for donors",
    ],
  },
  {
    icon: Landmark,
    label: "Government Officer",
    screen: "/images/shikkha/shikkha-government-officer.webp",
    who: "You review the district-level picture: enrolment, attendance, outcomes, equity and safety.",
    caps: [
      "Choose a district and drill into its institutions",
      "Track enrolment, attendance and equity indicators",
      "Review safety overview and download reports",
    ],
  },
];

const workflows: { icon: ElementType; title: string; steps: string }[] = [
  {
    icon: Layers,
    title: "Onboard a class",
    steps:
      "Administrator sets up Classes & Sections, then Subjects, then Curriculum — in that order. Students are added with class, section, roll, guardian contact and photo, and teachers are created and assigned to their classes.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance that reaches parents",
    steps:
      "The teacher marks each learner present, absent or on leave for a date and class. The record saves instantly, and the parent portal reflects attendance day by day.",
  },
  {
    icon: BookOpen,
    title: "The AI learning loop",
    steps:
      "The teacher publishes lessons and sets quizzes and assessments. Students read the lessons, ask the AI Tutor in their own words, and submit quizzes — progress and the personalised study plan update from the results.",
  },
  {
    icon: FileCheck2,
    title: "Quality and safety gate",
    steps:
      "Content flows into the Content Reviewer's queue where it is approved or sent back with a reason. In parallel, the AI Safety Reviewer watches flagged AI messages, safety events and escalations, and records investigations.",
  },
  {
    icon: BarChart3,
    title: "Oversight and impact",
    steps:
      "NGO staff record programmes, institutions and interventions and measure learning outcomes. Government officers read district enrolment, attendance, outcomes and equity, then download aggregated reports.",
  },
];

const useCases: { icon: ElementType; title: string; description: string }[] = [
  {
    icon: Building2,
    title: "For schools",
    description:
      "One admin spine for students, teachers, classes, attendance and analytics — replacing scattered spreadsheets and tools.",
  },
  {
    icon: Presentation,
    title: "For teachers",
    description:
      "Class rosters, attendance, lesson publishing and teaching analytics in a single focused dashboard.",
  },
  {
    icon: GraduationCap,
    title: "For students",
    description:
      "An AI tutor and a personalised study plan that adapt to each learner, from nursery to masters.",
  },
  {
    icon: Users,
    title: "For parents",
    description:
      "Real-time attendance, results and weekly insights, with a direct message line to teachers.",
  },
  {
    icon: HeartHandshake,
    title: "For NGOs",
    description:
      "Run multi-institution programmes and prove impact with outcome and coverage analytics.",
  },
  {
    icon: Landmark,
    title: "For government",
    description:
      "District-level oversight of enrolment, outcomes, equity and safety, backed by exportable reports.",
  },
];

/* ------------------------------------------------------------------ */
/*  Small building blocks                                             */
/* ------------------------------------------------------------------ */

function BrowserFrame({
  src,
  alt,
  url,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[16px] border border-[#e0e9f3] bg-white shadow-[0_26px_70px_rgba(17,30,64,0.12)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[#eef2f7] bg-[#f7fafd] px-4 py-3">
        <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
        <span className="h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
        <span className="h-[10px] w-[10px] rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-[6px] bg-white px-3 py-[3px] text-[11px] font-medium text-[#7a8798] ring-1 ring-[#e6edf5]">
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10] w-full bg-[#f4f8fc]">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 620px"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

function ModuleCard({
  module,
}: {
  module: { icon: ElementType; title: string; summary: string; features: string[] };
}) {
  const Icon = module.icon;
  return (
    <article className="flex flex-col rounded-[16px] border border-[#e6edf5] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#cfe0ef] hover:shadow-[0_22px_50px_rgba(17,30,64,0.10)]">
      <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#eef6fc] text-[#3f93cf]">
        <Icon size={26} strokeWidth={1.7} />
      </div>
      <h3 className="text-[20px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#050b18]">
        {module.title}
      </h3>
      <p className="mt-2 text-[15px] font-normal leading-[1.55] text-[#5a6b7d]">
        {module.summary}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {module.features.map((feature) => (
          <li
            key={feature}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#f4f8fc] px-3 py-[5px] text-[12.5px] font-medium text-[#42637a] ring-1 ring-[#e6edf5]"
          >
            <CheckCircle2 size={13} strokeWidth={2.4} className="text-[#3f93cf]" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ShikkhaChatPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f4f8fc] px-6 pb-[76px] pt-[64px]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1fr_1.08fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[13px] font-bold uppercase tracking-[0.1em] text-[#3f93cf] shadow-[0_10px_30px_rgba(17,30,64,0.06)]">
              <Sparkles size={15} strokeWidth={2.2} /> Education Management ERP
            </span>
            <h1 className="mt-6 text-[38px] font-medium leading-[1.06] tracking-[-0.055em] text-[#050b18] md:text-[56px]">
              The connected operating system for modern school education
            </h1>
            <p className="mt-6 max-w-[560px] text-[17px] font-medium leading-[1.5] tracking-[-0.01em] text-[#42637a] md:text-[20px]">
              Shikkha Chat brings school administration, AI-powered learning, teachers,
              students, parents and government oversight together in one secure platform —
              from nursery to masters.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffab2e] px-8 py-4 text-[15px] font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffc15a] hover:shadow-[0_16px_38px_rgba(255,171,46,0.35)]"
              >
                Request a Demo
                <ArrowRight size={18} strokeWidth={2.2} />
              </Link>
              <Link
                href="#dashboards"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8d7e6] bg-white px-8 py-4 text-[15px] font-bold text-[#0b2340] transition duration-300 hover:border-[#9fc0db] hover:bg-[#f6fafe]"
              >
                See the dashboards
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[14px] font-medium text-[#42637a]">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#3f93cf]" /> 6 core modules
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#3f93cf]" /> 47 product features
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#3f93cf]" /> 8 role dashboards
              </span>
            </div>
          </div>

          <div className="lg:pl-2">
            <BrowserFrame
              src="/images/shikkha/shikkha-admin.webp"
              alt="Shikkha Chat administrator dashboard"
              url="dash.shikkhachat.com/dashboard/admin"
              priority
            />
            <p className="mt-3 text-center text-[12.5px] font-medium text-[#7a8798]">
              The School Administrator dashboard, captured from the live Shikkha Chat app.
            </p>
          </div>
        </div>
      </section>

      <StatBand
        tone="dark"
        stats={[
          { value: "6", label: "Core modules" },
          { value: "47", label: "Product features" },
          { value: "8", label: "Role-based dashboards" },
          { value: "1", label: "Unified platform" },
        ]}
      />

      {/* Platform overview */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#3f93cf]">
              What is Shikkha Chat
            </p>
            <h2 className="mt-3 text-[32px] font-medium leading-[1.12] tracking-[-0.055em] text-[#050b18] md:text-[44px]">
              One platform connecting every part of a school
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-[1.6] text-[#5a6b7d] md:text-[17px]">
              <p>
                Shikkha Chat is a connected education operating system that links the whole
                school community — administration, teachers, students, parents and oversight
                bodies — inside a single, secure product.
              </p>
              <p>
                Instead of juggling separate tools for attendance, lessons, assessment and
                reporting, institutions get one consistent experience where every role sees
                exactly what it needs, and no one is left out of the loop.
              </p>
            </div>
            <ul className="mt-7 space-y-3">
              {[
                "One login for the whole school community — admins, teachers, students and parents.",
                "AI learning that adapts to each student through a personalised pathshala.",
                "Built-in content review and AI safety controls for responsible use.",
                "Real-time oversight for NGOs and government, from district to national level.",
                "Responsive and secure by design — works on any device.",
              ].map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eef6fc] text-[#3f93cf]">
                    <CheckCircle2 size={13} strokeWidth={2.6} />
                  </span>
                  <span className="text-[15px] font-medium leading-[1.5] text-[#374151] md:text-[16px]">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <BrowserFrame
            src="/images/shikkha/shikkha-student.webp"
            alt="Shikkha Chat student dashboard with AI Pathshala modules"
            url="dash.shikkhachat.com/dashboard/student"
          />
        </div>
      </Section>

      {/* Public school website */}
      <Section className="bg-white">
        <SectionHeader
          align="center"
          eyebrow="Public school website"
          title="Every institution also gets a complete public website"
          description="Shikkha Chat ships a complete, mobile-friendly 40+ page school website for every institution — home, governing body, chairman and principal messages, academic calendar, class routine, syllabus, fees, scholarships, notice board, gallery, exam results and more — that parents and the public can browse before they ever sign in."
        />
        <div className="mt-14 space-y-6">
          <BrowserFrame
            src="/images/shikkha/pub-home.webp"
            alt="Public home page of an institution website built with Shikkha Chat"
            url="shikkhachat.com"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <BrowserFrame
              src="/images/shikkha/pub-online-admission.webp"
              alt="Online admission page on a Shikkha Chat institution website"
              url="shikkhachat.com/online-admission"
            />
            <BrowserFrame
              src="/images/shikkha/pub-notice-board.webp"
              alt="Notice board page on a Shikkha Chat institution website"
              url="shikkhachat.com/notice-board"
            />
            <BrowserFrame
              src="/images/shikkha/pub-teachers-info.webp"
              alt="Teacher directory page on a Shikkha Chat institution website"
              url="shikkhachat.com/teachers-info"
            />
            <BrowserFrame
              src="/images/shikkha/pub-news-events.webp"
              alt="News and events page on a Shikkha Chat institution website"
              url="shikkhachat.com/news-and-events"
            />
          </div>
        </div>
      </Section>

      {/* Core modules */}
      <Section className="bg-[#f4f8fc]">
        <SectionHeader
          align="center"
          eyebrow="Platform Modules"
          title="Six connected modules, forty-seven features"
          description="Every part of a school works together — from daily administration to AI-assisted learning and government oversight. Each module ships with the exact capabilities its users rely on every day."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreModules.map((module) => (
            <ModuleCard key={module.title} module={module} />
          ))}
        </div>
      </Section>

      {/* AI Pathshala spotlight */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <BrowserFrame
            src="/images/shikkha/shikkha-teacher.webp"
            alt="Shikkha Chat teacher dashboard"
            url="dash.shikkhachat.com/dashboard/teacher"
            className="lg:order-1"
          />
          <div className="lg:order-2">
            <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#3f93cf]">
              AI Pathshala
            </p>
            <h2 className="mt-3 text-[32px] font-medium leading-[1.12] tracking-[-0.055em] text-[#050b18] md:text-[44px]">
              Learning that adapts to every student
            </h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-[#5a6b7d] md:text-[17px]">
              AI Pathshala turns published lessons into a personal learning loop. Students
              read smart lessons, ask the AI Tutor in their own words, and take quizzes and
              assessments — while the platform tracks progress and shapes a personalised
              study plan. Teachers publish, planners plan, and reviewers keep it safe.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-3">
              {[
                "AI Tutor",
                "Smart Lessons",
                "Lesson Planner",
                "Online Quizzes",
                "Assessments",
                "Learning Progress",
                "Personalised Study Plan",
                "Content review & AI safety",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} strokeWidth={2.4} className="shrink-0 text-[#3f93cf]" />
                  <span className="text-[14.5px] font-medium text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Dashboards gallery + role capabilities */}
      <div id="dashboards">
        <Section className="bg-[#f4f8fc]">
          <SectionHeader
            align="center"
            eyebrow="Built for every role"
            title="Eight purpose-built dashboards"
            description="Access and permissions are scoped by role, so each person sees a focused, secure view of the platform. Every screen below is captured from the live Shikkha Chat application."
          />
          <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-2">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <article
                  key={role.label}
                  className="overflow-hidden rounded-[18px] border border-[#e6edf5] bg-white shadow-[0_18px_50px_rgba(17,30,64,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(17,30,64,0.12)]"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#eef2f7] bg-[#f4f8fc]">
                    <Image
                      src={role.screen}
                      alt={`${role.label} dashboard in Shikkha Chat`}
                      width={1600}
                      height={1000}
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#eef6fc] text-[#3f93cf]">
                        <Icon size={20} strokeWidth={1.8} />
                      </span>
                      <h3 className="text-[19px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#050b18]">
                        {role.label}
                      </h3>
                    </div>
                    <p className="mt-3 text-[14.5px] leading-[1.55] text-[#5a6b7d]">
                      {role.who}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {role.caps.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={15}
                            strokeWidth={2.4}
                            className="mt-[3px] shrink-0 text-[#3f93cf]"
                          />
                          <span className="text-[14.5px] leading-[1.5] text-[#374151]">
                            {cap}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </Section>
      </div>

      {/* Workflows */}
      <Section className="bg-white">
        <SectionHeader
          align="center"
          eyebrow="How it works"
          title="How Shikkha Chat runs the school day"
          description="Real, connected workflows across roles — one action flows straight to the next person who needs it."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {workflows.map((flow, index) => {
            const Icon = flow.icon;
            return (
              <article
                key={flow.title}
                className="relative rounded-[16px] border border-[#e6edf5] bg-[#f9fbfd] p-7"
              >
                <span className="absolute right-6 top-6 text-[13px] font-bold text-[#b6c4d4]">
                  0{index + 1}
                </span>
                <div className="mb-4 flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-white text-[#3f93cf] shadow-[0_10px_26px_rgba(17,30,64,0.08)]">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#050b18]">
                  {flow.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.6] text-[#5a6b7d]">{flow.steps}</p>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Use cases */}
      <Section className="bg-[#f4f8fc]">
        <SectionHeader
          align="center"
          eyebrow="Benefits & use cases"
          title="Built for everyone in the education loop"
          description="From a single classroom to an entire district, each stakeholder gets a purpose-built experience backed by the same connected data."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group rounded-[16px] border border-[#e6edf5] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#cfe0ef] hover:shadow-[0_22px_50px_rgba(17,30,64,0.10)]"
              >
                <div className="mb-5 flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-[#eef6fc] text-[#3f93cf] transition duration-300 group-hover:bg-[#fff3dd] group-hover:text-[#ffab2e]">
                  <Icon size={24} strokeWidth={1.7} />
                </div>
                <h3 className="text-[19px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#050b18]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.55] text-[#5a6b7d]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Secure access highlight */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#3f93cf]">
              Secure, role-scoped access
            </p>
            <h2 className="mt-3 text-[32px] font-medium leading-[1.12] tracking-[-0.055em] text-[#050b18] md:text-[44px]">
              One login, the right view for every person
            </h2>
            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-[#5a6b7d] md:text-[17px]">
              Everyone signs in through a single, branded portal. Once inside, permissions
              decide what each role can see and do — a student never reaches an admin screen,
              and a district officer sees only aggregated oversight data.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Single branded sign-in for the whole institution",
                "Role-based permissions for all eight dashboards",
                "Sensitive student data stays scoped to the right people",
              ].map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eef6fc] text-[#3f93cf]">
                    <Lock size={12} strokeWidth={2.6} />
                  </span>
                  <span className="text-[15px] font-medium leading-[1.5] text-[#374151] md:text-[16px]">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <BrowserFrame
            src="/images/shikkha/shikkha-login.webp"
            alt="Shikkha Chat secure login screen"
            url="dash.shikkhachat.com/login"
          />
        </div>
      </Section>

      <CtaBanner
        title="Bring Shikkha Chat to your institution"
        description="Talk to our team about a connected education platform tailored to your school, network or government programme."
        primary={{ label: "Request a Demo", href: "/schedule-a-call" }}
        secondary={{ label: "Explore Our Services", href: "/services" }}
      />

      <div className="bg-white px-6 pb-12">
        <p className="mx-auto flex max-w-[1180px] items-center justify-center gap-2 text-center text-[12px] leading-[1.6] text-[#8a94a3]">
          <KeyRound size={13} className="shrink-0" /> Screenshots captured from the running
          Shikkha Chat application by Ionic (ioniccorporationbd) — its public institution
          website and role dashboards — and reused here with attribution.
        </p>
      </div>
    </main>
  );
}
