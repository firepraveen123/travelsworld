import type { Metadata } from 'next';
import './globals.css';
import './style.css';

import { ClientLayoutWrapper } from '../components/ClientLayoutWrapper';

export const metadata: Metadata = {
  title: 'TravelsWorld | Journey of Success',
  description: 'Corporate employee transportation, fleet management, airport transfers, luxury car rentals with TravelsWorld.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
