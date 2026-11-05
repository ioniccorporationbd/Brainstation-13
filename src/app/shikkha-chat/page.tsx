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
} from "lucide-react";
import {
  Section,
  SectionHeader,
  FeatureGrid,
  SplitBlock,
  StatBand,
  CtaBanner,
} from "@/components/resource-kit/ui";

export const metadata: Metadata = {
  title: "Shikkha Chat — Connected Education OS | Magnetic Solution Limited",
  description:
    "Shikkha Chat is one connected education platform that unites school administration, AI-powered learning, teachers, students, parents and government oversight in a single secure system.",
};

const coreModules = [
  {
    icon: School,
    title: "School & Institution Management",
    description:
      "Run admissions, students, teachers, classes, attendance, curriculum and school analytics from one admin dashboard.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Learning (AI Pathshala)",
    description:
      "An AI tutor, smart lessons, quizzes, assessments and personalised study plans that adapt to every learner.",
  },
  {
    icon: Presentation,
    title: "Teacher Tools",
    description:
      "A dedicated teacher dashboard for classes, attendance, lesson content, analytics and learning interventions.",
  },
  {
    icon: Users,
    title: "Parent & Guardian Portal",
    description:
      "Parents track attendance, results, weekly insights and message teachers — all from a single portal.",
  },
  {
    icon: ShieldCheck,
    title: "Content Quality & AI Safety",
    description:
      "Structured content review, an AI safety dashboard, flagged-content monitoring and responsible-AI policies.",
  },
  {
    icon: BarChart3,
    title: "NGO & Government Oversight",
    description:
      "Programme management, institution monitoring, learning outcomes and district-level impact analytics.",
  },
];

