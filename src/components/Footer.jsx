import React from 'react';
import { Apple, Play } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-6 border-t border-gray-100">
  <div className="flex flex-col items-center mb-24 min-h-[200px]">
    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8">
      Ilovani yuklab oling
    </h3>

    <div className="flex flex-wrap justify-center gap-4">
      {/* App Store */}
      <a 
        href="https://apps.apple.com/uz/app/timepay-xodimlar-nazorati/id6755515954" 
        className="bg-[#0F172A] text-white flex items-center gap-4 px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all border border-slate-700 w-[240px] h-[80px] shrink-0"
        style={{ aspectRatio: "240 / 80" }} // Brauzerga nisbatni oldindan bildirish
      >
        {/* Apple iconiga atributlar berildi */}
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
          {/* SVG-ga width va height atributlari qo'shildi */}
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

  <div className="bg-[#F9FAFB] max-w-8xl rounded-b-2xl mx-auto p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 min-h-[160px]">
    <div className="space-y-4">
      <div className="text-2xl font-black text-tp-orange h-8">TimePay</div>
      <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
        Toshkent shahri, Yunusobod tumani, Yangi Shahar ko'chasi
      </p>
    </div>

    <div className="text-gray-400 text-sm font-medium">
      © 2026 TimePay Workforce Ecosystem. Barcha huquqlar himoyalangan.
    </div>
  </div>
</footer>
  );
};

export default Footer;







