'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import footerDataJson from '@/data/Footer.json';

interface SocialItem {
  name: string;
  href: string;
  icon?: string;
  isSvg?: boolean;
}

interface SocialIconProps {
  social: SocialItem;
}

function SocialIcon({ social }: SocialIconProps) {
  return (
    <a 
      href={social.href} 
      aria-label={social.name}
      className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center hover:opacity-85 transition-opacity p-1.5"
    >
      {social.isSvg ? (
        <svg className="w-4 h-4 fill-black" viewBox="0 0 320 512">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
        </svg>
      ) : (
        social.icon && (
          <Image 
            src={social.icon} 
            alt={social.name} 
            width={18} 
            height={18} 
            className="object-contain"
          />
        )
      )}
    </a>
  );
}

export default function Footer() {
  const [footerInfo, setFooterInfo] = useState<typeof footerDataJson | null>(null);
  const [emailInput, setEmailInput] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  useEffect(() => {
    setFooterInfo(footerDataJson);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setEmailInput('');
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  if (!footerInfo) {
    return <footer className="w-full mt-20 text-center py-10">Loading...</footer>;
  }

  return (
    <footer className="w-full mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-[#191a23] text-white rounded-t-[45px] px-8 sm:px-14 pt-16 pb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-14 border-b border-gray-700">
          
          <div className="flex items-center gap-3 text-2xl font-bold tracking-tight">
            <div className="relative w-7 h-7">
              <Image 
                src={footerInfo.logoIcon} 
                alt="Positivus Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span>{footerInfo.logoText}</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm underline text-gray-300">
            {footerInfo.navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {footerInfo.socials.map((social, index) => (
              <SocialIcon key={index} social={social as SocialItem} />
            ))}
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-14 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block bg-[#b9ff66] text-black font-medium px-3 py-1 rounded-md text-sm">
              {footerInfo.contact.title}
            </span>
            <div className="space-y-3 text-sm text-gray-300">
              <p>Email: {footerInfo.contact.email}</p>
              <p>Phone: {footerInfo.contact.phone}</p>
              <p className="whitespace-pre-line">Address: {footerInfo.contact.address}</p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#292a32] p-8 sm:p-12 rounded-[35px]">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-4">
              <input 
                type="email" 
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder={footerInfo.newsletter.placeholder} 
                required
                className="w-full bg-transparent border border-gray-600 rounded-[14px] px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#b9ff66] transition-colors text-sm sm:text-base"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto whitespace-nowrap bg-[#b9ff66] text-black font-medium text-base sm:text-lg px-8 py-4 rounded-[14px] hover:opacity-90 transition-opacity cursor-pointer"
              >
                {footerInfo.newsletter.buttonText}
              </button>
            </form>
            {isSubscribed && (
              <p className="text-[#b9ff66] text-sm mt-3">Thank you for subscribing!</p>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-start gap-6 text-sm text-gray-400">
          <p>{footerInfo.copyright}</p>
          <Link href={footerInfo.privacyPolicy.href} className="underline hover:text-white transition-colors">
            {footerInfo.privacyPolicy.label}
          </Link>
        </div>

      </div>
    </footer>
  );
}