import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type RelatedCaseStudy = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

const relatedCaseStudies: RelatedCaseStudy[] = [
  {
    title: "Pro Athletics",
    category: "ECOMMERCE",
    description:
      "In today’s fast-paced business environment, meeting the high-tech demands of customers is significant for sustained success.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
    href: "/case-studies/pro-athletics",
  },
  {
    title: "Empowering Shwapno: A Journey Towards Digital Excellence in Retail",
    category: ".NET, ECOMMERCE",
    description:
      "For the last decade, the rapid advancement in information and communication technology has transformed retail experiences.",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1400&auto=format&fit=crop",
    href: "/case-studies/empowering-shwapno",
  },
  {
    title: "Career Guidance Solutions",
    category: "LMS",
    description:
      "The legal industry is experiencing a transformative shift with the integration of AI technologies and digital platforms.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    href: "/case-studies/career-guidance-solutions",
  },
];

export default function CaseStudyRelatedSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto max-w-[1240px]">
        {/* Top Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <div>
            <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
              Related Case Studies
            </p>

            <h2 className="text-[48px] font-bold leading-[1.04] tracking-[-0.075em] text-[#050b18] md:text-[72px]">
              You might also like
            </h2>
          </div>

          <div className="lg:pt-2">
            <p className="max-w-[520px] text-[21px] font-medium leading-[1.42] tracking-[-0.04em] text-[#42637a] md:text-[24px]">
              Browse our library of 100+ case studies to find the perfect
              solution for your needs.
            </p>

            <Link
              href="/case-studies"
              className="mt-10 inline-flex rounded-full bg-[#ffab2e] px-8 py-4 text-[17px] font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffc15a] hover:shadow-[0_14px_34px_rgba(255,171,46,0.32)]"
            >
              See all Case Studies
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-[86px] grid grid-cols-1 gap-[34px] md:grid-cols-2 xl:grid-cols-3">
          {relatedCaseStudies.map((item) => (
            <article key={item.title} className="group">
              <Link href={item.href} className="block">
                <div className="relative h-[255px] overflow-hidden rounded-[9px] bg-[#f4f8fc] shadow-[0_16px_45px_rgba(17,30,64,0.06)] md:h-[285px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 390px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111E40]/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>

                <div className="mt-7">
                  <span className="inline-flex rounded-full bg-[#e8f1f6] px-5 py-2 text-[15px] font-bold uppercase leading-none tracking-[-0.025em] text-[#42637a] transition duration-300 group-hover:bg-[#4fa0d1] group-hover:text-white">
                    {item.category}
                  </span>

                  <h3 className="mt-5 max-w-[390px] text-[24px] font-bold leading-[1.28] tracking-[-0.055em] text-[#050b18] md:text-[28px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[390px] text-[18px] font-medium leading-[1.5] tracking-[-0.035em] text-[#42637a]">
                    {item.description}
                  </p>

                  <div className="mt-7 inline-flex items-center gap-3 text-[16px] font-bold text-[#2f8dcc] transition duration-300 group-hover:gap-5 group-hover:text-[#ffab2e]">
                    View Case Study
                    <ArrowRight size={18} strokeWidth={1.8} />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}