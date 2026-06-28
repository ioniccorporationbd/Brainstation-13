import Link from "next/link";

const CASE_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90";

export default function InsuranceTechnologySolutionsSection() {
  return (
    <section className="w-full bg-white py-[72px] md:py-[86px] lg:py-[96px]">
      <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8 xl:px-0">
        <h2 className="text-center text-[42px] font-bold leading-[1.15] tracking-[-0.045em] text-black sm:text-[52px] lg:text-[58px]">
          Insurance Technology Solutions
        </h2>

        <div className="mx-auto mt-[52px] grid max-w-[1180px] grid-cols-1 overflow-hidden rounded-[8px] border border-[#dcdfe3] bg-white lg:grid-cols-[580px_1fr]">
          {/* Left Image */}
          <div className="h-[360px] w-full overflow-hidden bg-gray-100 sm:h-[480px] lg:h-[620px]">
            <img
              src={CASE_IMAGE}
              alt="Digital insurance ecosystem technology solution"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div className="px-[30px] py-[42px] sm:px-[44px] lg:px-[46px] lg:py-[44px]">
            <h3 className="max-w-[520px] text-[34px] font-bold leading-[1.1] tracking-[-0.045em] text-black sm:text-[40px] lg:text-[42px]">
              End-to-End Digital Insurance Ecosystem
            </h3>

            <p className="mt-[34px] max-w-[560px] text-[18px] font-normal leading-[1.55] text-[#335e79] sm:text-[20px]">
              Modular Insurtech platform for leading insurers like MetLife and
              Guardian Life, modernizing claims processing, policy
              administration, and agent operations. Built with .NET Core,
              Angular, and Flutter, the end-to-end solution automates the claim
              lifecycle, provides a self-service customer app, and digitizes
              agent onboarding.
            </p>

            <Link
              href="/case-studies/end-to-end-digital-insurance-ecosystem"
              className="mt-[36px] inline-flex items-center gap-[10px] text-[18px] font-semibold text-[#ff9f1c] transition hover:text-[#e48900]"
            >
              View Case Study
              <span className="text-[22px] leading-none">→</span>
            </Link>

            <div className="mt-[30px] h-px w-full bg-[#dfe5ea]" />

            <div className="mt-[36px] grid grid-cols-1 gap-[34px] sm:grid-cols-2">
              <div>
                <h4 className="text-[58px] font-light leading-none tracking-[-0.06em] text-[#4b9bd0] sm:text-[66px]">
                  70%
                </h4>

                <p className="mt-[16px] max-w-[260px] text-[20px] font-normal leading-[1.35] text-[#335e79] sm:text-[22px]">
                  Faster claim settlements
                </p>
              </div>

              <div>
                <h4 className="text-[58px] font-light leading-none tracking-[-0.06em] text-[#4b9bd0] sm:text-[66px]">
                  30%
                </h4>

                <p className="mt-[16px] max-w-[260px] text-[20px] font-normal leading-[1.35] text-[#335e79] sm:text-[22px]">
                  Reduction in Claims Investigation Cost
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}