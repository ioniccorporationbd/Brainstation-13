type TechnologyPartner = {
  name: string;
  badge: string;
  logo: string;
  logoAlt: string;
  logoClass?: string;
};

const partners: TechnologyPartner[] = [
  {
    name: "AWS",
    badge: "Advanced Consulting Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    logoAlt: "AWS Partner",
    logoClass: "max-h-[88px] max-w-[150px]",
  },
  {
    name: "Microsoft",
    badge: "Gold Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    logoAlt: "Microsoft Gold Partner",
    logoClass: "max-h-[72px] max-w-[210px]",
  },
  {
    name: "Google Cloud",
    badge: "Solution Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    logoAlt: "Google Cloud Partner",
    logoClass: "max-h-[86px] max-w-[160px]",
  },
  {
    name: "Moodle",
    badge: "Certified Integration Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Moodle-logo.svg",
    logoAlt: "Moodle Certified Integration",
    logoClass: "max-h-[78px] max-w-[190px]",
  },
  {
    name: "Adobe",
    badge: "Silver Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg",
    logoAlt: "Adobe Silver Solution Partner",
    logoClass: "max-h-[70px] max-w-[180px]",
  },
  {
    name: "Odoo",
    badge: "Silver Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Odoo_logo.svg",
    logoAlt: "Odoo Silver Partner",
    logoClass: "max-h-[70px] max-w-[170px]",
  },
  {
    name: "nopCommerce",
    badge: "Gold Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/NopCommerce_logo.svg",
    logoAlt: "nopCommerce Gold Partner",
    logoClass: "max-h-[72px] max-w-[210px]",
  },
  {
    name: "Atlassian",
    badge: "Silver Solution Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Atlassian-logo-blue-small.svg",
    logoAlt: "Atlassian",
    logoClass: "max-h-[70px] max-w-[220px]",
  },
  {
    name: "Salesforce",
    badge: "Solution Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    logoAlt: "Salesforce",
    logoClass: "max-h-[78px] max-w-[170px]",
  },
  {
    name: "Shopify",
    badge: "Select Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    logoAlt: "Shopify Select Partner",
    logoClass: "max-h-[74px] max-w-[190px]",
  },
  {
    name: "Nextcloud",
    badge: "Gold Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Nextcloud_Logo.svg",
    logoAlt: "Nextcloud",
    logoClass: "max-h-[78px] max-w-[175px]",
  },
  {
    name: "Wazuh",
    badge: "Gold Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Wazuh_logo.svg",
    logoAlt: "Wazuh",
    logoClass: "max-h-[72px] max-w-[190px]",
  },
];

export default function TechnologyPartnershipsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[95px] text-[#07112b]">
      <div className="pointer-events-none absolute -left-[260px] top-[120px] h-[560px] w-[560px] rounded-full bg-[#08a7df]/8 blur-[130px]" />
      <div className="pointer-events-none absolute -right-[260px] bottom-[80px] h-[560px] w-[560px] rounded-full bg-[#111E40]/7 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[42px] font-medium leading-[1.08] tracking-[-0.075em] text-[#07112b] md:text-[56px] lg:text-[62px]">
            Technology Partnerships
          </h2>
        </div>

        <div className="mt-[62px] grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="group relative flex h-[250px] items-center justify-center overflow-hidden rounded-[10px] bg-[#f4f8fc] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_28px_80px_rgba(17,30,64,0.12)]"
            >
              <div className="absolute right-5 top-5 rounded-[5px] border border-[#0786c7] bg-white px-3 py-2 text-[14px] font-medium leading-none tracking-[-0.025em] text-[#07112b] transition duration-300 group-hover:bg-[#0786c7] group-hover:text-white">
                {partner.badge}
              </div>

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#08a7df]/8 blur-[45px] transition duration-300 group-hover:bg-[#08a7df]/16" />

              <div className="relative z-10 flex h-full w-full items-center justify-center pt-8">
                <img
                  src={partner.logo}
                  alt={partner.logoAlt}
                  className={`object-contain transition duration-300 group-hover:scale-105 ${
                    partner.logoClass ?? "max-h-[80px] max-w-[190px]"
                  }`}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}