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
    href: "/services/lms-development",
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
      <h3 className="mt-5 text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">{t(item.title)}</h3>
      <p className="mt-2 text-[14.5px] leading-[1.6] text-[#52525B] text-pretty">{t(item.description)}</p>
    </>
  );
}

export default async function EducationServicesSection() {
  const { t } = await getTranslator();
  return (
    <section id="services" className="relative overflow-hidden bg-white pb-[56px] max-sm:pb-7 max-sm:pt-[44px] pt-[64px] md:pb-[104px]">
      <div className="mx-auto brand-container">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Services")}</p>
          <h2 className="max-sm:mx-auto max-sm:text-center mt-4 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Education solutions")}</h2>
          <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Learning, assessment, content and analytics for universities, training providers and EdTech companies.")}</p>
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
