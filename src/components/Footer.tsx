'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#A74300] text-white text-xs font-sans border-t border-[#c45000]">
      <div className="max-w-[1536px] mx-auto p-[20px] space-y-[32px] flex flex-col justify-between min-h-[460px]">
        {/* Main Footer Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-[32px] pt-4">
          {/* Column 1: SERVICES */}
          <div className="space-y-3">
            <div className="space-y-1">
              <h4 className="text-[12px] leading-[16px] font-bold tracking-[0.5px] uppercase text-white font-heading">
                SERVICES
              </h4>
              <div className="w-8 h-0.5 bg-amber-300 rounded-full" />
            </div>
            <ul className="space-y-2 text-slate-100 font-medium">
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Employee Transportation</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Fleet Management</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Airport Transfers</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Monthly & Hourly Rentals</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Outstation Rides</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Luxury Car Rentals</Link></li>
            </ul>
          </div>

          {/* Column 2: INDUSTRIES */}
          <div className="space-y-3">
            <div className="space-y-1">
              <h4 className="text-[12px] leading-[16px] font-bold tracking-[0.5px] uppercase text-white font-heading">
                INDUSTRIES
              </h4>
              <div className="w-8 h-0.5 bg-amber-300 rounded-full" />
            </div>
            <ul className="space-y-2 text-slate-100 font-medium">
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">IT / ITES</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">GCC</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">BPO / KPO</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Manufacturing & Automotive</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">BFSI</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Healthcare & Pharmaceuticals</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Electronics</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Schools</Link></li>
            </ul>
          </div>

          {/* Column 3: LOCATIONS */}
          <div className="space-y-3">
            <div className="space-y-1">
              <h4 className="text-[12px] leading-[16px] font-bold tracking-[0.5px] uppercase text-white font-heading">
                LOCATIONS
              </h4>
              <div className="w-8 h-0.5 bg-amber-300 rounded-full" />
            </div>
            <ul className="space-y-2 text-slate-100 font-medium">
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Bangalore</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Hyderabad</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Pune</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Mumbai</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Chennai</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Delhi</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Mangalore</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Coimbatore</Link></li>
            </ul>
          </div>

          {/* Column 4: COMPANY */}
          <div className="space-y-3">
            <div className="space-y-1">
              <h4 className="text-[12px] leading-[16px] font-bold tracking-[0.5px] uppercase text-white font-heading">
                COMPANY
              </h4>
              <div className="w-8 h-0.5 bg-amber-300 rounded-full" />
            </div>
            <ul className="space-y-2 text-slate-100 font-medium">
              <li><Link href="/planner" className="hover:text-amber-200 transition-colors">About Us</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Clients</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Blog</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Case Studies</Link></li>
              <li><Link href="/destinations" className="hover:text-amber-200 transition-colors">Gallery</Link></li>
              <li><Link href="/planner" className="hover:text-amber-200 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 5: CONTACT US ON & FOLLOW US ON */}
          <div className="space-y-5">
            {/* Contact Us Section */}
            <div className="space-y-2.5">
              <div className="space-y-1">
                <h4 className="text-[12px] leading-[16px] font-bold tracking-[0.5px] uppercase text-white font-heading">
                  CONTACT US ON
                </h4>
                <div className="w-8 h-0.5 bg-amber-300 rounded-full" />
              </div>

              <div className="space-y-2">
                {/* Phone Card */}
                <a href="tel:+918095499999" className="flex items-center gap-2.5 group">
                  <div className="w-8 h-8 rounded-lg border border-white/30 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#A74300] transition-all">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-200 font-semibold uppercase">Mobile 24/7</div>
                    <div className="text-xs font-bold text-white group-hover:text-amber-200">+91 80954 99999</div>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a href="https://wa.me/918095499999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 group">
                  <div className="w-8 h-8 rounded-lg border border-white/30 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#A74300] transition-all">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-200 font-semibold uppercase">WhatsApp 24/7</div>
                    <div className="text-xs font-bold text-white group-hover:text-amber-200">+91 80954 99999</div>
                  </div>
                </a>

                {/* Email Card */}
                <a href="mailto:info@travelsworld.com" className="flex items-center gap-2.5 group">
                  <div className="w-8 h-8 rounded-lg border border-white/30 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#A74300] transition-all">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-200 font-semibold uppercase">Email us</div>
                    <div className="text-xs font-bold text-white group-hover:text-amber-200">info@travelsworld.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="space-y-2 pt-1">
              <div className="space-y-1">
                <h4 className="text-[12px] leading-[16px] font-bold tracking-[0.5px] uppercase text-white font-heading">
                  FOLLOW US ON
                </h4>
                <div className="w-8 h-0.5 bg-amber-300 rounded-full" />
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg border border-white/30 font-bold text-xs flex items-center justify-center hover:bg-white hover:text-[#A74300] transition-all"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg border border-white/30 font-bold text-xs flex items-center justify-center hover:bg-white hover:text-[#A74300] transition-all"
                  aria-label="Instagram"
                >
                  ig
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg border border-white/30 font-bold text-xs flex items-center justify-center hover:bg-white hover:text-[#A74300] transition-all"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg border border-white/30 font-bold text-xs flex items-center justify-center hover:bg-white hover:text-[#A74300] transition-all"
                  aria-label="Google"
                >
                  G
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg border border-white/30 font-bold text-xs flex items-center justify-center hover:bg-white hover:text-[#A74300] transition-all"
                  aria-label="YouTube"
                >
                  yt
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Links Bar */}
        <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-100">
          <div>
            © Copyright 2026 Travels World. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber-200 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-amber-200 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
