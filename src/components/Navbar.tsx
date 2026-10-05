'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Bus,
  Car,
  Plane,
  Clock,
  Navigation,
  Zap,
  Building2,
  Briefcase,
  Building,
  GraduationCap,
  HeartPulse,
  Utensils,
  Factory,
  MapPin,
  Menu,
  X
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: 'Corporate Employee Transportation', icon: Bus },
    { name: 'Corporate Fleet Management', icon: Car },
    { name: 'Airport Transfers', icon: Plane },
    { name: 'Monthly & Hourly Rentals', icon: Clock },
    { name: 'Outstation Rides', icon: Navigation },
    { name: 'Luxury Car Rentals', icon: Car },
    { name: 'Electric Fleet', icon: Zap },
    { name: 'Event Transport', icon: Bus },
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
      <div className="max-w-[1536px] mx-auto h-[109px] pt-[16px] pb-[16px] pl-[20px] pr-[20px] flex items-center justify-between gap-4">
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
              <div className="absolute top-full left-0 w-[420px] bg-white text-slate-900 rounded-[20px] shadow-2xl p-4 border border-slate-100/80 grid grid-cols-1 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {services.map((item, i) => {
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
              <div className="absolute top-full left-0 w-[380px] bg-white text-slate-900 rounded-[20px] shadow-2xl p-4 border border-slate-100/80 grid grid-cols-1 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
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
              <div className="absolute top-full left-0 w-[260px] bg-white text-slate-900 rounded-[20px] shadow-2xl p-3 border border-slate-100/80 grid grid-cols-1 gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
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
