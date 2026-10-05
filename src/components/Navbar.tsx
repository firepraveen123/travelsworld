'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Lightweight inline icon components to avoid dependency on `lucide-react`

type IconProps = { className?: string };
type IconComponent = React.FC<IconProps>;

// Small helper to build a stroke icon from one or more SVG path strings
const makeIcon = (paths: string[]): IconComponent => {
  const Icon: IconComponent = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {paths.map((d, i) => (
        <path key={i} d={d} strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
  return Icon;
};

const ChevronDown = makeIcon(['M6 9l6 6 6-6']);
const Menu = makeIcon(['M4 6h16M4 12h16M4 18h16']);
const X = makeIcon(['M18 6L6 18M6 6l12 12']);

const MapPin: IconComponent = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="11" r="2" />
  </svg>
);

// Resources icons (no SVG files were provided for these, so they stay inline)
const PenSquare = makeIcon(['M12 20h9', 'M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z']);
const MessageSquare = makeIcon(['M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2v10z']);
const ImageIcon: IconComponent = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="9" cy="9" r="1.5" />
    <path d="M21 16l-5-5-9 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ClipboardList: IconComponent = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4h6v3H9zM9 12h6M9 16h4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// An item uses either an SVG file from /public/images (img) or an inline icon component (icon)
type MenuItem = { name: string; href?: string; img?: string; icon?: IconComponent };

export const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Click on the button: open it, or close it if it is already open
  const toggleDropdown = (name: string) =>
    setActiveDropdown((prev) => (prev === name ? null : name));

  // Close the dropdown when clicking outside the nav
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services: MenuItem[] = [
    {
      name: 'Corporate Employee Transportation',
      href: '/services/corporate-employee-transportation',
      img: '/images/Corporate-transport.svg',
    },
    {
      name: 'Corporate Fleet Management',
      href: '/services/corporate-fleet-management',
      img: '/images/FleetManagement.svg',
    },
    {
      name: 'Airport Transfers',
      href: '/services/airport-transfers',
      img: '/images/Airport.svg',
    },
    {
      name: 'Monthly & Hourly Rentals',
      href: '/services/monthly-hourly-rentals',
      img: '/images/Rental.svg',
    },
    {
      name: 'Outstation Rides',
      href: '/services/outstation-rides',
      img: '/images/Outstation-rides.svg',
    },
    {
      name: 'Luxury Car Rentals',
      href: '/services/luxury-car-rentals',
      img: '/images/LuxuryCar.svg',
    },
    {
      name: 'Electric Fleet',
      href: '/services/electric-fleet',
      img: '/images/ElectricFeet.svg',
    },
    {
      name: 'Event Transport',
      href: '/services/event-transport',
      img: '/images/Eventtransport.svg',
    },
  ];

  const industries: MenuItem[] = [
    { name: 'IT and Technology', href: '/services', img: '/images/IT.svg' },
    { name: 'Financial sector', href: '/services', img: '/images/Financial.svg' },
    { name: 'Corporate offices', href: '/services', img: '/images/Corporate.svg' },
    { name: 'Educational institutions', href: '/services', img: '/images/Education.svg' },
    { name: 'Healthcare organizations', href: '/services', img: '/images/Healthcare.svg' },
    { name: 'Hospitality businesses', href: '/services', img: '/images/Hospitality.svg' },
    { name: 'MNCs & large enterprises', href: '/services', img: '/images/MNC.svg' },
    { name: 'Manufacturing companies', href: '/services', img: '/images/Manufacturing.svg' },
  ];

  const aboutUs: MenuItem[] = [
    { name: 'About the Company', href: '#', img: '/images/About.svg' },
    { name: 'Leadership Team', href: '#', img: '/images/Leadershipteam.svg' },
    { name: 'Clients', href: '#', img: '/images/Clients.svg' },
    { name: 'Testimonials', href: '#', img: '/images/Testimonials.svg' },
    { name: 'Awards & Recognition', href: '#', img: '/images/Awards.svg' },
    { name: 'Our Vehicles', href: '#', img: '/images/Vehicles.svg' },
    { name: 'Join Our Fleet', href: '#', img: '/images/JoinourFleet.svg' },
  ];

  const resources: MenuItem[] = [
    { name: 'Blog', href: '#', img: '/images/Blog.svg' },
    { name: 'FAQ', href: '#faq', img: '/images/Faq.svg' },
    { name: 'Gallery', href: '#', img: '/images/Gallery.svg' },
    { name: 'Case Studies', href: '#', img: '/images/Casestudies.svg' },
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

  // Shared list used by Services, Industries, About Us and Resources
  const renderItems = (items: MenuItem[]) =>
    items.map((item, i) => {
      const IconComp = item.icon;
      const targetHref = item.href || '#';
      return (
        <Link
          key={i}
          href={targetHref}
          onClick={() => setActiveDropdown(null)}
          className="flex items-center gap-4 p-[10px] rounded-[12px] hover:bg-[#FFF5EF] transition-all group cursor-pointer"
        >
          <div className="">
            {item.img ? (
              <Image src={item.img} alt="" className=" object-contain" width={40} height={40} />
            ) : IconComp ? (
              <IconComp className="w-10 h-10 p-[10px] rounded-[12px] bg-[#FFF0E6] border border-[#FFDEC9] text-[#D34F0D] stroke-[2]" />
            ) : null}
          </div>
          <span className="">
            {item.name}
          </span>
        </Link>
      );
    });

  // Shared trigger button
  const renderTrigger = (key: string, label: string) => (
    <button
      type="button"
      onClick={() => toggleDropdown(key)}
      aria-expanded={activeDropdown === key}
      className="flex items-center gap-1 py-4 hover:text-amber-200 transition-colors font-heading text-sm font-bold"
    >
      {label}{' '}
      <ChevronDown
        className={`w-4 h-4 transition-transform duration-200 ${
          activeDropdown === key ? 'rotate-180' : ''
        }`}
      />
    </button>
  );

  const popupBase =
    'absolute top-full bg-white text-slate-900 rounded-[20px] shadow-2xl p-[10px] border border-slate-100/80 grid grid-cols-1 gap-[10px] z-50 navbar_dropdown';

  // Popups are always rendered and only toggled with the `is-open` class,
  // so the CSS transition can animate both opening and closing
  const renderPopup = (key: string, position: string, children: React.ReactNode) => (
    <div
      className={`${popupBase} ${position} origin-top transition-all duration-300 ease-out ${
        activeDropdown === key
          ? 'is-open opacity-100 visible pointer-events-auto translate-y-0 scale-100'
          : 'opacity-0 invisible pointer-events-none -translate-y-2 scale-95'
      }`}
      aria-hidden={activeDropdown !== key}
    >
      {children}
    </div>
  );

  return (
    <header className="sticky bg-[#D34F0C] Header_section flex">
      <div className="container flex justify-between items-center ">

            <div className=" flex items-center justify-between gap-4 ">

        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logo-white.svg"
            alt="TravelsWorld - Journey of Success"
            width={250}
            height={50}
            // className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

      </div>
      <div className=" flex items-center justify-between gap-4 ">

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          {/* Services Dropdown */}
          <div className="relative">
            {renderTrigger('services', 'Services')}
            {renderPopup('services', 'left-0 w-[380px]', renderItems(services))}
          </div>

          {/* Industries Dropdown */}
          <div className="relative">
            {renderTrigger('industries', 'Industries')}
            {renderPopup('industries', 'left-0 w-[300px]', renderItems(industries))}
          </div>

          {/* Locations Dropdown */}
          <div className="relative">
            {renderTrigger('locations', 'Locations')}
            {renderPopup(
              'locations',
              'left-0 w-[260px]',
              locations.map((loc, i) => (
                  <Link
                    key={i}
                    href="/services"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-[10px] rounded-[10px] hover:bg-[#FFF5EF] text-sm font-bold text-[#212529] hover:text-[#D34F0D] transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#FFF0E6] border border-[#FFDEC9] text-[#D34F0D] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>{loc}</span>
                  </Link>
              ))
            )}
          </div>

          {/* About Us Dropdown */}
          <div className="relative">
            {renderTrigger('about', 'About Us')}
            {renderPopup('about', 'left-0 w-[300px]', renderItems(aboutUs))}
          </div>

          {/* Resources Dropdown (right aligned so it never overflows the screen) */}
          <div className="relative">
            {renderTrigger('resources', 'Resources')}
            {renderPopup('resources', 'right-0 w-[300px]', renderItems(resources))}
          </div>
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-3">
          {/* Figma "Get a Quote" Button */}
          <Link href="#quote-form" className="btn-quote text-xs font-bold whitespace-nowrap shadow-md">
            Get a Quote
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
</div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 border-t border-white/20 bg-[#b83e08] space-y-3">
          <div className="flex flex-col gap-2 text-sm font-semibold">
            {['Services', 'Industries', 'Locations', 'About Us', 'Resources'].map((label) => (
              <a
                key={label}
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};