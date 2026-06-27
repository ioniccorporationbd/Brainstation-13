"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const typingTexts = [
  "Machine Learning",
  "Artificial Intelligence",
  "AI Automation",
  "Data Intelligence",
];

const BG_IMAGE =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=90";

export default function MLAIHeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = typingTexts[textIndex];

    let typingSpeed = isDeleting ? 38 : 72;

    if (!isDeleting && typedText === fullText) {
      typingSpeed = 1400;
    }

    if (isDeleting && typedText === "") {
      typingSpeed = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < fullText.length) {
          setTypedText(fullText.slice(0, typedText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(fullText.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-[650px] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Green Tech Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(0,255,190,0.22),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(0,170,130,0.16),transparent_30%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[650px] w-full max-w-[1400px] items-center px-5 py-[90px] sm:px-8 lg:py-[110px] xl:px-0">
        <div className="hero-card w-full max-w-[735px] bg-white/90 px-[34px] py-[42px] shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-[4px] sm:px-[54px] sm:py-[58px] lg:ml-[120px]">
          <h1 className="text-[42px] font-bold leading-[1.08] tracking-[-0.045em] text-black sm:text-[56px] lg:text-[66px]">
            <span className="block min-h-[72px] text-black sm:min-h-[90px]">
              {typedText}
              <span className="typing-cursor ml-1 inline-block">|</span>
            </span>

            <span className="block">(ML) &amp; Artificial</span>
            <span className="block">Intelligence (AI)</span>
          </h1>

          <p className="mt-[32px] max-w-[640px] text-[16px] font-normal leading-[1.8] text-black sm:text-[18px]">
            Brain Station 23 delivers expert Machine Learning (ML) and AI
            solutions to help businesses automate processes, analyze data, and
            drive smarter decisions.
          </p>

          <div className="mt-[38px] flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-[150px]">
            <Link
              href="/contact"
              className="inline-flex h-[52px] w-fit items-center justify-center rounded-full bg-[#ffad2f] px-[30px] text-[16px] font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f59b15]"
            >
              Instant Quote
            </Link>

            <Link
              href="/book-a-meeting"
              className="inline-flex h-[52px] w-fit items-center justify-center rounded-full bg-[#ffad2f] px-[30px] text-[16px] font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f59b15]"
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-bg {
          animation: bgZoom 12s ease-in-out infinite alternate;
        }

        .hero-card {
          animation: cardEntrance 1.1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .typing-cursor {
          animation: cursorBlink 0.85s infinite;
        }

        @keyframes bgZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.06);
          }
        }

        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(34px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cursorBlink {
          0%,
          45% {
            opacity: 1;
          }

          46%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}