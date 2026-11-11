export default function ErpDevelopmentIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] pt-[8px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop"
              alt="Operations team working in an ERP system on a laptop"
              className="h-[240px] w-full object-cover md:h-[320px]"
            />
          </div>

          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Why custom
            </p>
            <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
              The system bends to you, not the other way round
            </h2>

            <p className="mt-5 text-[15.5px] leading-[1.8] text-[#55585e]">
              Off-the-shelf ERP forces you to bend your processes to the
              software. We build on ERPNext, Frappe and modern frameworks so the
              system bends to you &mdash; modules, integrations and workflows
              that match reality.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.8] text-[#55585e]">
              From finance and inventory to HR and field operations, we deliver
              ERP that people actually adopt.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Finance, inventory, HR and field operations in one system",
                "Approvals and automations that remove manual handoffs",
                "Reporting leaders can act on, not a month later",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.65] text-black">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c91f28]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
