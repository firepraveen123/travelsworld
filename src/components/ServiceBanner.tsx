'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface ServiceBannerProps {
  /** Main uppercase heading title, e.g. "CORPORATE EMPLOYEE TRANSPORTATION SERVICES" */
  title: string;
  /** Primary description paragraph */
  description: string;
  /** Secondary description paragraph (optional) */
  secondaryDescription?: string;
  /** Text for the CTA button (defaults to "Request a quote.") */
  ctaText?: string;
  /** Target link for the CTA button (defaults to "#quote-form") */
  ctaHref?: string;
  /** Optional click handler for CTA button */
  onCtaClick?: () => void;
  /** Background / side image URL */
  bgImage?: string;
  /** Alt text for background image */
  imageAlt?: string;
  /** Title text for the top light subheader/breadcrumb bar (e.g. "Corporate Employee Transportation") */
  breadcrumbTitle?: string;
  /** Icon path for the top subheader/breadcrumb bar (e.g. "/images/Corporate-transport.svg") */
  icon?: string;
  /** Whether to render the light top subheader/breadcrumb bar (defaults to true) */
  showBreadcrumb?: boolean;
  /** Optional top badge pill text */
  badgeText?: string;
  /** Additional wrapper class names */
  className?: string;
}

const ArrowRightIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const HomeIcon = ({ className = 'w-3.5 h-3.5' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const ServiceBanner: React.FC<ServiceBannerProps> = ({
  title,
  description,
  secondaryDescription,
  ctaText = 'Request a quote.',
  ctaHref = '#quote-form',
  onCtaClick,
  bgImage = '/Service/corporate_employe/Corporat_ Employee_Transportation.svg',
  imageAlt = 'Service Banner Fleet Transportation',
  breadcrumbTitle,
  icon,
  showBreadcrumb = false,
  badgeText,
  className = '',
}) => {
  return (
    <div className={`w-full font-sans ${className}`}>
      {/* Main Service Banner Section (Full Auto Width 100%) */}
      <section className="relative w-full overflow-hidden text-white min-h-[500px] lg:min-h-[628px] flex items-center opacity-100 shadow-xl">
        {/* Background Fleet / Transport Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={imageAlt}
            className="w-full h-full object-cover object-center opacity-100"
          />
        </div>

        {/* Bottom Orange Accent Bar inside Hero Section */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-2 bg-gradient-to-r from-[#D34F0D] via-[#E25510] via-60% to-transparent opacity-90" />

        {/* Content Container */}
        <div className="relative z-10 container py-10 sm:py-14 lg:py-16">
          <div className="max-w-2xl lg:max-w-3xl space-y-5">
            {/* Optional Badge Tag */}
            {badgeText && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/40 text-white text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
                <span>{badgeText}</span>
              </div>
            )}

            {/* Title (Matching exact Figma spec: Open Sans 700 60.45px 75.67px uppercase #FFF9F3 drop-shadow 0 0 28px #FEB87F) */}
            <h1
              className="text-[28px] sm:text-[44px] lg:text-[60.45px] font-bold uppercase tracking-[1px] leading-[1.2] lg:leading-[75.67px] text-[#FFF9F3] font-sans"
              style={{ filter: 'drop-shadow(0px 0px 28px #FEB87F)' }}
            >
              {title}
            </h1>

            {/* Description Text Container (Figma Spec: Width 622px, Open Sans 600 20.85px 28.66px #FFFFFF) */}
            <div className="w-full max-w-[622px] space-y-3">
              <p className="font-sans font-semibold text-[16px] sm:text-[18px] lg:text-[20.85px] leading-[1.4] lg:leading-[28.66px] text-white tracking-normal">
                {description}
              </p>

              {secondaryDescription && (
                <p className="font-sans font-semibold text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.4] lg:leading-[26px] text-white/95 tracking-normal">
                  {secondaryDescription}
                </p>
              )}
            </div>

            {/* CTA Request a Quote Button (Matching exact Figma Specs: Height 58.37px, Radius 10422.12px, Padding L/R 29.18px, Gap 10.42px, Border 1px #F17F21, Drop shadow 0 0 12.4px #F17F21, Font IBM Plex Sans 600 18.76px 25.02px #5B2C06) */}
            <div className="pt-4">
              <a
                href={ctaHref}
                onClick={onCtaClick}
                className="group inline-flex items-center h-[58.37px] px-[29.18px] gap-[10.42px] rounded-[10422px] bg-white border border-[#F17F21] text-[#5B2C06] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
                style={{
                  boxShadow: '0px 0px 12.4px #F17F21',
                  fontFamily: "'IBM Plex Sans', sans-serif",
                }}
              >
                <span className="font-semibold text-[18.76px] leading-[25.02px] tracking-normal text-[#5B2C06] whitespace-nowrap">
                  {ctaText}
                </span>
                <span className="w-[34px] h-[34px] rounded-full bg-[#F17F21] text-white flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform duration-200">
                  <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceBanner;
