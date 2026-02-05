import { Lock, CircleCheck, Fingerprint } from 'lucide-react';

const Biometric = () => (
  <section id="biometric" className="py-24 px-6 max-w-7xl mx-auto bg-gray-50/50 rounded-[48px] my-10">
    <div className="flex flex-col md:flex-row items-stretch gap-16">
      <div className="flex-1 space-y-8 flex flex-col justify-center">
        <div className="w-15 h-15 bg-white shadow-sm rounded-xl flex items-center justify-center border border-orange-100">
          <Lock className="text-tp-orange" />
        </div>
        <h2 className="text-6xl heading text-tp-dark leading-none">
          Har bir qadamda <br /> biometrik <br /> xavfsizlik
        </h2>

        <ul className="space-y-6">
          {[
            { t: "Mobil Face ID (Server-side)", d: "Bizning maxsus anti-spoofing algoritmlarimiz xodim shaxsini server darajasida real vaqtda tekshiradi." },
            { t: "Soxta GPS'dan himoya", d: "Joylashingni aniqlash tizimi soxta GPS dasturlarini aniqlaydi va bloklaydi." },
            { t: "Geozonalar chegarasi", d: "Ofis yoki loyiha hududi radiusini belgilang. Ishni boshlash faqat shu hudud ichida amalga oshiriladi." }
          ].map((item, i) => (
            <li key={i} className="flex gap-4 text-2xl">
              <div className="mt-1 text-tp-orange"><CircleCheck /></div>
              <div>
                <h4 className="font-black font-bold text-tp-dark">{item.t}</h4>
                <p className="text-gray-400 text-lg leading-relaxed">{item.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 w-full flex justify-center">
        <div className="bg-[#1e1b1e] w-full p-12 rounded-[40px] border-10 border-white shadow-2xl flex flex-col items-center justify-center text-center space-y-6 hover:bg-[#3F2A24] p-4 rounded-[40px] transition-colors">
          <div className="bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
            <Fingerprint className="w-30 h-30 text-white" />
          </div>
          <h3 className="text-white text-2xl font-bold">Biometrik Sinxronizatsiya</h3>
          <p className="text-gray-400 text-lg">HikVision terminallari va mobil ilova o'zaro bog'liqligi</p>
        </div>
      </div>
    </div>
  </section>
);

export default Biometric;