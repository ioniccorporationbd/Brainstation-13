import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import type { ElementType } from "react";
import {
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Presentation,
  School,
  ShieldAlert,
  Users,
} from "lucide-react";

type Role = {
  icon: ElementType;
  label: string;
  screen: string;
  who: string;
  caps: string[];
};

const roles: Role[] = [
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

export default async function ShikkhaDashboardsSection() {
  const { t } = await getTranslator();
  return (
    <section
      id="dashboards"
      className="relative overflow-hidden bg-white px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[760px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Built for every role")}</p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Eight purpose-built dashboards")}</h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">{t("Access and permissions are scoped by role, so each person sees a focused, secure view of the platform. Every screen below is captured from the live Shikkha Chat application.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <article
                key={role.label}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-[#ececec] bg-white transition-colors duration-200 hover:border-[#c91f28]/40"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#ececec] bg-[#fafafa]">
                  <Image
                    src={role.screen}
                    alt={`${role.label} dashboard in Shikkha Chat`}
                    width={1600}
                    height={1000}
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                      <Icon size={19} strokeWidth={1.9} />
                    </span>
                    <h3 className="text-[17px] font-bold leading-[1.25] tracking-[-0.01em] text-black">
                      {t(role.label)}
                    </h3>
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.65] text-[#55585e]">
                    {t(role.who)}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {role.caps.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c91f28]" />
                        <span className="text-[14px] leading-[1.6] text-[#3f434a]">
                          {t(cap)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
