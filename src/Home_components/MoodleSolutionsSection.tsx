import Link from "next/link";
import Image from "next/image";

const solutionItems = [
  {
    title: "End-to-End Moodle Solutions",
    description:
      "Implementation, UX customization, hosting, upgrades, support, and performance tuning.",
  },
  {
    title: "Secure Proctoring & Assessments",
    description:
      "Identity checks, exam integrity, audit trails, and high-stakes assessment workflows.",
  },
  {
    title: "Powerful Moodle Plugins & Integrations",
    description:
      "Interactive content, attendance, scheduling, payments/SSO/CRM integrations, and custom plugins.",
  },
];

export default function MoodleSolutionsSection() {
  return (
    <section className="w-full bg-[#f5f9fd] py-[90px] md:py-[110px] lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 xl:px-0">
        <div className="text-center">
          <p className="text-[18px] font-medium leading-[1.4] text-[#2f8df4]">
            Moodle Capabilities
          </p>

          <h2 className="mt-[26px] text-[44px] font-normal leading-[1.1] tracking-[-0.055em] text-black sm:text-[58px] lg:text-[68px]">
            Moodle Solutions for Real Impact
          </h2>
        </div>

        <div className="mx-auto mt-[64px] grid w-full max-w-[1240px] grid-cols-1 items-start gap-12 lg:grid-cols-[460px_480px_420px] lg:gap-[40px]">
          {/* Left text */}
          <div className="pt-[4px]">
            <p className="text-[21px] font-normal leading-[1.5] text-[#2d5f7c]">
              Brain Station 23 is Moodle’s Certified Integration Partner in
              Bangladesh and the first-ever organizer of MoodleMoot Bangladesh.
            </p>

            <p className="mt-[28px] text-[21px] font-normal leading-[1.5] text-[#2d5f7c]">
              Explore how we build secure, scalable, audit-ready Moodle LMS +
              proctoring for institutions that can’t afford failure.
            </p>

            <Link
              href="/moodle-moot-bangladesh-2026"
              className="mt-[30px] inline-flex items-center gap-[14px] text-[20px] font-semibold text-[#3b8fcb] transition-colors hover:text-[#1479b9]"
            >
              Join Moodle Moot Bangladesh 2026
              <span className="text-[24px] leading-none">→</span>
            </Link>
          </div>

          {/* Center Moodle image */}
          <div className="flex justify-center lg:pt-[2px]">
            <div className="relative h-[245px] w-full max-w-[480px] overflow-hidden rounded-[7px] shadow-sm">
              <Image
                src="/images/moodle/moodle-certified.svg"
                alt="Moodle Certified Integration"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right list */}
          <div className="space-y-[34px]">
            {solutionItems.map((item) => (
              <div key={item.title}>
                <h3 className="text-[24px] font-medium leading-[1.32] tracking-[-0.035em] text-[#020817]">
                  {item.title}
                </h3>

                <p className="mt-[10px] text-[21px] font-normal leading-[1.45] text-[#2d5f7c]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}