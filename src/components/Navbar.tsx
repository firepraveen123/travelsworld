'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// Lightweight inline icon components to avoid dependency on `lucide-react`

type IconProps = { className?: string };

const ChevronDown: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Menu: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const X: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MapPin: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="11" r="2" />
  </svg>
);

// Simple placeholder icons for various names used in the navbar
const Bus = CarPlaceholder('bus');
const Car = CarPlaceholder('car');
const Plane: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12h20M6 12l3-3 3 3 3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Clock: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Navigation: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Zap: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Building2: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="18" />
    <rect x="14" y="7" width="7" height="14" />
  </svg>
);
const Briefcase: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="12" rx="2" />
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
  </svg>
);
const Building: React.FC<IconProps> = Building2;
const GraduationCap: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 12l-10 6L2 12l10-6 10 6z" />
    <path d="M12 6v6" />
  </svg>
);
const HeartPulse: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12s1-4 6-4 6 4 9 4 6-4 6-4" />
    <path d="M12 21s-4-2-7-5" />
  </svg>
);
const Utensils: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 2v11" />
    <path d="M3 6h8" />
    <path d="M21 2v11" />
    <path d="M17 6h4" />
  </svg>
);
const Factory: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 21h18" />
    <path d="M3 21V8l6 4 6-6 6 4v11" />
  </svg>
);

function CarPlaceholder(_type: string) {
  return ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="7" width="18" height="8" rx="2" />
      <circle cx="7" cy="17" r="1.5" />
      <circle cx="17" cy="17" r="1.5" />
    </svg>
  );
}

export const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: 'Corporate Employee Transportation', href: '/services/corporate-employee-transportation', icon: Bus },
    { name: 'Corporate Fleet Management', href: '/services/corporate-fleet-management', icon: Car },
    { name: 'Airport Transfers', href: '/services/airport-transfers', icon: Plane },
    { name: 'Monthly & Hourly Rentals', href: '/services/monthly-hourly-rentals', icon: Clock },
    { name: 'Outstation Rides', href: '/services/outstation-rides', icon: Navigation },
    { name: 'Luxury Car Rentals', href: '/services/luxury-car-rentals', icon: Car },
    { name: 'Electric Fleet', href: '/services/electric-fleet', icon: Zap },
    { name: 'Event Transport', href: '/services/event-transport', icon: Bus },
  ];

  const industries = [
    { name: 'IT and Technology', icon: Building2 },
    { name: 'Financial sector', icon: Briefcase },
    { name: 'Corporate offices', icon: Building },
    { name: 'Educational institutions', icon: GraduationCap },
    { name: 'Healthcare organizations', icon: HeartPulse },
    { name: 'Hospitality businesses', icon: Utensils },
    { name: 'MNCs & large enterprises', icon: Building2 },
    { name: 'Manufacturing companies', icon: Factory },
  ];

  const locations = [
    'Bangalore',
    'Hyderabad',
    'Pune',
    'Mumbai',
    'Chennai',
    'Delhi',
    'Mangalore',
    'Coimbatore',
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#D34F0D] text-white shadow-xl">
      <div className=" flex items-center justify-between gap-4 container">
        {/* Official TravelsWorld White SVG Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src="/images/logo-white.svg"
            alt="TravelsWorld - Journey of Success"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 py-4 hover:text-amber-200 transition-colors font-heading text-sm font-bold">
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>

            {/* Figma Services Popup Menu */}
            {activeDropdown === 'services' && (
              <div className="absolute top-full left-[20px] w-[376px] bg-white text-slate-900 rounded-[24px] shadow-2xl p-[20px] border border-slate-100/90 flex flex-col gap-[20px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {services.map((item, i) => {
                  const IconComp = item.icon;
                  return (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-[16px] h-[44px] w-full group cursor-pointer hover:translate-x-1 transition-all duration-200"
                    >
                      <div className="w-[44px] h-[44px] rounded-[14px] bg-[#FFF0E6] border border-[#FFDEC9] text-[#D34F0D] flex items-center justify-center shrink-0 group-hover:bg-[#D34F0D] group-hover:text-white group-hover:scale-105 transition-all shadow-sm">
                        <IconComp className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-[16px] font-semibold leading-[158%] text-[#383A42] group-hover:text-[#D34F0D] transition-colors font-sans tracking-normal select-none">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 py-4 hover:text-amber-200 transition-colors font-heading text-sm font-bold">
              Industries <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
            </button>

            {/* Figma Industries Popup Menu */}
            {activeDropdown === 'industries' && (
              <div className="absolute top-full left-[20px] w-[380px] bg-white text-slate-900 rounded-[20px] shadow-2xl p-4 border border-slate-100/80 grid grid-cols-1 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {industries.map((item, i) => {
                  const IconComp = item.icon;
                  return (
                    <a
                      key={i}
                      href="#"
                      className="flex items-center gap-4 p-2.5 rounded-[12px] hover:bg-[#FFF5EF] transition-all group cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-[12px] bg-[#FFF0E6] border border-[#FFDEC9] text-[#D34F0D] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-sm font-bold text-[#212529] group-hover:text-[#D34F0D] transition-colors font-sans">
                        {item.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Locations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('locations')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 py-4 hover:text-amber-200 transition-colors font-heading text-sm font-bold">
              Locations <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'locations' ? 'rotate-180' : ''}`} />
            </button>

            {/* Figma Locations Popup Menu */}
            {activeDropdown === 'locations' && (
              <div className="absolute top-full left-[20px] w-[260px] bg-white text-slate-900 rounded-[20px] shadow-2xl p-3 border border-slate-100/80 grid grid-cols-1 gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {locations.map((loc, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center gap-3 p-2.5 rounded-[10px] hover:bg-[#FFF5EF] text-sm font-bold text-[#212529] hover:text-[#D34F0D] transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#FFF0E6] border border-[#FFDEC9] text-[#D34F0D] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="font-sans">{loc}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* About Us */}
          <a href="#" className="hover:text-amber-200 transition-colors font-heading text-sm font-bold">
            About Us
          </a>

          {/* Resources */}
          <a href="#" className="hover:text-amber-200 transition-colors font-heading text-sm font-bold">
            Resources
          </a>
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-3">
          {/* Figma "Get a Quote" Button */}
          <a href="#" className="btn-quote text-xs font-bold whitespace-nowrap shadow-md">
            Get a Quote
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 border-t border-white/20 bg-[#b83e08] space-y-3">
          <div className="flex flex-col gap-2 text-sm font-semibold">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-white/10 rounded-lg">
              Services
            </a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-white/10 rounded-lg">
              Industries
            </a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-white/10 rounded-lg">
              Locations
            </a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-white/10 rounded-lg">
              About Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
