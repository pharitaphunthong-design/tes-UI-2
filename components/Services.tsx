'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import servicesData from '@/data/services.json';

export interface ServiceItem {
  id: number;
  title: string[] | string;
  icons: string;
  bgColor: string;
  highlightColor?: string;
  textColor?: string;
  btnBg?: string;
  btnText?: string;
  btnIcon?: string;
  description?: string;
  buttonText?: string;
}

interface ServiceCardProps {
  service: ServiceItem;
}

function ServiceCard({ service }: ServiceCardProps) {
  const isDark = service.bgColor === 'bg-[#191A23]';
  const titles = Array.isArray(service.title) ? service.title : [service.title];

  return (
    <div
      className={`p-6 sm:p-8 md:p-10 rounded-[35px] sm:rounded-[45px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 h-full ${service.bgColor}`}
    >
      <div className="flex flex-col justify-between h-full min-h-[140px] sm:min-h-[160px]">
        
        <div className="flex flex-col items-start gap-0">
          {titles.map((text, idx) => (
            <span
              key={idx}
              className={`text-xl sm:text-2xl font-semibold px-2 py-0 rounded-md ${service.highlightColor} ${service.textColor}`}
            >
              {text}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-6 sm:mt-8 cursor-pointer">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${service.btnBg}`}
          >
            {service.btnIcon && (
              <Image
                src={service.btnIcon}
                alt="arrow icon"
                width={16}
                height={16}
                className="object-contain"
              />
            )}
          </div>
          <span className={`font-medium text-sm sm:text-base ${isDark ? 'text-white' : 'text-black'}`}>
            Learn more
          </span>
        </div>
      </div>

     <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 self-center sm:self-auto flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={service.icons}
            alt={typeof service.title === 'string' ? service.title : service.title.join(' ')}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function CtaBanner({ data }: { data: ServiceItem }) {
  return (
    <div className={`mt-16 sm:mt-20 ${data.bgColor} rounded-[35px] sm:rounded-[45px] p-8 sm:p-10 md:p-12 relative overflow-visible flex flex-col md:flex-row items-center justify-between`}>
      <div className="max-w-md space-y-4 z-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#191A23]">
          {data.title}
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {data.description}
        </p>
        <button className="bg-[#191A23] text-white px-6 sm:px-8 py-3.5 rounded-xl text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors shadow-md cursor-pointer">
          {data.buttonText}
        </button>
      </div>

    <div className="relative w-64 h-64 sm:w-[320px] sm:h-[320px] md:absolute md:right-16 md:-bottom-8 lg:right-24 flex items-center justify-center pointer-events-none mt-6 md:mt-0 z-20">
        <Image
          src={data.icons}
          alt={typeof data.title === 'string' ? data.title : 'CTA'}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

export default function Services() {
  const [items, setItems] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setItems(servicesData as ServiceItem[]);
    setLoading(false);
  }, []);

  const serviceCards = items.filter((item) => item.id !== 7);
  const ctaBannerData = items.find((item) => item.id === 7);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <section id="services" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
        <div className="bg-[#B9FF66] px-4 py-1.5 rounded-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Services
          </h2>
        </div>
        <p className="text-gray-600 max-w-xl text-sm sm:text-base md:text-lg">
          At our digital marketing agency, we offer a range of services to{' '}
          <br className="hidden sm:inline" />
          help businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {serviceCards.map((item) => (
          <ServiceCard key={item.id} service={item} />
        ))}
      </div>

      {ctaBannerData && <CtaBanner data={ctaBannerData} />}
    </section>
  );
}