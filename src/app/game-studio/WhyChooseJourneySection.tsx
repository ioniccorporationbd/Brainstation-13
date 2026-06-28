import { Gamepad2 } from "lucide-react";

const whyItems = [
  "Our designers are passionate about game design and experts in holistic design",
  "Our artists know how to use their artistic vision to bring unique and mesmerizing worlds to life",
  "Our programmers are experts in creating engaging gameplay mechanics",
  "Our developers are enthusiastic about video games",
];

const steps = [
  "Planning",
  "Prototyping",
  "Production",
  "Testing & QA",
  "UAT & Marketing",
  "Launch",
  "Support",
];

export default function WhyChooseJourneySection() {
  return (
    <section className="bg-[#111615] px-4 py-20 text-white">
      <div className="mx-auto max-w-[1250px]">
        <div>
          <h2 className="text-center text-4xl font-bold text-[#ffa51f]">
            Why choose Us
          </h2>

          <div className="mx-auto mt-8 max-w-[920px] space-y-6">
            {whyItems.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <Gamepad2 className="mt-1 h-5 w-5 shrink-0 text-white" />
                <p className="text-lg font-semibold leading-7">{item}</p>
              </div>
            ))}

            <div className="flex items-start gap-4">
              <Gamepad2 className="mt-1 h-5 w-5 shrink-0 text-white" />
              <p className="text-lg font-semibold leading-7">
                Our Strategic Business Unit (SBU) head is the author of the{" "}
                <span className="italic text-[#ffa51f]">
                  “How to Make a Game”
                </span>{" "}
                book
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-24 text-center text-4xl font-bold text-[#ffa51f]">
          Process Journey Map
        </h2>

        <div className="relative mx-auto mt-14 max-w-[1000px]">
          <div className="absolute left-0 top-1/2 hidden h-[6px] w-full -translate-y-1/2 rounded-full bg-white/30 md:block" />

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-7">
            {steps.map((step, index) => (
              <div key={step} className="relative flex flex-col items-center">
                <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#ffa51f] text-lg font-bold text-black">
                  {index + 1}
                </div>

                <div className="mt-4 rounded-md bg-white px-4 py-2 text-center text-sm font-bold text-black">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}