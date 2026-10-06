import React from 'react';
import { ServiceBanner } from '@/components/ServiceBanner';
import { KeyServicesSection } from '@/components/KeyServicesSection';
import { ProcessTimelineSection } from '@/components/ProcessTimelineSection';
import { ServiceAboutSection } from '@/components/ServiceAboutSection';
import { IndustryApplicationsSection } from '@/components/IndustryApplicationsSection';
import { ClientLogosSection } from '@/components/ClientLogosSection';
import { TrustStatsBanner } from '@/components/TrustStatsBanner';
import { serviceBannerData } from '@/data/serviceBannerData';
import HomapageSection from '@/components/Homepage/HomapageSection';

export const metadata = {
  title: 'Corporate Employee Transportation Services | TravelsWorld',
  description:
    'Get technology-enabled and reliable employee transportation services simplifying daily commutes. It improves workforce mobility and keeps the business moving.',
};

export default function CorporateEmployeeTransportationPage() {
  const bannerProps = serviceBannerData['corporate-employee-transportation'];

  return (
    <main className="min-h-screen bg-white">
      {/* Reusable Service Banner Section for Corporate Employee Transportation */}
      <ServiceBanner {...bannerProps} />

      {/* Reusable Client / Partner Logos Marquee Section */}
      <ClientLogosSection />

      {/* Reusable 24 Years of Responsibility / Trust Stats Banner */}
      <TrustStatsBanner />

      {/* Reusable "Who we are" / Service Overview Section */}
      <ServiceAboutSection />

      {/* Reusable Key Corporate Employee Commute Services Section */}
      <KeyServicesSection />

      {/* Reusable How Corporate Employee Transportation Works Process Section */}
      <ProcessTimelineSection />

      {/* Reusable Major Industry Applications Section */}
      <IndustryApplicationsSection />

      {/* Common FAQ, Blog & Enquiry Sections */}
      <HomapageSection />
    </main>
  );
}
