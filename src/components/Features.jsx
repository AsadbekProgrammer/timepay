import React from 'react';
import { Calculator, Clock, Database } from 'lucide-react';

const Features = () => {
  const data = [
    {
      title: "Avtomatik ish haqi",
      desc: "Xodimlarning haqiqiy ishlagan soatlari, smenalari va unumdorligidan kelib chiqib oylikni hisoblash.",
      icon: <Calculator className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Bonus va Jarimalar",
      desc: "Kechikishlar, erta ketishlar va sababsiz kelmasliklar uchun qoidalarni belgilang. Tizim ularni lahzada hisoblaydi.",
      icon: <Clock className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Moliyaviy shaffoflik",
      desc: "Har bir xodim uchun to'langan summalar, qolgan balans va qarzdorlik tarixining to'liq ko'rinishi.",
      icon: <Database className="w-6 h-6 text-gray-700" />,
    }
  ];

  return (
    <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mt-30 mx-auto">
      {/* Sarlavha bloki */}
      <div className="mb-20 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-black text-tp-dark mb-6 leading-[1.1]">
          Aqlli va Avtomatlashgan <br /> Moliya Nazorati
        </h2>
        <p className="max-w-lg text-gray-500 text-lg">
          Qog'ozbozlikdan voz keching. TimePay barcha hisob-kitoblarni
          xodimlarning haqiqiy ish vaqtiga asoslanib amalga oshiradi.
        </p>
      </div>

      {/* Funksiyalar gridi */}
      <div className="grid md:grid-cols-3 gap-16">
        {data.map((item, index) => (
          <div key={index} className="group cursor-default hover:bg-orange-100/20 p-8 rounded-3xl transition-colors">
            {/* Icon foni */}
            <div className="w-14 h-14 bg-[#FFF7ED] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-100 transition-colors">
              {item.icon}
            </div>

            {/* Matnlar */}
            <h3 className="text-xl font-bold text-tp-dark mb-4">
              {item.title}
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;