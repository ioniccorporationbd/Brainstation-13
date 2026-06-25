import Link from "next/link";

type Office = {
  country: string;
  address: string;
  email: string;
  phone?: string;
  image: string;
};

const offices: Office[] = [
  {
    country: "Bangladesh",
    address:
      "8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka 1212, Bangladesh",
    email: "sales@brainstation-23.com",
    phone: "+8809610-902323",
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
    phone: "+4944036999839",
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
    phone: "+601111708999",
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

export default function GlobalOfficesSection() {
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