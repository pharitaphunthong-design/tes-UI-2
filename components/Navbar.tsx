import React from 'react';
import menuData from '@/data/menu.json';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-4 md:px-12 max-w-7xl mx-auto">
      
      <div className="flex items-center gap-3">
        <img src="/icons/logo.svg" alt="Positivus Logo" className="w-7 h-7 md:w-9 md:h-9 object-contain"/>
        <span className="text-2xl md:text-3xl font-bold tracking-tight text-black">
          Positivus
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-base text-gray-800 font-medium">
        {menuData.map((item) => (
          <a key={item.id} href={item.href}className="hover:text-black transition-colors">{item.label}</a>
        ))}
      </div>

      <div>
        <button className="px-5 py-3 border border-black rounded-2xl text-base font-medium text-black hover:bg-black hover:text-white transition-all shadow-sm">
          Request a quote
        </button>
      </div>

    </nav>
  );
}