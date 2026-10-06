'use client';

import React from 'react';

export interface ProcessStepItem {
  stepNumber?: number;
  title: string;
  description: string;
  image: string;
}

export interface ProcessTimelineSectionProps {
  /** Optional top badge pill text (defaults to "The process") */
  badgeText?: string;
  /** Main section heading title */
  title?: string;
  /** Subtitle paragraph */
  subtitle?: string;
  /** List of process steps */
  steps?: ProcessStepItem[];
  /** Additional container styling */
  className?: string;
}

export const defaultProcessSteps: ProcessStepItem[] = [
  {
    stepNumber: 1,
    title: 'Share your company requirements',
    description:
      'Choose the pickup as well as the company drop-off location, and book the corporate transit desired as per your need.',
    image: '/images/process_step_1.jpg',
  },
  {
    stepNumber: 2,
    title: 'Plan routes & schedule',
    description:
      'On entering the trip details, submit the request while our team helps coordinate pickup points, routes and schedules.',
    image: '/images/shuttle_2.jpg',
  },
  {
    stepNumber: 3,
    title: 'Get the driver and vehicle assigned',
    description:
      'We provide premium vehicles and professional drivers depending on travel requirements, employee capacity and business requirements.',
    image: '/images/process_step_3.jpg',
  },
  {
    stepNumber: 4,
    title: 'Deploy fleet',
    description:
      'At Travelsworld, we help manage various transportation requirements as per the business requirements.',
    image: '/images/shuttle_1.jpg',
  },
  {
    stepNumber: 5,
    title: 'Monitor every trip in detail',
    description:
      "From our command centre, our specialised team monitors every trip's performance in real time.",
    image: '/images/process_step_5.jpg',
  },
  {
    stepNumber: 6,
    title: 'Analyze and optimize',
    description:
      'The performance reports help in advancing punctuality and operational efficacy.',
    image: '/images/shuttle_2.jpg',
  },
];

export const ProcessTimelineSection: React.FC<ProcessTimelineSectionProps> = ({
  badgeText = 'The process',
  title = 'HOW CORPORATE EMPLOYEE TRANSPORTATION WORKS',
  subtitle = 'From verified drivers and compliant vehicles to live GPS tracking, emergency response and 24/7 monitoring, every journey is managed with safety, accountability and care from pickup to the final drop.',
  steps = defaultProcessSteps,
  className = '',
}) => {
  return (
    <section className={`w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#E25510] via-[#D34F0D] to-[#B83E08] text-white relative overflow-hidden ${className}`}>
      {/* Background Decorative Dot Grid Accents */}
      <div className="absolute top-10 left-10 opacity-20 hidden lg:block pointer-events-none">
        <div className="grid grid-cols-8 gap-2.5">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 hidden lg:block pointer-events-none">
        <div className="grid grid-cols-8 gap-2.5">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>

      <div className="max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-[57px] space-y-12 lg:space-y-16 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[#5B2C06] text-xs font-bold uppercase tracking-wider shadow-sm">
              {badgeText}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold uppercase text-white tracking-tight leading-tight font-sans">
            {title}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-white/90 font-normal leading-relaxed max-w-3xl mx-auto font-sans">
            {subtitle}
          </p>
        </div>

        {/* Vertical Timeline Process Flow */}
        <div className="relative">
          {/* Center Vertical White Line (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-white/40 hidden lg:block pointer-events-none" />

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1; // Even steps have card on left, image on right

              return (
                <div key={idx} className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                  {/* Center Node Pin Dot (Desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#D34F0D] shadow-lg z-20 hidden lg:flex items-center justify-center pointer-events-none" />

                  {/* Left Column */}
                  <div className={`w-full lg:w-1/2 flex ${isEven ? 'lg:justify-end order-1' : 'lg:justify-end order-2 lg:order-1'}`}>
                    {isEven ? (
                      /* Glass Card Box for Even Steps */
                      <div className="w-full max-w-lg bg-white/15 backdrop-blur-md p-6 sm:p-8 rounded-[24px] border border-white/25 shadow-2xl space-y-2 text-white">
                        <h3 className="text-lg sm:text-xl font-extrabold leading-snug font-sans text-white">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-sans font-normal">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      /* Organic Shape Image Frame for Odd Steps */
                      <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden border-4 border-white/30 shadow-2xl shrink-0 mx-auto lg:mx-0">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className={`w-full lg:w-1/2 flex ${isEven ? 'lg:justify-start order-2' : 'lg:justify-start order-1 lg:order-2'}`}>
                    {isEven ? (
                      /* Organic Shape Image Frame for Even Steps */
                      <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-[70%_30%_30%_70%/50%_60%_40%_50%] overflow-hidden border-4 border-white/30 shadow-2xl shrink-0 mx-auto lg:mx-0">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      /* Glass Card Box for Odd Steps */
                      <div className="w-full max-w-lg bg-white/15 backdrop-blur-md p-6 sm:p-8 rounded-[24px] border border-white/25 shadow-2xl space-y-2 text-white">
                        <h3 className="text-lg sm:text-xl font-extrabold leading-snug font-sans text-white">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-sans font-normal">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;
