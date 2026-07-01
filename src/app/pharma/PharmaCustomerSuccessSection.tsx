import Link from "next/link";
import { ArrowRight } from "lucide-react";

const successStats = [
  {
    value: "100%",
    label: "Retinopathy levels automatically",
  },
  {
    value: "99%",
    label: "Provides accurate data",
  },
];

export default function PharmaCustomerSuccessSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Title */}
        <div className="max-w-[660px]">
          <h2 className="text-[46px] font-medium leading-[1.08] tracking-[-0.075em] text-[#050b18] md:text-[68px]">
            Our Customer Success
            <br />
            Stories
          </h2>
        </div>

        {/* Main Content */}
        <div className="mt-[90px] grid grid-cols-1 items-center gap-[78px] lg:grid-cols-[0.9fr_1fr]">
          {/* Left Image */}
          <div className="group relative overflow-hidden rounded-[8px] bg-white shadow-[0_22px_70px_rgba(17,30,64,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop"
              alt="Doctor using digital healthcare technology"
              className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-[1.06] md:h-[560px]"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-[#111E40]/10 via-transparent to-[#3f93cf]/10" />

            {/* Circle Pattern */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-[360px] w-[360px] rounded-full border border-white/25" />
            <div className="pointer-events-none absolute -left-16 -top-16 h-[300px] w-[300px] rounded-full border border-white/25" />
            <div className="pointer-events-none absolute -left-8 -top-8 h-[240px] w-[240px] rounded-full border border-white/25" />
            <div className="pointer-events-none absolute left-0 top-0 h-[180px] w-[180px] rounded-full border border-white/25" />
          </div>

          {/* Right Text */}
          <div>
            <p className="text-[19px] font-medium uppercase leading-none tracking-[-0.035em] text-[#3f93cf] md:text-[22px]">
              Healthcare Professional
            </p>

            <h3 className="mt-7 text-[36px] font-medium leading-[1.1] tracking-[-0.07em] text-[#050b18] md:text-[46px]">
              Diabetic Retinopathy
            </h3>

            <p className="mt-8 max-w-[720px] text-[19px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a] md:text-[22px]">
              Our app aims to identify this disease by scanning human
              retinopathy levels using just a smartphone. This can be a
              convenient solution for patients and doctors. With quick and
              accurate retinopathy level measurements, doctors can understand
              their patients’ conditions and consult them according to their
              stage of the disease.
            </p>

            <Link
              href="/case-studies/diabetic-retinopathy"
              className="mt-10 inline-flex items-center gap-3 text-[18px] font-bold tracking-[-0.025em] text-[#3f93cf] transition duration-300 hover:gap-5 hover:text-[#ff9f1c]"
            >
              View Case Study
              <ArrowRight size={19} strokeWidth={2.2} />
            </Link>

            <div className="mt-10 h-px w-full bg-[#dce7f0]" />

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {successStats.map((stat) => (
                <div key={stat.value}>
                  <h4 className="text-[58px] font-light leading-none tracking-[-0.08em] text-[#4fa0d1] md:text-[68px]">
                    {stat.value}
                  </h4>

                  <p className="mt-5 text-[18px] font-medium leading-[1.35] tracking-[-0.035em] text-[#42637a] md:text-[21px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}