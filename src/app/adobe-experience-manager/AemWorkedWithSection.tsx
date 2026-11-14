import { getTranslator } from "@/i18n/server";
import {
  BarChart3,
  Cloud,
  FileText,
  Image as ImageIcon,
  PanelsTopLeft,
  Palette,
  ShoppingCart,
  Target,
} from "lucide-react";

const products = [
  { title: "AEM Sites", icon: PanelsTopLeft },
  { title: "AEM Assets", icon: ImageIcon },
  { title: "AEM Forms", icon: FileText },
  { title: "AEM as a Cloud Service", icon: Cloud },
  { title: "Adobe Target", icon: Target },
  { title: "Adobe Analytics", icon: BarChart3 },
  { title: "Adobe Creative Cloud", icon: Palette },
  { title: "Adobe Commerce", icon: ShoppingCart },
];

export default async function AemWorkedWithSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Platform")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("The Adobe Stack We Work Across")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("Product modules and adjacent Adobe solutions our AEM work connects to.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <div
                key={product.title}
                className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-[#ececec] bg-white px-5 py-7 text-center transition-colors duration-300 hover:border-[#c91f28]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={20} strokeWidth={2.1} />
                </span>

                <span className="text-[14px] font-bold leading-[1.35] tracking-[-0.01em] text-[#0a0a0a]">
                  {t(product.title)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
