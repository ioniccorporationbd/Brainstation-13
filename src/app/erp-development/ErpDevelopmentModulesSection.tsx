import {
  BarChart3,
  BookOpen,
  Boxes,
  Handshake,
  ShoppingCart,
  Truck,
  Users,
  Wallet,
} from "lucide-react";
import { getTranslator } from "@/i18n/server";

const modules = [
  { title: "Finance", description: "Cash flow, payments and budgets in one ledger.", icon: Wallet },
  { title: "Accounting", description: "Journals, reconciliation and tax-ready reports.", icon: BookOpen },
  { title: "HR", description: "Employees, attendance, leave and payroll inputs.", icon: Users },
  { title: "Inventory", description: "Stock levels, warehouses, transfers and valuation.", icon: Boxes },
  { title: "CRM", description: "Leads, opportunities and customer history.", icon: Handshake },
  { title: "Sales", description: "Quotations, orders, invoicing and collections.", icon: ShoppingCart },
  { title: "Procurement", description: "Requests, purchase orders and supplier terms.", icon: Truck },
  { title: "Reporting", description: "Dashboards across every module you run.", icon: BarChart3 },
];

export default async function ErpDevelopmentModulesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] md:pb-[104px]">
      <div className="brand-container">
        <div className="max-w-[700px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Coverage")}</p>
          <h2 className="mt-4 text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px]">{t("ERP modules")}</h2>
          <p className="mt-4 text-[15.5px] leading-[1.6] text-[#52525B]">{t("Start with the modules you need today and extend to the rest without re-platforming.")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50 sm:p-7"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={19} />
              </span>
              <h3 className="mt-4 text-[18px] md:text-[20px] font-semibold leading-[1.3] text-black">
                {t(item.title)}
              </h3>
              <p className="mt-1.5 text-[14px] leading-[1.65] text-[#52525B]">
                {t(item.description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
