import { ArrowRight, Mail, Phone, Plus } from "lucide-react";

const tabs = [
  "Nissan Driver’s Guide",
  "Advanced Manufacturing Visualization",
  "Immersive Digital Showroom",
];

const faqs = [
  "What industries do you create 3D visuals for?",
  "Do you provide engineering-accurate simulations?",
  "Can you create fully animated assembly and disassembly sequences?",
  "Do you offer AI-driven visualization or sensor simulations?",
  "How do we start a project with your team?",
  "What file formats and CAD data do you support?",
];

export default function CaseStudiesFaqSection() {
  return (
    <section className="bg-white px-4 py-24 text-[#090d24]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <h2 className="text-4xl font-medium leading-tight md:text-5xl">
              Complex Stories, Rendered Simply.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-7 text-[#416f86]">
              Expert 3D modeling and animation for industrial applications. From
              semiconductor fabs to global logistics, we visualize complex
              systems with cinematic clarity.
            </p>
          </div>

          <button className="h-fit rounded-full bg-[#f5a21a] px-7 py-3 text-sm font-bold text-black">
            See all Case Studies
          </button>
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`w-[120px] rounded-sm px-4 py-3 text-center text-xs leading-tight ${
                index === 0
                  ? "border-b-2 border-[#3197d3] bg-[#c7d4d4]"
                  : "bg-[#edf4f7]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8 grid items-center gap-14 lg:grid-cols-[430px_1fr]">
          <img
            src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=1000&auto=format&fit=crop"
            alt="Nissan AR mobile experience"
            className="h-[390px] w-full rounded-md object-cover"
          />

          <div>
            <p className="text-base text-[#2f91cf]">
              Automotive AR Experience
            </p>

            <h3 className="mt-4 text-3xl font-medium">
              Drivers Guide for Nissan
            </h3>

            <p className="mt-5 max-w-xl text-base leading-6 text-[#416f86]">
              AR mobile app for Nissan Middle East replacing traditional
              manuals. Built with Unity 3D, drivers scan interior controls for
              instant alerts and emergency procedures. Multilingual with cloud
              updates.
            </p>

            <button className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#f5a21a]">
              View Case Study <ArrowRight className="h-4 w-4" />
            </button>

            <div className="mt-8 border-t border-[#dce8ee] pt-7">
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="text-5xl font-light text-[#3298d6]">80%</h4>
                  <p className="mt-3 text-base text-[#416f86]">
                    Faster knowledge access
                  </p>
                </div>

                <div>
                  <h4 className="text-5xl font-light text-[#3298d6]">
                    99.5%
                  </h4>
                  <p className="mt-3 text-base text-[#416f86]">
                    Better Customer Retention
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mt-24 text-center text-4xl font-medium">
          Frequently Asked Questions
        </h2>

        <div className="mt-14 grid gap-16 lg:grid-cols-[390px_1fr]">
          <div className="rounded-md border border-[#dce8ee] bg-[#f5f9fc] p-7">
            <h3 className="text-xl font-medium leading-7">
              Have a complex story that needs visualizing?
            </h3>

            <p className="mt-5 text-sm leading-6 text-[#416f86]">
              From semiconductor fabs to automotive systems, we turn engineering
              data into cinematic 3D. Book a consultation to explore what’s
              possible.
            </p>

            <button className="mt-7 rounded-full bg-[#f5a21a] px-6 py-3 text-sm font-bold text-black">
              Schedule a Call
            </button>

            <h4 className="mt-9 text-lg font-medium">Contact</h4>

            <div className="mt-5 space-y-4 text-sm text-[#4d5963]">
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#3298d6]" />
                sales@brainstation-23.com
              </p>

              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#3298d6]" />
                +88 01404055226
              </p>
            </div>

            <h4 className="mt-9 text-lg font-medium">Follow us</h4>

            <div className="mt-5 flex gap-3">
              {["f", "in", "gh", "x"].map((item) => (
                <span
                  key={item}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-bold text-[#416f86]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            {faqs.map((faq) => (
              <div
                key={faq}
                className="flex items-center justify-between gap-6 border-b border-[#dce8ee] py-6"
              >
                <h3 className="text-lg font-medium">{faq}</h3>
                <Plus className="h-5 w-5 shrink-0 text-[#3298d6]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}