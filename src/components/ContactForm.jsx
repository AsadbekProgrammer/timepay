import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import SuccessModal from './SuccessModal';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: name,
      phone: phone,
      date: new Date().toLocaleString()
    };

    try {

      const response = await fetch('https://sheetdb.io/api/v1/k69syaq0k87y1', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [formData] // SheetDB ma'lumotni massiv ichida kutadi
        })
      });

      if (response.ok) {
        setIsModalOpen(true);
        setName('');
        setPhone('');
      }
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      alert("Xatolik! Qaytadan urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="py-24 px-6 max-w-7xl min-h-[500px] mx-auto">
      <div className="bg-[#0F172A] rounded-[48px] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center overflow-hidden">

        {/* Chap tomon: Ma'lumotlar */}
        <div className="flex-1 space-y-8">
          <h2 className="text-2xl text-center md:text-7xl font-black text-white leading-tight uppercase italic-bold">
            Mutaxassis <br />
            <span className="text-tp-orange">maslahati</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            Ma'lumotlaringizni qoldiring, biz sizga qo'ng'iroq qilamiz
            va biznesingiz uchun eng maqbul yechimni taklif etamiz.
            O'rnatish ishlarini o'zimiz bajaramiz.
          </p>

          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-tp-orange/20 transition">
                <Phone className="text-white group-hover:text-tp-orange w-5 h-5" />
              </div>
              <span className="text-white font-semibold text-lg">+998 99 820 02 90</span>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-tp-orange/20 transition">
                <Mail className="text-white group-hover:text-tp-orange w-5 h-5" />
              </div>
              <span className="text-white font-semibold text-lg">yakhyaevrasul@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-tp-orange/20 transition">
                <MapPin className="text-white group-hover:text-tp-orange w-5 h-5" />
              </div>
              <span className="text-white text-base">
                Toshkent shahri, Yunusobod tumani, Yangi Shahar ko'chasi
              </span>
            </div>
          </div>
        </div>

        {/* O'ng tomon: Forma */}
        <div className="w-full lg:w-[500px] bg-white rounded-[40px] p-8 md:p-12 shadow-2xl">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase italic tracking-widest mb-3">
                Ism-familiyangiz
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Masalan: Aziz Rahimov"
                className="w-full bg-gray-50 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-tp-orange transition outline-none text-tp-dark font-medium"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase italic tracking-widest mb-3">
                Telefon raqamingiz
              </label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-tp-dark font-bold pointer-events-none border-r border-gray-200 pr-3">
                  +998
                </span>
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="90 123 45 67"
                  maxLength="9"
                  className="w-full bg-gray-50 border-none rounded-2xl py-5 pl-24 pr-6 focus:ring-2 focus:ring-tp-orange transition outline-none text-tp-dark font-medium"
                />
              </div>
            </div>

            <button disabled={loading} className="w-full bg-tp-orange text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-orange-200 cursor-pointer hover:-translate-y-1 active:scale-95 transition-all">
              {loading ? "Yuborilmoqda..." : "Qo'ng'iroqni buyurtma qilish"}
            </button>

            <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-tighter">
              Ma'lumotlar xavfsiz. Excel bazamizga yuboriladi
            </p>
          </form>
        </div>

      </div>
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};


export default ContactForm;


