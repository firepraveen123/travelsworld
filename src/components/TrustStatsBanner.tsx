'use client';

import React from 'react';

export interface StatItem {
  value: string;
  label: string;
}

export interface TrustStatsBannerProps {
  /** Top subtitle tag (defaults to "TRUSTED BY GCCs ACROSS INDIA") */
  headerTag?: string;
  /** Huge watermark number (defaults to "24") */
  watermarkNumber?: string;
  /** Left badge subtitle (defaults to "YEARS OF RESPONSIBILITY") */
  badgeSubtitle?: string;
  /** List of 6 key statistics to display */
  stats?: StatItem[];
  /** Outer container custom class */
  className?: string;
}

export const defaultTrustStats: StatItem[] = [
  { value: '24+', label: 'Years of Operation' },
  { value: '12,000+', label: 'Vehicles on Road' },
  { value: '45,000+', label: 'Daily Trips per Day' },
  { value: '102+', label: 'Corporate Clients' },
  { value: '1,44,000+', label: 'Employees Transited per Day' },
  { value: 'Pan-India', label: 'Operations' },
];

export const TrustStatsBanner: React.FC<TrustStatsBannerProps> = ({
  headerTag = 'TRUSTED BY GCCs ACROSS INDIA',
  watermarkNumber = '24',
  badgeSubtitle = 'YEARS OF RESPONSIBILITY',
  stats = defaultTrustStats,
  className = '',
}) => {
  return (
    <section className={`w-full py-8 sm:py-12 px-4 sm:px-8 lg:px-16 bg-white ${className}`}>
      <div className="max-w-[1410px] mx-auto">
        {/* Main Vibrant Orange Gradient Banner Card (Figma Specs: Width 1410px, Height 455px, Radius 19px, Padding 75px 64px 32px 64px, Drop shadow 0 0 26.2px #5B2C06) */}
        <div
          className="relative w-full rounded-[19px] bg-gradient-to-r from-[#F45B13] via-[#E24E0D] to-[#CF4206] text-white pt-[32px] sm:pt-[50px] lg:pt-[75px] pb-[20px] sm:pb-[24px] lg:pb-[32px] px-[20px] sm:px-[40px] lg:px-[64px] min-h-[360px] lg:h-[455px] flex items-center overflow-hidden"
          style={{ boxShadow: '0px 0px 26.2px rgba(91, 44, 6, 0.35)' }}
        >
          
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-[14px] items-center">
            
            {/* Left Column: Big "24" Watermark & "YEARS OF RESPONSIBILITY" glassmorphism badge */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start min-h-[180px] sm:min-h-[220px]">
              {/* Giant Hollow Outline 24 Watermark */}
              <div
                className="absolute -left-2 top-1/2 -translate-y-1/2 text-[170px] sm:text-[220px] lg:text-[260px] font-extrabold select-none pointer-events-none leading-none tracking-tighter"
                style={{
                  WebkitTextStroke: '2px rgba(255, 255, 255, 0.32)',
                  color: 'transparent',
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                {watermarkNumber}
              </div>

              {/* Glassmorphism Years of Responsibility Box */}
              <div className="relative z-10 border border-white/35 rounded-xl px-6 py-4 bg-white/15 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] inline-block">
                <span className="text-sm sm:text-base lg:text-[17px] font-bold uppercase tracking-[2px] text-white">
                  {badgeSubtitle}
                </span>
              </div>
            </div>

            {/* Right Column: Header & 6 Stats Grid */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Header Tag */}
              <div className="text-center lg:text-left">
                <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-[2px] text-white/95 font-heading">
                  {headerTag}
                </h4>
              </div>

              {/* 2 Rows x 3 Columns Grid with Dividers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-[14px] pt-2">
                {stats.map((stat, idx) => {
                  const showRightDivider = (idx + 1) % 3 !== 0; // Divider after 1st and 2nd column
                  return (
                    <div
                      key={idx}
                      className={`relative flex flex-col items-center lg:items-start text-center lg:text-left px-2 ${
                        showRightDivider ? 'sm:border-r sm:border-white/25 sm:pr-4' : ''
                      }`}
                    >
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight leading-none mb-1.5">
                        {stat.value}
                      </span>
                      <span className="text-xs sm:text-sm text-white/90 font-medium font-sans leading-snug">
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustStatsBanner;
