'use client';

import React from 'react';
import Link from 'next/link';

export interface ServiceListItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface ServicesCardListProps {
  /** Optional title for the card container */
  title?: string;
  /** Custom list of service items */
  items?: ServiceListItem[];
  /** Callback when an item is clicked */
  onItemClick?: () => void;
  /** Custom outer wrapper className */
  className?: string;
}

// Inline lightweight SVG icons matching Figma/design layout
const BusIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="6" width="18" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="7.5" cy="15.5" r="1.5" fill="currentColor" />
    <circle cx="16.5" cy="15.5" r="1.5" fill="currentColor" />
    <path d="M6 10h12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CarIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 13l2-6a2 2 0 012-1.8h10a2 2 0 012 1.8l2 6v6a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="7.5" cy="14.5" r="1.5" fill="currentColor" />
    <circle cx="16.5" cy="14.5" r="1.5" fill="currentColor" />
  </svg>
);

const PlaneIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClockIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RouteIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M9 18h6a3 3 0 003-3V9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ZapIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const defaultServiceItems: ServiceListItem[] = [
  { name: 'Corporate Employee Transportation', href: '/services/corporate-employee-transportation', icon: BusIcon },
  { name: 'Corporate Fleet Management', href: '/services/corporate-fleet-management', icon: CarIcon },
  { name: 'Airport Transfers', href: '/services/airport-transfers', icon: PlaneIcon },
  { name: 'Monthly & Hourly Rentals', href: '/services/monthly-hourly-rentals', icon: ClockIcon },
  { name: 'Outstation Rides', href: '/services/outstation-rides', icon: RouteIcon },
  { name: 'Luxury Car Rentals', href: '/services/luxury-car-rentals', icon: CarIcon },
  { name: 'Electric Fleet', href: '/services/electric-fleet', icon: ZapIcon },
  { name: 'Event Transport', href: '/services/event-transport', icon: BusIcon },
];

export const ServicesCardList: React.FC<ServicesCardListProps> = ({
  title,
  items = defaultServiceItems,
  onItemClick,
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-[24px] shadow-2xl p-[20px] border border-slate-100/90 flex flex-col gap-[20px] transition-all duration-200 ${className}`}
    >
      {title && (
        <h3 className="text-lg font-extrabold text-[#D34F0D] font-heading pb-2 border-b border-orange-100">
          {title}
        </h3>
      )}

      <div className="flex flex-col gap-[20px]">
        {items.map((item, index) => {
          const IconComp = item.icon || BusIcon;
          return (
            <Link
              key={index}
              href={item.href}
              onClick={onItemClick}
              className="flex items-center gap-[16px] h-[44px] w-full max-w-[336px] group cursor-pointer hover:translate-x-1 transition-all duration-200"
            >
              {/* Peach Icon Container (Hug 44px) */}
              <div className="w-[44px] h-[44px] rounded-[14px] bg-[#FFF0E6] border border-[#FFDEC9] text-[#D34F0D] flex items-center justify-center shrink-0 group-hover:bg-[#D34F0D] group-hover:text-white group-hover:scale-105 transition-all shadow-sm">
                <IconComp className="w-5 h-5 stroke-[2]" />
              </div>

              {/* Service Title Text (Open Sans 600 16px 158% #383A42) */}
              <span className="text-[16px] font-semibold leading-[158%] text-[#383A42] group-hover:text-[#D34F0D] transition-colors font-sans tracking-normal select-none">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCardList;
