import React from 'react';

export interface ClientLogo {
  id: string;
  name: string;
  category?: string;
  image?: string;
  svg?: React.ReactNode;
}

export const defaultClientLogos: ClientLogo[] = [
  {
    id: 'kempegowda',
    name: 'Kempegowda International Airport Bengaluru',
    image: '/Service/corporate_employe/ClientLogosSection/Bangalore_International_Airport_Ltd_id7_v_rgWy_1 1.svg',
    category: 'Aviation & Infra',
  },
  {
    id: 'aadhaar',
    name: 'Aadhaar (UIDAI)',
    image: '/Service/corporate_employe/ClientLogosSection/Aadhaar 1.svg',
    category: 'Government',
  },
  {
    id: 'bescom',
    name: 'BESCOM',
    image: '/Service/corporate_employe/ClientLogosSection/Frame 28.svg',
    category: 'Government & Energy',
  },
  {
    id: 'google',
    name: 'Google',
    image: '/Service/corporate_employe/ClientLogosSection/Google_2015_logo 1.svg',
    category: 'Tech Enterprise',
  },
  {
    id: 'bosch',
    name: 'BOSCH',
    image: '/Service/corporate_employe/ClientLogosSection/Bosch-logo 1.svg',
    category: 'Automotive & Tech',
  },
  {
    id: 'dell',
    name: 'DELL Technologies',
    category: 'Tech Enterprise',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    category: 'Tech Enterprise',
  },
  {
    id: 'infosys',
    name: 'Infosys',
    category: 'IT & Services',
  },
  {
    id: 'wipro',
    name: 'Wipro',
    category: 'IT & Enterprise',
  },
  {
    id: 'tcs',
    name: 'Tata Consultancy Services',
    category: 'IT Enterprise',
  },
];
