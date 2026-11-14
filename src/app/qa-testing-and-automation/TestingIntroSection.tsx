import Image from "next/image";
import { getTranslator } from "@/i18n/server";

const INTRO_IMG =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop";

export default async function TestingIntroSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] pt-[8px] text-[#0a0a0a] md:pb-[104px]">
      <div className="grid brand-container items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative w-full">
          <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-2xl border border-[#ececec] bg-[#f7f7f7]">
            <Image
              src={INTRO_IMG}
              alt={t("QA team reviewing application quality together")}
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Software Testing as a Service")}</p>

          <h2 className="max-w-[600px] text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("Testing That Keeps Quality Predictable")}</h2>

          <div className="mt-6 space-y-5">
            <p className="max-w-[620px] text-[15px] font-medium leading-[1.7] tracking-[-0.01em] text-[#52525B] md:text-[15px]">{t("Software Testing as a Service or TaaS is a cost-saving approach to increase test execution speed with on-demand resources. STAS represents an avenue for outsourcing many types of testing that are demanded in today’s IT environment. Magnetic Solution Limited offers STAS for organizations looking to ensure quality testing of applications that require extensive automation and a short test execution cycle.")}</p>

            <p className="max-w-[620px] text-[15px] font-medium leading-[1.7] tracking-[-0.01em] text-[#52525B] md:text-[15px]">{t("Magnetic Solution Limited specializes in simulating real-world testing environments and finding bugs in the software product. By STAS you can have a dedicated trained QA team working on the project on-demand with dynamic assets and sanitized test data. The skills or resources to carry out automation or manual testing can be intensive and vary project to project. Here, we ensure the best approach to mitigate the client’s demand for software quality with relevant testing activities as per SDLC and performing at best.")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
