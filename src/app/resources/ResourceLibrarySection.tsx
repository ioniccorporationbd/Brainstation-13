import Link from "next/link";
import { Download } from "lucide-react";

type ResourceItem = {
  title: string;
  description: string;
  image: string;
  pdf: string;
};

const resources: ResourceItem[] = [
  {
    title: "AI Capabilities",
    description:
      "Brain Station 23 has proven expertise in AI, automation, and Data Science......",
    image:
      "https://dummyimage.com/720x420/111E40/ffffff.png&text=AI+Capabilities",
    pdf: "/pdf/ai-capabilities.pdf",
  },
  {
    title: "Brain Station 23 PLC",
    description:
      "Notice About Brain Station 23 PLC & Stock Exchange. (Public)......",
    image:
      "https://dummyimage.com/720x420/111E40/ffffff.png&text=Brain+Station+23+PLC",
    pdf: "/pdf/brain-station-23-plc.pdf",
  },
  {
    title: "Company Profile",
    description:
      "Connecting the world through innovative software solutions. Serving over 36+ countries...",
    image:
      "https://dummyimage.com/720x420/111E40/ffffff.png&text=Company+Profile",
    pdf: "/pdf/company-profile.pdf",
  },
];

export default function ResourceLibrarySection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#07112b]">
      <div className="mx-auto max-w-[1220px]">
        <div className="grid grid-cols-1 gap-x-9 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => (
            <article key={item.title} className="group">
              <Link href={item.pdf} className="block" target="_blank">
                <div className="relative overflow-hidden rounded-[10px] bg-[#111E40] shadow-[0_22px_65px_rgba(17,30,64,0.10)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[250px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-[#111E40]/10 via-transparent to-[#111E40]/20" />
                </div>
              </Link>

              <div className="mt-8">
                <h3 className="text-[26px] font-black leading-[1.14] tracking-[-0.06em] text-[#07112b] md:text-[30px]">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[420px] text-[18px] font-medium leading-[1.45] tracking-[-0.035em] text-[#315b72] md:text-[20px]">
                  {item.description}
                </p>

                <Link
                  href={item.pdf}
                  target="_blank"
                  className="mt-7 inline-flex items-center gap-3 text-[18px] font-black tracking-[-0.035em] text-[#2d8dcc] transition duration-300 hover:gap-4 hover:text-[#079ed8]"
                >
                  Download PDF
                  <Download size={18} strokeWidth={2} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}