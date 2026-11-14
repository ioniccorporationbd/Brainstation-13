import { getTranslator } from "@/i18n/server";
export default async function SharePointDescriptionSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[48px] text-[#0a0a0a] md:pb-[96px]">
      <div className="brand-container">
        <div className="grid gap-x-14 gap-y-8 border-t border-[#ececec] pt-12 lg:grid-cols-2">
          <p className="text-[16.5px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656] md:text-[18px]">{t("Discover and focus on strategic business management, magnify the growth prospects with SharePoint services provided exclusively by Magnetic Solution Limited. Our strategic system integration, administration, upgradation and development enhances proactive decisiveness of overall business productivity and agility while maintaining a simplified technology landscape. Magnetic Solution Limited offers the most robust guarantee for availability in performance, along with a steady service response time and expert technical support.")}</p>

          <p className="text-[16.5px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656] md:text-[18px]">{t("We believe to effectively implement SharePoint solution based on your specific needs with rapid deployment to faster the ROI for your business. We trust in the power of Microsoft SharePoint to transform business workflows, collaboration and routined operations. To help you get there and beyond we offer a rare breed of highly qualified SharePoint architects, administrators and developers.")}</p>
        </div>
      </div>
    </section>
  );
}
