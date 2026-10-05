import React from 'react';
import { ServiceBanner } from '@/components/ServiceBanner';
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
      <ServiceBanner
        title={bannerProps.title}
        breadcrumbTitle={bannerProps.breadcrumbTitle}
        description={bannerProps.description}
        secondaryDescription={bannerProps.secondaryDescription}
        ctaText={bannerProps.ctaText}
        ctaHref={bannerProps.ctaHref}
        bgImage={bannerProps.bgImage}
        badgeText={bannerProps.badgeText}
      />

      {/* Reusable Client / Partner Logos Marquee Section */}
      <ClientLogosSection />

      {/* Reusable 24 Years of Responsibility / Trust Stats Banner */}
      <TrustStatsBanner />

      {/* Common FAQ, Blog & Enquiry Sections */}
      <HomapageSection />
    </main>
  );
}
