import React from 'react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
  
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        <div className="lg:col-span-6 flex flex-col items-start gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.15]">
            Navigating the digital landscape for success
          </h1>
          <p className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed max-w-xl">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className="px-8 py-4 bg-[#191a23] text-white rounded-2xl text-lg font-normal hover:bg-gray-800 transition-all shadow-sm mt-2">
            Book a consultation
          </button>
        </div>

        <div className="lg:col-span-6 flex justify-center lg:justify-end items-center w-full">
          <img src="/icons/1.svg" alt="Hero Illustration"className="w-full h-auto object-contain max-w-lg lg:max-w-full"/>
        </div>
      </div>

     
      <div className="mt-16 sm:mt-20 w-full flex justify-between items-center">
        <img src="/icons/2.svg"alt="Company Logos"className="w-full h-auto object-contain grayscale contrast-125"/>
      </div>
    </section>
  );
}