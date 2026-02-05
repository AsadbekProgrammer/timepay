import React from 'react';
import { Apple, Play } from 'lucide-react';

const Footer = () => {
  return (
    <>
   
    <footer>
      <div className="bg-[#F9FAFB] max-w-8xl rounded-b-2xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8 md:items-center">
        <div className="space-y-4 flex-shrink-0">
          <div className="text-2xl font-black text-tp-orange leading-none h-8">
            TimePay
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            Toshkent shahri, Yunusobod tumani, Yangi Shahar ko'chasi
          </p>
        </div>
        <div className="text-gray-400 text-sm font-medium whitespace-nowrap flex-shrink-0">
          © 2026 TimePay Workforce Ecosystem. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;


















