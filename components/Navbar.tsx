'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import menuData from '@/data/menu.json';

interface NavbarProps {
  logoText?: string;
  onQuoteClick?: () => void;
}

export default function Navbar({ logoText = "Positivus", onQuoteClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 px-4 md:px-12 max-w-7xl mx-auto relative">
      <div className="flex items-center gap-3">
        <img src="/icons/logo.svg" alt="Logo" className="w-7 h-7 md:w-9 md:h-9 object-contain"/>
        <span className="text-2xl md:text-3xl font-bold tracking-tight text-black">
          {logoText} 
        </span>
      </div>

      <div className="hidden md:flex items-center gap-10 text-base text-gray-800 font-medium">
        {menuData.map((item: any) => (
          <Link 
            key={item.id} 
            href={item.href || "#"} 
            className="hover:text-black transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="hidden md:block">
        <button 
          onClick={onQuoteClick}
          className="px-5 py-3 border border-black rounded-2xl text-base font-medium text-black hover:bg-black hover:text-white transition-all shadow-sm"
        >
          Request a quote
        </button>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-6 px-6 flex flex-col gap-4 md:hidden z-50 border-b border-gray-200">
          {menuData.map((item: any) => (
            <Link 
              key={item.id} 
              href={item.href || "#"} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
          <button 
            onClick={() => {
              setIsOpen(false);
              onQuoteClick?.();
            }}
            className="w-full mt-2 px-5 py-3 border border-black rounded-2xl text-base font-medium text-black hover:bg-black hover:text-white transition-all shadow-sm"
          >
            Request a quote
          </button>
        </div>
      )}
    </nav>
  );
}