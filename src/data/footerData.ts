import type { IconType } from 'react-icons';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF, FaGoogle, FaYoutube } from 'react-icons/fa';

export type FooterLink = { label: string; href: string };
export type FooterColumn = { id: number; title: string; links: FooterLink[] };
export type FooterContactItem = { id: number; icon: IconType; label: string; value: string; href: string };
export type FooterSocialItem = { id: number; image: string; name: string; href: string };

export type FooterContact = { title: string; items: FooterContactItem[] };
export type FooterSocial = { title: string; items: FooterSocialItem[] };
export type FooterBottom = { copyright: string; legalLinks: { id: number; label: string; href: string }[] };

export const footerColumns: FooterColumn[] = [
  {
    id: 1,
    title: 'Services',
    links: [
      { label: 'Employee Transportation', href: '#' },
      { label: 'Fleet Management', href: '#' },
      { label: 'Airport Transfers', href: '#' },
      { label: 'Monthly & Hourly Rentals', href: '#' },
      { label: 'Outstation Rides', href: '#' },
      { label: 'Luxury Car Rentals', href: '#' },
    ],
  },
  {
    id: 2,
    title: 'Industries',
    links: [
      { label: 'IT / ITES', href: '#' },
      { label: 'GCC', href: '#' },
      { label: 'BPO / KPO', href: '#' },
      { label: 'Manufacturing & Automotive', href: '#' },
      { label: 'BFSI', href: '#' },
      { label: 'Healthcare & Pharmaceuticals', href: '#' },
      { label: 'Electronics', href: '#' },
      { label: 'Schools', href: '#' },
    ],
  },
  {
    id: 3,
    title: 'Locations',
    links: [
      { label: 'Bangalore', href: '#' },
      { label: 'Hyderabad', href: '#' },
      { label: 'Pune', href: '#' },
      { label: 'Mumbai', href: '#' },
      { label: 'Chennai', href: '#' },
      { label: 'Delhi', href: '#' },
      { label: 'Mangalore', href: '#' },
      { label: 'Coimbatore', href: '#' },
    ],
  },
  {
    id: 4,
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Clients', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Gallery', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
];

export const footerContact: FooterContact = {
  title: 'Contact us on',
  items: [
    { id: 1, icon: FiPhone, label: 'Mobile 24/7', value: '+91 80954 99999', href: 'tel:+918095499999' },
    { id: 2, icon: FaWhatsapp, label: 'WhatsApp 24/7', value: '+91 80954 99999', href: 'https://wa.me/918095499999' },
    { id: 3, icon: FiMail, label: 'Email us', value: 'info@travelsworld.com', href: 'mailto:info@travelsworld.com' },
  ],
};

export const footerSocial: FooterSocial = {
  title: 'Follow us on',
  items: [
    { id: 1, image: '/images/linkedlin.svg', name: 'LinkedIn', href: '#' },
    { id: 2, image: '/images/insta.svg', name: 'Instagram', href: '#' },
    { id: 3, image: '/images/fb.svg', name: 'Facebook', href: '#' },
    { id: 4, image: '/images/google.svg', name: 'Google', href: '#' },
    { id: 5, image: '/images/youtube.svg', name: 'YouTube', href: '#' },
  ],
};

export const footerBottom: FooterBottom = {
  copyright: '© Copyright 2026 Travels World. All Rights Reserved.',
  legalLinks: [
    { id: 1, label: 'Privacy Policy', href: '#' },
    { id: 2, label: 'Terms & Conditions', href: '#' },
  ],
};