import Link from "next/link";

type Props = {
  closeMenu: () => void;
  mobile?: boolean;
};

const fintech = [
  { label: "Digital Banking Software", href: "/products/digital-banking-software" },
  { label: "E-wallet Software", href: "/products/e-wallet-software" },
  { label: "Digital Lending & Credit", href: "/products/digital-lending-credit" },
  { label: "Insurance 360", href: "/products/insurance-360" },
  {
    label: "Cross Border Payments Solution",
    href: "/products/cross-border-payments-solution",
  },
];

const healthcare = [
  { label: "Omnizia", href: "/products/omnizia" },
  { label: "Time2Publish", href: "/products/time2publish" },
];

const aiSolution = [
  {
    label: "NeuraFlow - Conversational AI Agent",
    href: "/products/neuraflow",
  },
];

const lms = [{ label: "Proctoring Pro", href: "/products/proctoring-pro" }];

export default function ProductsMenu({ closeMenu, mobile = false }: Props) {
  if (mobile) {
    return (
      <div className="space-y-5">
        <MobileLinks title="Fintech" links={fintech} closeMenu={closeMenu} />
        <MobileLinks title="Healthcare" links={healthcare} closeMenu={closeMenu} />
        <MobileLinks title="AI Solution" links={aiSolution} closeMenu={closeMenu} />
        <MobileLinks title="LMS" links={lms} closeMenu={closeMenu} />
      </div>
    );
  }

  return (
    <section className="w-full bg-white shadow-sm">
      <div className="mx-auto grid max-w-[1340px] grid-cols-[430px_1fr]">
        <aside className="bg-[#f7f8fa] px-10 py-10">
          <h3 className="mb-4 text-[22px] font-semibold text-black">
            Products
          </h3>

          <p className="mb-10 text-[14px] leading-6 text-gray-600">
            Brain Station 23 delivers tailored digital solutions across fintech,
            healthcare, e-commerce, and more.
          </p>

          <div className="border-t border-gray-300 pt-6">
            <h4 className="mb-5 text-[18px] font-semibold text-black">
              Testimonials
            </h4>

            <p className="text-[15px] leading-6 text-black">
              Brain Station 23’s resource augmentation transformed our
              development velocity. Their AI-powered approach delivered our
              fintech platform 8X faster than expected.
            </p>

            <p className="mt-6 text-[15px] font-medium text-black">
              Anupom Syam
            </p>

            <p className="mt-1 text-[14px] text-gray-600">
              Founder & CEO at Tackle
            </p>
          </div>
        </aside>

        <div className="grid grid-cols-3 gap-x-16 gap-y-10 px-12 py-10">
          <DesktopLinks title="Fintech" links={fintech} closeMenu={closeMenu} />
          <DesktopLinks title="Healthcare" links={healthcare} closeMenu={closeMenu} />
          <DesktopLinks title="AI Solution" links={aiSolution} closeMenu={closeMenu} />
          <DesktopLinks title="LMS" links={lms} closeMenu={closeMenu} />
        </div>
      </div>
    </section>
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
      <p className="mb-6 text-[17px] font-semibold text-black before:mr-2 before:inline-block before:h-2 before:w-2 before:bg-[#4e92ce]">
        {title}
      </p>

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