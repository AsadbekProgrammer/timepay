import React from 'react';
import { Apple, Play } from 'lucide-react';

const Footer = () => {
  return (
      <footer className="w-full min-h-[250px] border-t border-gray-100">
          <div className="flex flex-col items-center mb-24 min-h-[180px]">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8">
              Ilovani yuklab oling
            </h3>
    
            <div className="flex flex-wrap justify-center gap-4">
              {/* App Store */}
              <a href="https://apps.apple.com/uz/app/timepay-xodimlar-nazorati/id6755515954" className="bg-[#0F172A] text-white flex items-center gap-4 px-8 py-4 rounded-2xl w-[240px] h-[80px] hover:bg-slate-800 transition-all border border-slate-700">
                {/*<Apple className="w-8 h-8 hover:text-tp-orange flex-shrink-0" width={32} height={32} />*/}
                <div className="text-left">
                  <p className="text-[10px] opacity-60 uppercase font-bold">Yuklab olish</p>
                  <p className="text-xl font-bold mt-1">App Store</p>
                </div>
              </a>
    
              {/* Google Play */}
              <a href="https://play.google.com/store/apps/details?id=uz.timepay.app&hl=uz" className="bg-[#0F172A] text-white flex items-center gap-4 px-8 py-4 rounded-2xl w-[240px] h-[80px] hover:bg-slate-800 transition-all border border-slate-700">
                <div className="w-8 h-8 hover:text-tp-orange flex-shrink-0">
                  {/*<Play className="w-8 h-8 flex-shrink-0" width={32} height={32} />*/}
                </div>
                <div className="text-left">
                  <p className="text-[10px] opacity-60 uppercase font-bold">Yuklab olish</p>
                  <p className="text-xl font-bold mt-1">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        <div className="bg-[#F9FAFB] rounded-b-2xl mx-auto p-12 flex flex-col md:flex-row justify-between gap-8">
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

























