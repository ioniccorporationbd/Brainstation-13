import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CASE_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85";

const stack = [".NET Core", "Angular", "Flutter"];

export default async function InsuranceTechnologySolutionsSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white px-6 pb-[88px] pt-[8px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Case Study")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Insurance Technology Solutions")}</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#ececec] bg-white lg:grid-cols-[0.92fr_1fr]">
          {/* Image */}
          <div className="relative min-h-[280px] w-full bg-[#f7f7f7] sm:min-h-[360px] lg:min-h-[460px]">
            <Image
              src={CASE_IMAGE}
              alt={t("Insurance analytics dashboard and digital policy platform")}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
            <h3 className="max-w-[480px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0a0a0a] md:text-[32px]">{t("End-to-End Digital Insurance Ecosystem")}</h3>

            <p className="mt-5 max-w-[520px] text-[15.5px] font-medium leading-[1.65] tracking-[-0.01em] text-[#565656] md:text-[16.5px]">{t("A modular insurtech platform for leading insurers, modernizing claims processing, policy administration and agent operations. The end-to-end solution automates the claim lifecycle, provides a self-service customer app and digitizes agent onboarding.")}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#ececec] bg-white px-3.5 py-1.5 text-[13px] font-bold text-[#0a0a0a]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="/case-studies"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#c91f28] px-7 py-3.5 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >{t("View Case Study")}<ArrowRight size={17} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
