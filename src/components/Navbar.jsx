import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FFF]/80 backdrop-blur-md border-b border-orange-100/20 flex items-center justify-between px-6 md:px-25 py-5">
      {/* Logotip */}
      <div onClick={() => props.scrollToContact('hero')} className="text-2xl font-black text-tp-orange tracking-tight cursor-pointer">
        TimePay
      </div>

      {/* Linklar (Desktop uchun)*/}
      <div className="hidden md:flex space-x-10 font-bold text-gray-600">
        <button onClick={() => props.scrollToContact('features')} className=" cursor-pointer hover:text-tp-orange transition-colors">Imkoniyatlar</button>
        <button onClick={() => props.scrollToContact('biometric')} className="cursor-pointer hover:text-tp-orange transition-colors">Xavfsizlik</button>
        <button onClick={() => props.scrollToContact('integration')} className="cursor-pointer hover:text-tp-orange transition-colors">Integratsiya</button>
        <button onClick={() => props.scrollToContact('service-detail')} className="cursor-pointer hover:text-tp-orange transition-colors">Ta'lim</button>
      </div>

      {/* Action Button */}
      <button onClick={() => props.scrollToContact('contact-form')} className="bg-tp-orange cursor-pointer text-white px-5 py-2.5 md:px-7 md:py-3 rounded-full font-bold shadow-lg shadow-orange-200 hover:scale-105 active:scale-95 transition-all">
        Mutaxassis bilan bog'lanish
      </button>
    </nav>
  );
};

export default Navbar;