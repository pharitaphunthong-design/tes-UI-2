import React from 'react';
import heroData from '@/data/hero.json';

interface HeroProps {
  title?: string;
  description?: string;
  onBookClick?: () => void;
}

export default function Hero({ 
  title = heroData.title, 
  description = heroData.description, 
  onBookClick 
}: HeroProps) {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col items-start gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.15]">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed max-w-xl">
            {description}
          </p>
          <button 
            onClick={onBookClick}
            className="px-8 py-4 bg-[#191a23] text-white rounded-2xl text-lg font-normal hover:bg-gray-800 transition-all shadow-sm mt-2"
          >
            {heroData.buttonText}
          </button>
        </div>
        <div className="lg:col-span-6 flex justify-center lg:justify-end items-center w-full">
          <img src={heroData.heroImage} alt="Hero Illustration" className="w-full h-auto object-contain max-w-lg lg:max-w-full"/>
        </div>
      </div>

      <div className="mt-16 sm:mt-20 w-full flex justify-start items-center overflow-hidden">
        <img 
          src={heroData.companyLogos} 
          alt="Company Logos" 
          className="w-[112%] sm:w-[108%] max-w-none h-auto object-contain grayscale contrast-125 -ml-3 sm:-ml-5"
        />
      </div>
    </section>
  );
}