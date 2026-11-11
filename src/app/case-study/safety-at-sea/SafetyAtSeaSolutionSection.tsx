import {
  ChartColumn,
  Cloud,
  Network,
  ShieldCheck,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const features = [
  { title: "Vessel telemetry", description: "Location, engine and environmental sensors streamed in real time.", icon: Network },
  { title: "Emergency alarms", description: "Instant SOS and boundary alerts to owners and responders.", icon: ShieldCheck },
  { title: "Offline resilience", description: "Store-and-forward sync for low-coverage coastal networks.", icon: Cloud },
  { title: "Command dashboard", description: "A live fleet map and incident timeline for authorities.", icon: ChartColumn },
  { title: "Mobile alerts", description: "Push and SMS notifications the moment something is wrong.", icon: Smartphone },
  { title: "Analytics", description: "Incident trends that inform prevention, not just response.", icon: TrendingUp },
];

export default function SafetyAtSeaSolutionSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            The solution
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
            What we built
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
            We designed and built an IoT safety platform that streams vessel
            location, conditions and alarms to owners and rescue services &mdash;
            even on constrained networks.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50 sm:min-h-[170px] sm:p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={21} />
              </span>
              <h3 className="mt-5 text-[16px] font-semibold leading-[1.3] text-black">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-[#55585e]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
