import {
  ArrowRight,
  Car,
  HardHat,
  Cpu,
  Bot,
  Share2,
  Clock,
  Pause,
} from "lucide-react";

const services = [
  {
    title: "3D Car Modeling",
    videoTitle: "What We Build: Automotive Visualization",
    desc: "Engine internals, EV systems, drivetrain mechanics, and precision component renders.",
    icon: Car,
    img: "https://images.unsplash.com/photo-1600706432502-77a0e2e32771?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Heavy Machinery",
    videoTitle: "What We Build: Heavy Machinery",
    desc: "Excavators, cranes, mining equipment, and construction vehicle technical...",
    icon: HardHat,
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Semiconductor Manufacturing",
    videoTitle: "What We Build: Semiconductor Manufacturing",
    desc: "Wafer processing, clean room equipment, and advanced fab...",
    icon: Cpu,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Robotics & Automation",
    videoTitle: "What We Build: Robotics & Automation",
    desc: "Industrial robots, conveyor systems, and factory automation walkthroughs.",
    icon: Bot,
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ModelingServicesSection() {
  return (
    <section className="bg-[#101d3b] px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            3D Modeling Services <br /> for Complex Industries
          </h2>

          <p className="mt-6 text-base text-white/65 md:text-lg">
            Engineering-accurate 3D visualizations tailored for the world&apos;s
            most demanding manufacturing and engineering sectors.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-7 md:grid-cols-2">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="overflow-hidden rounded-lg bg-[#223d5b]"
              >
                <div className="relative h-[270px] overflow-hidden bg-black">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-75"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60" />

                  <div className="absolute left-6 top-4 flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#23a9e8]">
                      <Bot className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold leading-tight md:text-base">
                        {item.videoTitle}
                      </h3>
                      <p className="text-xs text-white/85">Brain Station 23</p>
                    </div>
                  </div>

                  <button className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/45">
                    <Pause className="h-6 w-6 fill-white text-white" />
                  </button>

                  <div className="absolute bottom-4 left-6 flex items-center gap-6">
                    <Share2 className="h-5 w-5" />
                    <Clock className="h-5 w-5" />
                  </div>

                  <div className="absolute bottom-4 right-6 text-sm font-bold">
                    YouTube
                  </div>
                </div>

                <div className="flex items-center justify-between gap-5 px-7 py-7">
                  <div className="flex items-start gap-5">
                    <Icon className="mt-1 h-7 w-7 shrink-0 text-white" />

                    <div>
                      <h3 className="text-2xl font-medium">{item.title}</h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-white">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="h-8 w-8 shrink-0" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}