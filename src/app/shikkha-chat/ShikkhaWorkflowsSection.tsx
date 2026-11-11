import type { ElementType } from "react";
import {
  BarChart3,
  BookOpen,
  CalendarCheck,
  FileCheck2,
  Layers,
} from "lucide-react";

type Workflow = { icon: ElementType; title: string; steps: string };

const workflows: Workflow[] = [
  {
    icon: Layers,
    title: "Onboard a class",
    steps:
      "Administrator sets up Classes & Sections, then Subjects, then Curriculum — in that order. Students are added with class, section, roll, guardian contact and photo, and teachers are created and assigned to their classes.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance that reaches parents",
    steps:
      "The teacher marks each learner present, absent or on leave for a date and class. The record saves instantly, and the parent portal reflects attendance day by day.",
  },
  {
    icon: BookOpen,
    title: "The AI learning loop",
    steps:
      "The teacher publishes lessons and sets quizzes and assessments. Students read the lessons, ask the AI Tutor in their own words, and submit quizzes — progress and the personalised study plan update from the results.",
  },
  {
    icon: FileCheck2,
    title: "Quality and safety gate",
    steps:
      "Content flows into the Content Reviewer's queue where it is approved or sent back with a reason. In parallel, the AI Safety Reviewer watches flagged AI messages, safety events and escalations, and records investigations.",
  },
  {
    icon: BarChart3,
    title: "Oversight and impact",
    steps:
      "NGO staff record programmes, institutions and interventions and measure learning outcomes. Government officers read district enrolment, attendance, outcomes and equity, then download aggregated reports.",
  },
];

export default function ShikkhaWorkflowsSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[760px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            How it works
          </p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            How Shikkha Chat runs the school day
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">
            Real, integrated workflows across roles — one action flows straight
            to the next person who needs it.
          </p>
        </div>

        <ol className="mt-12 space-y-4 md:border-l md:border-[#e8e8e8] md:pl-10 md:space-y-5">
          {workflows.map((flow, index) => {
            const Icon = flow.icon;
            return (
              <li key={flow.title} className="relative">
                <div className="rounded-xl border border-[#ececec] bg-white p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                      <Icon size={21} strokeWidth={1.9} />
                    </span>
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
                        Step 0{index + 1}
                      </p>
                      <h3 className="mt-1.5 text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-black md:text-[18px]">
                        {flow.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e]">
                        {flow.steps}
                      </p>
                    </div>
                  </div>
                </div>
                <span className="absolute -left-[46px] top-7 hidden h-3 w-3 rounded-full border-2 border-white bg-[#c91f28] ring-1 ring-[#f2d3d5] md:block" />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
