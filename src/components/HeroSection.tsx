'use client';

import React from 'react';

const AwardIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M7 3h10v4a5 5 0 0 1-10 0V3Z" />
    <path d="M8 11h8v2a4 4 0 0 1-8 0v-2Z" />
    <path d="M12 15v4" />
    <path d="M9 19h6" />
  </svg>
);

const ArrowRightIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

const CheckCircleIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="m9 12 2 2 4-5" />
  </svg>
);

const PhoneCallIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.1 5.18 2 2 0 0 1 5.09 3h3a2 2 0 0 1 2 1.72c.13.98.36 1.93.68 2.84a2 2 0 0 1-.45 2.11L9 10.91a16 16 0 0 0 6.09 6.09l1.24-1.32a2 2 0 0 1 2.11-.45c.91.32 1.86.55 2.84.68A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] bg-[#D34F0D] text-white overflow-hidden flex items-center pt-8 pb-20 px-4 sm:px-8 lg:px-[64px]">
      {/* Background Fleet & City Image with Contrast Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=80"
          alt="Corporate Fleet Transportation"
          className="w-full h-full object-cover opacity-35 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D34F0D] via-[#C44309]/95 to-[#943806]/90" />
      </div>

      <div className="max-w-[1536px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & Content */}
        <div className="lg:col-span-7 space-y-6">
          {/* 24 Years Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 text-amber-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <AwardIcon className="w-4 h-4 text-amber-300" />
            <span>24 Years of Responsibility & Excellence</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight font-heading">
            MOVING PEOPLE <br />
            <span className="text-amber-300">MOVING BUSINESS</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-100 font-normal leading-relaxed max-w-2xl font-sans">
            Corporate travel that matters—from executive transfers to daily employee transportation with certified drivers, creating hassle-free journeys all the way.
          </p>

          {/* Quick Highlights list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-100 font-sans">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Certified Drivers & Background Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-amber-300 shrink-0" />
              <span>24/7 Live Operations Support Desk</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Real-Time GPS Tracking & Panic Alert Tech</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Pan-India Fleet Operations (8+ Major Hubs)</span>
            </div>
          </div>

          {/* CTA Button Group */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#quote-form"
              className="px-8 py-4 rounded-full bg-white text-[#D34F0D] text-sm font-extrabold shadow-xl hover:bg-slate-100 hover:scale-105 transition-all inline-flex items-center gap-2 font-sans"
            >
              Get Corporate Quote <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="tel:+918095499999"
              className="px-6 py-4 rounded-full bg-white/15 border border-white/30 text-white text-sm font-bold hover:bg-white/25 transition-all inline-flex items-center gap-2 font-sans"
            >
              <PhoneCallIcon className="w-4 h-4 text-amber-300" /> +91 80954 99999
            </a>
          </div>
        </div>

        {/* Right Column: Corporate Fleet Visual Badge */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md bg-black/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <div>
               
                <h3 className="text-xl font-bold text-white font-heading">
                  100% Compliant & Safe
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-[#D34F0D] font-extrabold flex items-center justify-center text-lg shadow-lg">
                24+
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-100 font-sans">
              <div className="p-3 rounded-xl bg-black/30 flex items-center justify-between">
                <span>Monthly Passengers Transported</span>
                <span className="font-extrabold text-amber-300 text-sm">500,000+</span>
              </div>
              <div className="p-3 rounded-xl bg-black/30 flex items-center justify-between">
                <span>Active Commercial Fleet</span>
                <span className="font-extrabold text-amber-300 text-sm">2,500+ Vehicles</span>
              </div>
              <div className="p-3 rounded-xl bg-black/30 flex items-center justify-between">
                <span>Client Retention Rate</span>
                <span className="font-extrabold text-amber-300 text-sm">99.4%</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white text-[#D34F0D] text-xs font-bold text-center font-sans">
              Trusted by 100+ Fortune 500 Enterprises
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
