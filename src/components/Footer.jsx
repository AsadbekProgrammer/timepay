import React from 'react';
import { Apple, Play } from 'lucide-react';

const Footer = () => {
  return (
     <>
     <footer className="w-full border-t border-gray-100 bg-white">
  {/* Yuqori qism: Ilova yuklash bo'limi */}
  <div className="flex flex-col items-center py-16 px-6">
    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8 leading-none">
      Ilovani yuklab oling
    </h3>

    <div className="flex flex-wrap justify-center gap-4 w-full">
      {/* App Store tugmasi - Aniq o'lchamlar CLS oldini oladi */}
      <a 
        href="https://apps.apple.com/uz/app/..." 
        className="flex items-center justify-start w-[240px] h-[80px] px-8 bg-[#0F172A] border border-slate-700 rounded-2xl transition-colors hover:bg-slate-800 group"
      >
        <div className="flex flex-col">
          <span className="text-[10px] text-white/60 font-bold uppercase leading-none">Yuklab olish</span>
          <span className="text-xl text-white font-bold mt-1.5 leading-none">App Store</span>
        </div>
      </a>

      {/* Google Play tugmasi */}
      <a 
        href="https://play.google.com/store/..." 
        className="flex items-center justify-start w-[240px] h-[80px] px-8 bg-[#0F172A] border border-slate-700 rounded-2xl transition-colors hover:bg-slate-800 group"
      >
        <div className="flex flex-col">
          <span className="text-[10px] text-white/60 font-bold uppercase leading-none">Yuklab olish</span>
          <span className="text-xl text-white font-bold mt-1.5 leading-none">Google Play</span>
        </div>
      </a>
    </div>
  </div>

  {/* Pastki qism: Brending va Copyright */}
  <div className="bg-[#F9FAFB] px-6 md:px-12 py-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start space-y-3">
        {/* Logo uchun balandlik belgilandi */}
        <div className="text-2xl font-black text-[#ff6b00] h-8 leading-8">TimePay</div>
        <p className="text-gray-400 text-sm max-w-xs text-center md:text-left leading-relaxed">
          Toshkent shahri, Yunusobod tumani, Yangi Shahar ko'chasi
        </p>
      </div>

      <div className="text-gray-400 text-xs md:text-sm font-medium text-center">
        © 2026 TimePay Workforce Ecosystem. <br className="md:hidden" /> Barcha huquqlar himoyalangan.
      </div>
    </div>
  </div>
</footer>
     </> 
  );
};

export default Footer;




























