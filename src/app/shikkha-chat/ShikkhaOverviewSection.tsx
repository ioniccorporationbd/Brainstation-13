import { CheckCircle2 } from "lucide-react";

import ShikkhaFrame from "./ShikkhaFrame";

const bullets = [
  "One login for the whole school community — admins, teachers, students and parents.",
  "AI learning that adapts to each student through a personalised pathshala.",
  "Built-in content review and AI safety controls for responsible use.",
  "Real-time oversight for NGOs and government, from district to national level.",
  "Responsive and secure by design — works on any device.",
];

export default function ShikkhaOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] pt-[8px] md:pb-[104px]">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            What is Shikkha Chat
          </p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            One platform for every part of a school
          </h2>
          <div className="mt-5 space-y-4 text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">
            <p>
              Shikkha Chat is a complete education management platform that
              links the whole school community — administration, teachers,
              students, parents and oversight bodies — inside a single, secure
              product.
            </p>
            <p>
              Instead of juggling separate tools for attendance, lessons,
              assessment and reporting, institutions get one consistent
              experience where every role sees exactly what it needs, and no one
              is left out of the loop.
            </p>
          </div>
          <ul className="mt-7 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14.5px] leading-[1.6] text-[#3f434a] md:text-[15.5px]">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ShikkhaFrame
          src="/images/shikkha/shikkha-parent.webp"
          alt="Shikkha Chat parent portal dashboard"
          url="dash.shikkhachat.com/dashboard/parent"
        />
      </div>
    </section>
  );
}
