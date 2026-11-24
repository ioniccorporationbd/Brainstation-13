import { getTranslator } from "@/i18n/server";

import {
  Award,
  BarChart3,
  BookOpen,
  LayoutDashboard,
  MessagesSquare,
  ShieldCheck,
  Users,
  Video,
} from "lucide-react";

type Feature = {
  title: string;
  icon: typeof LayoutDashboard;
  items: string[];
};

const featureData: Feature[] = [
  {
    title: "Dynamic Dashboard",
    icon: LayoutDashboard,
    items: [
      "Customizable dashboard",
      "Course overview, calendar and learning timeline",
      "Progress status tracking",
      "Notifications, profile access and navigation",
    ],
  },
  {
    title: "Course & User Management",
    icon: Users,
    items: [
      "Course creation and enrolment workflows",
      "Cohorts, groups and role-based access",
      "User profiles and bulk account management",
      "Categories, self-enrolment and course structure",
    ],
  },
  {
    title: "Communication & Collaboration",
    icon: MessagesSquare,
    items: [
      "Discussion forums and feedback",
      "Real-time chat and messaging",
      "Surveys and polls",
      "Announcements and notifications",
    ],
  },
  {
    title: "Reporting & Analytics",
    icon: BarChart3,
    items: [
      "Learner progress and completion reports",
      "Course and assessment analytics",
      "Grading and performance insights",
      "Exportable reports for review",
    ],
  },
  {
    title: "Identity Governance",
    icon: ShieldCheck,
    items: [
      "Single sign-on with institutional identity providers",
      "Role-based permissions and access control",
      "Audit trails for administrative actions",
      "Secure authentication and session policies",
    ],
  },
  {
    title: "Learning Delivery",
    icon: BookOpen,
    items: [
      "SCORM and xAPI content support",
      "Assignments, quizzes and lesson modules",
      "File, page and book resources",
      "Content versioning and reuse across courses",
    ],
  },
  {
    title: "Live Classes & Scheduling",
    icon: Video,
    items: [
      "Live session scheduling with join links",
      "Class reminders and calendar sync",
      "Attendance tracking for live sessions",
      "Session recordings and replay access",
    ],
  },
  {
    title: "Assessment & Certification",
    icon: Award,
    items: [
      "Quizzes with question banks and timers",
      "Rubrics, grading and feedback workflows",
      "Certificate and badge issuance",
      "Exam-ready reporting and results export",
    ],
  },
];

export default async function MoodleFeatures() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] max-sm:pb-7 text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Platform Capabilities")}</p>

          <h2 className="max-sm:mx-auto max-sm:text-center text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Features of Our Moodle LMS")}</h2>

          <p className="mt-4 text-[15px] font-medium leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Eight capability areas we configure, extend and support end to end.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featureData.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 max-sm:p-4 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={20} strokeWidth={2.1} />
                </span>

                <h3 className="mt-5 text-[#0a0a0a] font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                  {t(feature.title)}
                </h3>

                <ul className="mt-3.5 space-y-2.5">
                  {feature.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[13.5px] font-medium leading-[1.6] text-[#52525B]"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#c91f28]" />
                      <span>{t(item)}</span>
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
