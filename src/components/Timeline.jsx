import React from 'react';
import { MapPin, Plane, Palmtree, Camera } from 'lucide-react';

export default function Timeline() {
  const tappe = [
    { titolo: "Partenza", desc: "Milano -> Tokyo", icon: Plane, data: "15 Settembre" },
    { titolo: "Esplorazione", desc: "I templi di Kyoto", icon: Camera, data: "20 Settembre" },
    { titolo: "Relax", desc: "Spiagge di Okinawa", icon: Palmtree, data: "25 Settembre" },
  ];

  return (
    <section className="py-24 px-4 bg-[#FDFCF9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-16 text-[#566573]">Il nostro Viaggio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tappe.map((t, i) => {
            const IconComp = t.icon;
            return (
              /* AGGIUNTO: hover:-translate-y-2 e hover:shadow-xl per l'effetto sollevamento */
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all duration-500 ease-out group text-center hover:-translate-y-2 hover:shadow-xl hover:border-[#8DA399]/20 cursor-default">
                
                <div className="w-16 h-16 bg-[#8DA399]/10 text-[#8DA399] rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:bg-[#8DA399] group-hover:text-white transition-all duration-500">
                  <IconComp size={30} strokeWidth={1.5} />
                </div>

                <span className="text-[10px] font-bold text-[#C5A065] uppercase tracking-[0.3em] mb-4 block">
                  {t.data}
                </span>

                <h3 className="text-2xl font-serif text-[#566573] mb-3 leading-tight group-hover:text-[#8DA399] transition-colors duration-300">
                  {t.titolo}
                </h3>

                <p className="text-slate-400 font-light text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                  {t.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}