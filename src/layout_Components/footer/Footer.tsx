import Image from "next/image";
import Link from "next/link";

const industriesLeft = [
  { label: "Fintech", href: "/fintech" },
  { label: "Pharma", href: "/pharma" },
  { label: "Telecom", href: "/telecom" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Software/ITES", href: "/software-ites" },
];

const industriesRight = [
  { label: "e-Commerce", href: "/e-commerce" },
  { label: "Education", href: "/education" },
  { label: "Retail", href: "/retail" },
  { label: "Automotive", href: "/automotive" },
  { label: "Startup", href: "/startup" },
];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Certifications & Awards", href: "/recognitions" },
  { label: "Partners", href: "/partners" },
  { label: "Enterprise-Grade Security", href: "/enterprise-grade-security" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Events", href: "/media" },
];

const socialItems = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    image: "/images/social/facebook.svg",
    width: 11,
    height: 20,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    image: "/images/social/linkedin.svg",
    width: 18,
    height: 18,
  },
  {
    label: "Twitter X",
    href: "https://x.com",
    image: "/images/social/twitter-x.svg",
    width: 19,
    height: 19,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    image: "/images/social/youtube.svg",
    width: 21,
    height: 16,
  },
  {
    label: "Medium",
    href: "https://medium.com",
    image: "/images/social/medium.svg",
    width: 18,
    height: 18,
  },
];

const complianceItems = [
  { label: "GDPR", image: "/images/footer/compliance-gdpr.svg", width: 64, height: 64 },
  { label: "ISO", image: "/images/footer/compliance-iso-1.svg", width: 64, height: 64 },
  { label: "ISO", image: "/images/footer/compliance-iso-2.svg", width: 64, height: 64 },
  { label: "CMMI", image: "/images/footer/compliance-cmmi.svg", width: 72, height: 64 },
];

const partnerItems = [
  {
    label: "Microsoft",
    image: "/images/footer/partner-microsoft.svg",
    width: 130,
    height: 32,
  },
  {
    label: "AWS",
    image: "/images/footer/partner-aws.svg",
    width: 105,
    height: 42,
  },
  {
    label: "Moodle",
    image: "/images/footer/partner-moodle.svg",
    width: 135,
    height: 36,
  },
  {
    label: "Google Cloud Partner",
    image: "/images/footer/partner-google-cloud.svg",
    width: 165,
    height: 42,
  },
  {
    label: "Salesforce",
    image: "/images/footer/partner-salesforce.svg",
    width: 150,
    height: 38,
  },
];