const moduleDetails: { icon: ElementType; title: string; features: string[] }[] = [
  {
    icon: School,
    title: "School & Institution Management",
    features: [
      "Admin & student dashboards",
      "Student, teacher & class management",
      "Attendance & academic calendar",
      "Curriculum, subjects & school analytics",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Pathshala",
    features: [
      "AI tutor & guided explanations",
      "Smart lessons & lesson planner",
      "Online quizzes & assessments",
      "Personalised study plans & progress",
    ],
  },
  {
    icon: Presentation,
    title: "Teacher Tools",
    features: [
      "Teacher dashboard & assigned students",
      "Class attendance & teaching analytics",
      "Lesson content management",
      "AI-tutor dataset & learning interventions",
    ],
  },
  {
    icon: Users,
    title: "Parent & Guardian Portal",
    features: [
      "Parent dashboard & child linking",
      "Attendance & assessment results",
      "Weekly learning insights",
      "Teacher messages & study monitoring",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Content Quality & AI Safety",
    features: [
      "Content review queue & approval",
      "Review history & audit trail",
      "AI safety dashboard & events",
      "Flagged content & safety policies",
    ],
  },
  {
    icon: BarChart3,
    title: "NGO & Government Oversight",
    features: [
      "NGO programme management",
      "Institution & district monitoring",
      "Learning outcomes & equity indicators",
      "Impact & enrolment analytics",
    ],
  },
];

const roles: { icon: ElementType; label: string }[] = [
  { icon: School, label: "School Administrator" },
  { icon: GraduationCap, label: "Student" },
  { icon: Presentation, label: "Teacher" },
  { icon: Users, label: "Parent / Guardian" },
  { icon: ClipboardCheck, label: "Content Reviewer" },
  { icon: ShieldCheck, label: "AI Safety Reviewer" },
  { icon: HeartHandshake, label: "NGO Administrator" },
  { icon: Landmark, label: "Government Officer" },
];

const benefits = [
  "One login for the whole school community — admins, teachers, students and parents.",
  "AI learning that adapts to each student through a personalised pathshala.",
  "Built-in content review and AI safety controls for responsible use.",
  "Real-time oversight for NGOs and government, from district to national level.",
  "Cloud-ready, responsive and secure by design — works on any device.",
];

export default function ShikkhaChatPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f4f8fc] px-6 pb-[72px] pt-[64px]">
        <div className="mx-auto grid max-w-[1220px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Image
              src="/images/shikkha/logo.png"
              alt="Shikkha Chat"
              width={790}
              height={316}
              priority
              className="h-[58px] w-auto"
            />
            <span className="mt-7 inline-flex items-center rounded-full bg-white px-5 py-2 text-[13px] font-bold uppercase tracking-[0.1em] text-[#3f93cf] shadow-[0_10px_30px_rgba(17,30,64,0.06)]">
              Education · Connected OS
            </span>
            <h1 className="mt-5 text-[38px] font-medium leading-[1.06] tracking-[-0.06em] text-[#050b18] md:text-[56px]">
              The connected operating system for modern schools
            </h1>
            <p className="mt-6 max-w-[560px] text-[17px] font-medium leading-[1.5] tracking-[-0.01em] text-[#42637a] md:text-[20px]">
              Shikkha Chat brings school administration, AI-powered learning, teachers,
              students, parents and government oversight together in one secure platform.
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
                href="#modules"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8d7e6] bg-white px-8 py-4 text-[15px] font-bold text-[#0b2340] transition duration-300 hover:border-[#9fc0db] hover:bg-[#f6fafe]"
              >
                Explore Features
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

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-[16px] shadow-[0_22px_60px_rgba(17,30,64,0.10)]">
              <Image
                src="/images/shikkha/student-information.png"
                alt="Student information and family engagement in Shikkha Chat"
                width={360}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-8 aspect-[3/4] overflow-hidden rounded-[16px] shadow-[0_22px_60px_rgba(17,30,64,0.10)]">
              <Image
                src="/images/shikkha/family.png"
                alt="Family engagement experience in Shikkha Chat"
                width={360}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <StatBand
        tone="dark"
        stats={[
          { value: "6", label: "Connected core modules" },
          { value: "47", label: "Product features" },
          { value: "8", label: "Role-based dashboards" },
          { value: "1", label: "Unified platform" },
        ]}
      />

      {/* What is Shikkha Chat */}
      <Section className="bg-white">
        <SplitBlock
          image="/images/shikkha/student-information.png"
          imageAlt="Shikkha Chat connecting students and families"
          eyebrow="What is Shikkha Chat"
          title="One platform connecting every part of a school"
          paragraphs={[
            "Shikkha Chat is a connected education operating system that links the entire school community — administration, teachers, students, parents and oversight bodies — inside a single, secure product.",
            "Instead of juggling separate tools for attendance, lessons, assessment and reporting, institutions get one consistent experience where every role sees exactly what it needs, and no one is left out of the loop.",
          ]}
          bullets={benefits}
        />
      </Section>

      {/* Core modules */}
      <div id="modules">
        <Section className="bg-[#f4f8fc]">
          <SectionHeader
            align="center"
            eyebrow="Platform Modules"
            title="Six connected modules, one experience"
            description="Every part of a school works together — from daily administration to AI-assisted learning and government oversight."
          />
          <div className="mt-14">
            <FeatureGrid items={coreModules} columns={3} />
          </div>
        </Section>
      </div>

      {/* Inside the platform */}
      <Section className="bg-white">
        <SectionHeader
          align="center"
          eyebrow="Inside the platform"
          title="Everything your institution needs"
          description="Each module ships with the exact capabilities its users rely on every day."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {moduleDetails.map((module) => (
            <ModuleCard key={module.title} module={module} />
          ))}
        </div>
      </Section>

      {/* Roles */}
      <Section className="bg-[#f4f8fc]">
        <SectionHeader
          align="center"
          eyebrow="Built for every role"
          title="Purpose-built dashboards for eight roles"
          description="Access and permissions are scoped by role, so each person sees a focused, secure view of the platform."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <RoleChip key={role.label} role={role} />
          ))}
        </div>
      </Section>

      {/* Oversight & impact */}
      <Section className="bg-white">
        <SplitBlock
          reverse
          image="/images/shikkha/orange-impact.png"
          imageAlt="District and national education oversight impact"
          eyebrow="Oversight & Impact"
          title="From a single classroom to entire districts"
          paragraphs={[
            "NGOs and government bodies get aggregated, real-time visibility into learning outcomes, enrolment trends, equity indicators and programme impact — without chasing spreadsheets.",
            "District-level monitoring and aggregated reporting make it simple to spot gaps, allocate resources and demonstrate results at scale.",
          ]}
        />
      </Section>

      {/* Image band */}
      <Section className="bg-[#f4f8fc]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { img: "orange-people.png", alt: "Personalised AI learning", label: "Personalised AI learning" },
            { img: "purple-people.png", alt: "Connected classrooms and teachers", label: "Connected classrooms" },
            { img: "green-people.png", alt: "Data-driven decisions for institutions", label: "Data-driven decisions" },
          ].map((card) => (
            <div
              key={card.img}
              className="group overflow-hidden rounded-[16px] bg-white shadow-[0_18px_50px_rgba(17,30,64,0.08)]"
            >
              <div className="h-[320px] overflow-hidden">
                <Image
                  src={`/images/shikkha/${card.img}`}
                  alt={card.alt}
                  width={418}
                  height={709}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="px-6 py-5 text-[16px] font-semibold text-[#050b18]">{card.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Bring Shikkha Chat to your institution"
        description="Talk to our team about a connected education platform tailored to your school, network or government programme."
        primary={{ label: "Request a Demo", href: "/schedule-a-call" }}
        secondary={{ label: "Explore Our Services", href: "/services" }}
      />

      <div className="bg-white px-6 pb-12">
        <p className="mx-auto max-w-[1180px] text-center text-[12px] leading-[1.6] text-[#8a94a3]">
          Page content and imagery are sourced from the Shikkha Chat Connected OS project by
          Ionic (ioniccorporationbd) and reused here with attribution.
        </p>
      </div>
    </main>
  );
}

function ModuleCard({
  module,
}: {
  module: { icon: ElementType; title: string; features: string[] };
}) {
  const Icon = module.icon;
  return (
    <article className="rounded-[16px] border border-[#e6edf5] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#cfe0ef] hover:shadow-[0_22px_50px_rgba(17,30,64,0.10)]">
      <div className="mb-5 flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-[#eef6fc] text-[#3f93cf] transition duration-300">
        <Icon size={24} strokeWidth={1.7} />
      </div>
      <h3 className="text-[19px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#050b18]">
        {module.title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {module.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <CheckCircle2 size={16} strokeWidth={2.2} className="mt-[3px] shrink-0 text-[#3f93cf]" />
            <span className="text-[15px] font-normal leading-[1.5] text-[#5a6b7d]">{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function RoleChip({ role }: { role: { icon: ElementType; label: string } }) {
  const Icon = role.icon;
  return (
    <div className="flex items-center gap-3 rounded-[12px] border border-[#e6edf5] bg-white px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#cfe0ef] hover:shadow-[0_16px_40px_rgba(17,30,64,0.08)]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#eef6fc] text-[#3f93cf]">
        <Icon size={20} strokeWidth={1.7} />
      </span>
      <span className="text-[16px] font-semibold text-[#050b18]">{role.label}</span>
    </div>
  );
}
