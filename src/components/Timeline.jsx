import React from 'react';
import { Plane, Camera, Palmtree, Heart } from 'lucide-react';

export default function Timeline() {
  const tappe = [
    { 
      titolo: "La Partenza", 
      desc: "Si decolla da Milano verso il Sol Levante. Pronti a perderci tra le luci di Tokyo.", 
      icon: Plane, 
      data: "15 Settembre 2026" 
    },
    { 
      titolo: "Tradizione a Kyoto", 
      desc: "Tra templi millenari e foreste di bambù, per respirare l'anima del Giappone.", 
      icon: Camera, 
      data: "22 Settembre 2026" 
    },
    { 
      titolo: "Relax a Okinawa", 
      desc: "Sabbia bianca e mare cristallino per concludere il nostro sogno ad occhi aperti.", 
      icon: Palmtree, 
      data: "29 Settembre 2026" 
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#FDFCF9] relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative">
        
        <h2 className="text-4xl font-serif text-center mb-24 text-[#566573] tracking-tight uppercase">
          Il nostro Itinerario
        </h2>

        <div className="relative">
          {tappe.map((t, i) => {
            const IconComp = t.icon;
            const isLast = i === tappe.length - 1;

            return (
              /* Ripristinato MB-20 per dare respiro */
              <div key={i} className="relative mb-20 last:mb-0">
                
                {/* FRECCIA DRITTA - Lunghezza bilanciata */}
                {!isLast && (
                  <div className="absolute left-[31px] top-[68px] w-[2px] h-[82px] hidden md:block z-0">
                    <svg width="20" height="82" viewBox="0 0 20 82" fill="none" className="overflow-visible">
                      <line 
                        x1="1" y1="0" x2="1" y2="70" 
                        stroke="#C5A065" 
                        strokeWidth="1.5" 
                        className="opacity-30"
                      />
                      <path 
                        d="M-3 64L1 72L5 64" 
                        stroke="#C5A065" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="opacity-40"
                      />
                    </svg>
                  </div>
                )}

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 group relative z-10">
                  
                  {/* ICONA - Tornata alla grandezza originale (w-16) */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-white border border-[#C5A065]/30 text-[#8DA399] rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-[#C5A065] transition-all duration-500">
                      <IconComp size={28} strokeWidth={1.2} />
                    </div>
                  </div>

                  {/* CARD TESTUALE - Ripristinato p-8 e rounded-2.5rem */}
                  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex-1 text-center md:text-left hover:shadow-md transition-all duration-500 group-hover:border-[#C5A065]/20">
                    <span className="text-[10px] font-bold text-[#C5A065] uppercase tracking-[0.3em] mb-2 block">
                      {t.data}
                    </span>
                    <h3 className="text-2xl font-serif text-[#566573] mb-3">
                      {t.titolo}
                    </h3>
                    <p className="text-slate-500 font-light text-sm leading-relaxed italic">
                      {t.desc}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
            <Heart className="mx-auto text-[#C5A065] mb-4 opacity-40" size={24} />
            <p className="font-serif italic text-slate-400">E il viaggio continua...</p>
        </div>
      </div>
    </section>
  );
}