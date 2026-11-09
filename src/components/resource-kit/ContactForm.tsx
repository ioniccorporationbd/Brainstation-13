"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

type Field = { id: string; label: string };

const textFields: Field[] = [
  { id: "fullName", label: "Full Name" },
  { id: "email", label: "Work Email" },
  { id: "company", label: "Company" },
  { id: "phone", label: "Phone Number" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[16px] border border-[#ececec] bg-white p-12 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf7ef] text-[#2e9e5b]">
          <CheckCircle2 size={34} strokeWidth={1.8} />
        </span>
        <h3 className="mt-6 text-[24px] font-semibold tracking-[-0.03em] text-[#0a0a0a]">
          Thank you for reaching out
        </h3>
        <p className="mt-3 max-w-[420px] text-[16px] leading-[1.6] text-[#565656]">
          Your message has been recorded. A member of our team will get back to
          you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c91f28] px-7 py-3 text-[15px] font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-[16px] border border-[#ececec] bg-white p-8 md:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {textFields.map((field) => (
          <div key={field.id} className="flex flex-col gap-2">
            <label
              htmlFor={field.id}
              className="text-[14px] font-semibold text-[#0a0a0a]"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.id === "email" ? "email" : "text"}
              required={field.id === "fullName" || field.id === "email"}
              className="h-[50px] rounded-[8px] border border-[#ececec] bg-[#ffffff] px-4 text-[15px] text-[#0a0a0a] outline-none transition focus:border-[#c91f28] focus:bg-white focus:ring-2 focus:ring-[#ececec]"
              placeholder={field.label}
            />
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-[14px] font-semibold text-[#0a0a0a]"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-[8px] border border-[#ececec] bg-[#ffffff] px-4 py-3 text-[15px] text-[#0a0a0a] outline-none transition focus:border-[#c91f28] focus:bg-white focus:ring-2 focus:ring-[#ececec]"
          placeholder="Tell us about your project or inquiry"
        />
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#141414] hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)]"
      >
        Send Message
        <Send size={17} strokeWidth={2.1} />
      </button>
    </form>
  );
}
