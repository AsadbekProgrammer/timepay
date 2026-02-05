import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Orqa fon (Overlay) */}
      <div
        className="absolute inset-0 bg-tp-dark/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal oynasi */}
      <div className="relative bg-white rounded-[32px] p-8 md:p-12 max-w-sm w-full shadow-2xl transform transition-all animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-tp-dark transition"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="text-green-500 w-12 h-12" />
          </div>

          <h3 className="text-2xl font-black text-tp-dark mb-2 italic uppercase">
            Rahmat!
          </h3>
          <p className="text-gray-500 font-medium mb-8">
            Ma'lumotlaringiz qabul qilindi. Mutaxassisimiz tez orada siz bilan bog'lanadi.
          </p>

          <button
            onClick={onClose}
            className="w-full bg-tp-dark text-white py-4 rounded-2xl font-bold hover:bg-tp-orange transition-colors shadow-lg shadow-gray-200"
          >
            Tushunarli
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;