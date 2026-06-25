import Image from "next/image";
import Link from "next/link";

const aiStats = [
  {
    number: "70%",
    label: "/ Faster Development",
    title: "Intelligent Coding",
    description:
      "AI-powered code synthesis and auto-completion reduce manual effort while maintaining enterprise-grade standards.",
  },
  {
    number: "99.9%",
    label: "/ Defect-Free Releases",
    title: "Bulletproof QA",
    description:
      "Self-learning test suites detect bugs early, with automated fixes for flawless deployments.",
  },
  {
    number: "40%",
    label: "/ Higher Efficiency",
    title: "Peak Performance",
    description:
      "ML algorithms optimize resource allocation, predict scaling needs, and eliminate bottlenecks in real-time.",
  },
  {
    number: "90%",
    label: "/ Faster Deployments",
    title: "Zero-Downtime DevOps",
    description:
      "AI-driven CI/CD pipelines automate rollbacks and canary releases for seamless updates.",
  },
];

export default function AIDevelopmentExcellenceSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f8fc] py-[76px] md:py-[96px] lg:py-[118px]">
      {/* Left circular background */}
      <div className="pointer-events-none absolute left-[-330px] top-[-120px] h-[980px] w-[980px] rounded-full opacity-80 [background:repeating-radial-gradient(circle,#d7eaf5_0px,#d7eaf5_1px,transparent_2px,transparent_12px)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-5 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-[58px] lg:grid-cols-[460px_1fr] lg:gap-[90px]">
          {/* Left side */}
          <div>
            <h2 className="max-w-[390px] text-[42px] font-medium leading-[1.12] tracking-[-0.055em] text-[#11182e] sm:text-[52px] lg:text-[58px]">
              AI-Driven Development Excellence
            </h2>

            <p className="mt-[30px] max-w-[430px] text-[17px] font-normal leading-[1.5] text-[#335e79] sm:text-[18px]">
              We integrate cutting-edge AI across the development lifecycle—
              delivering solutions 10X faster with unmatched reliability. Our
              engineers augment human expertise with AI to automate, optimize,
              and future-proof your software.
            </p>

            <Link
              href="/schedule-a-call"
              className="mt-[34px] inline-flex h-[44px] items-center justify-center rounded-full bg-[#ffad2f] px-[24px] text-[14px] font-semibold text-black transition-colors hover:bg-[#f59b15]"
            >
              Schedule a Call
            </Link>

            <div className="relative mt-[60px] h-[430px] w-full max-w-[430px] overflow-hidden rounded-[9px] shadow-sm">
              <Image
                src="/images/ai-excellence/ai-robot-team.svg"
                alt="AI-driven development team"
                fill
                sizes="(max-width: 1024px) 100vw, 430px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right side stats */}
          <div className="space-y-[60px] lg:pt-[6px]">
            {aiStats.map((item) => (
              <div key={item.title}>
                <div className="flex flex-wrap items-end gap-x-[10px] gap-y-1">
                  <span className="text-[52px] font-light leading-none tracking-[-0.055em] text-[#61bce9] sm:text-[58px]">
                    {item.number}
                  </span>

                  <span className="mb-[9px] text-[13px] font-bold leading-none text-[#3e9bd5]">
                    {item.label}
                  </span>
                </div>

                <div className="mt-[8px] h-px w-[140px] bg-[#dcebf4]" />

                <h3 className="mt-[18px] text-[29px] font-medium leading-[1.22] tracking-[-0.045em] text-[#11182e] sm:text-[32px]">
                  {item.title}
                </h3>

                <p className="mt-[8px] max-w-[430px] text-[16px] font-normal leading-[1.45] text-[#335e79]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom feature bar */}
        <div className="mt-[70px] border-t border-[#dbe8f0] pt-[32px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_190px_190px] lg:items-center">
            <div className="border-l-[2px] border-[#419bd3] pl-[22px]">
              <h3 className="text-[28px] font-medium leading-[1.2] tracking-[-0.04em] text-[#11182e]">
                10X Faster Delivery
              </h3>

              <p className="mt-[12px] max-w-[560px] text-[16px] font-normal leading-[1.45] text-[#335e79]">
                Our world-class engineers leverage cutting-edge AI to deliver
                solutions 10X faster without compromising quality.
              </p>
            </div>

            <div className="flex items-center gap-[16px] border-l border-[#dbe8f0] pl-[28px]">
              <Image
                src="/images/ai-excellence/icon-shield.svg"
                alt=""
                width={34}
                height={34}
                className="h-[34px] w-[34px]"
              />
              <p className="text-[15px] font-medium text-[#335e79]">
                100% IP Protection
              </p>
            </div>

            <div className="flex items-center gap-[16px] border-l border-[#dbe8f0] pl-[28px]">
              <Image
                src="/images/ai-excellence/icon-talent.svg"
                alt=""
                width={34}
                height={34}
                className="h-[34px] w-[34px]"
              />
              <p className="text-[15px] font-medium text-[#335e79]">
                Top 1% Talent
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}