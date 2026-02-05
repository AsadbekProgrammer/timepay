import React from 'react';
import { MapPin, Briefcase } from 'lucide-react';

const Roadmap = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Asosiy qora konteyner */}
      <div className="bg-[#0F172A] rounded-[48px] p-10 md:p-20 relative overflow-hidden">

        {/* Bezak uchun gradient glow (Rasmning o'ng tomonidagi yorug'lik) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tp-orange/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />

        <div className="relative z-10">
          {/* Kichik qizil/to'q sariq matn */}
          <span className="text-[15px] font-black font-bold text-tp-orange uppercase tracking-[0.3em] mb-6 block">
            Rivojlanish rejasi
          </span>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16">
            {/* Katta oq sarlavha */}
            <h2 className="text-2xl md:text-6xl font-black text-white leading-tight max-w-2xl uppercase tracking-tighter">
              Biznesingizni kelajak bilan <br /> qurollantiring
            </h2>

            {/* O'ng tarafdagi tushuntirish matni */}
            <p className="text-gray-400 text-center text-base md:text-base max-w-xs leading-relaxed">
              Biz doimiy rivojlanishdamiz. Quyidagi funksiyalar hozirda test rejimida ishlamoqda.
            </p>
          </div>

          {/* Kartalar qatori */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* 1-Karta: Coworker Tracking */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-tp-orange/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <MapPin className="text-tp-orange w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Coworker Tracking (Real vaqtda)
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Butun jamoangizni jonli xaritada ko'ring. Ularning yo'nalishlari va real vaqtdagi holatini kuzating.
              </p>
            </div>

            {/* 2-Karta: Vazifalar boshqaruvi */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-tp-orange/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Briefcase className="text-tp-orange w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Vazifalar boshqaruvi (Tasks)
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Xodimlarga vazifalar biriktiring va ularning bajarilishini davomat bilan bog'liq holda monitoring qiling.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


export default Roadmap;
