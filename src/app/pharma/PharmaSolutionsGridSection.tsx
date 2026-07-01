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
      <>
        <p>
          Unlock deep industry knowledge with our pharma marketing consultancy.
          We help you build scalable infrastructure that amplifies commercial
          performance and reduces operational costs.
        </p>
      </>
    ),
  },
  {
    title: "Time2Publish",
    icon: WalletCards,
    content: (
      <>
        <p>
          <strong>AEM-Veeva Integration for Seamless Compliance</strong>{" "}
          streamlines your marketing compliance workflow with our Time2Publish
          plug-in, connecting Adobe Experience Manager and Veeva Vault.
        </p>
        <ul>
          <li>Automatize and accelerate approvals by up to 35%</li>
          <li>Reduce costs by up to 42% by slashing admin effort.</li>
          <li>Ensure consistent brand execution across all content.</li>
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
          <strong>Sell OTC Products Directly to Your HCP Community</strong>
          <br />
          Tap into direct digital sales by offering your over-the-counter
          portfolio straight to healthcare professionals — without
          intermediaries, with personalized offers, and without sacrificing your
          margins.
        </p>
        <p>
          Create your own branded storefront, build trust, and control pricing —
          all in one platform.
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
          <strong>LMS Solutions for Internal Teams and HCP Audiences</strong>
          <br />
          From onboarding and internal upskilling to engaging your healthcare
          professional network, we deliver powerful Learning Management Systems
          tailored to pharma.
        </p>
        <p>Our offering includes:</p>
        <ul>
          <li>Custom course development</li>
          <li>Audience segmentation</li>
          <li>Progress tracking & certification</li>
          <li>Integration with existing tools</li>
        </ul>
        <p>
          Empower your teams and educate your partners — with full control and
          measurable impact.
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
          <strong>
            Immersive Tools for HCP Education and product experience
          </strong>{" "}
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
    <section className="relative overflow-hidden border-b-[6px] border-[#f4f8fc] bg-white px-6 py-[92px] text-[#11182f]">
      <div className="mx-auto max-w-[1120px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[15px] font-medium uppercase tracking-[-0.025em] text-[#3f93cf]">
            Solutions
          </p>

          <h2 className="mt-5 text-[42px] font-medium leading-[1.08] tracking-[-0.065em] text-[#050b18] md:text-[54px]">
            Pharma Solutions
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-[70px] grid grid-cols-1 gap-y-[70px] md:grid-cols-2 md:gap-x-[58px]">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            const isRightColumn = index % 2 === 1;

            return (
              <article
                key={item.title}
                className={`group relative min-h-[250px] transition duration-300 ${
                  isRightColumn ? "md:border-l md:border-[#e4edf5] md:pl-8" : ""
                }`}
              >
                <div className="mb-10 flex h-[40px] w-[40px] items-center justify-center text-[#3f93cf] transition duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                  <Icon size={34} strokeWidth={1.7} />
                </div>

                <h3 className="text-[21px] font-bold leading-[1.25] tracking-[-0.04em] text-[#050b18] md:text-[23px]">
                  {item.title}
                </h3>

                <div className="mt-7 space-y-5 text-[15px] font-medium leading-[1.5] tracking-[-0.025em] text-[#42637a] md:text-[16px] [&_strong]:font-bold [&_strong]:text-[#42637a] [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1">
                  {item.content}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}