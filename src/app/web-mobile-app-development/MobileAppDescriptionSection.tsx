import { getTranslator } from "@/i18n/server";

export default async function MobileAppDescriptionSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white px-6 pb-[72px] text-[#0a0a0a] md:pb-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-x-14 gap-y-8 border-t border-[#ececec] pt-12 lg:grid-cols-2">
          <p className="text-[16.5px] font-medium leading-[1.75] tracking-[-0.01em] text-[#565656] md:text-[18px]">
            {t("With a large portfolio of industry-leading web and mobile application services, we know how to translate product requirements into measurable business growth. We build cross-platform and responsive applications where interface quality and backend security matter equally — for large-scale organisations and early stage startups alike.")}
          </p>

          <p className="text-[16.5px] font-medium leading-[1.75] tracking-[-0.01em] text-[#565656] md:text-[18px]">
            {t("Our dedicated platform teams build enterprise-oriented apps that fit the way your business already runs. Integrating notifications, secure payment gateways and modern APIs, we help you maintain a consistent digital presence and deepen customer engagement — across banking, e-commerce, and AR/VR experiences.")}
          </p>
        </div>
      </div>
    </section>
  );
}
