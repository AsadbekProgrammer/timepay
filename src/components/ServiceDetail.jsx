import React from 'react';
import { Settings, MonitorCog, Users, GraduationCap, Bell } from 'lucide-react';

const ServiceDetail = () => {
  return (
    <section id="service-detail" className="py-24 px-6 max-w-7xl border-t border-gray-200 mx-auto">
      {/* Yuqori qism: Sarlavha va tushuntirish */}
      <div className="text-center mb-20 space-y-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-tp-dark uppercase leading-tight">
          Siz uchun hammasini <br /> o'zimiz bajaramiz
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Texnik masalalar bilan boshingizni qotirmang. Bizning jamoa tizimni noldan yo'lga qo'yadi,
          xodimlarni o'rgatadi va har qanday muammoni bartaraf etishga doim tayyor turadi.
        </p>
      </div>

      {/* O'rtadagi 3 talik xizmatlar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap mb-24 pb-20">
        {[
          { icon: <MonitorCog />, title: "Apparatlarni o'rnatish", desc: "Turniket, terminal va barcha sensorlarni montaj qilish." },
          { icon: <Settings />, title: "Dasturiy sozlash", desc: "Kompaniyangiz qoidalari va grafiklarini tizimga kiritish." },
          { icon: <Users />, title: "Xodimlarni o'qitish", desc: "Tizimdan qanday foydalanish bo'yicha to'liq seminar." }
        ].map((item, i) => (
          <div key={i} className="text-center space-y-4 group">
            <div className="w-14 h-14 bg-orange-50 text-tp-orange rounded-2xl flex items-center justify-center mx-auto group-hover:bg-tp-orange group-hover:text-white transition-all duration-300">
              {React.cloneElement(item.icon, { size: 30 })}
            </div>
            <h4 className="font-black text-xl font-bold text-tp-dark tracking-tight">{item.title}</h4>
            <p className="text-gray-500 text-lg leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Pastki qism: Maktablar va Afzalliklar */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">

        {/* Maktab va Akademiyalar kartasi */}
        <div className="flex-[0.7] w-full">
          <div className="bg-orange-50/50 rounded-[40px] p-10 border border-orange-100 relative overflow-hidden">
            <div className="w-15 h-15 bg-white text-tp-orange rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <GraduationCap size={34} />
            </div>
            <h3 className="text-2xl font-black text-tp-dark mb-4">Maktab va Akademiyalar</h3>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Ta'lim muassasalari uchun maxsus modul. O'quvchilar bazasi, ota-onalarni biriktirish va bildirishnomalar tizimi.
            </p>

            {/* SMS bildirishnoma bandi */}
            <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-orange-50">
              <div className="w-8 h-8 bg-orange-100 text-tp-orange rounded-lg flex items-center justify-center">
                <Bell size={16} />
              </div>
              <span className="text-[15px] font-bold text-tp-dark">
                Ota-onalarga tezkor SMS xabarlar
              </span>
            </div>
          </div>
        </div>

        {/* TimePay joriy etish nima beradi? */}
        <div className="flex-[1.3] space-y-10">
          <h3 className="text-6xl font-black text-tp-dark leading-tight">
            TimePay joriy etilishi <br /> nima beradi?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Tabel va ish haqi hisoblash vaqti 90% ga qisqaradi.",
              "Soxta davomat (buddy punching) muammosi butunlay yo'qoladi.",
              "Xodimlar orasida intizom va mas'uliyat hissi keskin oshadi.",
              "Oylik abonent to'lovlaridan butunlay voz kechasiz."
            ].map((text, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-tp-orange mt-2 flex-shrink-0" />
                <p className="text-gray-600 text-lg font-medium leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceDetail;