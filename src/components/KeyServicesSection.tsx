'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';

export interface ServiceCardItem {
  title: string;
  description: string;
  image: string;
}

export interface KeyServicesSectionProps {
  /** Section heading title */
  title?: string;
  /** Section subtitle description */
  subtitle?: string;
  /** List of service card items */
  items?: ServiceCardItem[];
  /** Additional container class names */
  className?: string;
}

export const defaultCommuteServices: ServiceCardItem[] = [
  {
    title: 'EMPLOYEE SHUTTLE SERVICES',
    description:
      'Our team deploy effective transportation solutions between business parks, offices, campuses, parking, and core employee transportation with dedicated shuttle services.',
    image: '/images/shuttle_1.jpg',
  },
  {
    title: 'EMPLOYEE PICKUP & DROP SERVICES',
    description:
      'Customized daily office commute routes, real-time GPS tracking, automated roster management, and door-to-door employee pickup and drop-offs.',
    image: '/images/shuttle_2.jpg',
  },
  {
    title: 'EXECUTIVE & VIP TRANSIT',
    description:
      'Premium chauffeur-driven vehicles for enterprise executives, corporate guests, leadership teams, and high-priority business travel requirements.',
    image: '/images/shuttle_1.jpg',
  },
  {
    title: 'CORPORATE EVENT LOGISTICS',
    description:
      'End-to-end transport coordination and fleet deployment for corporate summits, conventions, and large-scale enterprise events.',
    image: '/images/shuttle_2.jpg',
  },
  {
    title: 'EV GREEN FLEET TRANSIT',
    description:
      'Zero-emission electric vehicle fleet management helping enterprises achieve ESG sustainability goals and lower carbon footprints.',
    image: '/images/shuttle_1.jpg',
  },
];

export const KeyServicesSection: React.FC<KeyServicesSectionProps> = ({
  title = 'OUR KEY CORPORATE EMPLOYEE COMMUTE SERVICES',
  subtitle = 'At Travelsworld, we provide end-to-end employee fleet solutions ensuring safety and comfort, combined with certified drivers.',
  items = defaultCommuteServices,
  className = '',
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 480;

      if (direction === 'right') {
        const isEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 30;
        if (isEnd) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        const isStart = container.scrollLeft <= 30;
        if (isStart) {
          container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    }
  }, []);

  // Auto scroll every 3.5 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      scroll('right');
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, scroll]);

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full py-12 sm:py-16 lg:py-20 bg-[#FFF9F3] text-slate-900 ${className}`}
    >
      <div className="container space-y-8">
        {/* Header Section with Navigation Arrow Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-center md:text-left max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold uppercase text-[#5B2C06] tracking-tight font-sans">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-[#685C52] font-medium leading-relaxed font-sans">
              {subtitle}
            </p>
          </div>

          {/* Left / Right Scroll Controls */}
          <div className="flex items-center justify-center md:justify-end gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full bg-white border border-[#FFDEC9] text-[#D34F0D] hover:bg-[#D34F0D] hover:text-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full bg-white border border-[#FFDEC9] text-[#D34F0D] hover:bg-[#D34F0D] hover:text-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel / Cards List Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[#F17F21] scrollbar-track-orange-100/50 snap-x snap-mandatory transition-all duration-300 select-none"
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative shrink-0 w-[300px] sm:w-[480px] lg:w-[600px] h-[340px] sm:h-[380px] rounded-[24px] overflow-hidden shadow-xl group snap-start"
            >
              {/* Card Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlaid Orange Glass Card Box on Left */}
              <div className="absolute top-5 left-5 bottom-5 w-[240px] sm:w-[300px] lg:w-[340px] bg-gradient-to-br from-[#E25510]/95 to-[#D34F0D]/90 backdrop-blur-md p-5 sm:p-7 rounded-[20px] text-white flex flex-col justify-center space-y-3 shadow-2xl border border-white/20">
                <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide leading-snug font-sans text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyServicesSection;
