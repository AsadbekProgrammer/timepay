import React from 'react';
import { HeartHandshake, CircleCheck, Zap } from 'lucide-react';

const Hero = (props) => {
  return (
    <section id="hero" className="custom-bg-gradient flex flex-col items-center text-center pt-12 px-6">
      {/* Badge */}
      <div className="bg-[#FCEAD3] custom text-[#9A3412] text-[12px] italic font-bold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
        <Zap className="inline text-tp-orange" /> OYLIK ABONENT TO'LOVLARISIZ
      </div>

      {/* Sarlavha */}
      <h1 className="text-5xl md:text-[85px] font-black leading-[0.95] max-w-5xl text-tp-dark tracking-tighter mb-8">
        Rahbarlarga <br />
        <span className="text-tp-orange">Xodimlarni boshqarishga</span> Yordam beradigan <br /> dastur
      </h1>

      {/* Ta'rif */}
      <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-10">
        TimePay — bu xodimlarning ish unumdorligini oshirish, davomatni avtomatlashtirish va moliyaviy xarajatlarni aniq hisoblash uchun yaratilgan yaxlit ekotizimdir. 500 dan ortiq korxonalar biz bilan o'z jarayonlarini tartibga soldi.
      </p>

      {/* Tugmalar va Checkpointlar */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-20">
        <button onClick={() => props.scrollToContact('contact-form')} className="bg-tp-orange cursor-pointer text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 shadow-xl shadow-orange-200 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-dark-300 active:scale-95">
          Qo'ng'iroq buyurtma qilish <span className="text-xl">→</span>
        </button>

        <div className="flex flex-col items-start gap-2 text-sm font-bold text-dark-600">
          <div className="flex items-center gap-2">
            <span className="text-green-500"><HeartHandshake /></span> To'liq o'rgatib berish bepul
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500"><CircleCheck /></span> 24/7 Doimiy aloqada
          </div>
        </div>
      </div>

      {/* Statistika Paneli */}
      <div className="bg-white grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-gray-100 pt-12 w-full max-w-5xl">
        <div>
          <div className="text-5xl font-black text-tp-dark">500+</div>
          <div className="text-[15px] text-gray-400 font-bold uppercase italic mt-1">Hamkor Tashkilotlar</div>
        </div>
        <div>
          <div className="text-5xl font-black text-tp-orange">100%</div>
          <div className="text-[15px] text-gray-400 font-bold uppercase italic mt-1">Tizimga egalik (Ijara emas)</div>
        </div>
        <div>
          <div className="text-5xl font-black text-tp-dark">24/7</div>
          <div className="text-[15px] text-gray-400 font-bold uppercase italic mt-1">Jonli texnik yordam</div>
        </div>
      </div>
    </section>
  );
};


export default Hero;

