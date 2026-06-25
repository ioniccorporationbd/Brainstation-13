import Image from "next/image";
import Link from "next/link";

type Props = {
  closeMenu: () => void;
  mobile?: boolean;
};

const insideLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
  { label: "Our Resources", href: "/resources" },
  { label: "Investor Relations", href: "/investor-relations" },
];

const recognitionLinks = [
  { label: "Partners", href: "/partners" },
  { label: "Enterprise-Grade Security", href: "/enterprise-grade-security" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Media", href: "/media" },
  { label: "Join as Partner", href: "/join-as-partner" },
];

export default function ResourcesMenu({ closeMenu, mobile = false }: Props) {
  if (mobile) {
    return (
      <div className="space-y-5">
        <MobileLinks
          title="Inside Brain Station 23"
          links={insideLinks}
          closeMenu={closeMenu}
        />
        <MobileLinks
          title="Recognitions"
          links={recognitionLinks}
          closeMenu={closeMenu}
        />
      </div>
    );
  }

  return (
    <section className="w-full bg-white shadow-sm">
      <div className="mx-auto grid max-w-[1340px] grid-cols-[430px_1fr]">
        <aside className="bg-[#f7f8fa] px-10 py-10">
          <h3 className="mb-4 text-[22px] font-semibold text-black">
            About Brain Station 23
          </h3>

          <p className="mb-10 text-[14px] leading-6 text-gray-600">
            Founded in 2006, we are a global software company powering digital
            transformation across industries.
          </p>

          <div className="border-t border-gray-300 pt-6">
            <Link
              href="/about-us"
              onClick={closeMenu}
              className="grid grid-cols-[150px_1fr] gap-5"
            >
              <Image
                src="/images/about-news.jpg"
                alt="About Brain Station 23"
                width={150}
                height={100}
                className="h-[100px] w-[150px] rounded-lg object-cover"
              />

              <div>
                <h5 className="text-[19px] font-medium leading-7 text-black">
                  Brain Station 23’s CEO promotes Bangladesh’s tech prowess at
                  WEF 2025
                </h5>

                <p className="mt-4 text-[15px] text-[#2d7dbf]">
                  About Us →
                </p>
              </div>
            </Link>
          </div>
        </aside>

        <div className="grid grid-cols-2 gap-x-24 px-12 py-10">
          <DesktopLinks
            title="Inside Brain Station 23"
            links={insideLinks}
            closeMenu={closeMenu}
          />

          <DesktopLinks
            title="Recognitions"
            links={recognitionLinks}
            closeMenu={closeMenu}
          />
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