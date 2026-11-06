'use client';
import React, { useState, useEffect } from 'react';
import caseStudiesData from '@/data/CaseStudies.json';

interface CaseStudy {
  id: number;
  description: string;
  linkText: string;
}

export default function CaseStudies() {
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setStudies(caseStudiesData);
    setIsLoading(false);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
        <div className="inline-block bg-[#B9FF66] px-4 py-1.5 rounded-md text-black font-semibold text-2xl md:text-3xl">
          Case Studies
        </div>
        <p className="text-gray-600 max-w-md text-sm md:text-base">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      <div className="bg-[#191A23] rounded-[40px] p-8 md:p-12 text-white">
        {isLoading ? (
          <div className="text-center py-10 text-gray-400">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studies.map((item) => (
              <div 
                key={item.id} 
                className="flex flex-col justify-between space-y-6 lg:border-r lg:border-gray-600 lg:last:border-r-0 lg:px-8 first:lg:pl-0 last:lg:pr-0"
              >
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
                
                <a 
                  href="#learn-more" 
                  className="inline-flex items-center gap-2 text-[#B9FF66] hover:underline font-medium transition-colors"
                >
                  <span>{item.linkText}</span>
                  <svg 
                    className="w-5 h-5 text-[#B9FF66]" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17"></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}