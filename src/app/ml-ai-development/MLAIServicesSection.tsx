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
  { title: "Human Behavior Analysis", icon: Users },
  { title: "Face Identification", icon: ScanFace },
  { title: "Process Automation", icon: Workflow },
  { title: "Pattern Analysis", icon: LineChart },
  { title: "Intelligent Chatbot", icon: MessageSquare },
  { title: "Fraud Detection (Bank)", icon: ShieldAlert },
  {
    title: "Macromolecule Analysis",
    icon: Microscope,
  },
  { title: "Predictive Analytics", icon: TrendingUp },
  { title: "Targeted Marketing", icon: Target },
  { title: "Churn Analysis", icon: UserMinus },
  { title: "Trend Analysis", icon: Activity },
  { title: "Time Series Analysis", icon: Clock },
];

export default async function MLAIServicesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        {/* Centered Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] md:text-[14px]">{t("What We Can Do")}</p>

          <h2 className="text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Offered Services")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[18px] text-pretty">{t("Customized ML and AI models aligned with your business goals. From automation to advanced analytics, we build solutions that scale with you.")}</p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full items-start gap-4 rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <span className="mb-1.5 block text-[13px] font-medium uppercase tracking-normal text-[#c91f28]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[#0a0a0a] text-[17px] font-medium leading-[1.3] tracking-[-0.01em] md:text-[18px]">
                    {t(service.title)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
