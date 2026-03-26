import React from 'react';
import { MapPin, Plane, Palmtree, Camera } from 'lucide-react';

export default function Timeline() {
  const tappe = [
    { titolo: "Partenza", desc: "Milano -> Tokyo", icon: Plane, data: "15 Settembre" },
    { titolo: "Esplorazione", desc: "I templi di Kyoto", icon: Camera, data: "20 Settembre" },
    { titolo: "Relax", desc: "Spiagge di Okinawa", icon: Palmtree, data: "25 Settembre" },
  ];

return (
    <section className="py-20 px-4 bg-[#FDFCF9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-16 text-[#566573]">Il nostro Viaggio</h2>
        
        {/* Questa riga qui sotto è quella che sistema tutto il layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tappe.map((t, i) => {
            const IconComp = t.icon;
            return (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-all group text-center">
                <div className="w-14 h-14 bg-[#8DA399]/10 text-[#8DA399] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <IconComp size={28} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-semibold text-[#C5A065] uppercase tracking-[0.2em] mb-3 block">
                  {t.data}
                </span>
                <h3 className="text-2xl font-serif text-[#566573] mb-3 leading-tight">{t.titolo}</h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}