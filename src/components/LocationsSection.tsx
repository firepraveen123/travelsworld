'use client';

import React from 'react';
import { MapPin, Building, ShieldCheck, Check } from 'lucide-react';

export const LocationsSection: React.FC = () => {
  const hubs = [
    { city: 'Bangalore', status: 'Primary Tech Hub', vehicles: '850+ Fleet' },
    { city: 'Hyderabad', status: 'GCC & IT Center', vehicles: '600+ Fleet' },
    { city: 'Pune', status: 'Auto & Tech Hub', vehicles: '450+ Fleet' },
    { city: 'Mumbai', status: 'Financial Capital', vehicles: '500+ Fleet' },
    { city: 'Chennai', status: 'Industrial Hub', vehicles: '400+ Fleet' },
    { city: 'Delhi NCR', status: 'National Capital Region', vehicles: '550+ Fleet' },
    { city: 'Mangalore', status: 'Regional Operational Hub', vehicles: '150+ Fleet' },
    { city: 'Coimbatore', status: 'Textile & Tech Hub', vehicles: '150+ Fleet' },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white px-4 sm:px-8 lg:px-16 border-t border-slate-800">
      <div className="max-w-[1536px] mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#FFF0E6] text-[#D34F0D] border border-[#FFDEC9] text-xs font-extrabold uppercase tracking-wider">
            Pan-India Network
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Locations & <span className="text-[#D34F0D]">Coverage</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Operating 24/7 across major tier-1 and tier-2 metropolitan hubs with centralized control centers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#D34F0D] transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#FFF0E6] border border-[#FFDEC9] text-[#D34F0D] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  {hub.vehicles}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-heading">
                  {hub.city}
                </h3>
                <p className="text-xs text-slate-400">{hub.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
