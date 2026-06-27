import Image from 'next/image';
import React from 'react';

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto font-sans relative">
      
      {/* Main Large Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight max-w-5xl mb-16">
        Founded in 2006, we are a global software company powering digital transformation across industries.
      </h2>

      {/* 3-Column Layout for Desktop, Stacked for Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Column 1: Description & Video Preview */}
        <div className="flex flex-col gap-6 justify-between">
          <p className="text-slate-6xl text-sm md:text-base leading-relaxed text-slate-600">
            Brain Station 23 drives global digital transformation, integrating AI across 
            the development lifecycle—delivering software 10X faster and smarter.
          </p>
          
          {/* Video Thumbnail Container */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-950 group cursor-pointer shadow-md w-full">
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-mono text-lg tracking-widest font-light">
              BRAINSTATION
            </div>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-12 h-12 bg-sky-500/80 hover:bg-sky-500 text-white rounded-full flex items-center justify-center shadow-md transition-all group-hover:scale-110" aria-label="Play video">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Column 2: Central Team Photo */}
        <div className="flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-slate-100">
            <Image 
              src="/images/brands/team-photo.webp" 
              alt="Brain Station 23 Team" 
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Column 3: Accreditations & "About Us" Button */}
        <div className="flex flex-col justify-between pt-2">
          <div>
            {/* Icon & Subheading */}
            <div className="flex items-center gap-2 text-sky-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
              <h3 className="font-semibold text-sky-800 text-sm tracking-wide">Global Accreditations</h3>
            </div>
            
            <hr className="border-slate-200 mb-4" />
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Certified in CMMI Level 3, ISO 27001, and 8+ partners with AWS, Microsoft, Odoo
            </p>
          </div>

          {/* Call to Action Button Alignment */}
          <div className="mt-8 lg:mt-0 flex lg:justify-start">
            <button className="bg-[#f5a623] hover:bg-amber-600 text-slate-950 font-medium text-sm px-6 py-2.5 rounded-full shadow-sm transition-colors duration-200">
              About Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}