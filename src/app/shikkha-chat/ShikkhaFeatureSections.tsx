import type { ElementType } from "react";
import { getTranslator } from "@/i18n/server";
import {
  Activity,
  AlertTriangle,
  Award,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BookOpenCheck,
  Bot,
  Building2,
  CalendarCheck,
  CalendarDays,
  ClipboardCheck,
  ClipboardList,
  Database,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  Flag,
  FolderKanban,
  GraduationCap,
  HeartHandshake,
  History,
  Inbox,
  Landmark,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  LineChart,
  Link2,
  ListChecks,
  MapPin,
  MessageSquare,
  PenLine,
  Presentation,
  Route,
  Scale,
  ScrollText,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  UserCog,
  Users,
  UsersRound,
} from "lucide-react";
import FeatureReveal from "./FeatureReveal";

type FeatureCard = { icon: ElementType; title: string; summary: string };

type FeatureSection = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  cards: FeatureCard[];
};

/**
 * Content for these seven sections is taken verbatim from
 * https://website.shikkhachat.com/ (Bengali + English catalog sections —
 * each card uses that feature's own summary line from the source site).
 * Bengali renderings live in src/i18n/dictionaries/bn/gen_12.ts.
 * Per-card source mapping: ./feature-source-map.json
 */
const sections: FeatureSection[] = [
  {
    id: "features-role-dashboards",
    eyebrow: "Role-based dashboards",
    title: "Role-based Dashboards",
    intro: "Eight purpose-built dashboards on one shared data spine — each role sees exactly the view and permissions it needs.",
    cards: [
      { icon: ShieldCheck, title: "Administrator / School admin", summary: "The person in charge of the institution: students, teachers, classes, routine, attendance, fees, users and permissions." },
      { icon: GraduationCap, title: "Student", summary: "You study, practise, take quizzes and follow your own progress." },
      { icon: Presentation, title: "Teacher", summary: "You own your class's students, attendance, lessons and progress." },
      { icon: HeartHandshake, title: "Parent / Guardian", summary: "You follow your child's attendance, results, study activity and teacher messages." },
      { icon: FileCheck2, title: "Content reviewer", summary: "You check lessons, questions and material for AI Pathshala and either approve them or send them back." },
      { icon: ShieldAlert, title: "AI safety reviewer", summary: "You watch risky AI usage, safety events, investigations and policy." },
      { icon: Building2, title: "NGO admin", summary: "You oversee an education programme that runs across several institutions." },
      { icon: Landmark, title: "Government officer", summary: "You review the district-level picture: enrolment, attendance, outcomes, equity and safety." },
    ],
  },
  {
    id: "features-school-management",
    eyebrow: "School management",
    title: "School & Institution Management",
    intro: "The administrative core of an institution: admissions, people, classes, attendance, curriculum and analytics in one place.",
    cards: [
      { icon: LayoutDashboard, title: "Admin Dashboard", summary: "Central overview of institution activity and administration." },
      { icon: Users, title: "Student Management", summary: "Organise student information, academic records and admissions." },
      { icon: UserCog, title: "Teacher Management", summary: "Manage teaching staff and their academic responsibilities." },
      { icon: ClipboardList, title: "Teacher Class Assignments", summary: "Assign teachers to classes and subjects." },
      { icon: Layers, title: "Classes & Sections", summary: "Manage classes, groups and sections in one place." },
      { icon: CalendarCheck, title: "Attendance Management", summary: "Access and manage student attendance records." },
      { icon: CalendarDays, title: "Academic Calendar", summary: "Organise academic schedules and key session dates." },
      { icon: BookOpen, title: "Curriculum & Subjects", summary: "Access courses, subjects and curriculum records." },
      { icon: BarChart3, title: "School Analytics", summary: "Understand institutional activity through dashboard metrics." },
    ],
  },
  {
    id: "features-ai-pathshala",
    eyebrow: "AI Pathshala",
    title: "AI-Powered Learning — AI Pathshala",
    intro: "AI-supported learning — an AI tutor, smart lessons, lesson planning, quizzes, assessment and a personalised study path.",
    cards: [
      { icon: Bot, title: "AI Tutor", summary: "Guided explanations and interactive learning assistance." },
      { icon: BookOpenCheck, title: "Smart Lessons", summary: "Access published learning materials and lessons." },
      { icon: PenLine, title: "Lesson Planner", summary: "Organise lessons and teaching materials with ease." },
      { icon: ListChecks, title: "Online Quizzes", summary: "Participate in available quizzes and homework." },
      { icon: ClipboardCheck, title: "Assessments", summary: "Review assessment outcomes and feedback." },
      { icon: TrendingUp, title: "Learning Progress", summary: "Follow subject-based learning development." },
      { icon: Route, title: "Personalised Study Plan", summary: "Explore recommended learning activities and plans." },
    ],
  },
  {
    id: "features-teacher-tools",
    eyebrow: "Teacher tools",
    title: "Teacher Tools",
    intro: "Everything a teacher needs day to day — class roster, attendance, lesson content, teaching analytics and student support.",
    cards: [
      { icon: LayoutDashboard, title: "Teacher Dashboard", summary: "Central panel for classes, students and daily teaching work." },
      { icon: UsersRound, title: "Assigned Students", summary: "View the students assigned to your classes." },
      { icon: UserCheck, title: "Class Attendance", summary: "Record and review class-wise attendance." },
      { icon: LineChart, title: "Teaching Analytics", summary: "Analyse teaching activity and class performance." },
      { icon: ClipboardList, title: "Teaching Assignments", summary: "Manage teacher-class assignments and subject duties." },
      { icon: FileText, title: "Lesson Content Management", summary: "Create, organise and publish lesson content." },
      { icon: Database, title: "AI Tutor Dataset Management", summary: "Manage the datasets that power the AI tutor." },
      { icon: LifeBuoy, title: "Student Learning Interventions", summary: "Plan interventions to support students who need help." },
    ],
  },
  {
    id: "features-parent-portal",
    eyebrow: "Parent portal",
    title: "Parent & Guardian Portal",
    intro: "A guardian's window into the child's education — attendance, results, weekly insights and direct teacher messages.",
    cards: [
      { icon: LayoutDashboard, title: "Parent Dashboard", summary: "A central overview of your child's education and activity." },
      { icon: Users, title: "Children", summary: "See all your children and their details in one place." },
      { icon: Link2, title: "Child Linking", summary: "Connect your child's record to your own account." },
      { icon: CalendarCheck, title: "Student Attendance Tracking", summary: "Follow your child's attendance and absences." },
      { icon: Award, title: "Assessment Results", summary: "Review your child's assessment outcomes." },
      { icon: Sparkles, title: "Weekly Learning Insights", summary: "Weekly insights and summaries of your child's progress." },
      { icon: MessageSquare, title: "Teacher Messages", summary: "Stay in touch with your child's teachers." },
      { icon: Activity, title: "Study Activity Monitoring", summary: "Monitor your child's study and learning activity." },
    ],
  },
  {
    id: "features-content-ai-safety",
    eyebrow: "Content & AI safety",
    title: "Content Quality & AI Safety",
    intro: "A review and safety pipeline that keeps AI learning content checked, approved and accountable.",
    cards: [
      { icon: Inbox, title: "Content Review Queue", summary: "Work through structured content review and approval." },
      { icon: BadgeCheck, title: "Approved Learning Content", summary: "Browse published and approved learning content." },
      { icon: History, title: "Review History", summary: "Audit past reviews and decisions." },
      { icon: ShieldCheck, title: "AI Safety Dashboard", summary: "Central view of AI safety activity and usage." },
      { icon: Flag, title: "Flagged AI Content", summary: "Review flagged AI messages and content." },
      { icon: AlertTriangle, title: "AI Safety Events", summary: "Track safety events and escalations over time." },
      { icon: ScrollText, title: "AI Safety Policies", summary: "Browse the policies behind responsible AI use." },
    ],
  },
  {
    id: "features-ngo-government",
    eyebrow: "NGO & government",
    title: "NGO & Government Oversight",
    intro: "Programme, institution and district-level oversight, with outcome, equity and coverage analytics for NGOs and government.",
    cards: [
      { icon: FolderKanban, title: "NGO Program Management", summary: "Create, monitor and manage education programmes." },
      { icon: Building2, title: "Institution Monitoring", summary: "Keep an eye on registered institutions." },
      { icon: LineChart, title: "Learning Outcomes", summary: "Review learning outcomes across programmes." },
      { icon: BarChart3, title: "Impact Analytics", summary: "Analyse the reach and impact of your programmes." },
      { icon: MapPin, title: "District-Level Oversight", summary: "Monitor education activity across districts." },
      { icon: TrendingUp, title: "Enrolment Analytics", summary: "Analyse enrolment trends and numbers." },
      { icon: Scale, title: "Equity Indicators", summary: "Track inclusion and equity indicators in education." },
      { icon: FileSpreadsheet, title: "Aggregated Reports", summary: "Generate aggregated reports for oversight." },
    ],
  },
];

