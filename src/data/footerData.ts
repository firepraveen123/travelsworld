import { FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

export const footerColumns = [
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

export const footerContact = {
  title: 'Contact us on',
  items: [
    { id: 1, icon: FiPhone, label: 'Mobile 24/7', value: '+91 80954 99999', href: 'tel:+918095499999' },
    { id: 2, icon: FaWhatsapp, label: 'WhatsApp 24/7', value: '+91 80954 99999', href: 'https://wa.me/918095499999' },
    { id: 3, icon: FiMail, label: 'Email us', value: 'info@travelsworld.com', href: 'mailto:info@travelsworld.com' },
  ],
};

export const footerSocial = {
  title: 'Follow us on',
  items: [
    { id: 1, icon: FaLinkedinIn, name: 'LinkedIn', href: '#' },
    { id: 2, icon: FaInstagram, name: 'Instagram', href: '#' },
    { id: 3, icon: FaFacebookF, name: 'Facebook', href: '#' },
    { id: 4, icon: FaInstagram, name: 'Instagram', href: '#' },
    { id: 5, icon: FaYoutube, name: 'YouTube', href: '#' },
  ],
};

export const footerBottom = {
  copyright: '© Copyright 2026 Travels World. All Rights Reserved.',
  legalLinks: [
    { id: 1, label: 'Privacy Policy', href: '#' },
    { id: 2, label: 'Terms & Conditions', href: '#' },
  ],
};