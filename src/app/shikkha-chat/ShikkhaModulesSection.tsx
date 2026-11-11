import type { ElementType } from "react";
import {
  BarChart3,
  CheckCircle2,
  Presentation,
  School,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

type Module = {
  icon: ElementType;
  title: string;
  summary: string;
  features: string[];
};

const modules: Module[] = [
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
      "Enrollment Analytics",
      "Equity Indicators",
      "Aggregated Reports",
    ],
  },
];

export default function ShikkhaModulesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[760px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Platform modules
          </p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            Six integrated modules, forty-seven features
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">
            Every part of a school works together — from daily administration to
            AI-assisted learning and government oversight. Each module ships
            with the exact capabilities its users rely on every day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.title}
                className="flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <Icon size={23} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-black">
                  {module.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.65] text-[#55585e]">
                  {module.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-[#f2f2f2] pt-4">
                  {module.features.map((feature) => (
                    <li
                      key={feature}
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#fafafa] px-2.5 py-1 text-[12px] font-medium text-[#3f434a]"
                    >
                      <CheckCircle2
                        size={12}
                        strokeWidth={2.6}
                        className="text-[#c91f28]"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
