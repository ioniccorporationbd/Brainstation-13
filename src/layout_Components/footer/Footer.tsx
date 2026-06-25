import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MoveUpRight } from "lucide-react";

const industriesLeft = [
  { label: "Fintech", href: "/industries/fintech" },
  { label: "Pharma", href: "/industries/pharma" },
  { label: "Telecom", href: "/industries/telecom" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Software/ITES", href: "/industries/software-ites" },
];

const industriesRight = [
  { label: "e-Commerce", href: "/industries/e-commerce" },
  { label: "Education", href: "/industries/education" },
  { label: "Retail", href: "/industries/retail" },
  { label: "Automotive", href: "/industries/automotive" },
  { label: "Startup", href: "/industries/startup" },
];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Certifications & Awards", href: "/certifications-awards" },
  { label: "Partners", href: "/partners" },
  { label: "Enterprise-Grade Security", href: "/enterprise-grade-security" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Events", href: "/events" },
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
    width: 18,
    height: 18,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    image: "/images/social/youtube.svg",
    width: 22,
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
  { label: "GDPR", image: "/images/footer/compliance-gdpr.svg" },
  { label: "ISO", image: "/images/footer/compliance-iso-1.svg" },
  { label: "ISO", image: "/images/footer/compliance-iso-2.svg" },
  { label: "CMMI", image: "/images/footer/compliance-cmmi.svg" },
];

const partnerItems = [
  {
    label: "Microsoft",
    image: "/images/footer/partner-microsoft.svg",
    width: 130,
    height: 28,
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
    height: 38,
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
    height: 42,
  },
];

const recognizedItems = [
  {
    label: "Clutch",
    image: "/images/footer/recognized-clutch.svg",
    width: 170,
    height: 52,
  },
  {
    label: "BASIS",
    image: "/images/footer/recognized-basis.svg",
    width: 110,
    height: 42,
  },
  {
    label: "Fortune 100",
    image: "/images/footer/recognized-fortune.svg",
    width: 105,
    height: 52,
  },
  {
    label: "Inc 5000",
    image: "/images/footer/recognized-inc5000.svg",
    width: 120,
    height: 52,
  },
  {
    label: "EY Entrepreneur Of The Year",
    image: "/images/footer/recognized-ey.svg",
    width: 175,
    height: 42,
  },
  {
    label: "CMMI",
    image: "/images/footer/recognized-cmmi.svg",
    width: 80,
    height: 42,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-[7px] border-[#063454] bg-[#101729] text-white">
      {/* CTA Card */}
      <div className="mx-auto w-full max-w-[1400px] px-5 pt-[60px] sm:px-8 xl:px-0">
        <section className="mx-auto flex min-h-[290px] w-full max-w-[995px] flex-col items-center justify-center rounded-[7px] bg-[#233f5b] px-6 py-10 text-center">
          <h2 className="text-[32px] font-medium leading-tight tracking-[-0.035em] text-white sm:text-[40px] md:text-[45px]">
            Ready to Scale Your Team?
          </h2>

          <p className="mt-[17px] max-w-[560px] text-[15px] font-normal leading-[22px] text-[#d6dfec] sm:text-[16px] md:text-[17px]">
            Let’s discuss how our resource augmentation and AI-powered
            development can accelerate your project delivery.
          </p>

          <Link
            href="/schedule-a-call"
            className="mt-[32px] inline-flex h-[37px] items-center justify-center rounded-full bg-[#ffad2f] px-[25px] text-[13px] font-semibold text-black transition-colors hover:bg-[#f59b15]"
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
            <Link href="/" className="inline-flex">
              <Image
                src="/images/brainstation-logo.svg"
                alt="Brain Station 23"
                width={195}
                height={40}
                className="h-auto w-[190px]"
                priority
              />
            </Link>

            <p className="mt-[22px] max-w-[320px] text-[14px] font-normal leading-[21px] text-[#f0f4fb]">
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
                  className="inline-flex h-[22px] items-center justify-center transition-opacity hover:opacity-70"
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
        <section className="mt-[34px] border-t border-[#26334b] pt-[31px]">
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
                        width={58}
                        height={58}
                        className="max-h-[58px] w-auto object-contain"
                      />
                    </div>

                    <div className="mt-[12px] flex items-center gap-[5px]">
                      <span className="h-[8px] w-[8px] rounded-full bg-[#159bd7]" />
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
        <section className="mt-[34px] border-t border-[#26334b] pt-[31px]">
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
        <section className="mt-[35px] flex flex-col gap-5 border-t border-[#26334b] pt-[31px] md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] font-medium text-white">
            © 2026 Brain Station 23. All rights reserved.
          </p>

          <Link
            href="/privacy-policy"
            className="text-[13px] font-medium text-white underline underline-offset-2 transition-colors hover:text-[#00a6df]"
          >
            Privacy Policy
          </Link>
        </section>
      </div>

      {/* Cookie Button */}
      <button
        type="button"
        className="fixed bottom-0 left-[76px] z-50 bg-[#0b3455] px-[11px] py-[9px] text-[10px] font-semibold text-white max-sm:left-3"
      >
        Privacy & Cookies Policy
      </button>

      {/* Floating Chat */}
      <div className="fixed bottom-[24px] right-[25px] z-50 flex h-[45px] items-center gap-[10px] rounded-full bg-white px-[14px] shadow-lg">
        <button
          type="button"
          aria-label="Chat"
          className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#00a6df] text-white"
        >
          <MessageCircle size={17} />
        </button>

        <button
          type="button"
          aria-label="Message"
          className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black text-white"
        >
          <MessageCircle size={14} />
        </button>

        <button
          type="button"
          aria-label="Expand"
          className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-black"
        >
          <MoveUpRight size={15} />
        </button>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-[14px] font-semibold leading-[20px] text-[#ffbf29]">
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
            className="text-[14px] font-medium leading-[20px] text-white transition-colors hover:text-[#00a6df]"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}