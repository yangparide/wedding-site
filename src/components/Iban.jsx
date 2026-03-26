import React, { useState } from 'react';
import { Copy, Check, Gift } from 'lucide-react';

export default function Iban() {
  const [copied, setCopied] = useState(false);
  const iban = "IT00X0000000000000000000000"; // Metti il tuo vero IBAN qui

  const handleCopy = () => {
    navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto p-10 md:p-16 bg-[#8DA399]/5 rounded-[3rem] border border-[#8DA399]/10 text-center">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-8 text-[#8DA399]">
          <Gift size={32} strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl font-serif mb-4 text-[#566573]">Un pensiero per noi</h2>
        <p className="text-slate-500 mb-10 font-light italic text-lg">
          "Il vostro dono più grande è la vostra presenza, ma se desiderate aiutarci a realizzare il nostro sogno..."
        </p>
        
        <div className="bg-white p-3 md:p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <code className="text-[#566573] font-mono text-sm md:text-base tracking-tight px-4">{iban}</code>
          <button 
            onClick={handleCopy}
            className={`flex items-center gap-2 px-8 py-4 rounded-xl transition-all font-semibold text-sm w-full sm:w-auto justify-center ${
              copied ? 'bg-green-500 text-white' : 'bg-[#566573] text-white hover:bg-[#45515c]'
            }`}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Copiato!' : 'Copia IBAN'}
          </button>
        </div>
      </div>
    </section>
  );
}