import { AlertTriangle, RadioTower, Waves } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const problems = [
  {
    title: "Limited connectivity",
    description: "Coastal and offshore routes drop signal exactly where crews need it most.",
    icon: RadioTower,
  },
  {
    title: "No live visibility",
    description: "Owners had no reliable picture of where a vessel or its crew was.",
    icon: Waves,
  },
  {
    title: "Slow incident response",
    description: "By the time a problem was reported, the response window had already narrowed.",
    icon: AlertTriangle,
  },
];

export default async function SafetyAtSeaChallengeSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] pt-[8px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("The problem")}</p>
            <h2 className="mt-4 max-w-[560px] text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Small fleets, thin coverage, high stakes")}</h2>

            <p className="mt-5 text-[15.5px] leading-[1.8] text-[#55585e]">{t("Small fishing fleets and coastal vessels operate with limited connectivity and visibility, putting crews at risk when weather or engine trouble hits.")}</p>

            <ul className="mt-8 space-y-3">
              {problems.map((item) => (
                <li
                  key={item.title}
                  className="group flex items-start gap-4 rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                    <item.icon size={19} />
                  </span>
                  <div>
                    <h3 className="text-[15.5px] font-semibold text-black">{t(item.title)}</h3>
                    <p className="mt-1 text-[14px] leading-[1.6] text-[#55585e]">{t(item.description)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#ececec] lg:sticky lg:top-24">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1200&auto=format&fit=crop"
              alt={t("Open sea under a heavy evening sky")}
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
