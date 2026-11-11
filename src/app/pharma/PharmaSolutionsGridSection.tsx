import {
  BrainCircuit,
  Box,
  Eye,
  Megaphone,
  Store,
  WalletCards,
} from "lucide-react";

type PharmaSolution = {
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
};

const solutions: PharmaSolution[] = [
  {
    title: "Omnizia - HCP Activation Suite",
    icon: Megaphone,
    content: (
      <>
        <p>
          Successful cross-channel marketing requires the right combination of
          tools to bundle and analyze data from various sources, and to
          successfully use the insights gained to address the relevant target
          groups.
        </p>
        <p>
          With our Marketing Suite Omnizia, you are able to shape your strategy
          based on market insights and hyper-personalized HCP engagement,
          integration into own workflows dashboards and timelines.
        </p>
      </>
    ),
  },
  {
    title: "Strategic Intelligence for Smarter Pharma Marketing",
    icon: BrainCircuit,
    content: (
      <p>
        Unlock deep industry knowledge with our pharma marketing consultancy. We
        help you build scalable infrastructure that amplifies commercial
        performance and reduces operational costs.
      </p>
    ),
  },
  {
    title: "Time2Publish",
    icon: WalletCards,
    content: (
      <>
        <p>
          <strong>AEM-Veeva integration for seamless compliance</strong>{" "}
          streamlines your marketing compliance workflow with our Time2Publish
          plug-in, connecting Adobe Experience Manager and Veeva Vault.
        </p>
        <ul>
          <li>Automate and accelerate approvals</li>
          <li>Reduce admin effort across review cycles</li>
          <li>Ensure consistent brand execution across all content</li>
        </ul>
      </>
    ),
  },
  {
    title: "Pharma Shops",
    icon: Store,
    content: (
      <>
        <p>
          <strong>Sell OTC products directly to your HCP community</strong>
          <br />
          Tap into direct digital sales by offering your over-the-counter
          portfolio straight to healthcare professionals &mdash; without
          intermediaries, with personalized offers, and without sacrificing your
          margins.
        </p>
        <p>
          Create your own branded storefront, build trust, and control pricing
          &mdash; all in one platform.
        </p>
      </>
    ),
  },
  {
    title: "eDucation",
    icon: Box,
    content: (
      <>
        <p>
          <strong>LMS solutions for internal teams and HCP audiences</strong>
          <br />
          From onboarding and internal upskilling to engaging your healthcare
          professional network, we deliver powerful Learning Management Systems
          tailored to pharma.
        </p>
        <p>Our offering includes:</p>
        <ul>
          <li>Custom course development</li>
          <li>Audience segmentation</li>
          <li>Progress tracking &amp; certification</li>
          <li>Integration with existing tools</li>
        </ul>
        <p>
          Empower your teams and educate your partners &mdash; with full control
          and measurable impact.
        </p>
      </>
    ),
  },
  {
    title: "AR & VR Engagement",
    icon: Eye,
    content: (
      <>
        <p>
          <strong>Immersive tools for HCP education and product experience</strong>{" "}
          transform how you connect with healthcare professionals using
          Augmented and Virtual Reality solutions tailored for pharma.
        </p>
        <p>We help you:</p>
        <ul>
          <li>Engage HCPs with interactive, science-driven experiences</li>
          <li>Visualize complex concepts like never before</li>
          <li>Accelerate product understanding and increase recall</li>
          <li>Integrate with your existing digital ecosystem</li>
        </ul>
        <p>
          Deliver impactful experiences that inform, inspire, and differentiate
          your brand.
        </p>
      </>
    ),
  },
];

export default function PharmaSolutionsGridSection() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Solutions
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
            Pharma solutions
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
            Products and platforms that address the critical challenges pharma
            companies face today.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={21} />
              </span>

              <h3 className="mt-5 text-[17px] font-semibold leading-[1.3] text-black">
                {item.title}
              </h3>

              <div className="mt-3 space-y-3 text-[13.5px] leading-[1.7] text-[#55585e] [&_li]:relative [&_li]:pl-4 [&_p]:m-0 [&_strong]:font-semibold [&_strong]:text-black [&_ul]:space-y-1 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[9px] [&_li]:before:h-[5px] [&_li]:before:w-[5px] [&_li]:before:rounded-full [&_li]:before:bg-[#c91f28]">
                {item.content}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
