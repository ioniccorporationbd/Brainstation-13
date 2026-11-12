import Image from "next/image";
import { getTranslator } from "@/i18n/server";
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
    title: "Fueling financial inclusion with digital wallets",
    category: "Fintech",
    description:
      "A compliant digital wallet platform that brought secure, everyday financial services to underbanked communities at national scale.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop",
    href: "/case-study/digital-wallet",
  },
  {
    title: "Safety at Sea — IoT for stronger maritime security",
    category: "IoT",
    description:
      "An IoT-based boat safety system giving crews and authorities real-time visibility to prevent and respond to incidents at sea.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1400&auto=format&fit=crop",
    href: "/case-study/safety-at-sea",
  },
];

export default async function CaseStudyRelatedSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1180px]">
        {/* Centered Heading */}
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Related Case Studies")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("You Might Also Like")}</h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("Explore more of the products and platforms we have designed and delivered.")}</p>

          <Link
            href="/case-studies"
            className="mt-8 inline-flex rounded-full border border-[#c91f28] px-7 py-3.5 text-[15px] font-bold text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
          >{t("See all Case Studies")}</Link>
        </div>

        {/* Cards - 2 per row desktop */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {relatedCaseStudies.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-[#ececec] bg-white transition-colors duration-300 hover:border-[#c91f28]"
            >
              <Link href={item.href} className="block">
                <div className="relative h-[240px] w-full overflow-hidden md:h-[280px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-flex rounded-full bg-[#fdecec] px-3 py-1.5 text-[12px] font-bold uppercase leading-none tracking-[0.08em] text-[#c91f28] transition duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                    {item.category}
                  </span>

                  <h3 className="mt-4 text-[21px] font-bold leading-[1.28] tracking-[-0.015em] text-[#0a0a0a]">
                    {t(item.title)}
                  </h3>

                  <p className="mt-3 text-[14.5px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
                    {t(item.description)}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2.5 text-[15px] font-bold text-[#c91f28] transition duration-300 group-hover:gap-4">{t("View Case Study")}<ArrowRight size={17} strokeWidth={2} />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
