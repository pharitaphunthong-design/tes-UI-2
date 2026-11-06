'use client';

import React, { useState, useEffect } from 'react';
import workingProcessData from '@/data/OurWorkingProcess .json';

interface ProcessItem {
  id: string;
  title: string;
  description: string;
}

export default function OurWorkingProcess() {
  const [processes, setProcesses] = useState<ProcessItem[]>([]);
  const [openId, setOpenId] = useState<string | null>('01');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setProcesses(workingProcessData);
    setIsLoading(false);
  }, []);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
        <div className="inline-block bg-[#B9FF66] px-4 py-1.5 rounded-md text-black font-semibold text-2xl md:text-3xl">
          Our Working Process
        </div>
        <p className="text-gray-600 max-w-sm text-sm md:text-base">
          Step-by-Step Guide to Achieving  <br />Your Business Goals
        </p>
      </div>

      {isLoading ? (
        <div className="text-center py-10 text-gray-500">Loading...</div>
      ) : (
        <div className="flex flex-col gap-6">
          {processes.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id}
                className={`border border-black rounded-[30px] md:rounded-[45px] transition-all duration-300 shadow-[0_5px_0_0_#000] overflow-hidden ${
                  isOpen ? 'bg-[#B9FF66]' : 'bg-[#F3F3F3]'
                }`}
              >
                <div 
                  onClick={() => handleToggle(item.id)}
                  className="flex items-center justify-between p-6 md:p-10 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-3xl md:text-5xl font-bold">{item.id}</span>
                    <span className="text-xl md:text-2xl font-medium">{item.title}</span>
                  </div>

                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F3F3F3] border border-black flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                      </svg>
                    )}
                  </div>
                </div>

                {isOpen && (
                  <div className="px-6 pb-6 md:px-10 md:pb-10 pt-2 border-t border-black mt-2">
                    <p className="text-sm md:text-base leading-relaxed text-gray-800">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}