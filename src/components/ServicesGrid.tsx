'use client';

import React from 'react';
import { Bus, Car, Plane, Clock, Navigation, Zap, Calendar, ArrowRight } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      title: 'Corporate Employee Transportation',
      icon: Bus,
      description: 'Custom employee shuttle routes, tech-enabled tracking, and optimized daily commutes for enterprise staff.',
    },
    {
      title: 'Corporate Fleet Management',
      icon: Car,
      description: 'Dedicated fleet leasing, maintenance, driver management, and complete operational compliance.',
    },
    {
      title: 'Airport Transfers',
      icon: Plane,
      description: '24/7 flight tracking, meet-and-greet airport pickups, and executive arrival transfers.',
    },
    {
      title: 'Monthly & Hourly Rentals',
      icon: Clock,
      description: 'Flexible hourly or long-term vehicle rentals for business trips and executive mobility.',
    },
    {
      title: 'Outstation Rides',
      icon: Navigation,
      description: 'Safe inter-city long-distance transit with experienced drivers and well-maintained commercial vehicles.',
    },
    {
      title: 'Luxury Car Rentals',
      icon: Car,
      description: 'Chauffeur-driven premium sedans, SUVs, and luxury coaches for C-suite executives and VIP guests.',
    },
    {
      title: 'Electric Fleet',
      icon: Zap,
      description: 'Zero-emission green EV fleet solutions helping enterprises achieve sustainability & ESG goals.',
    },
    {
      title: 'Event Transport',
      icon: Calendar,
      description: 'End-to-end transport coordination and fleet deployment for corporate conferences, summits, and events.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 text-white px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1536px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#FFF0E6] text-[#D34F0D] border border-[#FFDEC9] text-xs font-extrabold uppercase tracking-wider">
            Tailored Enterprise Mobility Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Our Core <span className="text-[#D34F0D]">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Comprehensive corporate transportation solutions designed for safety, punctuality, and operational efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#D34F0D] transition-all duration-300 space-y-4 group hover:-translate-y-2 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Figma Peach Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#FFF0E6] border border-[#FFDEC9] text-[#D34F0D] flex items-center justify-center group-hover:bg-[#D34F0D] group-hover:text-white transition-colors shadow-md">
                    <IconComp className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <a
                  href="#quote-form"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D34F0D] hover:text-amber-300 transition-colors pt-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
