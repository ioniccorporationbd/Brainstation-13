"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Globe } from "lucide-react";

/* ------------------------------------------------------------------ *
 * This section is mounted globally in app/layout.tsx, so it appears
 * on every page. The Magnetic Solution Limited redesign below is
 * applied ONLY on the homepage ("/"). All other pages keep the exact
 * original markup/design untouched.
 *
 * Magnetic Solution Limited is a Bangladesh-based software & technology
 * company. No public street address / office email / phone for the
 * company could be verified, so (per the branding data-verification
 * rule) unverified addresses and contacts are intentionally OMITTED
 * rather than fabricated, and no other company's office data/images
 * are shown. Real, existing links (/contact, /schedule-a-call) are kept.
 * ------------------------------------------------------------------ */

type Office = {
  country: string;
  address: string;
  email: string;
  phone?: string;
  image: string;
};

/* --- Original data + layout (used on every non-homepage page) ------ */
const offices: Office[] = [
  {
    country: "Bangladesh",
    address:
      "8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka 1212, Bangladesh",
    email: "sales@brainstation-23.com",
    phone: "+8****10-902323",
    image: "/images/offices/bangladesh.svg",
  },
  {
    country: "USA",
    address: "7426 Alban Station Blvd, Suite a101, Springfield, VA 22150",
    email: "sales@brainstation-23.com",
    phone: "+1 606 773 7443",
    image: "/images/offices/usa.svg",
  },
  {
    country: "Germany",
    address: "Bad Zwischenahn",
    email: "sales@brainstation-23.de",
    phone: "+494****9839",
    image: "/images/offices/germany.svg",
  },
  {
    country: "UAE",
    address: "903, Damac XL Tower, Business Bay, PO Box: 29544, Dubai, UAE.",
    email: "sales@brainstation-23.com",
    phone: "+971 42420223",
    image: "/images/offices/uae.svg",
  },
  {
    country: "Malaysia",
    address:
      "Level 9, Integra Tower, The Intermark, No. 348, Jalan Tun Razak, 50400 Kuala Lumpur, Malaysia",
    email: "sales@brainstation-23.com",
    phone: "+601****8999",
    image: "/images/offices/malaysia.svg",
  },
  {
    country: "Japan",
    address:
      "Daishin Akiyama Building 3F, THE HUB Shinagawa #324 2-3-1 Konan, Minato-ku, Tokyo 108-0075",
    email: "sales@brainstation-23.com",
    image: "/images/offices/japan.svg",
  },
];

function OriginalLayout() {
  return (
    <section className="w-full bg-[#082b46] py-[72px] text-white md:py-[92px] lg:py-[104px]">
      <div className="mx-auto w-full max-w-[1260px] px-5 sm:px-8 xl:px-0">
        <h2 className="mb-[58px] text-[34px] font-medium leading-tight tracking-[-0.035em] text-white sm:text-[42px] lg:text-[48px]">
          Global Offices
        </h2>

        <div className="grid gap-x-[96px] gap-y-[74px] lg:grid-cols-2">
          {offices.map((office) => (
            <OfficeCard key={office.country} office={office} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Homepage redesign (verified Magnetic Solution info only) ------ */
type MagneticOffice = {
  name: string;
  badge: string;
  description: string;
  cta: { label: string; href: string };
  icon: "pin" | "globe";
};

const magneticOffices: MagneticOffice[] = [
  {
    name: "Bangladesh",
    badge: "Headquarters",
    description:
      "Our headquarters and engineering base — where we build and deliver software and technology solutions for clients.",
    cta: { label: "Contact Us", href: "/contact" },
    icon: "pin",
  },
  {
    name: "Global Delivery",
    badge: "Worldwide",
    description:
      "We collaborate with clients across regions through remote-first, distributed delivery, working across time zones.",
    cta: { label: "Schedule a Call", href: "/schedule-a-call" },
    icon: "globe",
  },
];

function HomepageLayout() {
  return (
    <section className="w-full bg-white py-[72px] md:py-[100px]">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-[620px]">
          <h2 className="text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A] sm:text-[38px] md:text-[44px]">
            Global Offices
          </h2>
          <p className="mt-4 text-[16px] leading-[1.5] text-[#52525B] md:text-[18px]">
            Headquartered in Bangladesh while working with clients worldwide.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
          {magneticOffices.map((office) => (
            <article
              key={office.name}
              className="group flex flex-col rounded-2xl border border-[#E7E7EA] bg-white p-7 shadow-[0_1px_2px_rgba(10,10,10,0.04)] transition-all duration-300 ease-out hover:scale-[1.03] hover:border-[#C91F28] hover:shadow-[0_24px_50px_rgba(201,31,40,0.16)] motion-reduce:transition-none motion-reduce:hover:scale-100 md:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#C91F28] text-white">
                  {office.icon === "pin" ? <MapPin size={22} /> : <Globe size={22} />}
                </span>
                <span className="rounded-full bg-[#C91F28]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C91F28]">
                  {office.badge}
                </span>
              </div>

              <h3 className="mt-6 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0A0A0A] md:text-[26px]">
                {office.name}
              </h3>

              <p className="mt-3 flex-1 text-[15px] leading-[1.6] text-[#52525B] md:text-[16px]">
                {office.description}
              </p>

              <Link
                href={office.cta.href}
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-[#C91F28] transition-colors duration-200 hover:text-[#A71920]"
              >
                {office.cta.label}
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GlobalOfficesSection() {
  const pathname = usePathname();

  // Homepage uses the new Magnetic design; every other route keeps the
  // exact original section so no other page's design changes.
  if (pathname === "/") {
    return <HomepageLayout />;
  }

  return <OriginalLayout />;
}

function OfficeCard({ office }: { office: Office }) {
  return (
    <article className="grid gap-6 sm:grid-cols-[190px_1fr] sm:gap-8 md:grid-cols-[220px_1fr]">
      <div className="flex min-h-[118px] items-start justify-start pt-[10px]">
        <img
          src={office.image}
          alt={`${office.country} office illustration`}
          className="h-auto w-[180px] opacity-[0.32] sm:w-[200px] md:w-[210px]"
        />
      </div>

      <div>
        <h3 className="text-[25px] font-semibold leading-[1.18] tracking-[-0.035em] text-white sm:text-[28px]">
          {office.country}
        </h3>

        <p className="mt-[15px] max-w-[420px] text-[16px] font-semibold leading-[1.48] text-white sm:text-[17px]">
          {office.address}
        </p>

        <Link
          href={`mailto:${office.email}`}
          className="mt-[15px] block text-[16px] font-medium leading-[1.4] text-[#179ada] transition-colors hover:text-[#39c2ff]"
        >
          {office.email}
        </Link>

        {office.phone && (
          <Link
            href={`tel:${office.phone.replace(/\s|-/g, "")}`}
            className="mt-[12px] block text-[16px] font-medium leading-[1.4] text-[#179ada] transition-colors hover:text-[#39c2ff]"
          >
            {office.phone}
          </Link>
        )}
      </div>
    </article>
  );
}