const recognizedItems = [
  {
    label: "Clutch",
    image: "/images/footer/recognized-clutch.svg",
    width: 170,
    height: 54,
  },
  {
    label: "BASIS",
    image: "/images/footer/recognized-basis.svg",
    width: 110,
    height: 50,
  },
  {
    label: "Fortune 100",
    image: "/images/footer/recognized-fortune.svg",
    width: 105,
    height: 54,
  },
  {
    label: "Inc 5000",
    image: "/images/footer/recognized-inc5000.svg",
    width: 120,
    height: 50,
  },
  {
    label: "EY Entrepreneur Of The Year",
    image: "/images/footer/recognized-ey.svg",
    width: 175,
    height: 48,
  },
  {
    label: "CMMI",
    image: "/images/footer/recognized-cmmi.svg",
    width: 80,
    height: 44,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-[4px] border-[#C91F28] bg-black text-white">
      {/* CTA Card */}
      <div className="mx-auto w-full max-w-[1400px] px-5 pt-[60px] sm:px-8 xl:px-0">
        <section className="mx-auto flex min-h-[290px] w-full max-w-[995px] flex-col items-center justify-center rounded-[14px] border border-white/10 bg-[#0A0A0A] px-6 py-10 text-center">
          <h2 className="text-[32px] font-medium leading-tight tracking-[-0.035em] text-white sm:text-[40px] md:text-[45px]">
            Ready to Scale Your Team?
          </h2>

          <p className="mt-[17px] max-w-[560px] text-[15px] font-normal leading-[22px] text-white/70 sm:text-[16px] md:text-[17px]">
            Let’s discuss how our resource augmentation and AI-powered
            development can accelerate your project delivery.
          </p>

          <Link
            href="/schedule-a-call"
            className="mt-[32px] inline-flex h-[40px] items-center justify-center rounded-full bg-[#C91F28] px-[26px] text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#A71920]"
          >
            Schedule a Call
          </Link>
        </section>
      </div>

      {/* Main Footer */}
      <div className="mx-auto w-full max-w-[1400px] px-5 pb-10 pt-[64px] sm:px-8 xl:px-0">
        <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-[360px_1fr_180px_240px] lg:gap-[90px]">
          {/* Logo + About */}
          <div>
            <Link
              href="/"
              aria-label="Magnetic Solution Limited — Home"
              className="inline-flex rounded-xl bg-white px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:scale-[1.02]"
            >
              <Image
                src="/images/brand/magnetic-logo.png"
                alt="Magnetic Solution Limited"
                width={502}
                height={522}
                className="h-[92px] w-auto object-contain"
                priority
              />
            </Link>

            <p className="mt-[22px] max-w-[320px] text-[14px] font-normal leading-[21px] text-white/70">
              AI-ready software service company specializing in resource
              augmentation. We deliver 10X faster solutions for startups, SMEs,
              and Enterprises across Fintech, Pharma, Retail & Distribution.
            </p>

            <div className="mt-[22px] flex items-center gap-[24px]">
              {socialItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  aria-label={item.label}
                  className="inline-flex h-[22px] items-center justify-center opacity-80 transition-opacity duration-200 hover:opacity-100"
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={item.width}
                    height={item.height}
                    className="h-auto w-auto object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <FooterTitle>Industries</FooterTitle>

            <div className="mt-[21px] grid grid-cols-2 gap-x-[45px] gap-y-[14px] sm:gap-x-[90px]">
              <FooterLinks links={industriesLeft} />
              <FooterLinks links={industriesRight} />
            </div>
          </div>

          {/* Company */}
          <div>
            <FooterTitle>Company</FooterTitle>

            <div className="mt-[21px]">
              <FooterLinks links={companyLinks} />
            </div>
          </div>

          {/* Resources */}
          <div>
            <FooterTitle>Resources</FooterTitle>

            <div className="mt-[21px]">
              <FooterLinks links={resourceLinks} />
            </div>
          </div>
        </section>

        {/* Compliance + Partnerships */}
        <section className="mt-[34px] border-t border-white/10 pt-[31px]">
          <div className="grid gap-10 lg:grid-cols-[410px_1fr] lg:gap-[90px]">
            <div>
              <p className="text-[13px] font-semibold text-white">
                Compliance:
              </p>

              <div className="mt-[24px] grid grid-cols-4 gap-[24px] max-[420px]:grid-cols-2">
                {complianceItems.map((item, index) => (
                  <div key={`${item.label}-${index}`} className="w-fit">
                    <div className="flex h-[52px] items-center">
                      <Image
                        src={item.image}
                        alt={item.label}
                        width={item.width}
                        height={item.height}
                        className="h-auto max-h-[58px] w-auto object-contain"
                      />
                    </div>

                    <div className="mt-[12px] flex items-center gap-[5px]">
                      <span className="h-[8px] w-[8px] rounded-full bg-[#C91F28]" />
                      <span className="text-[12px] text-white">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[13px] font-semibold text-white">
                Partnerships:
              </p>

              <div className="mt-[25px] grid grid-cols-2 items-center gap-x-[45px] gap-y-[25px] sm:grid-cols-3 lg:gap-x-[70px] xl:grid-cols-5">
                {partnerItems.map((item) => (
                  <Image
                    key={item.label}
                    src={item.image}
                    alt={item.label}
                    width={item.width}
                    height={item.height}
                    className="h-auto max-h-[42px] w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recognized */}
        <section className="mt-[34px] border-t border-white/10 pt-[31px]">
          <p className="text-[13px] font-semibold text-white">
            Recognized by:
          </p>

          <div className="mt-[25px] grid grid-cols-2 items-center gap-x-[45px] gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-[80px]">
            {recognizedItems.map((item) => (
              <Image
                key={item.label}
                src={item.image}
                alt={item.label}
                width={item.width}
                height={item.height}
                className="h-auto max-h-[52px] w-auto object-contain"
              />
            ))}
          </div>
        </section>

        {/* Bottom Copyright */}
        <section className="mt-[35px] flex flex-col gap-5 border-t border-white/10 pt-[31px] md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] font-medium text-white/80">
            © 2026 Magnetic Solution Limited. All rights reserved.
          </p>

          <span className="text-[13px] font-medium text-white/60 transition-colors duration-200 hover:text-[#C91F28]">
            Privacy Policy
          </span>
        </section>
      </div>

    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="flex items-center gap-[9px] text-[14px] font-semibold leading-[20px] text-white">
      <span aria-hidden className="h-[15px] w-[3px] rounded-full bg-[#C91F28]" />
      {children}
    </h4>
  );
}

function FooterLinks({
  links,
}: {
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <ul className="space-y-[13px]">
      {links.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-[14px] font-medium leading-[20px] text-white/75 transition-colors duration-200 hover:text-[#C91F28]"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
