'use client';

import React from 'react';
import { ClientLogo, defaultClientLogos } from '@/data/clientLogosData';

export interface ClientLogosSectionProps {
  /** Section Title (e.g. "TRUSTED BY 100+ ENTERPRISES & GOVERNMENT ORGANIZATIONS") */
  title?: string;
  /** Subtitle description */
  subtitle?: string;
  /** Custom list of client logos */
  logos?: ClientLogo[];
  /** Scrolling speed: 'slow' | 'normal' | 'fast' (defaults to 'normal') */
  speed?: 'slow' | 'normal' | 'fast';
  /** Scroll direction: false for left scroll, true for right scroll */
  reverse?: boolean;
  /** Background styling class (defaults to "bg-white") */
  bgClass?: string;
  /** Show top orange accent line matching Figma/design image (defaults to true) */
  showTopBannerBar?: boolean;
  /** Custom class for outer section container */
  className?: string;
}

// Built-in high-precision SVG vector renders matching exact logos in image
const renderVectorLogo = (logoId: string, name: string) => {
  switch (logoId) {
    case 'kempegowda':
      return (
        <div className="flex items-center gap-2 sm:gap-2.5 select-none">
          <svg width="36" height="32" viewBox="0 0 38 34" fill="none" className="shrink-0">
            <path d="M14 4C18 9 24 10 32 6C28 14 24 18 16 18C12 18 8 16 4 12C10 10 12 6 14 4Z" fill="#00A896" />
            <path d="M18 14C22 17 28 20 34 18C28 24 22 28 14 26C10 26 8 24 6 22C12 20 16 17 18 14Z" fill="#F4A261" />
            <path d="M12 22C16 24 20 28 26 30C20 34 14 34 8 30C6 28 5 26 4 24C8 24 10 23 12 22Z" fill="#E76F51" />
          </svg>
          <div className="flex flex-col leading-none text-left">
            <span className="text-[12px] font-extrabold text-[#007070] tracking-tight font-heading">Kempegowda</span>
            <span className="text-[6.5px] font-extrabold text-slate-500 uppercase tracking-wider mt-0.5">INTERNATIONAL AIRPORT</span>
            <span className="text-[6.5px] font-extrabold text-slate-400 uppercase tracking-widest">BENGALURU</span>
          </div>
        </div>
      );

    case 'aadhaar':
      return (
        <div className="flex flex-col items-center justify-center select-none">
          <svg width="52" height="32" viewBox="0 0 60 36" fill="none">
            <path d="M12 22C12 13 20 5 30 5C40 5 48 13 48 22" stroke="#F4A261" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="3 3.5" />
            <path d="M22 24C22 19 25 15 30 15C35 15 38 19 38 24" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M26 24C26 21 28 19 30 19C32 19 34 21 34 24" stroke="#E63946" strokeWidth="2" strokeLinecap="round" />
            <circle cx="30" cy="24" r="1.5" fill="#E63946" />
          </svg>
          <span className="text-[10px] font-black text-[#D34F0D] tracking-[0.2em] uppercase -mt-0.5">AADHAAR</span>
        </div>
      );

    case 'bescom':
      return (
        <div className="flex flex-col items-center select-none">
          <div className="w-8 h-10 bg-[#0077B6] rounded-sm flex flex-col items-center justify-center text-white relative shadow-sm">
            <span className="text-[6px] font-bold tracking-tighter opacity-85">ಬೆಸ್ಕಾಂ</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="my-0.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span className="text-[7px] font-black tracking-widest">B</span>
          </div>
          <span className="text-[8px] font-extrabold text-[#0077B6] tracking-wider mt-0.5">BESCOM</span>
        </div>
      );

    case 'google':
      return (
        <div className="flex items-center text-2xl font-extrabold tracking-tight select-none font-sans">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </div>
      );

    case 'bosch':
      return (
        <div className="flex items-center gap-2 select-none">
          <div className="w-7 h-7 rounded-full border-[2.5px] border-slate-900 flex items-center justify-center p-0.5 shrink-0">
            <div className="w-full h-full border border-slate-900 rounded-full flex items-center justify-center">
              <div className="w-2 h-3.5 bg-slate-900" />
            </div>
          </div>
          <span className="text-xl font-black text-[#E21B23] tracking-wider font-sans">BOSCH</span>
        </div>
      );

    case 'dell':
      return (
        <div className="flex items-center select-none">
          <span className="text-2xl font-black text-[#007DB8] tracking-tighter font-sans flex items-center">
            D<span className="inline-block transform -rotate-12 mx-[1px]">E</span>LL
          </span>
        </div>
      );

    case 'microsoft':
      return (
        <div className="flex items-center gap-2 select-none">
          <div className="grid grid-cols-2 gap-0.5 w-5 h-5 shrink-0">
            <div className="bg-[#F25022] w-full h-full" />
            <div className="bg-[#7FBA00] w-full h-full" />
            <div className="bg-[#00A4EF] w-full h-full" />
            <div className="bg-[#FFB900] w-full h-full" />
          </div>
          <span className="text-base font-semibold text-slate-700 tracking-tight font-sans">Microsoft</span>
        </div>
      );

    case 'infosys':
      return (
        <div className="flex items-center select-none">
          <span className="text-xl font-extrabold text-[#007CC3] tracking-normal font-sans">Infosys</span>
        </div>
      );

    case 'wipro':
      return (
        <div className="flex items-center gap-2 select-none">
          <div className="flex items-center -space-x-1 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFC20E] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A551] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] inline-block" />
          </div>
          <span className="text-lg font-bold text-slate-800 tracking-tight font-sans">wipro</span>
        </div>
      );

    case 'tcs':
      return (
        <div className="flex items-center gap-2 select-none">
          <div className="w-7 h-7 bg-[#003399] rounded flex items-center justify-center text-white font-black text-[9px] tracking-tighter">
            TATA
          </div>
          <span className="text-sm font-bold text-slate-800 tracking-tight">TCS</span>
        </div>
      );

    default:
      return (
        <span className="text-base font-bold text-slate-700 font-sans tracking-wide">
          {name}
        </span>
      );
  }
};

