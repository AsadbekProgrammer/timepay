import React from 'react';
import { Apple } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Yuqori qism: Ilovani yuklab olish */}
      <div className="flex flex-col items-center mb-24 w-full">
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8 text-center">
          Ilovani yuklab oling
        </h3>
   
        <div className="flex flex-wrap justify-center gap-4 w-full px-4">
          {/* App Store */}
          <a 
            href="https://apps.apple.com/uz/app/timepay-xodimlar-nazorati/id6755515954" 
            className="bg-[#0F172A] text-white flex items-center gap-4 px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all border border-slate-700 w-[240px] h-[80px] shrink-0"
            style={{ aspectRatio: "240 / 80" }}
          >
            <Apple width="32" height="32" className="w-8 h-8 flex-shrink-0" />
            <div className="text-left">
              <p className="text-[10px] opacity-60 uppercase font-bold leading-none">Yuklab olish</p>
              <p className="text-xl font-bold leading-none mt-1">App Store</p>
            </div>
          </a>
   
          {/* Google Play */}
          <a 
            href="https://play.google.com/store/apps/details?id=uz.timepay.app&hl=uz" 
            className="bg-[#0F172A] text-white flex items-center gap-4 px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all border border-slate-700 w-[240px] h-[80px] shrink-0"
            style={{ aspectRatio: "240 / 80" }}
          >
            <div className="w-8 h-8 text-tp-orange flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" className="w-8 h-8">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,16.19C19.28,16.55 19.28,17.45 18.66,17.81L5.25,25.54L14.74,16.05L16.81,15.12M14.74,7.95L5.25,18.46L18.66,2.19C19.28,2.55 19.28,3.45 18.66,3.81L16.81,4.88L14.74,7.95M15.44,12L20.4,9.14C21.05,8.77 21.05,7.83 20.4,7.46L15.44,4.6L13,7.05L15.44,9.5L15.44,12Z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] opacity-60 uppercase font-bold leading-none">Yuklab olish</p>
              <p className="text-xl font-bold leading-none mt-1">Google Play</p>
            </div>
          </a>
        </div>
      </div>

      {/* Footer qismi */}
      <footer className="w-full px-4 md:px-6 pb-6">
        {/* O'ZGARISHLAR:
            1. w-full: Konteyner ekranni to'liq egallashini ta'minlaydi (Eng muhimi shu!).
            2. text-center md:text-left: Mobilda markazda, desktopda chapda turishini aniq belgiladik.
            3. overflow-hidden: Ichki elementlar tashqariga chiqib ketmasligi uchun.
        */}
        <div className="bg-[#F9FAFB] w-full max-w-8xl rounded-[32px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8 items-center overflow-hidden text-center md:text-left">
          
          <div className="space-y-4 flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-auto">
            <div className="text-2xl font-black text-tp-orange leading-none h-8 flex items-center">
              TimePay
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed mx-auto md:mx-0">
              Toshkent shahri, Yunusobod tumani, Yangi Shahar ko'chasi
            </p>
          </div>

          {/* 4. whitespace-normal md:whitespace-nowrap:
                Mobilda matn sig'masa pastga tushsin, desktopda bir qator bo'lsin.
          */}
          <div className="text-gray-400 text-sm font-medium whitespace-normal md:whitespace-nowrap flex-shrink-0 text-center md:text-right w-full md:w-auto">
            © 2026 TimePay Workforce Ecosystem. Barcha huquqlar himoyalangan.
          </div>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
