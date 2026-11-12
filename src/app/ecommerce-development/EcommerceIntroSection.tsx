import { getTranslator } from "@/i18n/server";
export default async function EcommerceIntroSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white px-6 pb-[72px] text-[#0a0a0a] md:pb-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-x-14 gap-y-8 border-t border-[#ececec] pt-12 lg:grid-cols-2">
          <p className="text-[16.5px] font-medium leading-[1.75] tracking-[-0.01em] text-[#565656] md:text-[18px]">{t("Modern commerce is composable: a headless storefront, an API-first back end and best-of-breed services wired together. We design and build that stack so marketing can move fast without breaking engineering.")}</p>

          <p className="text-[16.5px] font-medium leading-[1.75] tracking-[-0.01em] text-[#565656] md:text-[18px]">{t("From headless frameworks and commerce platforms to custom basket and checkout logic, we ship storefronts your merchandising team can run and your engineers can extend.")}</p>
        </div>
      </div>
    </section>
  );
}
