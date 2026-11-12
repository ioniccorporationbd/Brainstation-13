import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import { Check } from "lucide-react";

const appTypes = [
  "Native apps (iOS, Android)",
  "Cross-platform apps (Flutter, React Native)",
  "Enterprise mobility solutions",
  "On-demand apps (ride-sharing, food delivery, fintech wallets)",
  "AR/VR-powered mobile apps",
];

export default async function MobileAppTypesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white px-6 pb-[88px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div>
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("App Types")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Types of Mobile Apps We Develop")}</h2>

          <ul className="mt-8 space-y-3.5">
            {appTypes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3.5 rounded-xl border border-[#ececec] bg-white px-5 py-4 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <span className="mt-[1px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28]">
                  <Check size={13} strokeWidth={2.8} />
                </span>

                <span className="text-[15px] font-medium leading-[1.5] text-[#565656]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3.2] w-full overflow-hidden rounded-2xl border border-[#ececec] bg-[#f7f7f7]">
          <Image
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop"
            alt={t("Mobile app wireframing and planning")}
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
