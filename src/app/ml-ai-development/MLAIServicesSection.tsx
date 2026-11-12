import {
  Activity,
  Clock,
  LineChart,
  MessageSquare,
  Microscope,
  ScanFace,
  ShieldAlert,
  Target,
  TrendingUp,
  UserMinus,
  Users,
  Workflow,
} from "lucide-react";
import { getTranslator } from "@/i18n/server";

type Service = {
  title: string;
  icon: React.ElementType;
};

const services: Service[] = [
  { title: "Customer/Human Behavior Analysis", icon: Users },
  { title: "Face Identification", icon: ScanFace },
  { title: "Process Automation", icon: Workflow },
  { title: "Pattern Analysis", icon: LineChart },
  { title: "Intelligent Chatbot", icon: MessageSquare },
  { title: "Fraudulent Identification (Bank)", icon: ShieldAlert },
  {
    title: "Data Analysis for Biological Macromolecular Structures",
    icon: Microscope,
  },
  { title: "Predictive Analytics & Modeling", icon: TrendingUp },
  { title: "Targeted Marketing", icon: Target },
  { title: "Churn Analysis", icon: UserMinus },
  { title: "Trend Analysis", icon: Activity },
  { title: "Time Series Analysis", icon: Clock },
];

export default async function MLAIServicesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        {/* Centered Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("What We Can Do")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Offered Services")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("Customized ML and AI models aligned with your business goals. From automation to advanced analytics, we build solutions that scale with you.")}</p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full items-start gap-4 rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <span className="mb-1.5 block text-[12px] font-bold uppercase tracking-[0.1em] text-[#c91f28]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-[15.5px] font-bold leading-[1.4] tracking-[-0.01em] text-[#0a0a0a]">
                    {t(service.title)}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