export const ClientLogosSection: React.FC<ClientLogosSectionProps> = ({
  title,
  subtitle,
  logos = defaultClientLogos,
  speed = 'normal',
  reverse = false,
  bgClass = 'bg-white',
  showTopBannerBar = false,
  className = '',
}) => {
  // Determine animation class based on speed and direction
  let animationClass = 'animate-marquee';
  if (speed === 'fast') animationClass = 'animate-marquee-fast';
  if (reverse) animationClass = 'animate-marquee-reverse';

  // Duplicate logos list twice for seamless infinite scrolling loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className={`w-full h-[150px] min-h-[150px] flex items-center overflow-hidden opacity-100 ${bgClass} ${className}`}>
      {/* Top Gradient Accent Bar matching Image attached */}
      {showTopBannerBar && (
        <div className="w-full h-3 bg-gradient-to-r from-[#D34F0D] via-[#E25510] via-60% to-white/0" />
      )}

      <div className="w-full">
        {/* Optional Section Header */}
        {title && (
          <div className="text-center max-w-3xl mx-auto px-4 mb-2 space-y-1">
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#D34F0D] font-heading">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-slate-500 font-sans">{subtitle}</p>
            )}
          </div>
        )}

        {/* Outer Horizontal Marquee Container (Figma Height: 150px) */}
        <div className="relative w-full overflow-hidden py-2 group">
          {/* Subtle Left & Right Fading Gradients for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Marquee Row with Figma Specs (Width: 262.2px, Height: 150px, Border-Right/Bottom: 1px, Padding: 16px, Gap: 10px) */}
          <div className={`${animationClass} items-center flex`}>
            {duplicatedLogos.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[262.2px] h-[150px] shrink-0 p-[16px] flex flex-col justify-center items-center gap-[10px] bg-white opacity-90 hover:opacity-100 transition-all duration-200 cursor-pointer select-none"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-[85px] max-w-[210px] w-auto h-auto object-contain"
                  />
                ) : (
                  renderVectorLogo(item.id, item.name)
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
