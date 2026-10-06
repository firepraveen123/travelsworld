'use client';

import React from 'react';
import Link from 'next/link';

export interface ServiceAboutSectionProps {
  /** Optional top badge pill text (defaults to "Who we are") */
  badgeText?: string;
  /** Main uppercase heading title */
  title?: string;
  /** Text for the CTA button (defaults to "DISCOVER TRAVELSWORLD") */
  buttonText?: string;
  /** Target link for the CTA button (defaults to "#quote-form") */
  buttonHref?: string;
  /** Content paragraphs */
  paragraphs?: string[];
  /** Additional container wrapper styling */
  className?: string;
}

const defaultParagraphs = [
  "At Travelsworld, it's not just a ride but a commitment to a dedicated employee transit experience, maintaining comfort and safety. Paired with skilled drivers with many years of driving experience, we provide commute solutions for secure airport transfers, employee office transportation, executive transfers, and many more. Our process includes trained drivers, structured routes, technology-enabled operations, and suitable vehicles.",
  "Whether you are a growing company, a startup, or an MNC, we provide seamless corporate employee transport fleets that can be easily customized to match your workforce and operational needs.",
];

export const ServiceAboutSection: React.FC<ServiceAboutSectionProps> = ({
  badgeText = 'Who we are',
  title = 'REMARKABLE EMPLOYEE TRANSPORTATION SERVICES WITH PREMIUM VEHICLES',
  buttonText = 'DISCOVER TRAVELSWORLD',
  buttonHref = '#quote-form',
  paragraphs = defaultParagraphs,
  className = '',
}) => {
  return (
    <section className={`w-full py-[10px] bg-white text-slate-900 ${className}`}>
      <div className="max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-[57px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Badge, Title & CTA Button */}
          <div className="lg:col-span-6 space-y-6 max-w-xl">
            {/* Top Badge Pill */}
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-lg bg-[#FDE2D2] text-[#9E4D0A] text-xs font-semibold tracking-wide">
                {badgeText}
              </span>
            </div>

            {/* Main Title Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold uppercase leading-[1.25] text-[#5B2C06] tracking-tight font-sans">
              {title}
            </h2>

            {/* CTA Button with Right Arrow */}
            <div className="pt-2">
              <Link
                href={buttonHref}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#F17F21] to-[#E85A1C] hover:from-[#e06f15] hover:to-[#d64f13] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95 group cursor-pointer"
              >
                <span>{buttonText}</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#F17F21] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform duration-200">
                  <svg
                    className="w-3.5 h-3.5 stroke-[3]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Paragraph Content */}
          <div className="lg:col-span-6 space-y-5 lg:pt-3 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            {paragraphs.map((para, index) => (
              <p key={index} className="text-[#685C52]">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAboutSection;
