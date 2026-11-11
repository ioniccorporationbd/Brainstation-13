import GlobalFaqSection, { type FaqItem } from "../../components/global/GlobalFaqSection";

const faqs: FaqItem[] = [
  {
    question: "What do you need to get started?",
    answer:
      "We need a discovery call, project scope, target systems, testing timeline, access rules, and business objectives before starting the assessment.",
  },
  {
    question: "Do you follow ethical hacking principles?",
    answer:
      "Yes. Every assessment follows approved rules of engagement, legal authorization, limited-impact testing, and responsible disclosure practices.",
  },
  {
    question: "What tools do you use?",
    answer:
      "We use Nmap, OWASP ZAP, Burp Suite, Metasploit, vulnerability scanners, cloud audit tools, and custom scripts where needed.",
  },
  {
    question: "How secure is the process?",
    answer:
      "The process is handled through controlled access, secure reporting, encrypted communication, least-privilege permissions, and clear testing boundaries.",
  },
  {
    question: "Will you fix vulnerabilities?",
    answer:
      "Yes. We provide remediation guidance, validation testing, technical support, and ongoing security improvement recommendations.",
  },
];

export default function CyberSecurityFaqSection() {
  return (
    <GlobalFaqSection
      eyebrow="Help Center"
      title="Frequently Asked Questions"
      subtitle="Get answers to common questions about Cyber Security Services from Magnetic Solution Limited."
      items={faqs}
      defaultOpen={0}
      ctaLabel="Schedule a Call"
      ctaHref="/schedule-a-call"
    />
  );
}
