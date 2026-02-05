import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileNav = (id) => {
    props.scrollToContact(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FFF]/80 backdrop-blur-md border-b border-orange-100/20 flex items-center justify-between px-6 md:px-25 py-5">
      {/* Logotip */}
      <div onClick={() => props.scrollToContact('hero')} className="text-2xl font-black text-tp-orange tracking-tight cursor-pointer">
        TimePay
      </div>

      {/* Linklar (Desktop uchun)*/}
      <div className="hidden md:flex space-x-10 font-bold text-gray-600">
        {[
          { id: 'features', label: 'Imkoniyatlar' },
          { id: 'biometric', label: 'Xavfsizlik' },
          { id: 'integration', label: 'Integratsiya' },
          { id: 'service-detail', label: 'Ta\'lim' },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              props.scrollToContact(item.id);
            }}
            className="cursor-pointer hover:text-tp-orange transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Action Button */}
      <button onClick={() => props.scrollToContact('contact-form')} className="bg-tp-orange cursor-pointer text-white px-2 py-2 text-xs md:px-7 md:py-3 md:text-base rounded-full font-bold shadow-lg shadow-orange-200 hover:scale-105 active:scale-95 transition-all whitespace-nowrap">
        Mutaxassis bilan bog'lanish
      </button>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-tp-dark cursor-pointer hover:bg-orange-50 rounded-lg transition-colors"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      <div className={`
        md:hidden absolute top-full left-0 w-full bg-white border-b border-orange-50 shadow-2xl transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
      `}>
        <div className="flex flex-col p-6 space-y-2">
          {[
            { id: 'features', label: 'Imkoniyatlar' },
            { id: 'biometric', label: 'Xavfsizlik' },
            { id: 'integration', label: 'Integratsiya' },
            { id: 'service-detail', label: 'Ta\'lim' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleMobileNav(item.id)}
              className="w-full text-left py-4 px-4 text-lg font-black cursor-pointer text-tp-dark uppercase tracking-tight border-b border-gray-50 hover:bg-orange-50 transition-colors"
            >
              {item.label}
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;