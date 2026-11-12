import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import {
  BookOpen,
  Globe2,
  GraduationCap,
  LineChart,
  MonitorPlay,
  Users,
} from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  icon: React.ElementType;
  href?: string;
};

const services: ServiceItem[] = [
  {
    title: "Learning management",
    description: "Custom LMS, course delivery and progress tracking.",
    icon: GraduationCap,
    href: "/lms-development",
  },
  {
    title: "Assessment & proctoring",
    description: "Online exams with AI-assisted integrity and live proctoring.",
    icon: MonitorPlay,
    href: "/proctoring-pro",
  },
  {
    title: "Content publishing",
    description: "Authoring, review and digital publishing workflows.",
    icon: BookOpen,
    href: "/time2publish",
  },
  {
    title: "Student engagement",
    description: "Portals, communities and personalised learning paths.",
    icon: Users,
  },
  {
    title: "Learning analytics",
    description: "Outcome tracking and at-risk learner insights.",
    icon: LineChart,
  },
  {
    title: "Accessibility",
    description: "WCAG-compliant, inclusive experiences for every learner.",
    icon: Globe2,
  },
];

async function ServiceBody({ item }: { item: ServiceItem }) {
  const { t } = await getTranslator();
  return (
    <>
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
        <item.icon size={21} />
      </span>
      <h3 className="mt-5 text-[16px] font-semibold leading-[1.3] text-black">{t(item.title)}</h3>
      <p className="mt-2 text-[13.5px] leading-[1.65] text-[#55585e]">{t(item.description)}</p>
    </>
  );
}

export default async function EducationServicesSection() {
  const { t } = await getTranslator();
  return (
    <section id="services" className="relative overflow-hidden bg-white px-6 pb-[88px] pt-[64px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Services")}</p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Education solutions")}</h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("Learning, assessment, content and analytics for universities, training providers and EdTech companies.")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => {
            const className =
              "group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50";
            if (item.href) {
              return (
                <Link key={item.title} href={item.href} className={className}>
                  <ServiceBody item={item} />
                </Link>
              );
            }
            return (
              <article key={item.title} className={className}>
                <ServiceBody item={item} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
