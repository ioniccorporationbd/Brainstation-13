import { getTranslator } from "@/i18n/server";
export default async function EcommerceIntroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[8px]">
      <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-9 md:px-12 md:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          <p className="text-[15.5px] leading-[1.8] text-[#55585e]">{t("Online buyers expect speed, clarity and trust at every step. We design commerce journeys that reduce friction and lift conversion, backed by architecture that scales through peak season.")}</p>
          <p className="text-[15.5px] leading-[1.8] text-[#55585e]">{t("Whether you're launching a new brand or replatforming an established catalogue, we own the full stack — storefront, checkout, fulfilment and the analytics layer on top.")}</p>
        </div>
      </div>
    </section>
  );
}
