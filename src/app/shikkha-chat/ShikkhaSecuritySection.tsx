import { Lock } from "lucide-react";
import { getTranslator } from "@/i18n/server";

import ShikkhaFrame from "./ShikkhaFrame";

const bullets = [
  "Single branded sign-in for the whole institution",
  "Role-based permissions for all eight dashboards",
  "Sensitive student data stays scoped to the right people",
];

export default async function ShikkhaSecuritySection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Secure, role-scoped access")}</p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("One login, the right view for every person")}</h2>
          <p className="mt-4 max-w-[560px] text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">{t("Everyone signs in through a single, branded portal. Once inside, permissions decide what each role can see and do — a student never reaches an admin screen, and a district officer sees only aggregated oversight data.")}</p>
          <ul className="mt-7 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#fdecec] text-[#c91f28]">
                  <Lock size={13} strokeWidth={2.4} />
                </span>
                <span className="text-[14.5px] leading-[1.6] text-[#3f434a] md:text-[15.5px]">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ShikkhaFrame
          src="/images/shikkha/shikkha-login.webp"
          alt={t("Shikkha Chat secure login screen")}
          url="dash.shikkhachat.com/login"
        />
      </div>
    </section>
  );
}
