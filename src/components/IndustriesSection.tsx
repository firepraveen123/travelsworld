'use client';

import React from 'react';
import { Building2, Briefcase, Building, GraduationCap, HeartPulse, Utensils, Factory, ShieldCheck } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const industries = [
    { name: 'IT & Technology', icon: Building2, count: '35+ Companies Served' },
    { name: 'Financial Sector', icon: Briefcase, count: '20+ Banking & GCC Clients' },
    { name: 'Corporate Offices', icon: Building, count: '50+ Headquarters Managed' },
    { name: 'Educational Institutions', icon: GraduationCap, count: '15+ Universities & Schools' },
    { name: 'Healthcare & Pharma', icon: HeartPulse, count: '24/7 Hospital & Shift Mobility' },
    { name: 'Hospitality & Retail', icon: Utensils, count: 'VIP Hotel & Event Fleet' },
    { name: 'MNCs & Enterprises', icon: ShieldCheck, count: 'Pan-India Corporate Hubs' },
    { name: 'Manufacturing & Auto', icon: Factory, count: 'Industrial Plant Commutes' },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white px-4 sm:px-8 lg:px-16 border-t border-slate-800">
      <div className="max-w-[1536px] mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#FFF0E6] text-[#D34F0D] border border-[#FFDEC9] text-xs font-extrabold uppercase tracking-wider">
            Domain Expertise Across Sectors
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Industries We <span className="text-[#D34F0D]">Serve</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Tailored transportation frameworks designed to meet strict industry compliance, security, and shift schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => {
            const IconComp = ind.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#D34F0D] transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF0E6] border border-[#FFDEC9] text-[#D34F0D] flex items-center justify-center shrink-0 group-hover:bg-[#D34F0D] group-hover:text-white transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors font-heading">
                    {ind.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-sans">{ind.count}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
