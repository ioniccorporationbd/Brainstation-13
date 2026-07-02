"use client";

import { ChevronDown } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  service: string;
  budget: string;
  details: string;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  industry: "",
  service: "",
  budget: "",
  details: "",
};

const industries = [
  "Banking & Finance",
  "Healthcare",
  "Education",
  "Insurance",
  "Retail",
  "Real Estate",
  "Telecom",
  "Startup",
  "Other",
];

const services = [
  "Custom Software Development",
  "Mobile App Development",
  "Web Development",
  "ERP Solution",
  "AI Solution",
  "Cloud Solution",
  "UI/UX Design",
  "Dedicated Team",
];

const budgets = [
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Not sure yet",
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState<FormState>(initialFormState);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Contact form submitted:", formData);

    setFormData(initialFormState);
  };

  const inputClass =
    "h-[54px] w-full rounded-[7px] border border-[#315b72] bg-transparent px-5 text-[15px] font-medium text-[#07112b] outline-none transition duration-300 placeholder:text-[#42637a] focus:border-[#079ed8] focus:ring-4 focus:ring-[#079ed8]/10";

  const selectClass =
    "h-[54px] w-full appearance-none rounded-[7px] border border-[#315b72] bg-transparent px-5 pr-12 text-[15px] font-medium text-[#42637a] outline-none transition duration-300 focus:border-[#079ed8] focus:ring-4 focus:ring-[#079ed8]/10";

  return (
    <section className="relative overflow-hidden bg-white px-5 py-[96px] text-[#07112b] md:px-6 md:py-[110px]">
      <div className="pointer-events-none absolute -left-[260px] top-[120px] h-[560px] w-[560px] rounded-full bg-[#08a7df]/8 blur-[130px]" />
      <div className="pointer-events-none absolute -right-[260px] bottom-[80px] h-[560px] w-[560px] rounded-full bg-[#111E40]/7 blur-[140px]" />

      <div className="relative z-10 mx-auto flex max-w-[1320px] justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[760px] rounded-[12px] bg-[#f4f8fc] px-7 py-10 shadow-[0_24px_80px_rgba(17,30,64,0.08)] md:px-12 md:py-12"
        >
          <h2 className="mb-9 text-[26px] font-black leading-tight tracking-[-0.055em] text-[#07112b] md:text-[30px]">
            Contact Us
          </h2>

          <div className="space-y-5">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name*"
              required
              className={inputClass}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className={inputClass}
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={inputClass}
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className={inputClass}
              />

              <div className="relative">
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className={selectClass}
                >
                  <option value="">Select Industry*</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#42637a]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={selectClass}
                >
                  <option value="">Select Service*</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#42637a]"
                />
              </div>

              <div className="relative">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className={selectClass}
                >
                  <option value="">Select Budget Range*</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#42637a]"
                />
              </div>
            </div>

            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Project Details*"
              required
              rows={6}
              className="w-full resize-none rounded-[7px] border border-[#315b72] bg-transparent px-5 py-4 text-[15px] font-medium text-[#07112b] outline-none transition duration-300 placeholder:text-[#42637a] focus:border-[#079ed8] focus:ring-4 focus:ring-[#079ed8]/10"
            />

            <button
              type="submit"
              className="mt-4 inline-flex rounded-full bg-[#ffab2e] px-8 py-4 text-[15px] font-black tracking-[-0.02em] text-black transition duration-300 hover:bg-[#ffc15a] hover:shadow-[0_18px_45px_rgba(255,171,46,0.25)]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}