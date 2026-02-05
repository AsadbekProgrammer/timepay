import React from 'react';

const Integration = () => {
  const partners = [
    { type: "APPARAT", name: "HikVision", desc: "Biometriya va turniketlarni masofadan boshqarish." },
    { type: "DASTUR", name: "1C:Buxgalteriya", desc: "Ma'lumotlarni to'g'ridan-to'g'ri buxgalteriyaga eksport qilish." },
    { type: "CRM", name: "Bitrix24", desc: "Davomatni korporativ portal bilan sinxronlash." },
    { type: "BOT", name: "Telegram", desc: "Adminlar va rahbarlar uchun tezkor bildirishnomalar." },
    { type: "CUSTOM", name: "Individual Yechimlar", desc: "Sizning ichki tizimlaringiz bilan maxsus integratsiya." },
  ];

  return (
    <section id="integration" className="py-24 px-6 max-w-7xl mx-auto text-center">
      {/* Sarlavha qismi */}
      <div className="mb-16 space-y-4">
        <h2 className="text-5xl md:text-6xl font-extrabold italic text-tp-dark">
          Yaxlit Integratsiya
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          TimePay alohida ishlamaydi. Biz sizning apparat vositalaringizni sevimli boshqaruv dasturlaringiz bilan bog'laymiz.
        </p>
      </div>

      {/* Kartalar setkasi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {partners.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50/50 p-8 rounded-[32px] text-left flex flex-col justify-between hover:border-2 border-tp-orange shadow-xl shadow-orange-50 hover:-translate-y-1 transition-all group cursor-pointer"
          >
            <div>
              <span className="text-[10px] font-black text-tp-orange uppercase italic tracking-[0.2em]">
                {item.type}
              </span>
              <h3 className="text-xl font-black text-tp-dark mt-2 mb-4 italic group-hover:text-tp-orange transition-colors">
                {item.name}
              </h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Integration;