const revealCss = `
.feature-reveal{opacity:0;transform:translateY(16px);transition:opacity .55s cubic-bezier(.22,.61,.36,1),transform .55s cubic-bezier(.22,.61,.36,1)}
.feature-reveal-in{opacity:1;transform:none}
@media (prefers-reduced-motion: reduce){.feature-reveal,.feature-reveal-in{opacity:1;transform:none;transition:none}}
`;

export default async function ShikkhaFeatureSections() {
  const { t } = await getTranslator();
  return (
    <>
      <style>{revealCss}</style>
      {sections.map((section, si) => (
        <section
          key={section.id}
          id={section.id}
          className={`relative scroll-mt-24 overflow-hidden py-20 md:py-24 ${si % 2 === 1 ? "bg-[#fafafa]" : "bg-white"}`}
        >
          <div className="mx-auto brand-container">
            <FeatureReveal>
              <div className="max-w-[760px]">
                <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t(section.eyebrow)}</p>
                <h2 className="mt-4 text-[clamp(27px,8vw,32px)] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px] text-balance">
                  {t(section.title)}
                </h2>
                <p className="mt-4 text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t(section.intro)}</p>
              </div>
            </FeatureReveal>

            <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {section.cards.map((card, ci) => {
                const Icon = card.icon;
                return (
                  <FeatureReveal key={card.title} delay={(ci % 4) * 60} className="h-full">
                    <article className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c91f28]/40 hover:shadow-[0_12px_32px_-20px_rgba(17,17,17,0.4)]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                      <h3 className="mt-5 text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:text-[18px] text-balance">
                        {t(card.title)}
                      </h3>
                      <p className="mt-2.5 text-[15px] leading-[1.6] text-[#52525B] text-pretty">{t(card.summary)}</p>
                    </article>
                  </FeatureReveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
