import { Award } from "lucide-react";

type AwardItem = {
  title: string;
  description: string;
  tag: string;
};

const awards: AwardItem[] = [
  {
    title: "BASIS Top Performer in IT Export 2025",
    description:
      "Recognized by the Bangladesh Association of Software & Information Services (BASIS) as a Top Performer in IT Export 2025, we are proud to be acknowledged among the country's leading contributors to global IT revenue. This recognition reflects our strong international presence, consistent delivery excellence, and commitment to driving Bangladesh's growth in the global technology and outsourcing landscape.",
    tag: "Basis Top Performer | 2025",
  },
  {
    title: "BASIS Best Outsourcing Organization",
    description:
      "Every year Bangladesh Association of Software & Information Services (BASIS) awards IT companies that have brought in foreign revenue, and with our years of experience working overseas we have been winning the award for almost a decade.",
    tag: "Best Outsourcing | 2021",
  },
  {
    title: "The Daily Star ICT Award",
    description:
      "The Daily Star is a premier English news outlet of Bangladesh, awarding IT companies of our countries on achieving extraordinary accomplishments in the IT industry.",
    tag: "ICT Award | 2017",
  },
  {
    title: "BASIS Award Winner(Fin-tech, Real-estate, Transport)",
    description:
      "In the ICT award event of 2018 by Bangladesh Association of Software & Information (BASIS), we at Brain Station 23 walked away with top honors for our contributions in the fields of fintech, real estate, and transportation.",
    tag: "BASIS Award | 2018",
  },
  {
    title: "Code Warrior Challenge 2014",
    description:
      "We became the Code Warrior Challenge champions in 2014, in the web development segment.",
    tag: "Code Champion | 2014",
  },
  {
    title: "HSBC Exporter of the Year 2013",
    description:
      "In 2013 we were awarded the top SME exporter by the HSBC Bank for our global contributions in the IT industry.",
    tag: "Export Champion | 2013",
  },
  {
    title: "Kaggle- Bronze winner 2019",
    description:
      "In 2019 we became the bronze winner in the Google Artificial Intelligence Competition (Kaggle) in the Machine Learning category.",
    tag: "Kaggle Bronze | 2019",
  },
];

export default function AboutAwardsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[105px] text-[#07112b]">
      <div className="pointer-events-none absolute -left-[220px] top-[140px] h-[520px] w-[520px] rounded-full bg-[#08a7df]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-[260px] bottom-[100px] h-[560px] w-[560px] rounded-full bg-[#111E40]/8 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1080px]">
        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <span className="inline-flex rounded-full bg-[#eaf6fc] px-5 py-2 text-[14px] font-bold tracking-[-0.02em] text-[#079ed8]">
            Achievements
          </span>

          <h2 className="mt-6 text-[40px] font-black leading-[1.06] tracking-[-0.075em] text-[#07112b] md:text-[54px] lg:text-[60px]">
            Awards &amp; Recognitions
          </h2>

          <p className="mx-auto mt-6 max-w-[620px] text-[17px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[19px]">
            Recognition for our commitment to innovation, export excellence,
            outsourcing leadership, and global software delivery.
          </p>
        </div>

        {/* Awards List */}
        <div className="mt-[70px] space-y-7">
          {awards.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[18px] border border-[#e3edf5] bg-[#f4f8fc] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#08a7df]/50 hover:bg-white hover:shadow-[0_24px_70px_rgba(17,30,64,0.10)] md:p-9"
            >
              <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#08a7df] via-[#54c8ee] to-[#ffab2e] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#08a7df]/10 blur-[45px]" />

              <div className="relative z-10 grid grid-cols-1 gap-7 md:grid-cols-[1fr_230px] md:items-center">
                <div className="flex gap-5">
                  <div className="mt-1 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[14px] bg-white text-[#208ed4] shadow-[0_12px_30px_rgba(17,30,64,0.06)] transition duration-300 group-hover:bg-[#08a7df] group-hover:text-white">
                    <Award size={24} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-[24px] font-black leading-[1.18] tracking-[-0.055em] text-[#07112b] md:text-[32px]">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-[720px] text-[15px] font-medium leading-[1.6] tracking-[-0.025em] text-[#42637a] md:text-[16px]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex md:justify-end">
                  <span className="inline-flex rounded-full bg-white px-5 py-3 text-[13px] font-black tracking-[-0.02em] text-[#208ed4] shadow-[0_12px_30px_rgba(17,30,64,0.06)]">
                    {item.tag}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}