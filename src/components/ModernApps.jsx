import React from 'react';

const ModernApps = () => {
  const apps = [
    {
      title: "Rahbar Paneli",
      desc: "Budjetlar, grafiklar va real vaqtdagi hisobotlar ustidan to'liq nazorat.",
      placeholder: "employee.webp"
    },
    {
      title: "Xodim Portali",
      desc: "Shaxsiy davomat, bonuslar va dam olish kunlari haqida ma'lumot.",
      placeholder: "employers.webp"
    }
  ];

  return (
    <section className="bg-[#f9fafb] w-full py-24 px-6 mx-auto">
      {/* Sarlavha */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-tp-dark">
          Zamonaviy Ilovalar
        </h2>
      </div>

      {/* Ilovalar kartalari */}
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mx-auto">
        {apps.map((app, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-[40px] p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500 group"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-black text-tp-dark mb-4">{app.title}</h3>
              <p className="text-gray-600 text-base max-w-xs mx-auto leading-relaxed">
                {app.desc}
              </p>
            </div>

            
            <div className="aspect-[16/10] rounded-[24px] flex items-center justify-center">
                <img src={app.placeholder} alt={app.title} width="350" height="290" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default ModernApps;







