import Image from "next/image";
import Link from "next/link";

type Props = {
  closeMenu: () => void;
  mobile?: boolean;
};

const industriesOne = [
  { label: "Fintech", href: "/industries/fintech" },
  { label: "Pharma", href: "/industries/pharma" },
  { label: "Telecom", href: "/industries/telecom" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Software/ITES", href: "/industries/software-ites" },
  { label: "e-Commerce", href: "/industries/e-commerce" },
  { label: "All Industries →", href: "/industries" },
];

const industriesTwo = [
  { label: "Education", href: "/industries/education" },
  { label: "Retail", href: "/industries/retail" },
  { label: "Automotive", href: "/industries/automotive" },
  { label: "Startup", href: "/industries/startup" },
  { label: "Non-Profit", href: "/industries/non-profit" },
];

export default function IndustriesMenu({ closeMenu, mobile = false }: Props) {
  if (mobile) {
    return (
      <div className="space-y-5">
        <MobileLinks title="Industries" links={industriesOne} closeMenu={closeMenu} />
        <MobileLinks title="More Industries" links={industriesTwo} closeMenu={closeMenu} />
      </div>
    );
  }

  return (
    <section className="w-full bg-white shadow-sm">
      <div className="mx-auto grid max-w-[1340px] grid-cols-[430px_1fr]">
        <aside className="bg-[#f7f8fa] px-10 py-10">
          <h3 className="mb-4 text-[22px] font-semibold text-black">
            Industries
          </h3>

          <p className="mb-10 text-[14px] leading-6 text-gray-600">
            We’ve delivered 2500+ projects across 130+ sectors. Experience in
            your industry? We have it.
          </p>

          <div className="border-t border-gray-300 pt-6">
            <div className="mb-5 flex items-center justify-between">
              <h4 className="text-[18px] font-semibold text-black">
                Recommended Case Study
              </h4>

              <Link
                href="/case-studies"
                onClick={closeMenu}
                className="text-[15px] text-[#2d7dbf] hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="space-y-5">
              <CaseStudyCard
                image="/images/case-study-1.jpg"
                title="Safety at Sea - Leveraging IoT for Strengthening Maritime Security"
                description="Brain Station 23 developed an advanced IoT-based boat safety system"
                href="/case-study/safety-at-sea"
                closeMenu={closeMenu}
              />

              <CaseStudyCard
                image="/images/case-study-2.jpg"
                title="Fueling Financial Inclusion through Digital Wallet Solutions"
                description="Digital wallet services are becoming increasingly popular as people"
                href="/case-study/digital-wallet"
                closeMenu={closeMenu}
              />
            </div>
          </div>
        </aside>

        <div className="grid grid-cols-2 gap-x-24 px-12 py-10">
          <DesktopLinks title="Industries" links={industriesOne} closeMenu={closeMenu} />
          <DesktopLinks title="" links={industriesTwo} closeMenu={closeMenu} />
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({
  image,
  title,
  description,
  href,
  closeMenu,
}: {
  image: string;
  title: string;
  description: string;
  href: string;
  closeMenu: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={closeMenu}
      className="grid grid-cols-[150px_1fr] gap-4"
    >
      <Image
        src={image}
        alt={title}
        width={150}
        height={90}
        className="h-[90px] w-[150px] rounded-lg object-cover"
      />

      <div>
        <h5 className="text-[15px] font-medium leading-6 text-black">
          {title}
        </h5>

        <p className="mt-2 text-[14px] leading-5 text-gray-600">
          {description}
        </p>
      </div>
    </Link>
  );
}

function DesktopLinks({
  title,
  links,
  closeMenu,
}: {
  title: string;
  links: { label: string; href: string }[];
  closeMenu: () => void;
}) {
  return (
    <div>
      {title && (
        <p className="mb-6 text-[17px] font-semibold text-black before:mr-2 before:inline-block before:h-2 before:w-2 before:bg-[#4e92ce]">
          {title}
        </p>
      )}

      <div className="space-y-5">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="block text-[17px] font-medium text-black hover:text-[#009fe3]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileLinks({
  title,
  links,
  closeMenu,
}: {
  title: string;
  links: { label: string; href: string }[];
  closeMenu: () => void;
}) {
  return (
    <div>
      <p className="mb-3 text-[15px] font-semibold text-[#009fe3]">{title}</p>

      <div className="space-y-3">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="block text-[15px] font-medium text-gray-700"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}