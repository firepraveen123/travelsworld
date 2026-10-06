'use client';

import React from 'react';

export interface IndustryItem {
  title: string;
  description: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

export interface IndustryApplicationsSectionProps {
  /** Optional top badge pill text (defaults to "Who we serve") */
  badgeText?: string;
  /** Section heading title (defaults to "MAJOR INDUSTRY APPLICATIONS") */
  title?: string;
  /** Custom list of industry application items */
  items?: IndustryItem[];
  /** Additional container styling */
  className?: string;
}

// Inline lightweight SVG icons matching Figma/design specification
const TechIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const OfficeIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="2" width="16" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="8" y1="6" x2="8" y2="6.01" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="6" x2="12" y2="6.01" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="16" y1="6" x2="16" y2="6.01" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="8" y1="10" x2="8" y2="10.01" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="10" x2="12" y2="10.01" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="16" y1="10" x2="16" y2="10.01" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="8" y1="14" x2="8" y2="14.01" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="14" x2="12" y2="14.01" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="16" y1="14" x2="16" y2="14.01" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StartupIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HealthIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EnterpriseIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 21h18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 21V7l8-4v18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 21V11l-6-3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FactoryIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4H2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const defaultIndustryApplications: IndustryItem[] = [
  {
    title: 'IT and technology',
    description:
      'Major tech hubs, technology parks, and IT companies support employees daily with comfortable transportation.',
    icon: TechIcon,
  },
  {
    title: 'Corporate sectors',
    description:
      'It streamlines regular shifts and working hour transportations for corporate employees.',
    icon: OfficeIcon,
  },
  {
    title: 'Startups & growing businesses',
    description:
      'Several growing startups and businesses look to build a flexible commute for employees, and we help them scale transit operations as they grow.',
    icon: StartupIcon,
  },
  {
    title: 'Healthcare organizations',
    description:
      'It helps medical centres and healthcare facilities support timely employee schedules by providing punctual transportation to dedicated facilities.',
    icon: HealthIcon,
  },
  {
    title: 'MNCs & enterprises',
    description:
      'Simplify management of large-scale employee transportation needs with scalable fleet and operational support.',
    icon: EnterpriseIcon,
  },
  {
    title: 'Manufacturing companies',
    description:
      'It provides a suitable transportation benefit for employees and staff travelling to industrial facilities and manufacturing zones.',
    icon: FactoryIcon,
  },
];

export const IndustryApplicationsSection: React.FC<IndustryApplicationsSectionProps> = ({
  badgeText = 'Who we serve',
  title = 'MAJOR INDUSTRY APPLICATIONS',
  items = defaultIndustryApplications,
  className = '',
}) => {
  return (
    <section className={`w-full py-12 sm:py-16 lg:py-20 bg-[#FFF9F3] text-slate-900 ${className}`}>
      <div className="max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-[57px] space-y-10 sm:space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <div>
            <span className="inline-block px-3.5 py-1.5 rounded-lg bg-[#FDE2D2] text-[#9E4D0A] text-xs font-semibold tracking-wide">
              {badgeText}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold uppercase text-[#5B2C06] tracking-tight font-sans">
            {title}
          </h2>
        </div>

        {/* 6 Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[20px] p-6 sm:p-8 border border-orange-100/90 shadow-md hover:shadow-xl hover:border-orange-300 transition-all duration-300 space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top-left Orange Square Icon Container */}
                  <div className="w-[44px] h-[44px] rounded-[12px] bg-[#F17F21] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#D34F0D] transition-colors font-sans">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryApplicationsSection;
