import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";

export default async function DataMigrationHeroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white py-[48px] text-[#0a0a0a] md:py-[96px]">
      <div className="grid brand-container grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
        {/* Left - Text */}
        <div>
          <p className="mb-5 inline-flex rounded-full bg-[#fdecec] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Data Migration")}</p>

          <h1 className="text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0a0a0a] md:text-[52px] lg:text-[56px]">{t("Data Migration Services")}</h1>

          <p className="mt-6 max-w-[560px] text-[17px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656] md:text-[19px]">{t("Modernize legacy systems with secure, clean, and fast data migration — moving complex data to modern platforms with zero data loss and minimal downtime.")}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >{t("Instant Quote")}</Link>

            <Link
              href="/schedule-a-call"
              className="inline-flex items-center justify-center rounded-full border border-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
            >{t("Book a Meeting")}</Link>
          </div>
        </div>

        {/* Right - Image */}
        <div className="group relative h-[320px] w-full overflow-hidden rounded-2xl border border-[#ececec] md:h-[440px] lg:h-[480px]">
          <Image
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1400&auto=format&fit=crop"
            alt={t("Data migration and database modernization")}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
