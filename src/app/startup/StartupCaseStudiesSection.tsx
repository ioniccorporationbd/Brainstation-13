import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CaseStudy = {
  logoText: string;
  logoClassName: string;
  category: string;
  title: string;
  image: string;
  description: string;
  highlights: string[];
};

const cases: CaseStudy[] = [
  {
    logoText: "vallie",
    logoClassName:
      "text-[19px] font-bold lowercase tracking-[-0.03em] text-[#d90b1f]",
    category: "Web & Mobile App",
    title: "Vallie",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1400&auto=format&fit=crop",
    description:
      "Vallie is London's first on-demand valet parking app, built to remove the worry of finding a parking space in the city. In office hours it is real added mental stress whether you will be able to find a place for parking or not.",
    highlights: [
      "Real-time iOS & Android app",
      "Location and car park status",
    ],
  },
  {
    logoText: "Track my Tradie",
    logoClassName: "text-[15px] font-black leading-[1] text-[#45aee2]",
    category: "Service Marketplace",
    title: "Track my Tradie",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
    description:
      "Track my Tradie helps customers connect with service professionals, track job progress, and improve service visibility through a modern digital platform designed for startup growth.",
    highlights: ["Service tracking", "Customer communication"],
  },
];

export default function StartupCaseStudiesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[640px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Case studies
            </p>
            <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
              Startup products in market
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
              Engagements where early-stage products had to ship and hold up in
              real use.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3 text-[14.5px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
          >
            See all case studies
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {cases.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#ececec] bg-white transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-[250px]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center rounded-md bg-[#fafafa] px-3 py-1.5 ring-1 ring-[#ececec] ${item.logoClassName}`}
                  >
                    {item.logoText}
                  </span>
                  <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
                    {item.category}
                  </p>
                </div>

                <h3 className="mt-4 text-[20px] font-semibold leading-[1.25] text-black md:text-[23px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.7] text-[#55585e]">
                  {item.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-lg border border-[#ececec] bg-[#fafafa] px-3 py-1.5 text-[12.5px] font-semibold text-black"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/case-studies"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-[14px] font-bold text-[#c91f28] transition-all duration-200 hover:gap-3.5"
                >
                  View case studies
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
